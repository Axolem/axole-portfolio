import { HeroSection } from "@/components/HeroSection";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceSection } from "@/components/ExperienceSection";
import { StorySection } from "@/components/StorySection";
import { EducationSection } from "@/components/EducationSection";
import { TechStackSection } from "@/components/TechStackSection";
import { BeyondCodeSection } from "@/components/BeyondCodeSection";
import { DayLifeSection } from "@/components/DayLifeSection";

export default function HomePage() {
  const projects = [
    {
      title: "PipAlert",
      description:
        "Forex trading app offering real-time signal alerts, subscriber management, and secure transactions for traders of all levels.",
      tags: ["React Native", "Node.js", "Firebase"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.axole.pipalert",
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
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StorySection />
      <ExperienceSection />
      <TechStackSection />
      <EducationSection />

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-6 bg-gradient-to-b from-background via-secondary/20 to-background"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-12 text-center bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-8">
            Get In Touch
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Whether you want to discuss a project, ask about my experience, or
            just say hi, feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/Axolem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/axolemaranjana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:axolemaranjana4@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
