"use client"
import Software from "./Software";

function Btn() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Button Row */}
      <div className="flex flex-wrap justify-center w-full items-center gap-4 p-6 bg-transparent">
        <button 
          onClick={() => scrollToSection("enterprise")}
          className="px-5 py-2 text-gray-700 dark:text-gray-200 font-semibold hover:bg-blue-600 hover:text-white transition-colors rounded-lg cursor-pointer"
        >
          Custom Enterprise
        </button>
        <button 
          onClick={() => scrollToSection("saas")}
          className="px-5 py-2 text-gray-700 dark:text-gray-200 font-semibold hover:bg-blue-600 hover:text-white transition-colors rounded-lg cursor-pointer"
        >
          SaaS Development
        </button>
        <button 
          onClick={() => scrollToSection("legacy")}
          className="px-5 py-2 text-gray-700 dark:text-gray-200 font-semibold hover:bg-blue-600 hover:text-white transition-colors rounded-lg cursor-pointer"
        >
          Legacy Modernization
        </button>
        <button 
          onClick={() => scrollToSection("qa")}
          className="px-5 py-2 text-gray-700 dark:text-gray-200 font-semibold hover:bg-blue-600 hover:text-white transition-colors rounded-lg cursor-pointer"
        >
          Quality Assurance
        </button>
      </div>

      {/* Added an ID here so the first button knows where to scroll! */}
      {/* 'scroll-mt-24' adds a little padding at the top so it doesn't hug the very edge of the screen */}
      <div id="enterprise" className="scroll-mt-24">
        <Software />
      </div>
    </div>
  );
}
export default Btn;