import { Sparkles, Rocket, Code2, Globe } from "lucide-react";

export const StorySection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-16 text-center">
          The Story
        </h2>

        <div className="space-y-24">
          {/* Chapter 1 */}
          <div className="relative" data-aos="fade-up">
            <div className="flex items-start gap-8">
              <div className="hidden md:block pt-2">
                <Sparkles className="text-purple-500" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  The Spark of Curiosity
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Growing up in Johannesburg, South Africa, my curiosity was
                  ignited by the city&apos;s vibrant energy. I found myself
                  taking apart gadgets, tinkering with computers, and dreaming
                  of creating something impactful. What started with simple
                  scripts soon evolved into a passion for solving complex
                  problems through code.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 2 */}
          <div className="relative" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-start gap-8">
              <div className="hidden md:block pt-2">
                <Rocket className="text-purple-500" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  The Rise of a Technopreneur
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  At the University of Johannesburg, I dove deep into innovation
                  as a Technopreneurship Ambassador, bridging the gap between
                  students and industry giants like Microsoft, SAP, and Huawei.
                  But I wasn&apos;t just connecting others—I was building. From
                  PipAlert, my Forex trading app, to publishing npm packages,
                  every project was a step toward making technology more
                  accessible.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 3 */}
          <div className="relative" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-start gap-8">
              <div className="hidden md:block pt-2">
                <Code2 className="text-purple-500" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  The Open-Source Explorer
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  My GitHub became more than a repository—it became a playground
                  for innovation. Contributing to Supabase, creating automation
                  scripts, and sharing knowledge became my way of giving back to
                  the community that helped me grow.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 4 */}
          <div className="relative" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-start gap-8">
              <div className="hidden md:block pt-2">
                <Globe className="text-purple-500" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  The Vision Ahead
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Today, I stand at the intersection of tech, entrepreneurship,
                  and education. My mission is clear: build tools that empower
                  people, mentor aspiring developers, and keep pushing
                  boundaries—one line of code at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
