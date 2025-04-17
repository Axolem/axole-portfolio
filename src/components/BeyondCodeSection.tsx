"use client";
import { motion } from "framer-motion";
import { Book, User, Youtube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Influencer {
  handle: string;
  description: string;
}

const techInfluencers: Influencer[] = [
  {
    handle: "@CodingWithJohn",
    description: "Java & general programming tutorials",
  },
  { handle: "@techlinked", description: "Tech news & commentary" },
  { handle: "@t3dotgg", description: "Fullstack development insights" },
  { handle: "@ByteMonk", description: "Deep programming knowledge" },
  { handle: "@Fireship", description: "Fast-paced coding tutorials" },
  { handle: "@ThePrimeTimeagen", description: "Vim enthusiast & developer" },
];

const hobbies = [
  "Kayaking through South African rivers",
  "Running marathons to push physical limits",
  "Playing musical instruments in free time",
  "Contributing to open-source projects",
  "Reading tech books and biographies",
];

export const BeyondCodeSection = () => {
  return (
    <section
      id="interests"
      className="py-20 px-6 bg-gradient-to-b from-secondary/10 to-background"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-12 text-center">
          Beyond The Code
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <User className="text-purple-400" size={24} />
              <h3 className="text-2xl font-bold">When I&apos;m Not Coding</h3>
            </div>
            <Card className="bg-secondary/20 border-purple-500/20">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {hobbies.map((hobby, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{hobby}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tech Influencers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Youtube className="text-purple-400" size={24} />
              <h3 className="text-2xl font-bold">
                Tech Influencers I Follow on YouTube
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techInfluencers.map((influencer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="p-4 rounded-lg bg-secondary/30 border border-purple-500/20"
                >
                  <p className="font-bold text-purple-400 mb-1">
                    {influencer.handle}
                  </p>
                  <p className="text-sm text-gray-400">
                    {influencer.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-xl bg-secondary/20 border border-purple-500/20 text-center"
        >
          <div className="flex justify-center mb-4">
            <Book className="text-purple-400" size={24} />
          </div>
          <p className="text-gray-300 italic">
            &quot;The intersection of tech and adventure is where I thrive -
            building solutions by day, exploring the world by evening, and
            dreaming of the next big idea by night.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
};
