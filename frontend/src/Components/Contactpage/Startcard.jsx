import ScrollReveal from "../ScrollReveal";

function Startcard() {
  return (
    <section className="-mt-px py-12 bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="bg-blue-600 dark:bg-blue-700 text-white rounded-2xl p-10 transition-colors duration-300 shadow-lg">
            <h3 className="text-2xl font-bold md:text-3xl">
              Ready to start building?
            </h3>

            <p className="mt-3 text-lg text-blue-100 max-w-3xl mx-auto">
              Join over 10,000 developers who are scaling their applications
              faster with Codeofy's modern infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <button className="bg-white text-blue-600 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium hover:scale-105 transition duration-100">
                Start your free trial
              </button>

              <button className="border border-white/50 hover:bg-white/10 text-white px-6 py-3 rounded-lg hover:scale-105 transition duration-100">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
export default Startcard;
