import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { CVDownload } from "./CVDownload";
import RouterLink from "next/link";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 bg-gradient-to-b from-background via-secondary/20 to-background relative">
      {/* Subtle gradient background shimmer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-purple-800/5 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full pt-32 md:pt-20 z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-40 h-40 rounded-full overflow-hidden border-4 border-purple-500/20 shadow-lg flex-shrink-0 relative"
          >
            <Image
              src="/axole-maranjana.jpg"
              alt="Axole Maranjana"
              className="w-full h-full object-cover"
              width={600}
              height={600}
            />
          </motion.div>

          <div className="flex flex-col gap-6 max-w-2xl text-center md:text-left">
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm md:text-base text-purple-400 font-medium"
              >
                Welcome to my digital canvas
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold font-space-grotesk leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              >
                Hey, I&apos;m Axole Maranjana
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed"
            >
              Software Developer, Open Source Contributor & Tech Entrepreneur
              passionate about building innovative solutions and fostering tech
              education.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start"
            >
              <CVDownload />

              <RouterLink
                href="https://github.com/Axolem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-purple-500/20 transition-colors"
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
                className="p-2 rounded-full hover:bg-purple-500/20 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin
                  size={24}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                />
              </RouterLink>
              <RouterLink
                href="mailto:contact@axolemaranjana.com"
                className="p-2 rounded-full hover:bg-purple-500/20 transition-colors"
                aria-label="Email Contact"
              >
                <Mail
                  size={24}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                />
              </RouterLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
