import ScrollReveal from "../ScrollReveal";
import Image from "next/image";

function Read() {
  return (
    <div className="max-w-8xl mx-auto px-6 text-center py-11">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="mt-0 bg-white dark:bg-gray-800 rounded-2xl p-10 md:p-18 transition-colors duration-300 shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="https://infraon.io/blog/wp-content/uploads/2023/06/futuristic-smart-city-with-5g-global-network-technology-min.jpg"
                width={800}
                height={500}
                className="rounded-lg shadow-sm w-full object-cover"
                alt="Smart city network"
              />
            </div>

            <div className="md:w-1/2 text-center md:text-left">
              <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full font-medium">
                • Featured
              </span>

              <h3 className="text-lg font-bold mt-4 mb-4 md:text-4xl leading-snug text-gray-900 dark:text-white text-left">
                How AI is Transforming Software Development
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 text-left leading-relaxed">
                We build powerful AI solutions for modern businesses. Our
                platform helps companies automate processes and improve
                productivity.
              </p>

              <div className="text-left">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-3xl hover:bg-blue-700 transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default Read;
