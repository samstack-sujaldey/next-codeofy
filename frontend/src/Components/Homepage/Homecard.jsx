import Image from "next/image";
function Homecard() {
  const card = [
    {
      id: 1,
      category: "AI SOLUTION",
      rating: "SaaS",
      title: "EcoTrack AI",
      desc: "AI-driven sustainability tracking platform for modern manufacturing facilities to reduce carbon footprint.",
      tech: "React • Python • TensorFlow",
      link: "View Case Study",
      image: "/ai-dashboard.png",
    },
    {
      id: 2,
      category: "AI SOLUTION",
      rating: "SaaS",
      title: "EcoTrack AI",
      desc: "AI-driven sustainability tracking platform for modern manufacturing facilities to reduce carbon footprint.",
      tech: "React • Python • TensorFlow",
      link: "View Case Study",
      image: "/ai-dashboard.png",
    },
    {
      id: 3,
      category: "AI SOLUTION",
      rating: "SaaS",
      title: "EcoTrack AI",
      desc: "AI-driven sustainability tracking platform for modern manufacturing facilities to reduce carbon footprint.",
      tech: "React • Python • TensorFlow",
      link: "View Case Study",
      image: "/ai-dashboard.png",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-18 p-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {card.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-80 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-colors duration-300"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
          />

          <div className="p-4">
            <div className="flex gap-3 text-xs mb-2">
              <button className="bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300 px-2 py-1 rounded">
                {item.category}
              </button>
              <button className="text-gray-500 dark:text-gray-400">
                {item.rating}
              </button>
            </div>

            <h2 className="text-xl font-semibold mb-2 dark:text-white">
              {item.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              {item.desc}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
              {item.tech}
            </p>

            <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
              {item.link} →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Homecard;
