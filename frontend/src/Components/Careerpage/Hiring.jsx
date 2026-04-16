import ScrollReveal from "../ScrollReveal";

function Hiring() {
  const steps = [
    {
      id: 1,
      title: "Application",
      desc: "Submit your resume and portfolio for initial review.",
    },
    {
      id: 2,
      title: "Technical Interview",
      desc: "A deep dive into your craft with our engineering leads.",
    },
    {
      id: 3,
      title: "Cultural Fit",
      desc: "Meet the broader team and chat about our values.",
    },
    {
      id: 4,
      title: "Final Offer",
      desc: "Welcome to the team! Salary, benefits and start date.",
    },
  ];

  return (
    <>
      <section className="-mt-px bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 py-15 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal direction="up" duration={0.8}>
            <h2 className="text-3xl font-bold text-black dark:text-white">
              Our Hiring Process
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Simple, transparent, and respectful of your time.
            </p>

            <div className="relative mt-12">
              <div className="absolute top-6 left-0 md:w-full h-0.5 bg-gray-300 dark:bg-gray-700" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
                {steps.map((step) => (
                  <div key={step.id} className="flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-blue-500 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-bold z-10 hover:bg-blue-500 dark:hover:bg-blue-500 hover:scale-110 transition duration-300 hover:text-white dark:hover:text-white">
                      {step.id}
                    </div>

                    <h3 className="mt-4 font-semibold text-gray-800 dark:text-white">
                      {step.title}
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-[w-200px]">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-10">
              <h3 className="text-2xl font-bold">
                Ready to Build the Future with Us?
              </h3>

              <p className="mt-3 text-sm text-gray-200">
                Don't see a role that fits your profile? Apply anyway!
              </p>

              <div className="flex justify-center gap-4 mt-6">
                <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:scale-105 transition duration-100">
                  Apply Now
                </button>

                <button className="border border-white px-6 py-2 rounded-lg hover:scale-105 transition duration-100 hover:bg-white hover:text-blue-600">
                  Refer a Friend
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default Hiring;
