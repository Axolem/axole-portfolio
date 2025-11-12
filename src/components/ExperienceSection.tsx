interface ExperienceItem {
	title: string;
	company: string;
	location: string;
	period: string;
	description: string[];
}

const experiences: ExperienceItem[] = [
	// {
	//   title: "Java Developer",
	//   company: "FirstRand Limited (FNB)",
	//   location: "Johannesburg, ZA",
	//   period: "May 2025 - Present",
	//   description: [
	//     "Developed and maintained Java applications for the FNB bank",
	//     "Worked on the FNB bank's forex core banking system",
	//     "Delivered new functionality to 2 new subsidiaries of the FNB bank in the first 2 months of joining",
	//     "Groomed requirements for a new product in the FNB bank's forex core banking system",
	//     "Production support for the FNB bank's forex core banking system"
	//   ]
	// },
	{
		title: "Full Stack Developer (C# & Angular)",
		company: "Kilig Software",
		location: "Johannesburg South, ZA",
		period: "Mar 2025 - June 2025",
		description: [
			"Designed, developed, and maintained a robust C# ASP.NET Core web application, implementing RESTful APIs and optimizing backend performance for high reliability.",
			"Spearheaded the formulation and integration of comprehensive unit tests for the C# monolith, resulting in improved code coverage, early bug detection, and enhanced maintainability.",
			"Collaborated closely with the team to architect and deliver new features on the Angular frontend, focusing on UI/UX improvements and effective data management.",
			"Utilized Agile methodologies, participating in sprint planning and review meetings, as well as code reviews to ensure top coding standards and continuous delivery.",
		],
	},
	{
		title: "Software Quality Engineer Trainee",
		company: "Nedbank Group",
		location: "Johannesburg, ZA",
		period: "Dec 2024 - Feb 2025",
		description: [
			"Applied rigorous manual and automated testing protocols to ensure software quality, compliance, and defect-free product releases.",
			"Documented test cases, tracked defects, and reported results to development teams, contributing to a 15% reduction in post-release issues.",
			"Collaborated effectively with cross-functional teams, leveraging data analysis to drive process improvements and operational efficiencies.",
			"Demonstrated a strong attention to detail and commitment to industry best practices in software quality assurance.",
		],
	},
	{
		title: "Development Software Tutor",
		company: "University of Johannesburg",
		location: "Johannesburg, ZA",
		period: "Feb 2023 - Nov 2024",
		description: [
			"Guided students in mastering software development concepts, improving proficiency in coding, testing, and debugging",
			"Fostered collaboration and innovation through mentorship in data-focused projects",
		],
	},
	{
		title: "Technopreneurship Ambassador",
		company: "University of Johannesburg",
		location: "Johannesburg, ZA",
		period: "2022 - 2024",
		description: [
			// "Connected students with industry giants like Microsoft, SAP, and Huawei",
			"Fostered innovation and entrepreneurship in the tech space",
			"Mentored aspiring tech entrepreneurs",
		],
	},
];

export const ExperienceSection = () => {
	return (
		<section id="experience" className="py-20 px-6">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-12">
					Experience
				</h2>
				<div className="space-y-12">
					{experiences.map((exp, index) => (
						<div
							key={index}
							className="relative pl-8 border-l-2 border-purple-200"
						>
							<div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-0" />
							<div className="mb-1 text-sm text-gray-500">{exp.period}</div>
							<h3 className="text-xl font-bold mb-1">{exp.title}</h3>
							<div className="text-purple-600 mb-1">{exp.company}</div>
							<div className="text-sm text-gray-400 mb-4">{exp.location}</div>
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
