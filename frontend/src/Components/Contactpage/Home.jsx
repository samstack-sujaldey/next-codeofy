import ScrollReveal from "../ScrollReveal";

function Home() {
  return (
    <section className="text-white bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ScrollReveal direction="down" duration={0.8}>
        <div className="flex justify-center items-center px-4 text-center p-7">
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-3xl mb-15">
              <span className="px-4 py-1 text-sm bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                Contact Support
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mt-6 text-black dark:text-white">
                Get in Touch
              </h1>

              <p className="text-black dark:text-gray-300 mt-4 text-lx text-center leading-tight">
                Have questions? Our team is here to help you build better with
                Codeofy.
              </p>
              <p className="text-black dark:text-gray-300 text-lx text-center leading-tight mt-2">
                Reach out and let's start a conversation about your future.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
export default Home;
