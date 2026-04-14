export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  dark = false,
  className = "",
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-14 max-w-xl ${alignClass} ${className}`}>
      {label && (
        <p
          className={`text-xs font-bold uppercase tracking-widest mb-2 ${
            dark ? "text-blue-300" : "text-blue-500 dark:text-blue-400"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`text-3xl font-black mb-3 ${
          dark ? "text-white" : "text-gray-900 dark:text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-sm leading-relaxed ${
            dark ? "text-gray-400" : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}