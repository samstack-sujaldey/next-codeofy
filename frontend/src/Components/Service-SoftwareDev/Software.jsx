import { CheckCircle } from "lucide-react";
import img2 from "../../assets/img 2.jpg";
import ScrollReveal from "../../Components/ScrollReveal";
import Image from "next/image";

function Software() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <ScrollReveal direction="up" duration={0.8}>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center lg:text-left">
            Custom Enterprise Software
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-center lg:text-left">
            Transform your complex business processes into scalable, automated
            workflows. Our enterprise solutions are designed to handle high-load
            performance and deep system integrations.
          </p>

          <div className="space-y-4 max-w-md mx-auto lg:mx-0">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-600 w-5 h-5 shrink-0" />
              <p className="text-gray-700 dark:text-white">
                ERP & CRM Development
              </p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-600 w-5 h-5 shrink-0" />
              <p className="text-gray-700 dark:text-white">
                Business Intelligence Dashboards
              </p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-600 w-5 h-5 shrink-0" />
              <p className="text-gray-700 dark:text-white">
                Cloud Infrastructure Migration
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="w-full lg:w-1/2">
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="bg-gray-100 p-6 rounded-2xl shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img
                src={img2.src}
                alt="Enterprise Solution 1"
                className="w-48 lg:w-64 h-auto object-contain"
              />
            </div>

            <div className="bg-gray-100 p-6 rounded-2xl shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4149/4149648.png"
                alt="Enterprise Solution 2"
                className="w-48 lg:w-64 h-auto object-contain"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

export default Software;
