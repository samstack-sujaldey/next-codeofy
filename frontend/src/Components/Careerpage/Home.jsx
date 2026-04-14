import ScrollReveal from "../ScrollReveal";
import TextType from "../TextType";

function Home() {
  return (
    <section className="text-white bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ScrollReveal direction="down" duration={0.8}>
        <div className="flex justify-center items-center px-4 text-center p-5">
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-3xl mb-15">
              <span className="px-4 py-1 text-sm bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                WE ARE HIRING GLOBALLY
              </span>
              <h1 className="text-4xl lg:text-7xl font-bold mt-6 text-black dark:text-white">
                {" "}
                Join the future of <br />
                <span className="text-blue-500 dark:text-blue-400">
                  <TextType
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor
                    cursorCharacter="_"
                    text={[
                      "AI Development",
                      "Website Development",
                      "Mobile Development",
                      "Build some amazing experiences!",
                    ]}
                    deletingSpeed={50}
                    variableSpeedMin={60}
                    variableSpeedMax={120}
                    cursorBlinkDuration={0.5}
                  />
                </span>
              </h1>
              <p className="text-black dark:text-gray-300 mt-8 text-lx font-bold text-center">
                {" "}
                Empowering developers with next-generations AI tool to build
                scalable,
              </p>{" "}
              <p className="text-black dark:text-gray-300 text-lx font-bold text-center">
                {" "}
                intelligent software. Join our mission-driven team today
              </p>
              <div className="flex justify-center items-center gap-x-6 mt-14">
                <button className="text-lg font-bold text-white bg-[rgba(9,80,224,0.75)] py-4 px-9 rounded hover:cursor-pointer transition duration-300 hover:scale-105 hover:bg-linear-to-r hover:to-[rgba(100,150,250,0.5)] p-5">
                  View Open Positions
                </button>
                <button className="text-lg font-bold py-4 px-9 text-black bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600 rounded hover:cursor-pointer transition duration-300 hover:scale-105 border">
                  Our Culture
                </button>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
export default Home;
