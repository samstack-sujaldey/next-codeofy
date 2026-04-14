import { FileText } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import Image from "next/image";

function Overview() {
  return (
    <section className="w-full bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" duration={0.8}>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white text-center md:text-left">
                Overview & Client Context
              </h2>

              <div className="w-12 h-1 bg-blue-500 mb-6 md:mx-0 mx-auto"></div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                FinFlow Inc. is a leading fintech provider managing billions in
                assets. They struggled with manual data entry and slow,
                error-prone forecasting models that couldn't keep pace with the
                volatile global markets.
              </p>

              <div className="flex items-start gap-3 bg-gray-100 dark:bg-gray-800 p-5 rounded-2xl transition-colors">
                <FileText
                  className="text-blue-600 dark:text-blue-400 mt-1"
                  size={22}
                />

                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    Client Profile
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Tier-1 Financial Services Institution specializing in asset
                    management and risk mitigation.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white text-center md:text-left">
                The Challenge
              </h2>

              <div className="w-12 h-1 bg-blue-500 mb-6 md:mx-0 mx-auto"></div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                The primary challenge was processing vast amounts of
                unstructured financial data in real-time. Legacy systems failed
                to provide accurate, actionable insights for their clients,
                leading to missed opportunities and increased exposure.
              </p>

              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://infraon.io/blog/wp-content/uploads/2023/06/futuristic-smart-city-with-5g-global-network-technology-min.jpg"
                  alt="challenge"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Overview;
