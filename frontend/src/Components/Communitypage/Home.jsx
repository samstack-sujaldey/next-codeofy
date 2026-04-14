import { Snowflake, Zap } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

function Home() {
  return (
    <>
      <section className="text-white bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <ScrollReveal direction="down" duration={0.8}>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center py-10 px-8">
            <div className="text-center md:text-left">
              <span className="px-4 py-1 text-sm bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full mb-1.5">
                👥 Over 50,000 members
              </span>

              <h1 className="text-3xl font-bold mb-4 mt-3 text-black dark:text-white text-center md:text-left md:text-6xl">
                The Codeofy <br /> Community
              </h1>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Connect, collaborate, and grow with AI developers and innovators
                worldwide. Access exclusive resources, get help with your
                projects, and shape the future of Codeofy.
              </p>

              <div className="flex gap-4 justify-center md:justify-start">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                  ✉️ Join the Discord
                </button>

                <button className="border px-6 py-3 rounded-lg text-black bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Browse Forums
                </button>
              </div>
            </div>

            <div className="relative bg-blue-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center h-72 transition-colors duration-300">
              <Snowflake size={80} className="text-blue-500" />

              <div className="absolute bottom-0 -translate-x-1/2 left-1/2 sm:left-29 flex items-center gap-2 sm:gap-3 bg-white dark:bg-gray-700 rounded-2xl h-12 sm:h-14 w-4/5 sm:w-2/4 p-2 sm:px-6 translate-y-1/2 shadow-md transition-colors duration-300">
                <Zap
                  size={24}
                  className="bg-green-300 text-green-700 dark:text-green-800 p-1 rounded-full sm:size-30px"
                />
                <p className="text-black dark:text-white leading-tight text-[10px] sm:text-xs">
                  <span className="font-semibold">New post</span> <br />
                  <span className="text-gray-600 dark:text-gray-300">
                    How to deploy Llama 3 on Codeofy...
                  </span>
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
export default Home;
