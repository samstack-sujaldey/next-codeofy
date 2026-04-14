import ScrollReveal from "../../ScrollReveal";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function HeroSection({
  badge,
  badgeVariant = "light",
  breadcrumb,
  heading,
  highlightedText,
  description,
  primaryCTA,
  secondaryCTA,
  visual,
  bgClassName = "bg-gray-50 dark:bg-gray-900",
  dark = false,
  centered = false,
  floatingBadge,
}) {
  return (
    <section
      className={`py-16 sm:py-20 px-4 overflow-hidden transition-colors duration-300 w-full ${bgClassName}`}
    >
      <div
        className={`max-w-7xl mx-auto ${
          centered
            ? "flex flex-col items-center text-center gap-12"
            // RESPONSIVE FIX: Centers text on mobile, left-aligns on desktop!
            : "grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left" 
        }`}
      >
        {/* Added w-full here so it doesn't squish */}
        <ScrollReveal direction="down" duration={0.4} className="w-full">
          {/* Content Wrapper */}
          <div className={`w-full flex flex-col items-center ${centered ? "max-w-4xl mx-auto lg:items-center" : "lg:items-start"}`}>
            {breadcrumb && (
              <p className="text-xs text-gray-400 mb-5">{breadcrumb}</p>
            )}

            {badge && (
              <div
                // Centers badge on mobile, left on desktop
                className={`mb-6 flex justify-center ${centered ? "" : "lg:justify-start"}`}
              >
                <Badge variant={badgeVariant}>{badge}</Badge>
              </div>
            )}

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-4 sm:mb-5 ${
                dark ? "text-white" : "text-gray-900 dark:text-white"
              }`}
            >
              {heading}{" "}
              {highlightedText && (
                <span className="text-blue-500">{highlightedText}</span>
              )}
            </h1>
            <p
              className={`text-base leading-relaxed mb-8 ${
                centered ? "max-w-xl mx-auto" : "max-w-md mx-auto lg:mx-0"
              } ${dark ? "text-gray-400" : "text-gray-500 dark:text-gray-400"}`}
            >
              {description}
            </p>
            <div
              // Centers buttons on mobile, left on desktop
              className={`flex flex-col sm:flex-row flex-wrap gap-4 w-full justify-center ${
                centered ? "" : "lg:justify-start"
              }`}
            >
              {primaryCTA && (
                <Button
                  variant={dark ? "primary" : "primary"}
                  size="md"
                  onClick={primaryCTA.onClick}
                >
                  {primaryCTA.label}
                  {primaryCTA.icon && <span>{primaryCTA.icon}</span>}
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  variant={dark ? "outline" : "secondary"}
                  size="md"
                  onClick={secondaryCTA.onClick}
                >
                  {secondaryCTA.icon && <span>{secondaryCTA.icon}</span>}
                  {secondaryCTA.label}
                </Button>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Added w-full here so the visual/image stays at its maximum size! */}
        <ScrollReveal direction={centered ? "up" : "left"} duration={0.4} className="w-full">
          {/* Visual */}
          {visual && (
            <div className={`relative w-full ${centered ? "mt-12" : ""}`}>
              {visual}
              {floatingBadge && (
                <div className="absolute -bottom-4 left-6 sm:left-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100 dark:border-gray-700 transition-colors duration-300 z-10">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-500/20 flex items-center justify-center text-blue-500 dark:text-blue-400 text-lg">
                    {floatingBadge.icon}
                  </div>
                  <div>
                    <p className="font-black text-gray-900 dark:text-white text-sm">
                      {floatingBadge.title}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {floatingBadge.subtitle}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}