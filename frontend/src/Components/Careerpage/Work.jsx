import { BrainCircuit, Earth, Presentation, CodeXml } from "lucide-react";
import Workcard from "./Workcard";
import ScrollReveal from "../ScrollReveal";

function Work() {
  const features = [
    {
      icons: <Earth />,
      title: "Remote Friendly ",
      desc: "Work from anywhere, anytime. We embrace flexibility and empower our team to thrive in a remote work environment.",
    },
    {
      icons: <BrainCircuit />,
      title: "AI Innovation",
      desc: "Shaping the future of work with cutting-edge AI solutions. We harness the power of artificial intelligence to drive innovation.",
    },
    {
      icons: <CodeXml />,
      title: "Learning & Growth",
      desc: "Committed to fostering a culture of continuous learning and growth. We provide our employees with opportunities for professional development.",
    },
    {
      icons: <Presentation />,
      title: "Top Benefits",
      desc: "We offer a comprehensive benefits package that prioritizes the well-being and satisfaction of our employees.",
    },
  ];

  return (
    <section className="text-white py-12 px-4 bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="grid gap-10 items-center">
        <ScrollReveal direction="up" duration={0.8}>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-3 sm:mb-4">
              Why Work With Us{" "}
            </h1>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Join us to be part of a forward-thinking company that values
              innovation and empowers its employees to thrive.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-13">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-blue-100 dark:bg-gray-800 rounded-2xl p-14 text-center transition duration-300 hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="flex justify-left text-black dark:text-blue-400 mb-4">
                    {item.icons}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-left text-black dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-black dark:text-gray-300 text-sm text-left">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
      <Workcard />
    </section>
  );
}
export default Work;
