import ScrollReveal from "../ScrollReveal";
import Image from "next/image";

function Home() {
  return (
    <section className="text-white bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ScrollReveal direction="down" duration={0.8}>
        <div className="max-w-8xl  flex flex-wrap gap-10 justify-center py-8 px-6">
          <div className="max-w-3xl mb-15 text-center md:text-left">
            <span className="px-4 py-1 text-sm bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full">
              FINTECH SUCCESS STORY{" "}
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-9 mt-6 text-black dark:text-white text-center md:text-left">
              Financial <br /> Analytics Revolution
            </h1>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
              How{" "}
              <span className="font-semibold dark:text-white">
                FinFlow Inc.
              </span>{" "}
              leveraged Codeofy’s AI to automate complex financial forecasting
              and reduce risk by 40%.
            </p>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors border-none">
              Download Case Study PDF
            </button>
          </div>

          <div className="flex gap-6 mb-6">
            <img
              src="https://t3.ftcdn.net/jpg/01/90/90/44/360_F_190904438_oYHiq39wdWbUKmpxTC5FRxGCBFIFAwrp.jpg"
              alt="analytics"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
export default Home;
