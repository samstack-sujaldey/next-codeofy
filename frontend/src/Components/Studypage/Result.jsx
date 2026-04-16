import ScrollReveal from "../ScrollReveal";

function Result() {
  return (
    <section className="-mt-px py-3 px-2 bg-linear-to-b from-blue-400/70 to-blue-600 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <ScrollReveal direction="up" duration={0.3}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center mt-18 mb-18">
          <div>
            <h2 className="text-4xl font-bold text-white">40%</h2>
            <p className="text-white font-semibold">Reduction in Risk</p>
            <p className="text-blue-100 text-sm">
              Enhanced algorithmic stability.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white">95%</h2>
            <p className="text-white font-semibold">Faster Reporting</p>
            <p className="text-blue-100 text-sm">From days to minutes.</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white">$2.5M+</h2>
            <p className="text-white font-semibold">Annual Savings</p>
            <p className="text-blue-100 text-sm">
              Operational efficiency gains.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
export default Result;
