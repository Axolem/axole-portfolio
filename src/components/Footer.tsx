"use client";

import { useState } from "react";
import posthog from "posthog-js";
import { motion } from "framer-motion";
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
    posthog.capture("terminal_command", { command: cleanedCommand });
  };

  return (
    <footer className="bg-secondary/30 px-6 py-8 pb-24 border-purple-500/20 border-t">
      <div className="mx-auto max-w-6xl">
        <div className="flex md:flex-row flex-col justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Axole Maranjana. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setShowTerminal(!showTerminal);
                if (showTerminal) {
                  posthog.capture("close_terminal");
                } else {
                  posthog.capture("open_terminal");
                }
              }}
              className="flex items-center gap-2 bg-secondary hover:bg-secondary/70 px-3 py-2 rounded-lg text-sm transition-colors"
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
            className="bg-black/80 mt-6 p-4 border border-purple-500/30 rounded-lg font-mono text-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-red-500 rounded-full w-3 h-3" />
              <div className="bg-yellow-500 rounded-full w-3 h-3" />
              <div className="bg-green-500 rounded-full w-3 h-3" />
              <span className="ml-2 text-gray-400">Terminal</span>
            </div>
            <div className="mb-2 text-gray-200 whitespace-pre-line">
              {commandOutput ||
                "Welcome to Axole's terminal. Try 'whois axole' or 'help'"}
            </div>
            <form onSubmit={handleCommand} className="flex items-center">
              <span className="mr-2 text-purple-400">$</span>
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
