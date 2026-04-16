import { FiCode, FiUsers, FiRefreshCw, FiShield } from "react-icons/fi";
import HeroSection from "@/Components/ServicePage/layout/HeroSection";
import CTASection from "@/Components/ServicePage/layout/CTASection";
import FeatureGrid from "@/Components/ServicePage/ui/FeatureGrid";
import ProcessSteps from "@/Components/ServicePage/ui/ProcessSteps";
import AnimatedBar from "@/Components/ServicePage/ui/AnimatedBar";

// ─── SERVER RACK VISUAL ──────────────────────────────────────────────────────
function ServerRackVisual() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl aspect-4/3 bg-linear-to-br from-gray-900 via-slate-800 to-gray-950 relative flex items-center justify-center transition-transform duration-500 hover:-translate-y-2 hover:shadow-blue-500/20">
      <div className="absolute inset-0 flex flex-col justify-center gap-1.5 px-6 py-8">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-linear-to-r from-gray-800 to-gray-750 border border-gray-700/60 rounded px-3 py-1.5"
          >
            <div
              className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                i % 3 === 0
                  ? "bg-green-400 shadow-sm shadow-green-400"
                  : i % 3 === 1
                    ? "bg-blue-400"
                    : "bg-yellow-400"
              }`}
            />
            <div className="flex-1 flex gap-1.5 items-center">
              {[...Array(4)].map((_, j) => (
                <div
                  key={j}
                  className="h-1 bg-gray-600 rounded flex-1"
                  style={{ opacity: 0.4 + j * 0.15 }}
                />
              ))}
            </div>
            <div className="w-4 h-3 bg-gray-700 rounded-sm border border-gray-600" />
            <div className="w-4 h-3 bg-gray-700 rounded-sm border border-gray-600" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-linealinear-to-t from-gray-950/40 via-transparent to-gray-950/20" />
    </div>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const serviceItems = [
  {
    icon: <FiCode className="w-5 h-5" />,
    title: "Custom API Development",
    desc: "Tailor-made RESTful and GraphQL APIs built to handle your specific data and logic needs. We ensure your data is accessible, performant, and perfectly structured.",
    tags: [
      "Node.js, Python, and Go backends",
      "Automated Documentation (Swagger/OpenAPI)",
    ],
  },
  {
    icon: <FiUsers className="w-5 h-5" />,
    title: "Third-party Integrations",
    desc: "Seamlessly connect your software with global platforms. We handle the complexities of authentication, rate limiting, and data mapping.",
    extra: (
      <div className="flex flex-wrap gap-2 mt-2">
        {["STRIPE", "SALESFORCE", "AWS", "TWILIO"].map((p) => (
          <span
            key={p}
            className="text-[10px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-700 transition-colors"
          >
            {p}
          </span>
        ))}
      </div>
    ),
  },
  {
    icon: <FiRefreshCw className="w-5 h-5" />,
    title: "Microservices Architecture",
    desc: "Transition from monoliths to scalable microservices for better performance and agility. Decouple your services to allow independent scaling.",
    extra: (
      <div className="mt-3">
        <AnimatedBar
          label="System Load Distribution"
          pct={78}
          rightLabel="Optimised"
        />
      </div>
    ),
  },
  {
    icon: <FiShield className="w-5 h-5" />,
    title: "API Security",
    desc: "Enterprise-grade security featuring OAuth2, JWT, and advanced encryption protocols. We protect your data at rest and in transit.",
    extra: (
      <div className="flex gap-3 flex-wrap mt-2">
        {["OAuth 2.0", "SSL/TLS 1.3"].map((s) => (
          <div key={s} className="flex items-center gap-1.5 group/sec">
            <FiShield className="w-3.5 h-3.5 text-blue-500 group-hover/sec:scale-110 transition-transform" />
            <span className="text-gray-500 dark:text-gray-400 text-xs font-medium transition-colors">
              {s}
            </span>
          </div>
        ))}
      </div>
    ),
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Mapping",
    desc: "We analyse your data structures and determine the most efficient communication protocols for your specific use case.",
  },
  {
    number: "02",
    title: "Secure Development",
    desc: "Our engineers write clean, documented code using TDD (Test Driven Development) to ensure reliability from day one.",
  },
  {
    number: "03",
    title: "Global Deployment",
    desc: "Using CI/CD pipelines, we deploy your API to edge locations worldwide for minimum latency and maximum performance.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function APIIntegrationsPage() {
  return (
    <>
      <HeroSection
        bgClassName="bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
        breadcrumb={
          <span className="flex items-center gap-1.5">
            <a href="#" className="hover:text-blue-500 transition-colors">
              Services
            </a>
            <span className="text-gray-300 dark:text-gray-600">›</span>
            <span className="text-blue-500 font-medium">API Integrations</span>
          </span>
        }
        heading={<>Connect Your Ecosystem with</>}
        highlightedText="Powerful APIs"
        description="We build scalable, secure, and robust API solutions to streamline your business operations and enhance connectivity. From custom endpoints to global third-party syncs."
        primaryCTA={{ label: "Book a Consultation" }}
        secondaryCTA={{ label: "View Case Studies" }}
        visual={<ServerRackVisual />}
        floatingBadge={{
          icon: "⚡",
          title: "99.9% Uptime",
          subtitle: "Service Level Agreement",
        }}
      />

      <FeatureGrid
        title="Our Specialized API Services"
        subtitle="Comprehensive solutions tailored to your technical requirements, built with modern standards and future-proof architectures."
        items={serviceItems}
        columns={2}
        className="bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 py-20"
      />

      <ProcessSteps
        title="The Integration Process"
        steps={processSteps}
        variant="card"
        bgClassName="bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 py-16"
      />

      <section className="w-full bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <CTASection
          variant="light"
          bgClassName="bg-transparent"
          heading="Ready to scale your connectivity?"
          description="Join hundreds of companies that trust Codeofy for their mission-critical API infrastructure."
          primaryCTA={{ label: "Start Project Now" }}
          secondaryCTA={{ label: "Contact Sales" }}
        />
      </section>
    </>
  );
}
