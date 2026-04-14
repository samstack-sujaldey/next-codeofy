import ScrollReveal from "../ScrollReveal";
import Read from "./Read";

function Home() {
  return (
    <section className="py-11 bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ScrollReveal direction="down" duration={0.8}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mt-0 bg-linear-to-r from-blue-400 to-indigo-200 dark:from-blue-900 dark:to-indigo-900 text-white rounded-2xl p-18 transition-colors duration-300">
            <h3 className="text-4xl font-bold md:text-6xl text-blue-700 dark:text-white">
              Codeofy Blog
            </h3>

            <p className="mt-4 text-lg text-black dark:text-gray-200 md:leading-snug">
              Insights, tutorials, and the latest breakthroughs in AI-powered
              software development.
            </p>

            <div className="flex justify-center gap-4 mt-7">
              <button className="bg-white dark:bg-gray-800 text-blue-600 dark:text-white px-6 py-2 rounded-3xl font-medium hover:scale-105 transition duration-100 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600">
                Explore All Posts
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>
      <Read />
    </section>
  );
}
export default Home;
