import ScrollReveal from "../ScrollReveal";

function Studycard() {
  const cards = [
    {
      icons: "",
      title: "Predictive Modeling",
      desc: "Automated risk assessment using proprietary deep learning architectures that detect anomalies before they impact the bottom line.",
    },
    {
      icons: "",
      title: "Real-time Dashboards",
      desc: "Instant visualization of global market trends with sub-second latency, providing FinFlow traders with an unfair informational advantage.",
    },
    {
      icons: "",
      title: "Natural Language Reports",
      desc: "AI-generated executive summaries that translate complex financial telemetry into plain English for stakeholder decision-making.",
    },
  ];

  return (
    <section className="-mt-px text-white py-12 px-4 bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="grid gap-10 items-center max-w-7xl mx-auto">
        <ScrollReveal direction="up" duration={0.8}>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-3 sm:mb-4">
              The Codeofy Solution
            </h1>

            <p className="mt-3 text-gray-500 dark:text-gray-400">
              We implemented a bespoke AI orchestration layer that integrated
              directly with FinFlow's data laker
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-13">
              {cards.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-10 text-center shadow-sm transition-all duration-300 hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="flex justify-left text-black dark:text-white mb-4">
                    {item.icons}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-left text-black dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm text-left">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
export default Studycard;
