import { Mail } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

function Blogmsg() {
  return (
    <section className="py-8 bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-10 text-center">
        <ScrollReveal direction="up" duration={0.8}>
          <div className="mt-0 bg-linear-to-r from-blue-400 to-indigo-200 dark:from-blue-900 dark:to-indigo-900 text-white rounded-4xl p-18 transition-colors duration-300">
            <Mail
              className="mx-auto text-blue-700 dark:text-blue-300 mb-4"
              size={32}
            />

            <h3 className="text-3xl font-bold md:text-5xl text-blue-700 dark:text-white">
              Stay Updated
            </h3>

            <p className="mt-4 text-lg text-black dark:text-gray-200 md:leading-snug">
              Get the latest AI development tutorials and news delivered
              directly to your inbox weekly.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-transparent dark:border-gray-600 text-gray-900 dark:text-white rounded-full px-4 py-2 outline-none mt-6 bg-white dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 w-full md:w-auto md:min-w-75"
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full m-4 transition-colors">
              Subscribe
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
export default Blogmsg;
