---
slug: "architecting-enterprise-multi-tenant-saas-part-1"
title: "Building an Enterprise Multi-Tenant SaaS: Architecture & Concurrency (Part 1)"
date: "2025-05-15"
excerpt: "In Part 1 of this series, we explore the foundational architecture of a multi-tenant Java REST API and how to solve high-concurrency database race conditions using pessimistic locking."
tags: ["java", "spring-boot", "architecture", "system-design", "postgresql", "concurrency"]
readingTime: 8
author:
  name: "Axole Maranjana"
  image: "/axole-maranjana.jpg"
  url: "/"
ogImage: 
keywords: ["java", "spring boot", "multi-tenant", "race condition", "pessimistic locking", "architecture", "postgresql"]
---

# Part 1: Foundational Architecture & Solving Database Race Conditions

Hey, I'm Axole Maranjana. As a full-stack engineer and fintech developer transitioning into a Software Architecture role, I am deeply passionate about bridging robust backend architectures with modern frontend applications. Recently, I spent months designing and building a massive enterprise-grade REST API for legal practice management. 

To give you an idea of the scale: the system is built on **Spring Boot 3.5.7** and **Java 17**, backed by **PostgreSQL 17+** and **Redis**, and encompasses over **41 REST controllers, 65+ entity models, and 195+ DTOs**. 

Because I want to share the technical challenges and design decisions I made along the way, I'm writing this three-part series. In **Part 1**, we are diving into how I structured the multi-tenant architecture and solved complex database race conditions under high concurrency.

*(Note: To focus strictly on the technical architecture, I will be omitting the specific project name, but the lessons are applicable to any B2B SaaS platform).*

---

## 1. Designing a Secure Multi-Tenant Architecture

When building a B2B SaaS platform, data isolation is non-negotiable. Every organization must operate within its own secure silo. Instead of provisioning separate databases for each client—which is an operational nightmare to scale—I implemented logical data isolation at the database level.

### The Contextual Request Flow
Every HTTP request goes through a strict authentication and authorization pipeline:
1. **JWT Validation:** The user's active organization ID is extracted directly from the JWT token.
2. **Contextual Queries:** Every database query is automatically scoped to the authenticated user's active organization. 
3. **Granular RBAC:** A highly granular permission system checks access rights against the specific *Resource* (e.g., `CASES`, `INVOICES`) and the *Action* (`VIEW`, `CREATE`, `EDIT`, `DELETE`).

Because hitting the database for permission checks on every single request would create a massive bottleneck, I integrated **Redis** to cache user permissions.

```java
// Conceptual example of extracting context and validating permissions
public void validateAccess(String resource, String action) {
    UUID activeOrgId = securityUtils.extractOrganizationIdFromToken();
    UUID userId = securityUtils.extractUserId();
    
    // 1. Check Redis Cache first
    boolean hasAccess = permissionCacheService.checkPermission(userId, activeOrgId, resource, action);
    
    // 2. Fallback to DB if not cached, then cache the result
    if (!hasAccess) {
        hasAccess = permissionRepository.existsByUserIdAndOrgIdAndResourceAndAction(...);
        permissionCacheService.cachePermission(...);
    }
    
    if (!hasAccess) throw new ForbiddenException("Insufficient permissions");
}
```

---

## 2. The Nightmare of Race Conditions: Invoice Generation

One of the most interesting architectural challenges I faced was handling concurrent database writes, specifically around generating sequential invoice numbers.

### The Problem: The "Read-Then-Write" Gap
Organizations require sequential invoice numbers featuring a unique prefix (e.g., `INV-AXO-00001`, `INV-AXO-00002`). The database enforces a unique constraint on the combination of `organization_id` and `invoice_number`. 

If two users in the same organization clicked "Save Invoice" at the exact same millisecond, a race condition occurred:
1. **Request A** reads the max invoice number (e.g., 5) and generates `INV-AXO-00006`.
2. **Request B** reads the max invoice number (also 5, because Request A hasn't committed yet) and generates `INV-AXO-00006`.
3. **Request A** saves successfully.
4. **Request B** tries to save and throws a `409 Conflict` (Data Integrity Violation) because the number already exists.

Because the default transaction isolation level is `READ_COMMITTED`, both transactions saw the exact same database state. 

### The Evolution of the Fix

**Attempt 1: Application-Level Retry Logic**
Initially, I implemented a retry loop with exponential backoff. If a `409 Conflict` occurred, the system caught the `DataIntegrityViolationException`, waited a random delay of 50-150ms, and tried again by fetching a fresh maximum number from the database.

```java
// Initial Approach: Retry Logic
int maxRetries = 5;
for (int attempt = 1; attempt <= maxRetries; attempt++) {
    try {
        String newInvoiceNumber = generateInvoiceNumber(orgId);
        invoice.setInvoiceNumber(newInvoiceNumber);
        return invoiceRepository.save(invoice);
    } catch (DataIntegrityViolationException e) {
        if (attempt == maxRetries) throw e;
        Thread.sleep(new Random().nextInt(100) + 50); // 50-150ms delay
    }
}
```
While this *recovered* from the error, it didn't prevent the race condition from happening in the first place, leading to wasted database operations under high load.

**Attempt 2: Database-Level Pessimistic Locking (The Final Solution)**
To fix this at the architectural root, I introduced database-level locking. I updated the Spring Data JPA repository to use a `SELECT ... FOR UPDATE` query. 

```java
// InvoiceRepository.java
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;
import jakarta.persistence.QueryHint;

@Lock(LockModeType.PESSIMISTIC_WRITE)
@QueryHints({@QueryHint(name = "javax.persistence.lock.timeout", value = "3000")})
@Query("SELECT i FROM Invoice i WHERE i.organization.id = :orgId")
List<Invoice> findByOrganizationIdForUpdate(@Param("orgId") UUID orgId);
```

By adding `@Lock(LockModeType.PESSIMISTIC_WRITE)`, PostgreSQL locks the specific rows being read during the `generateInvoiceNumber()` execution. 

Now, if Request A is generating an invoice number, Request B is forced to wait until Request A's transaction commits and releases the lock. Once released, Request B reads the newly updated max number and successfully generates the next sequence. 

By combining this pessimistic lock with the retry logic as a fallback, the system achieved zero `409` errors and absolute data integrity, even during highly concurrent spikes.

---

## What's Next in Part 2?

Building robust backend systems isn't just about making things work; it's about anticipating bottlenecks and ensuring the database behaves predictably under stress. 

In **Part 2** of this series, we will dive into how I engineered the **Double-Entry Accounting Engine** for this platform, strictly enforcing financial rules, automating journal entry postings from payment workflows, and handling immutable audit logs. 

*Want to discuss software architecture, Spring Boot, or system design? Let's connect on [LinkedIn](https://linkedin.com/in/axolemaranjana) or check out my other deep dives on [my portfolio](https://axole.dotenv.co.za).*