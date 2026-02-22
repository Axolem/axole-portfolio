import {
	Bot,
	Code2,
	Database,
	GitBranch,
	Smartphone,
	Wrench,
} from "lucide-react";

interface TechCategory {
	title: string;
	icon: React.ElementType;
	items: string[];
}

const techCategories: TechCategory[] = [
	{
		title: "Backend & Core Engineering",
		icon: Code2,
		items: [
			"Java (8, 17, 21, 25)",
			"Spring Boot",
			"C# / .NET Core",
			"Node.js",
			"Python",
			"Go",
		],
	},
	{
		title: "Frontend & Client Architecture",
		icon: Smartphone, // Merged web and mobile since you use unified stacks
		items: ["TypeScript / JavaScript", "Next.js", "Angular", "React Native"],
	},
	{
		title: "Data Architecture & Storage",
		icon: Database,
		items: [
			"PostgreSQL",
			"Microsoft SQL Server",
			"Firebase / Supabase",
			"Data Governance", // Kept this as it's an architectural concern
		],
	},
	{
		title: "DevOps, CI/CD & Automation",
		icon: Bot,
		items: [
			"Docker",
			"Jenkins",
			"GitHub Actions",
			"Git version control",
			"n8n (Workflow Automation)",
			"Selenium",
		],
	},
];

const competencies = [
	"System Architecture & Design",
	"Microservices Integration",
	"Stakeholder Management",
	"Technical Strategy & Roadmapping",
	"Cross-Functional Leadership",
	"Agile/Scrum Methodologies",
	"Software Quality & Test Strategy",
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
		<section id="skills" className="relative px-6 py-20 overflow-hidden">
			{/* Floating tech icons (CSS-based subtle animation using animate-pulse) */}
			{floatingTech.map((tech, i) => (
				<div
					key={i}
					className={`absolute ${tech.style} text-purple-500/10 font-mono text-4xl md:text-6xl font-bold z-0 animate-pulse`}
				>
					{tech.icon}
				</div>
			))}

			<div className="z-10 relative mx-auto max-w-6xl">
				<h2 className="mb-12 font-space-grotesk font-bold text-3xl md:text-4xl text-center">
					Technologies & Skills
				</h2>

				<div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3 mb-16">
					{techCategories.map((category, index) => (
						<div
							key={index}
							className="bg-secondary/40 backdrop-blur-sm p-6 border border-purple-500/20 hover:border-purple-500/40 rounded-xl transition-all duration-300"
						>
							<div className="flex items-center gap-3 mb-4">
								<category.icon className="text-purple-400" size={24} />
								<h3 className="font-bold text-xl">{category.title}</h3>
							</div>
							<div className="flex flex-wrap gap-2">
								{category.items.map((item, i) => (
									<span
										key={i}
										className="bg-purple-500/10 hover:bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm hover:scale-105 transition-all duration-200"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					))}
				</div>

				<h3 className="mb-8 font-bold text-2xl text-center">
					Core Competencies
				</h3>
				<div className="flex flex-wrap justify-center gap-3">
					{competencies.map((comp, index) => (
						<span
							key={index}
							className="bg-purple-500/10 hover:bg-purple-500/20 px-4 py-2 border border-purple-500/20 rounded-full text-purple-300 hover:scale-105 transition-transform duration-200"
						>
							{comp}
						</span>
					))}
				</div>
			</div>
		</section>
	);
};
