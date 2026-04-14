import ScrollReveal from "../../ScrollReveal";
import Button from "../ui/Button";

export default function CTASection({
  heading,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "light",
}) {
  const variants = {
    light: {
      bg: "bg-transparent dark:bg-transparent",
      heading: "text-gray-900 dark:text-white",
      desc: "text-gray-400 dark:text-gray-300",
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
    gradient: {
      bg: "bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700",
      heading: "text-white",
      desc: "text-blue-200",
      primary: "white",
      secondary: "outlineDark",
      wrapper: "relative overflow-hidden rounded-3xl",
    },
    colored: {
      bg: "bg-blue-600",
      heading: "text-white",
      desc: "text-blue-200",
      primary: "outlineDark",
      secondary: "outline",
      wrapper: "relative overflow-hidden",
    },
    simple: {
      bg: "bg-gray-50 dark:bg-gray-800",
      heading: "text-gray-900 dark:text-white",
      desc: "text-gray-400 dark:text-gray-300",
      primary: "primary",
      secondary: "secondary",
      wrapper: "",
    },
  };

  const v = variants[variant] || variants.light;

  const inner = (
    <div
      className={`${v.bg} px-8 sm:px-16 py-16 sm:py-24 text-center ${v.wrapper} transition-colors duration-300`}
    >
      {/* Decorative blobs for dark/gradient/colored */}
      {(variant === "gradient" || variant === "colored") && (
        <>
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-blue-500/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-indigo-600/40 blur-3xl pointer-events-none" />
        </>
      )}
      {variant === "dark" && (
        <>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, #2d1a1a 0%, #1a0f0f 40%, #0f111a 70%, #111827 100%)",
            }}
          />
          <div className="absolute bottom-0 left-1/4 w-80 h-40 bg-amber-900/30 blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-80 h-40 bg-blue-900/20 blur-3xl pointer-events-none" />
        </>
      )}
      <ScrollReveal direction="up" duration={0.8}>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2
            className={`text-3xl sm:text-4xl font-black mb-4 leading-tight ${v.heading}`}
          >
            {heading}
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed mb-10 ${v.desc}`}>
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
  );

  if (variant === "dark" || variant === "gradient") {
    return (
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">{inner}</div>
      </section>
    );
  }

  return <section>{inner}</section>;
}
