import ScrollReveal from "../../ScrollReveal";
import SectionHeader from "./SectionHeader";

export default function FeatureGrid({
  label,
  title,
  subtitle,
  items,
  columns = 4,
  dark = false,
  renderCard,
  className = "",
  headerAlign = "center",
}) {
  const colsClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  const defaultCard = (item, index) => (
    <div
      key={item.title || index}
      // ANIMATION CLASSES ADDED HERE:
      className={`group p-6 rounded-2xl border transition-all duration-500 hover:-translate-y-2 flex flex-col ${
        dark
          ? "bg-white/5 border-white/10 hover:border-blue-400/50 hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)]"
          : "border-gray-100 bg-white hover:border-blue-200 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] dark:bg-white/5 dark:border-white/10 dark:hover:border-blue-400/50 dark:hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)]"
      }`}
    >
      {item.icon && (
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 text-xl ${
            dark
              ? "bg-blue-500/20 group-hover:bg-blue-500/40 text-blue-400 group-hover:scale-110"
              : "bg-blue-50 group-hover:bg-blue-100 text-blue-500 dark:bg-blue-500/20 dark:group-hover:bg-blue-500/40 dark:text-blue-400 group-hover:scale-110"
          }`}
        >
          {item.icon}
        </div>
      )}
      <h3
        className={`font-bold mb-2 text-sm transition-colors duration-300 ${
          dark ? "text-white" : "text-gray-900 dark:text-white"
        }`}
      >
        {item.title}
      </h3>
      <p
        className={`text-xs leading-relaxed flex-1 transition-colors duration-300 ${
          dark
            ? "text-gray-400 group-hover:text-gray-300"
            : "text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-300"
        }`}
      >
        {item.desc}
      </p>
      {/* Optional tags */}
      {item.tags && (
        <div className="flex flex-col gap-1.5 pt-3 mt-3 border-t border-gray-50 dark:border-gray-800 transition-colors">
          {item.tags.map((tag) => (
            <div key={tag} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border border-blue-300 dark:border-blue-700 flex items-center justify-center shrink-0">
                <div className="w-1 h-1 rounded-full bg-blue-400 dark:bg-blue-500" />
              </div>
              <span className="text-gray-500 dark:text-gray-400 text-[11px]">
                {tag}
              </span>
            </div>
          ))}
        </div>
      )}
      {/* Extra slot */}
      {item.extra}
    </div>
  );

  return (
    <section
      className={`py-20 px-4 transition-colors duration-300 ${dark ? "bg-gray-900" : "bg-white dark:bg-gray-900"} ${className}`}
    >
      <ScrollReveal direction="up" duration={0.8}>
        <div className="max-w-7xl mx-auto">
          {(title || label) && (
            <SectionHeader
              label={label}
              title={title}
              subtitle={subtitle}
              dark={dark}
              align={headerAlign}
            />
          )}
          <div className={`grid ${colsClass[columns] || colsClass[4]} gap-6`}>
            {items.map((item, i) =>
              renderCard ? renderCard(item, i) : defaultCard(item, i),
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
