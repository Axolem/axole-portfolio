/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import posthog from "posthog-js";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const KonamiCode = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const konamiCode = [
    "a", "x", "o", "l", "e"
  ];

  useEffect(() => {
    let index = 0;

    const keydownHandler = (e: KeyboardEvent) => {
      // Expected key
      const expectedKey = konamiCode[index];

      // Check if key matches
      if (e.key === expectedKey) {
        index++;

        // Check if completed
        if (index === konamiCode.length) {
          setShowEasterEgg(true);
          index = 0;
          posthog.capture("show_konami_code")

          // Hide after 5 seconds
          setTimeout(() => {
            setShowEasterEgg(false);
          }, 5000);
        }
      } else {
        // Reset sequence on wrong key
        index = 0;
      }
    };

    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  }, []);

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, rotate: [0, 10, -10, 10, 0] }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="z-50 fixed inset-0 flex justify-center items-center bg-black/70"
          onClick={() => setShowEasterEgg(false)}
        >
          <motion.div
            className="bg-secondary/80 backdrop-blur-lg p-8 border border-purple-500/40 rounded-xl max-w-md text-center"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <motion.div
              className="mb-4 text-8xl"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            >
              🚀
            </motion.div>
            <h3 className="mb-2 font-bold text-purple-400 text-2xl">
              You found the Konami Code!
            </h3>
            <p className="text-gray-300">
              Congratulations, you&apos;ve discovered Axole&apos;s secret easter egg! This
              is where all the code magic happens.
            </p>
            <p className="mt-4 text-gray-400 text-sm">
              (Click anywhere to close)
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
