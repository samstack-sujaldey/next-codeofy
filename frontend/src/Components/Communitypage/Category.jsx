import {
  Rocket,
  MessagesSquare,
  GraduationCap,
  MessageSquareWarning,
} from "lucide-react";
import ScrollReveal from "../ScrollReveal";

function Category() {
  const features = [
    {
      icons: <MessagesSquare />,
      title: "General Discussion ",
      desc: " Everything related to AI development and industry news..",
      desc2: "2.2k topics",
      sym: "⭢",
    },

    {
      icons: <GraduationCap />,
      title: "AI Tutorials",
      desc: "Step-by-step guides for building and scaling AI apps.",
      desc2: "1.2k topics",
      sym: "⭢",
    },

    {
      icons: <MessageSquareWarning />,
      title: "Product Feedback",
      desc: "Share your ideas and help us improve the platform",
      desc2: "850 topics",
      sym: "⭢",
    },
    {
      icons: <Rocket />,
      title: "Showcase Your Work",
      desc: "Share your projects and get feedback from the community.",
      desc2: "750 topics",
      sym: "⭢",
    },
  ];

  return (
    <div className="bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 p-6">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-black dark:text-white text-left mb-2">
                Discussion Categories
              </h2>
              <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400 text-left">
                Find the right space to share your thoughts and ask questions.
              </h2>
            </div>
            <button className="mt-4 md:mt-0 text-sm font-bold text-blue-700 dark:text-blue-400 px-5 py-2 hover:underline">
              View all categories
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 ">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm ransform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="flex justify-left text-blue-600 dark:text-blue-400 mb-4">
                  {item.icons}
                </div>

                <h3 className="text-lg font-semibold mb-3 text-left text-black dark:text-white">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm text-left mb-6 min-h-10">
                  {item.desc}
                </p>

                <div className="flex justify-between items-center border-t border-gray-100 dark:border-gray-700 pt-4">
                  <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-300">
                    {item.desc2}
                  </h3>
                  <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {item.sym}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
export default Category;
