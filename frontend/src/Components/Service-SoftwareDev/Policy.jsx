import { FaLock } from "react-icons/fa";
import { IoSpeedometerOutline, IoPeopleSharp } from "react-icons/io5";
import { GrTest } from "react-icons/gr";
import { Bug } from "lucide-react"; // Imported Bug icon for the floating header
import ScrollReveal from "../ScrollReveal";

function Policy() {
  return (
    <section
      id="qa"
      className="-mt-px scroll-mt-24 w-full flex justify-center items-center py-16 px-4 bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <ScrollReveal direction="up" duration={0.8}>
        <div className="relative max-w-5xl w-full bg-[#1a1f2c] rounded-[2.5rem] text-center px-6 py-16 md:p-20 shadow-2xl mt-8">
          {/* Floating Bug Icon */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#5b75fc] p-5 rounded-2xl shadow-lg">
            <Bug className="text-white w-8 h-8" />
          </div>

          {/* Headings */}
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-6 font-serif italic">
            Zero-Bug Policy Quality Assurance
          </h1>

          <p className="text-gray-400 text-lg mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            Our dedicated QA engineers employ automated and manual testing
            methodologies to ensure your software is robust, secure, and
            user-friendly.
          </p>

          {/* Icons Grid */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            <div className="flex flex-col items-center group">
              <GrTest className="text-[#5b75fc] text-3xl mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-semibold text-white tracking-wide">
                Unit Testing
              </p>
            </div>

            <div className="flex flex-col items-center group">
              <IoPeopleSharp className="text-[#5b75fc] text-3xl mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-semibold text-white tracking-wide">
                UAT Testing
              </p>
            </div>

            <div className="flex flex-col items-center group">
              <IoSpeedometerOutline className="text-[#5b75fc] text-3xl mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-semibold text-white tracking-wide">
                Performance
              </p>
            </div>

            <div className="flex flex-col items-center group">
              <FaLock className="text-[#5b75fc] text-3xl mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-semibold text-white tracking-wide">
                Security Audits
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Policy;
