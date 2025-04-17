import { Github, Linkedin, Mail } from "lucide-react";
import { CVDownload } from "./CVDownload";
import RouterLink from "next/link";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Subtle background shimmer using Tailwind animations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-purple-800/5 blur-[120px] animate-pulse-slow" />
      </div>

      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-purple-500/20 shadow-lg flex-shrink-0 relative scale-90 opacity-0 animate-fade-in-scale" >
            <Image
              src="/axole-maranjana.jpg"
              alt="Axole Maranjana"
              className="w-full h-full object-cover"
              width={600}
              height={600}
            />
          </div>

          <div className="flex flex-col gap-6 max-w-2xl text-center md:text-left">
            <div className="space-y-4">
              <h2 className="text-sm md:text-base text-purple-400 font-medium opacity-0 translate-y-4 animate-fade-in delay-200">
                Welcome to my digital canvas
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent opacity-0 translate-y-4 animate-fade-in delay-300">
                Hey, I&apos;m Axole Maranjana
              </h1>
            </div>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed opacity-0 translate-y-4 animate-fade-in delay-400">
              Software Developer, Open Source Contributor & Tech Entrepreneur passionate about building innovative solutions and fostering tech education.
            </p>

            <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start opacity-0 translate-y-4 animate-fade-in delay-500">
              <CVDownload />

              <RouterLink
                href="https://github.com/Axolem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-purple-500/20 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={24} className="text-gray-400 hover:text-purple-400 transition-colors" />
              </RouterLink>

              <RouterLink
                href="https://linkedin.com/in/axolemaranjana"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-purple-500/20 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} className="text-gray-400 hover:text-purple-400 transition-colors" />
              </RouterLink>

              <RouterLink
                href="mailto:axolemaranjana4@gmail.com"
                className="p-2 rounded-full hover:bg-purple-500/20 transition-colors"
                aria-label="Email Contact"
              >
                <Mail size={24} className="text-gray-400 hover:text-purple-400 transition-colors" />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
