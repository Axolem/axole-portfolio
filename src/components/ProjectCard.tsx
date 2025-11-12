import { ExternalLink, Github } from "lucide-react";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";

interface ProjectCardProps {
	title: string;
	description: string;
	tags: string[];
	githubUrl?: string;
	liveUrl?: string;
	imageUrl?: string;
}

export const ProjectCard = ({
	title,
	description,
	tags,
	githubUrl,
	liveUrl,
}: // imageUrl,
ProjectCardProps) => {
	return (
		<div className="group relative bg-secondary/40 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:animate-hover-float">
			<div className="p-6">
				<HoverCard>
					<HoverCardTrigger>
						<h3 className="text-xl font-bold font-space-grotesk mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-white transition-all duration-300">
							{title}
						</h3>
					</HoverCardTrigger>
					<HoverCardContent className="bg-secondary/95 border border-purple-500/20">
						<p className="text-sm text-gray-300">{description}</p>
					</HoverCardContent>
				</HoverCard>

				<p className="text-gray-400 mb-4">{description}</p>
				<div className="flex flex-wrap gap-2 mb-4">
					{tags.map((tag) => (
						<span
							key={tag}
							className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm hover:bg-purple-500/20 transition-colors"
						>
							{tag}
						</span>
					))}
				</div>
				<div className="flex gap-4">
					{githubUrl && (
						<a
							href={githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
						>
							<Github size={20} />
							<span>Code</span>
						</a>
					)}
					{liveUrl && (
						<a
							href={liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
						>
							<ExternalLink size={20} />
							<span>Live Demo</span>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};
