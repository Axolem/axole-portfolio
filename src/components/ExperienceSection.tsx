
interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Quality Engineer Trainee",
    company: "Nedbank Group",
    location: "Johannesburg, ZA",
    period: "Dec 2024 - Feb 2025",
    description: [
      "Gained hands-on experience in ensuring software quality and compliance through rigorous testing protocols",
      "Collaborated with cross-functional teams to enhance operational efficiency through data-driven insights"
    ]
  },
  {
    title: "Development Software Tutor",
    company: "University of Johannesburg",
    location: "Johannesburg, SA",
    period: "Mar 2024 - Nov 2024",
    description: [
      "Guided students in mastering software development concepts, improving proficiency in coding, testing, and debugging",
      "Fostered collaboration and innovation through mentorship in data-focused projects"
    ]
  },
  {
    title: "Technopreneurship Ambassador",
    company: "University of Johannesburg",
    location: "Johannesburg, SA",
    period: "2022 - 2024",
    description: [
      // "Connected students with industry giants like Microsoft, SAP, and Huawei",
      "Fostered innovation and entrepreneurship in the tech space",
      "Mentored aspiring tech entrepreneurs"
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-purple-200">
              <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-0" />
              <div className="mb-1 text-sm text-gray-500">{exp.period}</div>
              <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
              <div className="text-purple-600 mb-1">{exp.company}</div>
              <div className="text-sm text-gray-400 mb-4">{exp.location}</div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-600">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
