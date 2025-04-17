import { Home, GraduationCap, Briefcase, Heart, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import RouterLink from "next/link";

export const FloatingNav = () => {
  const navItems = [
    { label: "Home", href: "#", icon: Home },
    { label: "Education", href: "#education", icon: GraduationCap },
    { label: "Experience", href: "#experience", icon: Briefcase },
    { label: "Interests", href: "#interests", icon: Heart },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-secondary/80 backdrop-blur-md border border-white/10 shadow-lg">
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
