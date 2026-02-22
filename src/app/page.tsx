import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { BeyondCodeSection } from "@/components/BeyondCodeSection";
import { DayLifeSection } from "@/components/DayLifeSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectCard } from "@/components/ProjectCard";
import { StorySection } from "@/components/StorySection";
import { TechStackSection } from "@/components/TechStackSection";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export default function HomePage() {
	const projects = [
		{
			title: "PipAlert",
			description:
				"Forex trading app offering real-time signal alerts, subscriber management, and secure transactions for traders of all levels.",
			tags: ["React Native", "Node.js", "Firebase"],
			liveUrl:
				"https://play.google.com/store/apps/details?id=com.axole.pipalert",
		},
		{
			title: "Power Automate Scripts",
			description:
				"Automation scripts for tracking assessment deadlines, generating HTML tables, and email notifications.",
			tags: ["Power Automate", "JavaScript", "API Integration"],
			githubUrl: "https://github.com/Axolem",
		},
		{
			title: "Payment Gateway Libraries",
			description:
				"React Native libraries for PayFast and Ozow payment gateway integrations.",
			tags: ["React Native", "TypeScript", "Payment Integration"],
			githubUrl: "https://github.com/Axolem",
		},
	];

	return (
		<main className="bg-background min-h-screen">
			<HeroSection />
			<StorySection />
			<ExperienceSection />
			<TechStackSection />
			<EducationSection />

			{/* Projects Section */}
			<section
				id="projects"
				className="bg-linear-to-b from-background via-secondary/20 to-background px-6 py-20"
			>
				<div className="mx-auto max-w-6xl">
					<h2 className="bg-clip-text bg-linear-to-r from-white to-purple-400 mb-12 font-space-grotesk font-bold text-transparent text-3xl md:text-4xl text-center">
						Featured Projects
					</h2>
					<div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
						{projects.map((project, index) => (
							<ProjectCard key={index} {...project} />
						))}
					</div>
				</div>
			</section>

			<DayLifeSection />
			<BeyondCodeSection />

			{/* Contact Section */}
			<section
				id="contact"
				className="bg-linear-to-b from-background to-secondary/20 px-6 py-20"
			>
				<div className="mx-auto max-w-6xl text-center">
					<h2 className="mb-8 font-space-grotesk font-bold text-3xl md:text-4xl">
						Get In Touch
					</h2>
					<p className="mx-auto mb-12 max-w-2xl text-gray-400">
						Whether you want to discuss a project, ask about my experience, or
						just say hi, feel free to reach out!
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<Button
							asChild
							className="group bg-gray-900 hover:bg-gray-800 min-w-[100px]"
						>
							<Link
								href="https://github.com/Axolem"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github
									size={16}
									className="hidden group-hover:block mr-1 transition-all duration-700"
								/>
								GitHub
							</Link>
						</Button>
						<Button
							asChild
							className="group bg-blue-600 hover:bg-blue-700 min-w-[100px]"
						>
							<Link
								href="https://linkedin.com/in/axolemaranjana"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin
									size={16}
									className="hidden group-hover:block mr-1 transition-all duration-700"
								/>
								LinkedIn
							</Link>
						</Button>
						<Button
							asChild
							className="group bg-purple-600 hover:bg-purple-700 min-w-[100px]"
						>
							<Link href="mailto:axolemaranjana4@gmail.com">
								<Mail
									size={16}
									className="hidden group-hover:block mr-1 transition-all duration-700"
								/>
								Email
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</main>
	);
}
