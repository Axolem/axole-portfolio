"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Terminal } from "lucide-react";

export const Footer = () => {
  const [commandInput, setCommandInput] = useState("");
  const [commandOutput, setCommandOutput] = useState("");
  const [showTerminal, setShowTerminal] = useState(false);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanedCommand = commandInput.trim().toLowerCase();

    if (cleanedCommand === "whois axole") {
      setCommandOutput(`
        > whois axole

        PERSON: Axole Maranjana
        OCCUPATION: Software Developer & Tech Entrepreneur
        LOCATION: Johannesburg, South Africa
        INTERESTS: Kayaking, Running, Music, Open Source
        FUN FACTS:
        - Once automated his entire morning routine with Power Automate
        - Can debug code while kayaking (mentally, not physically!)
        - Dreams in TypeScript
        - Believes the best code is written after a good run
        - Has contributed to open-source projects at midnight

        STATUS: Currently coding something awesome...

        Type 'clear' to reset terminal.
      `);
    } else if (cleanedCommand === "clear") {
      setCommandOutput("");
    } else if (cleanedCommand === "help") {
      setCommandOutput(`
        Available commands:
        - whois axole: Learn more about Axole
        - clear: Clear the terminal
        - help: Show this help message
      `);
    } else {
      setCommandOutput(
        `Command not recognized: ${commandInput}\nTry 'help' for available commands.`
      );
    }

    setCommandInput("");
  };

  return (
    <footer className="py-8 px-6 bg-secondary/30 border-t border-purple-500/20 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Axole Maranjana. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowTerminal(!showTerminal)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/70 transition-colors text-sm"
            >
              <Terminal size={16} />
              <span>{showTerminal ? "Hide Terminal" : "Terminal"}</span>
            </motion.button>
          </div>
        </div>

        {showTerminal && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 rounded-lg bg-black/80 border border-purple-500/30 font-mono text-sm"
          >
            <div className="mb-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-gray-400">Terminal</span>
            </div>
            <div className="mb-2 whitespace-pre-line text-gray-200">
              {commandOutput ||
                "Welcome to Axole's terminal. Try 'whois axole' or 'help'"}
            </div>
            <form onSubmit={handleCommand} className="flex items-center">
              <span className="text-purple-400 mr-2">$</span>
              <input
                type="text"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-white"
                placeholder="Type a command..."
                autoFocus
              />
            </form>
          </motion.div>
        )}
      </div>
    </footer>
  );
};
