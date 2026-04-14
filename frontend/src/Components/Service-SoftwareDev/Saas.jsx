import { Cloud } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
function Saas() {
  return (
    <section
      id="saas"
      className="scroll-mt-24 w-full py-16 px-4 bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative">
        <ScrollReveal direction="up">
          <div className="absolute -top-10 left-20 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 w-64 z-10 md:left-70 transition-colors duration-300 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
              "Codeofy helped us launch our MVP in 3 months. Our MRR tripled by
              month six."
            </p>
            <p className="text-xs font-semibold mt-2 text-gray-800 dark:text-gray-100 transition-colors duration-300">
              - TechStart Founder
            </p>
          </div>

          <div
            className="rounded-3xl h-87.5 flex items-center justify-center 
                  bg-linear-to-br from-black to-orange-500 shadow-xl"
          >
            <Cloud size={80} className="text-white opacity-80" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300">
              SaaS Development
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300 leading-relaxed">
              From ideation to launch, we build multi-tenant cloud applications
              that users love. Scale seamlessly as your customer base grows.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-300">
                  Subscription Engine
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  Built-in Stripe & PayPal integrations.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-300">
                  Secure Multi-tenancy
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  Isolated data architectures.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
export default Saas;
