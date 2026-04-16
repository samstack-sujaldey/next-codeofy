import ScrollReveal from "../../ScrollReveal";
import Button from "../ui/Button";

export default function CTASection({
  heading,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "light",
  bgClassName = "", // Added this prop to handle overrides
}) {
  const variants = {
    light: {
      bg: "bg-white dark:bg-gray-900",
      heading: "text-gray-900 dark:text-white",
      desc: "text-gray-600 dark:text-gray-400",
      primary: "primary",
      secondary: "secondary",
      wrapper: "",
    },
    dark: {
      bg: "bg-[#1a0f0f]",
      heading: "text-white",
      desc: "text-gray-400",
      primary: "primary",
      secondary: "outline",
      wrapper: "relative overflow-hidden rounded-3xl",
    },
    // ... other variants remain the same
    simple: {
      bg: "bg-gray-50 dark:bg-gray-800",
      heading: "text-gray-900 dark:text-white",
      desc: "text-gray-600 dark:text-gray-400",
      primary: "primary",
      secondary: "secondary",
      wrapper: "",
    },
  };

  const v = variants[variant] || variants.light;

  return (
    <section
      className={`-mt-px ${variant === "dark" || variant === "gradient" ? "px-4 py-8" : ""}`}
    >
      <div
        className={variant === "dark" || variant === "gradient" ? "max-w-7xl mx-auto" : ""}
      >
        {/* If bgClassName is provided, use it. Otherwise, use the variant default. */}
        <div
          className={`${bgClassName || v.bg} px-8 sm:px-16 py-16 sm:py-24 text-center ${v.wrapper} transition-colors duration-300`}
        >
          {/* Decorative elements for dark/gradient... */}
          {(variant === "gradient" || variant === "colored") && (
            <>
              <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-blue-500/30 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-indigo-600/40 blur-3xl pointer-events-none" />
            </>
          )}

          <ScrollReveal direction="up" duration={0.8}>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2
                className={`text-3xl sm:text-4xl font-black mb-4 leading-tight ${v.heading}`}
              >
                {heading}
              </h2>
              <p
                className={`text-sm sm:text-base leading-relaxed mb-10 ${v.desc}`}
              >
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {primaryCTA && (
                  <Button
                    variant={v.primary}
                    size="lg"
                    onClick={primaryCTA.onClick}
                  >
                    {primaryCTA.label}
                  </Button>
                )}
                {secondaryCTA && (
                  <Button
                    variant={v.secondary}
                    size="lg"
                    onClick={secondaryCTA.onClick}
                  >
                    {secondaryCTA.label}
                  </Button>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
