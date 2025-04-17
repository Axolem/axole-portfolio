import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

interface Education {
  school: string;
  degree: string;
  period: string;
  location?: string;
  gpa?: string;
  details?: string[];
}

const educationData: Education[] = [
  {
    school: "University of Johannesburg",
    degree: "Advanced Diploma in Business Information Technology",
    period: "Feb 2024 - Nov 2024",
    location: "Johannesburg, ZA",
    gpa: "80.75",
    details: [
      "Coursework: Human Computer Interaction, Software Testing, Business Analysis, Databases",
    ],
  },
  {
    school: "University of Johannesburg",
    degree: "Diploma in Business Information Technology",
    period: "Feb 2021 - Nov 2023",
    location: "Johannesburg, ZA",
    gpa: "76.2",
    details: ["Awarded #1 for overall project implementation and innovation"],
  },
  {
    school: "Ithuba-lethu Secondary School",
    degree: "Bachelor in National Senior Certificate",
    period: "Completed Dec 2018",
    location: "Johannesburg, ZA",
  },
];

export const EducationSection = () => {
  return (
    <section
      id="education"
      className="py-20 px-6 bg-gradient-to-b from-secondary/20 to-background"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-12 text-center">
          Education Journey
        </h2>
        <div className="grid gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl bg-secondary/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10">
                  <GraduationCap className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{edu.school}</h3>
                  <p className="text-gray-300 mb-1">{edu.degree}</p>
                  <div className="flex flex-wrap gap-2 items-center mb-2">
                    <p className="text-sm text-gray-500">{edu.period}</p>
                    {edu.location && (
                      <>
                        <span className="text-gray-600">•</span>
                        <p className="text-sm text-gray-500">{edu.location}</p>
                      </>
                    )}
                  </div>
                  {edu.gpa && (
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-sm text-purple-400 font-medium">
                        GPA: {edu.gpa}
                      </p>
                      {parseFloat(edu.gpa) >= 75 && (
                        <div className="flex items-center gap-1 px-2 py-0.5 bg-purple-500/20 rounded-full">
                          <Award className="text-yellow-400 h-3.5 w-3.5" />
                          <span className="text-xs text-yellow-400 font-medium">
                            Distinction
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                  {edu.details?.map((detail, i) => (
                    <p
                      key={i}
                      className="text-sm text-gray-400 flex items-start gap-2"
                    >
                      <span className="text-purple-500">•</span>
                      <span>{detail}</span>
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
