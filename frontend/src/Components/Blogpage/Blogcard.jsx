import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

function Blogcard() {
  const cards = [
    {
      id: 1,
      category: "AI Development",
      readTime: "5 MIN READ",
      title: "Building Scalable Apps with Codeofy",
      description:
        "Learn how to leverage our latest SDKs to build robust AI features in under 10 minutes.",
      author: "Sarah Chen",
      date: "Oct 20, 2023",
      img: "https://betanews.com/wp-content/uploads/2024/07/AI-developer.jpg",
      img2: "https://t4.ftcdn.net/jpg/03/69/19/81/360_F_369198116_K0sFy2gRTo1lmIf5jVGeQmaIEibjC3NN.jpg",
    },
    {
      id: 2,
      category: "TUTORIALS",
      readTime: "7 MIN READ",
      title: "Announcing Codeofy v2.0",
      description:
        "A look into our biggest update yet: more context, faster completion, and local execution.",
      author: "Elena Gilbert",
      date: "Nov 12, 2023",
      img: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?semt=ais_rp_progressive&w=740&q=80",
      img2: "https://t4.ftcdn.net/jpg/03/69/19/81/360_F_369198116_K0sFy2gRTo1lmIf5jVGeQmaIEibjC3NN.jpg",
    },
    {
      id: 3,
      category: "TUTORIALS",
      readTime: "4 MIN READ",
      title: "Future of LLMs in DevOps",
      description:
        "How large language models are automating deployment pipelines and error handling.",
      author: "Jordan Smith",
      date: "Dec 5, 2023",
      img: "https://www.shutterstock.com/image-vector/devops-icon-made-binary-code-600nw-2501939331.jpg",
      img2: "https://t4.ftcdn.net/jpg/03/69/19/81/360_F_369198116_K0sFy2gRTo1lmIf5jVGeQmaIEibjC3NN.jpg",
    },
  ];

  return (
    <div className="-mt-px w-full bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((item) => (
          <ScrollReveal
            key={item.id}
            direction="up"
            duration={0.8}
            className="h-full"
          >
            <div className="bg-white dark:bg-gray-800 w-full h-full flex flex-col rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={250}
                className="w-full h-48 sm:h-40 object-cover shrink-0"
              />

              <div className="p-6 flex flex-col grow">
                <div className="flex justify-between text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3">
                  <span>{item.category}</span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {item.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-black dark:text-white leading-snug">
                  {item.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm grow">
                  {item.description}
                </p>

                <div className="flex items-center mt-6 pt-4 border-gray-100 dark:border-gray-700/50">
                  <Image
                    src={item.img2}
                    alt={item.author}
                    width={32}
                    height={32}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold text-black dark:text-white">
                      {item.author}
                    </p>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-0.5">
                      {item.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

export default Blogcard;
