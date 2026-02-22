interface ExperienceItem {
	title: string;
	company: string;
	location: string;
	period: string;
	description: string[];
}

const experiences: ExperienceItem[] = [
	{
		title: "Java Developer",
		company: "FirstRand Limited (FNB)",
		location: "Johannesburg, ZA",
		period: "May 2025 - Present",
		description: [
			"Secured the Emerging Star Award within two months of joining by rapidly architecting and delivering core functionality for two new bank subsidiaries.",
			"Engineered and maintained mission-critical Java applications within the forex core banking system, ensuring high availability and seamless transaction processing.",
			"Analyzed technical requirements during grooming sessions and presented system impact findings to align stakeholders, while executing high-stakes production support to resolve critical blockers.",
		],
	},
	{
		title: "Full Stack Developer (C# & Angular)",
		company: "Kilig Software",
		location: "Johannesburg South, ZA",
		period: "Mar 2025 - June 2025",
		description: [
			"Architected and deployed a C# ASP.NET Core backend, building RESTful APIs that optimized processing speed and system reliability.",
			"Drove a complete overhaul of unit testing for the legacy C# monolith, increasing code coverage by [Percentage]% and heavily reducing production bug leakage.",
			"Delivered complex UI/UX features on an Angular frontend, streamlining data management workflows and improving end-user functionality.",
		],
	},
	{
		title: "Software Quality Engineer Trainee",
		company: "Nedbank Group",
		location: "Johannesburg, ZA",
		period: "Dec 2024 - Feb 2025",
		description: [
			"Executed rigorous manual and automated testing protocols, directly contributing to a 15% reduction in post-release software defects.",
			"Analyzed test data and tracked defect lifecycles, collaborating with cross-functional development teams to streamline release processes.",
			"Enforced strict compliance and software quality assurance standards to ensure defect-free product rollouts.",
		],
	},
	{
		title: "Development Software Tutor",
		company: "University of Johannesburg",
		location: "Johannesburg, ZA",
		period: "Feb 2023 - Nov 2024",
		description: [
			"Mentored [Number] students in advanced software development, debugging, and testing, tangibly improving cohort pass rates.",
			"Directed student groups in building data-focused technical projects, bridging the gap between theoretical concepts and practical application.",
		],
	},
	{
		title: "Technopreneurship Ambassador",
		company: "University of Johannesburg",
		location: "Johannesburg, ZA",
		period: "2022 - 2024",
		description: [
			"Facilitated strategic partnerships by connecting students with industry leaders from Microsoft, SAP, and Huawei.",
			"Advised and mentored [Number] aspiring tech entrepreneurs, guiding them from initial ideation to technical execution.",
		],
	},
];

export const ExperienceSection = () => {
	return (
		<section id="experience" className="px-6 py-20">
			<div className="mx-auto max-w-6xl">
				<h2 className="mb-12 font-space-grotesk font-bold text-3xl md:text-4xl">
					Experience
				</h2>
				<div className="space-y-12">
					{experiences.map((exp, index) => (
						<div
							key={index}
							className="relative pl-8 border-purple-200 border-l-2"
						>
							<div className="top-0 -left-[9px] absolute bg-purple-600 rounded-full w-4 h-4" />
							<div className="mb-1 text-gray-500 text-sm">{exp.period}</div>
							<h3 className="mb-1 font-bold text-xl">{exp.title}</h3>
							<div className="mb-1 text-purple-600">{exp.company}</div>
							<div className="mb-4 text-gray-400 text-sm">{exp.location}</div>
							<ul className="space-y-2">
								{exp.description.map((item, i) => (
									<li key={i} className="text-gray-600">
										• {item}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
