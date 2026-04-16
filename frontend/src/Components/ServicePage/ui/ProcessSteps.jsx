import ScrollReveal from "../../ScrollReveal";
import SectionHeader from "../ui/SectionHeader";

export default function ProcessSteps({
  title,
  subtitle,
  steps,
  layout = "horizontal",
  bgClassName = "bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900",
  variant = "card",
}) {
  if (layout === "vertical") {
    return (
      <section
        className={`py-20 px-4 transition-colors duration-300 ${bgClassName}`}
      >
        <div className="max-w-7xl mx-auto">
          {title && (
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-10">
              {title}
            </h2>
          )}
          <div className="relative flex flex-col gap-0">
            {/* Vertical connector line */}
            <div className="absolute left-5 top-5 bottom-5 w-px bg-linear-to-b from-blue-200 via-blue-400 to-blue-200 dark:from-blue-900 dark:via-blue-600 dark:to-blue-900" />
            {steps.map((s, i) => (
              <div
                key={s.title || i}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                <div className="relative z-10 w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-lg shadow-blue-300/40 dark:shadow-blue-900/40">
                  {s.number || i + 1}
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1.5">
                    {s.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`-mt-px py-20 px-4 transition-colors duration-300 ${bgClassName}`}
    >
      <ScrollReveal direction="up" duration={0.8}>
        <div className="max-w-7xl mx-auto">
          {variant === "card" ? (
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 sm:p-8 lg:p-12 transition-colors duration-300">
              {title && (
                <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-10">
                  {title}
                </h2>
              )}
              <div className="grid sm:grid-cols-3 gap-8 relative">
                <div className="hidden sm:block absolute top-5 left-[18%] right-[18%] h-px bg-linear-to-r from-blue-200 via-blue-400 to-blue-200 dark:from-blue-900 dark:via-blue-600 dark:to-blue-900" />
                {steps.map((s, i) => (
                  <div key={s.title || i} className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl sm:text-6xl font-black text-blue-100 dark:text-blue-900/50 leading-none select-none transition-colors">
                        {s.number || String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      {s.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              {(title || subtitle) && (
                <SectionHeader title={title} subtitle={subtitle} />
              )}
              <div className="grid sm:grid-cols-3 gap-6 relative">
                <div className="hidden sm:block absolute top-8 left-[16.67%] right-[16.67%] h-px bg-linear-to-r from-blue-200 via-blue-400 to-blue-200 dark:from-blue-900 dark:via-blue-600 dark:to-blue-900 z-0" />
                {steps.map((s, i) => (
                  <div
                    key={s.title || i}
                    className="relative bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 z-10"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-600 text-white font-black text-sm flex items-center justify-center mb-5 shadow-lg shadow-blue-300/40 dark:shadow-blue-900/40">
                      {s.number || i + 1}
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2">
                      {s.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
