"use client";

import {
	BookOpen,
	Briefcase,
	GraduationCap,
	Heart,
	Home,
	Mail,
} from "lucide-react";
import RouterLink from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const FloatingNav = () => {
	const pathname = usePathname();

	const navItems = [
		{ label: "Home", href: "/", icon: Home },
		{ label: "Education", href: "/#education", icon: GraduationCap },
		{ label: "Experience", href: "/#experience", icon: Briefcase },
		{ label: "Interests", href: "/#interests", icon: Heart },
		{ label: "Blog", href: "/blog", icon: BookOpen },
		{ label: "Contact", href: "/#contact", icon: Mail },
	];

	const isActive = (href: string) => {
		if (href === "/") return pathname === "/";
		if (href.startsWith("/#")) return pathname === "/";
		return pathname.startsWith(href);
	};

	return (
		<nav
			className="bottom-6 left-1/2 z-50 fixed -translate-x-1/2"
			aria-label="Main navigation"
		>
			<div className="flex items-center gap-1 bg-secondary/80 shadow-lg backdrop-blur-md px-2 py-2 border border-white/10 rounded-full">
				{navItems.map((item) => (
					<RouterLink
						key={item.label}
						href={item.href}
						aria-label={item.label}
						aria-current={isActive(item.href) ? "page" : undefined}
						className={cn(
							"p-3 rounded-full transition-colors",
							"flex items-center gap-2",
							isActive(item.href)
								? "text-purple-400 bg-purple-500/20"
								: "text-gray-400 hover:text-purple-400 hover:bg-white/10",
						)}
					>
						<item.icon size={20} />
						<span className="hidden md:inline text-sm">{item.label}</span>
					</RouterLink>
				))}
			</div>
		</nav>
	);
};
