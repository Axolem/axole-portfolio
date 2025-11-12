"use client";
import { motion } from "framer-motion";
import { Book, Clock, Code, Coffee, Moon, Sun, Terminal } from "lucide-react";

interface TimelineItem {
	time: string;
	activity: string;
	icon: React.ReactNode;
	color: string;
}

const timelineItems: TimelineItem[] = [
	{
		time: "6 AM",
		activity: "Morning Routine & Planning the Day",
		icon: <Sun className="h-5 w-5" />,
		color: "bg-yellow-500",
	},
	{
		time: "7 AM",
		activity: "Coffee & Emails",
		icon: <Coffee className="h-5 w-5" />,
		color: "bg-amber-600",
	},
	{
		time: "9 AM",
		activity: "Deep Work & Coding",
		icon: <Code className="h-5 w-5" />,
		color: "bg-blue-500",
	},
	{
		time: "12 PM",
		activity: "Kayaking or Running",
		icon: <motion.span>🚣</motion.span>,
		color: "bg-green-500",
	},
	{
		time: "2 PM",
		activity: "Tutoring & Mentoring",
		icon: <Book className="h-5 w-5" />,
		color: "bg-indigo-500",
	},
	{
		time: "4 PM",
		activity: "Meetings & Collaboration",
		icon: <motion.span>👥</motion.span>,
		color: "bg-purple-500",
	},
	{
		time: "6 PM",
		activity: "Personal Projects",
		icon: <Terminal className="h-5 w-5" />,
		color: "bg-pink-500",
	},
	{
		time: "8 PM",
		activity: "Open Source Contributions",
		icon: <motion.span>🌟</motion.span>,
		color: "bg-orange-500",
	},
	{
		time: "10 PM",
		activity: "Reading & Unwinding",
		icon: <Moon className="h-5 w-5" />,
		color: "bg-slate-500",
	},
];

export const DayLifeSection = () => {
	return (
		<section
			id="day-life"
			className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20"
		>
			<div className="max-w-6xl mx-auto">
				<div className="flex items-center justify-center gap-3 mb-12">
					<Clock className="text-purple-400" size={28} />
					<h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-center">
						A Day in the Life
					</h2>
				</div>

				<div className="relative mx-auto max-w-3xl">
					{/* Vertical line */}
					<div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-purple-400 via-purple-600 to-purple-400 transform md:-translate-x-1/2"></div>

					{/* Timeline items */}
					{timelineItems.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className={`relative flex md:items-center mb-12 ${
								index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
							}`}
						>
							{/* Visible on mobile only */}
							<div className="absolute left-0 top-0 md:hidden">
								<div
									className={`flex items-center justify-center w-10 h-10 rounded-full ${item.color} text-white`}
								>
									{item.icon}
								</div>
							</div>

							{/* Content */}
							<div
								className={`pl-16 md:pl-0 md:w-1/2 ${
									index % 2 === 0 ? "md:pr-12" : "md:pl-12"
								}`}
							>
								<motion.div
									whileHover={{ scale: 1.03 }}
									className="p-4 rounded-lg bg-secondary/30 border border-purple-500/20 hover:bg-secondary/40 transition-colors"
								>
									<p className="font-mono text-lg font-bold text-purple-400">
										{item.time}
									</p>
									<p className="text-gray-300">{item.activity}</p>
								</motion.div>
							</div>

							{/* Center dot - hidden on mobile */}
							<div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
								<div
									className={`flex items-center justify-center w-12 h-12 rounded-full ${item.color} text-white shadow-lg`}
								>
									{item.icon}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
