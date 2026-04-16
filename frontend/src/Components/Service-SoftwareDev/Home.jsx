import { MdOutlineVerified } from "react-icons/md";
import Image from "next/image";
import technology from "@/assets/technology.webp";
import ScrollReveal from "@/Components/ScrollReveal";

function Home() {
  return (
    <>
      <section className="w-full bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center py-10 px-8">
          <ScrollReveal direction="down">
            <div className="text-center md:text-left">
              <span className="px-4 py-1 text-sm bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-lg mb-2 uppercase transition-colors duration-300">
                Engineering Excellence
              </span>

              <h1 className="text-3xl font-bold mb-4 text-black dark:text-white text-center md:text-left md:text-5xl mt-3 transition-colors duration-300">
                Build the Future
                <br /> with Codeofy
              </h1>

              <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                We deliver high-end software solutions tailored to your business
                needs using cutting-edge technologies and agile methodologies.
              </p>

              <div className="flex gap-4 justify-center md:justify-start">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1 active:translate-y-0 ">
                  Start Your Project
                </button>

                <button className="border px-6 py-3 rounded-lg text-black dark:text-white bg-white dark:bg-gray-800 dark:border-gray-600 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 ">
                  View Our Work
                </button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="down" duration={0.8}>
            <div className="relative bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center h-72">
              <Image
                src={technology}
                alt="Codeofy-technology"
                className="h-full w-full object-fill rounded-2xl"
              />

              <div className="absolute bottom-0 -translate-x-1/2 left-[50%] sm:left-29 flex items-center gap-2 sm:gap-3 bg-white dark:bg-gray-800 rounded-2xl h-12 sm:h-14 w-4/5 sm:w-2/4 p-2 sm:px-6 translate-y-1/2 shadow-md border border-gray-100 dark:border-gray-700">
                <MdOutlineVerified
                  size={25}
                  className="bg-blue-700 text-blue-300 p-1 rounded-full sm:w-7.5 sm:h-7.5"
                />

                <p className="text-black dark:text-white leading-tight text-[10px] sm:text-xs">
                  <span className="font-bold">99%</span> <br />
                  Client Satisfaction
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default Home;
