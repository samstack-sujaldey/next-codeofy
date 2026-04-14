import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiPython } from "react-icons/si";

function Tech() {
  return (
    <>
      {/* Added dark:bg-gray-900 */}
      <div className="w-full flex justify-center items-center py-8 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="text-center py-10">
          {/* Added dark:text-gray-300 */}
          <p className="text-black dark:text-gray-300 text-sm tracking-widest mb-8">
            OUR CORE TECHNOLOGY STACK
          </p>

          {/* Added dark:text-white for the icons */}
          <div className="flex justify-center flex-wrap gap-10 text-black dark:text-white">
            <div className="flex flex-col items-center">
              <FaReact className="text-3xl" />
              <p className="text-sm mt-2">React</p>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs className="text-3xl" />
              <p className="text-sm mt-2">Node.js</p>
            </div>
            <div className="flex flex-col items-center">
              <SiPython className="text-3xl" />
              <p className="text-sm mt-2">Python</p>
            </div>
            <div className="flex flex-col items-center">
              <FaAws className="text-3xl" />
              <p className="text-sm mt-2">AWS</p>
            </div>
            <div className="flex flex-col items-center">
              <SiMongodb className="text-3xl" />
              <p className="text-sm mt-2">MongoDB</p>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-3xl" />
              <p className="text-sm mt-2">Tailwind</p>
            </div>
          </div>
        </div>
      </div>

      {/* Added dark:bg-gray-900 */}
      <div className="w-full flex justify-center items-center py-6 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-5xl w-full bg-linear-to-r from-blue-900 to-blue-700 rounded-2xl text-center p-12 shadow-xl">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Ready to Start Your Success Story?
          </h1>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of innovative companies building the future of
            software with Codeofy’s infrastructure.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition">
              Build with Codeofy
            </button>
            <button className="border border-gray-300 text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Tech;
