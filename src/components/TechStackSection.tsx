import {
  Code2,
  Database,
  GitBranch,
  Smartphone,
  Bot,
  Wrench,
} from "lucide-react";

interface TechCategory {
  title: string;
  icon: React.ElementType;
  items: string[];
}

const techCategories: TechCategory[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: [
      "C#",
      "TypeScript/JavaScript",
      "Python",
      "Go",
      "HTML/CSS",
      "C++",
      "Java (Primary)",
      "SQL",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: GitBranch,
    items: [
      "React Native",
      "Next JS",
      "Angular",
      "Node.js",
      ".NET",
      "Springboot",
      "Agile",
      "CI/CD",
      "OOP",
    ],
  },
  {
    title: "Mobile & Web Development",
    icon: Smartphone,
    items: [
      "Android & IOS Development",
      "Game development",
      "E-commerce",
      "Responsive Web Design",
    ],
  },
  {
    title: "Automation & DevOps",
    icon: Bot,
    items: [
      "Microsoft Power Automate",
      "GitHub Actions",
      "AI Agent (N8N)",
      "Selenium",
    ],
  },
  {
    title: "Databases & Cloud",
    icon: Database,
    items: [
      "Postgres (👑)",
      "Firebase/Supabase",
      "SQL/NoSQL",
      "Microsoft SQL Server",
      "Data Analysis",
      "Data Governance",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    items: ["Git/GitHub", "npm (bun)", "VS Code", "JetBrains IDEs", "Figma"],
  },
];

const competencies = [
  "Problem Solving",
  "Software Testing",
  "Technological Adaptability",
  "Effective Communication",
  "Team Collaboration",
  "System Architecture",
  "Initiative & Learning",
  "Critical Thinking",
  "Leadership",
  "System Engineering",
  "Project Management",
  "Attention to Detail",
  "Time Management",
  "Analytical Skills",
  "Stakeholder Management",
  "Public Speaking",
  "Technopreneurship",
  "Agile/Scrum",
  "Strong Technical Skills",
];

const floatingTech = [
  { icon: "{ }", style: "top-[10%] left-[5%]" },
  { icon: "</>", style: "top-[30%] right-[8%]" },
  { icon: "()=>", style: "bottom-[40%] left-[10%]" },
  { icon: "[]", style: "bottom-[20%] right-[15%]" },
  { icon: "&&", style: "top-[60%] left-[20%]" },
  { icon: "||", style: "top-[20%] right-[25%]" },
  { icon: "++", style: "bottom-[10%] left-[30%]" },
  { icon: "==", style: "top-[70%] right-[5%]" },
];

export const TechStackSection = () => {
  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Floating tech icons (CSS-based subtle animation using animate-pulse) */}
      {floatingTech.map((tech, i) => (
        <div
          key={i}
          className={`absolute ${tech.style} text-purple-500/10 font-mono text-4xl md:text-6xl font-bold z-0 animate-pulse`}
        >
          {tech.icon}
        </div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-12 text-center">
          Technologies & Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-secondary/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-sm transition-all duration-200 hover:scale-105 hover:bg-purple-500/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center">
          Core Competencies
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {competencies.map((comp, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 transition-transform duration-200 hover:scale-105 hover:bg-purple-500/20"
            >
              {comp}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
