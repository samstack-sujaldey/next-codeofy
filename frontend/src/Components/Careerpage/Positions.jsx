import ScrollReveal from "../ScrollReveal";

const jobs = [
  {
    title: "Frontend Developer",
    dept: "Remote / Full-time",
    desc: "Build beautiful, performant user interfaces that people love.",
  },
  {
    title: "AI Engineer",
    dept: "Remote / Full-time",
    desc: "Develop ML/AI solutions, train models and manage data pipelines.",
  },
  {
    title: "Product Designer",
    dept: "Remote / Full-time",
    desc: "Design the next generation user experience for our platform.",
  },
  {
    title: "DevOps Engineer",
    dept: "Remote / Full-time",
    desc: "Scale our cloud infrastructure and deployment systems.",
  },
];

function Positions() {
  return (
    <section className="bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 py-12 px-1 transition-colors duration-300">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="mb-9 py-2 px-5 text-center my-5">
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Open Positions
          </h2>
          <div className="flex justify-center items-center">
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Join our engineering, design and product teams.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-5 ">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-blue-100 dark:bg-gray-800 p-6 rounded-xl shadow-sm border-none transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <span className="px-4 py-1 text-sm bg-blue-300 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                {job.dept}
              </span>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 mt-4">
                {job.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                {job.desc}
              </p>

              <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline text-center">
                Apply Now
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mb-4 mt-4">
          <button className="text-sm font-bold text-blue-700 dark:text-blue-400 md:text-sm px-5 py-2 hover:underlin border hover:scale-105 transition duration-100">
            View All
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Positions;
