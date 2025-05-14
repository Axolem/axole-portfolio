import { Home, GraduationCap, Briefcase, Heart, Mail, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import RouterLink from "next/link";

export const FloatingNav = () => {
  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Education", href: "/#education", icon: GraduationCap },
    { label: "Experience", href: "/#experience", icon: Briefcase },
    { label: "Interests", href: "/#interests", icon: Heart },
    { label: "Blog", href: "/blog", icon: BookOpen },
    { label: "Contact", href: "/#contact", icon: Mail },
  ];

  return (
    <nav className="bottom-6 left-1/2 z-50 fixed -translate-x-1/2">
      <div className="flex items-center gap-1 bg-secondary/80 shadow-lg backdrop-blur-md px-2 py-2 border border-white/10 rounded-full">
        {navItems.map((item) => (
          <RouterLink
            key={item.label}
            href={item.href}
            className={cn(
              "p-3 rounded-full text-gray-400 hover:text-purple-400 hover:bg-white/10 transition-colors",
              "flex items-center gap-2"
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
