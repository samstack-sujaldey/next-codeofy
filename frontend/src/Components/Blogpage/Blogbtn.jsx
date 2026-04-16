import ScrollReveal from "../ScrollReveal";

function Blogbtn() {
  return (
    <div className="-mt-px p-6 bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <ScrollReveal direction="up" duration={0.8}>
        <h2 className="text-sm font-bold text-black dark:text-white md:text-5xl text-center">
          Browse by Category
        </h2>

        <div className="flex flex-wrap justify-center items-left gap-4 p-7 md:justify-left">
          <button className="px-5 py-2 text-black dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-3xl hover:bg-blue-700 dark:hover:bg-blue-600 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20">
            Web Developer
          </button>
          <button className="px-5 py-2 text-black dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-3xl hover:bg-blue-700 dark:hover:bg-blue-600 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20">
            Mobile Developer
          </button>
          <button className="px-5 py-2 text-black dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-3xl hover:bg-blue-700 dark:hover:bg-blue-600 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20">
            AI Solution
          </button>
          <button className="px-5 py-2 text-black dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-3xl hover:bg-blue-700 dark:hover:bg-blue-600 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20">
            UI/UX Design
          </button>
          <button className="px-5 py-2 text-black dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-3xl hover:bg-blue-700 dark:hover:bg-blue-600 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20">
            Cloud Solution
          </button>
        </div>
      </ScrollReveal>
    </div>
  );
}
export default Blogbtn;
