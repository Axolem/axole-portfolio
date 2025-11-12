import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import RouterLink from "next/link";

import { CVDownload } from "./CVDownload";
export const HeroSection = () => {
	return (
		<section className="relative flex items-center bg-gradient-to-b from-background via-secondary/20 to-background px-6 min-h-screen overflow-hidden">
			{/* Subtle background shimmer using Tailwind animations */}
			<div className="z-0 absolute inset-0 overflow-hidden">
				<div className="top-1/3 left-1/2 absolute bg-purple-800/5 blur-[120px] rounded-full w-[800px] h-[500px] -translate-x-1/2 animate-pulse-slow" />
			</div>

			<div className="z-10 mx-auto w-full max-w-6xl">
				<div className="flex md:flex-row flex-col items-center md:items-start gap-12">
					<div className="relative flex-shrink-0 opacity-0 shadow-lg border-4 border-purple-500/20 rounded-full w-40 h-40 overflow-hidden scale-90 animate-fade-in-scale">
						<Image
							src="/axole-maranjana.jpg"
							alt="Axole Maranjana"
							className="w-full h-full object-cover"
							width={600}
							height={600}
						/>
					</div>

					<div className="flex flex-col gap-6 max-w-2xl md:text-left text-center">
						<div className="space-y-4">
							<h2 className="opacity-0 font-medium text-purple-400 text-sm md:text-base translate-y-4 animate-fade-in delay-200">
								Welcome to my digital canvas
							</h2>
							<h1 className="bg-clip-text bg-gradient-to-r from-white to-gray-400 opacity-0 font-space-grotesk font-bold text-transparent text-4xl md:text-6xl leading-tight translate-y-4 animate-fade-in delay-300">
								Hey, I&apos;m Axole Maranjana
							</h1>
						</div>

						<p className="opacity-0 text-gray-400 text-lg md:text-xl leading-relaxed translate-y-4 animate-fade-in delay-400">
							Software Developer, Open Source Contributor & Tech Entrepreneur
							passionate about building innovative solutions and fostering tech
							education.
						</p>

						<div className="flex flex-wrap justify-center md:justify-start gap-4 opacity-0 mt-4 translate-y-4 animate-fade-in delay-500">
							<CVDownload />

							<RouterLink
								href="https://github.com/Axolem"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:bg-purple-500/20 p-2 rounded-full transition-colors"
								aria-label="GitHub Profile"
							>
								<Github
									size={24}
									className="text-gray-400 hover:text-purple-400 transition-colors"
								/>
							</RouterLink>

							<RouterLink
								href="https://linkedin.com/in/axolemaranjana"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:bg-purple-500/20 p-2 rounded-full transition-colors"
								aria-label="LinkedIn Profile"
							>
								<Linkedin
									size={24}
									className="text-gray-400 hover:text-purple-400 transition-colors"
								/>
							</RouterLink>

							<RouterLink
								href="mailto:axolemaranjana4@gmail.com"
								className="hover:bg-purple-500/20 p-2 rounded-full transition-colors"
								aria-label="Email Contact"
							>
								<Mail
									size={24}
									className="text-gray-400 hover:text-purple-400 transition-colors"
								/>
							</RouterLink>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
