import { ChevronsDown } from "lucide-react";
import ScrollReveal from "../../Components/ScrollReveal";

function Legacy() {
  return (
    <section
      id="legacy"
      className="scroll-mt-24 w-full py-20 px-6 md:px-16 bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="up">
          <div>
            {/* 2. Fixed invisibile text: added dark:text-white to heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center md:text-left font-serif transition-colors duration-300">
              Legacy Modernization
            </h1>

            {/* 3. Fixed invisibile text: changed text-gray-500 to text-gray-600 dark:text-gray-300 */}
            <p className="text-gray-600 dark:text-gray-300 mb-10 leading-relaxed text-lg transition-colors duration-300">
              Don't let technical debt hold you back. We refactor and upgrade
              your existing systems to modern stacks without interrupting your
              business operations.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="text-blue-500 font-bold text-lg mt-1">01</span>
                <div>
                  {/* 4. Fixed invisibile text: added dark:text-white */}
                  <h3 className="text-gray-900 dark:text-white font-bold text-lg transition-colors duration-300">
                    Code Audit & Analysis
                  </h3>
                  {/* 5. Fixed invisibile text: changed text-gray-500 to text-gray-500 dark:text-gray-400 */}
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 transition-colors duration-300">
                    Identifying bottlenecks and security risks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-blue-500 font-bold text-lg mt-1">02</span>
                <div>
                  <h3 className="text-gray-900 dark:text-white font-bold text-lg transition-colors duration-300">
                    Microservices Migration
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 transition-colors duration-300">
                    Breaking monoliths into scalable services.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-blue-500 font-bold text-lg mt-1">03</span>
                <div>
                  <h3 className="text-gray-900 dark:text-white font-bold text-lg transition-colors duration-300">
                    UI/UX Revamp
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 transition-colors duration-300">
                    Modernizing the look and feel for today's users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left">
          <div className="flex flex-col items-center justify-center space-y-4">
            {/* 6. Added dark bg to BEFORE card */}
            <div className="bg-white dark:bg-gray-800 p-6 w-full max-w-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-lg border-l-4 border-blue-400 transition-colors duration-300">
              {/* 7. Added dark variant for subtitle */}
              <p className="text-blue-400 dark:text-blue-300 text-xs font-bold tracking-wider mb-3 transition-colors duration-300">
                BEFORE
              </p>
              {/* pre-tags will work fine for both as text is grey */}
              <pre className="text-gray-500 text-sm font-mono overflow-x-auto">
                <code>
                  System.out.println("Processing...");
                  <br />
                  // Spaghetti code intensifies
                </code>
              </pre>
            </div>

            <ChevronsDown className="text-blue-400 w-8 h-8" />

            {/* 8. Added dark bg to AFTER card */}
            <div className="bg-white dark:bg-gray-800 p-6 w-full max-w-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-lg border-l-4 border-green-500 transition-colors duration-300">
              <p className="text-blue-400 dark:text-blue-300 text-xs font-bold tracking-wider mb-3 transition-colors duration-300">
                AFTER
              </p>
              {/* Code text color is dark-grey (text-gray-800), this should work for dark too */}
              <pre className="text-gray-500 text-sm font-mono overflow-x-auto">
                <code>
                  const result = await processTask();
                  <br />
                  export default ServiceModule;
                </code>
              </pre>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Legacy;
