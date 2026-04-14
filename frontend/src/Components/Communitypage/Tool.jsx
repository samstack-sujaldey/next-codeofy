import ScrollReveal from "../ScrollReveal";

function Tool() {
  const tools = [
    {
      title: " 📘 Documentation",
      icon: "Start Reading ⭢",
      desc: "Deep dive into our comprehensive APIs, SDKs, and platform guides.",
    },
    {
      title: "✘ GitHub Repos",
      icon: "Explore Code ⭢",
      desc: "Access open-source examples, boilerplates, and official libraries.",
    },
    {
      title: "🛜 Codeofy Blog",
      icon: "Read Articles ⭢",
      desc: "Read about the latest AI breakthroughs and platform updates.",
    },
  ];

  return (
    <section className="w-full bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ScrollReveal direction="up">
        {/* RESPONSIVE FIX: Swapped 'flex' for a responsive grid with a max-width! */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {tools.map((item, index) => (
            <div 
              key={index} 
              className="p-8 md:p-10 text-center transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-3 text-left text-black dark:text-white transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-black dark:text-gray-300 text-sm text-left leading-relaxed transition-colors duration-300">
                {item.desc}
              </p>
              <h3 className="text-sm font-semibold mt-4 text-left text-blue-700 dark:text-blue-400 hover:underline cursor-pointer transition-colors duration-300">
                {item.icon}
              </h3>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Tool;