"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingSymbol {
	id: number;
	symbol: string;
	x: number;
	y: number;
	size: number;
	duration: number;
	delay: number;
}

export const BackgroundEffects = () => {
	const [symbols, setSymbols] = useState<FloatingSymbol[]>([]);

	useEffect(() => {
		// Generate random floating symbols
		const codeSymbols = [
			"{ }",
			"<>",
			"()",
			"=>",
			"++",
			"[]",
			"&&",
			"||",
			"==",
			"!=",
			"//",
		];
		const newSymbols = Array.from({ length: 15 }, (_, i) => ({
			id: i,
			symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
			x: Math.random() * 100,
			y: Math.random() * 100,
			size: Math.random() * 1.5 + 0.8, // between 0.8-2.3rem
			duration: Math.random() * 20 + 15, // between 15-35s
			delay: Math.random() * 5,
		}));

		setSymbols(newSymbols);
	}, []);

	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
			{symbols.map((item) => (
				<motion.div
					key={item.id}
					className="fixed text-purple-500/5 font-mono font-bold z-0"
					style={{
						left: `${item.x}%`,
						top: `${item.y}%`,
						fontSize: `${item.size}rem`,
					}}
					animate={{
						y: [0, -100, 0],
						opacity: [0.3, 0.7, 0.3],
					}}
					transition={{
						duration: item.duration,
						repeat: Infinity,
						delay: item.delay,
					}}
				>
					{item.symbol}
				</motion.div>
			))}

			{/* Gradient orbs */}
			<div className="fixed top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[100px] animate-pulse" />
			<div
				className="fixed bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[100px] animate-pulse"
				style={{ animationDuration: "15s" }}
			/>
		</div>
	);
};
