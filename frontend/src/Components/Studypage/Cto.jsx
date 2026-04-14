import ScrollReveal from "../ScrollReveal";
import Image from "next/image";

function Cto() {
  return (
    <>
      <section className="bg-linear-to-b from-blue-600 to-white dark:from-gray-900 dark:to-gray-800 py-16 transition-colors duration-300">
        <ScrollReveal direction="up" duration={0.8}>
          <div className="flex justify-center items-center px-5 text-center">
            <div className="max-w-4xl mb-12">
              <p className="text-gray-900 dark:text-gray-200 mt-8 text-xl italic leading-relaxed text-center">
                "Codeofy's AI integration didn't just speed up our processes; it
                transformed how we understand and react to market volatility."
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="https://infraon.io/blog/wp-content/uploads/2023/06/futuristic-smart-city-with-5g-global-network-technology-min.jpg"
              alt="Marcus Thorne"
              className="w-16 h-16 rounded-full object-cover shadow-md"
            />
            <h3 className="mt-4 font-semibold text-lg text-gray-900 dark:text-white">
              Marcus Thorne
            </h3>
            <p className="text-blue-700 dark:text-blue-400 font-semibold">
              CTO at FinFlow Inc.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
export default Cto;
