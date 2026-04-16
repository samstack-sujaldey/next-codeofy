import { FiCheck } from "react-icons/fi";
import HeroSection from "@/Components/ServicePage/layout/HeroSection";
import CTASection from "@/Components/ServicePage/layout/CTASection";
import FeatureGrid from "@/Components/ServicePage/ui/FeatureGrid";
import ScrollReveal from "@/Components/ScrollReveal";

// ─── HERO VISUAL ─────────────────────────────────────────────────────────────
function CloudVisual() {
  return (
    <div className="relative flex justify-center">
      <div className="relative w-72 sm:w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-3 rotate-2 hover:rotate-0 transition-all duration-500 hover:shadow-blue-500/20 dark:hover:shadow-blue-900/30 group">
        <div className="rounded-xl overflow-hidden aspect-square bg-linear-to-br from-teal-900 via-blue-950 to-gray-900 flex items-center justify-center relative">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-teal-400/30"
              style={{
                width: `${100 + i * 60}px`,
                height: `${100 + i * 60}px`,
                animation: `ping 3s ease-in-out ${i * 0.8}s infinite`,
              }}
            />
          ))}
          <span className="text-7xl relative z-10 drop-shadow-2xl transition-transform duration-500 group-hover:scale-110">
            ☁️
          </span>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 sm:right-0 bg-white dark:bg-gray-800 rounded-xl shadow-xl px-4 py-3 flex items-center gap-2 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1">
        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
        <div>
          <p className="text-xs font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Active Scaling
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-400 transition-colors duration-300">
            Auto-flex when traffic surpasses projected
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── CLOUD MIGRATION ─────────────────────────────────────────────────────────
const codeLines = [
  "// Deploy configuration",
  "infrastructure.deploy({",
  "  region: 'us-east-1',",
  "  replicas: 3,",
  "  autoScale: true,",
  "});",
  "",
  "// Running migrations...",
  "✓ Database migrated",
  "✓ Services deployed",
];

const checkpoints = [
  "Zero-Downtime Data Transfer",
  "Architecture Optimization & Refactoring",
  "Automated CI/CD Integration",
];

function CloudMigration() {
  return (
    <section className="-mt-px py-20 px-4 bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 w-full">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <ScrollReveal direction="left" duration="0.8">
          <div className="rounded-2xl bg-gray-950 p-6 shadow-2xl font-mono text-sm overflow-hidden border border-gray-800 dark:border-gray-700 transition-all duration-500 hover:shadow-blue-900/20">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-gray-500 text-xs ml-2">deploy.js</span>
            </div>
            {codeLines.map((line, i) => (
              <div
                key={i}
                className={`leading-7 ${
                  line.startsWith("//")
                    ? "text-gray-500"
                    : line.startsWith("✓")
                      ? "text-green-400"
                      : line.includes(":")
                        ? "text-blue-300"
                        : "text-gray-200"
                }`}
              >
                {line || "\u00A0"}
              </div>
            ))}
            <div className="mt-3 flex items-center gap-1">
              <span className="text-green-400">$</span>
              <span className="text-white">_</span>
              <span className="w-2 h-4 bg-white/70 ml-0.5 animate-pulse" />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" duration="0.8">
          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Seamless Cloud Migration
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 transition-colors duration-300">
              Move your legacy infrastructure to the modern cloud without losing
              a single second of uptime. Our migration experts handle the heavy
              lifting.
            </p>
            <div className="flex flex-col gap-4">
              {checkpoints.map((c) => (
                <div key={c} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110">
                    <FiCheck className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── SECURITY SECTION ────────────────────────────────────────────────────────
const certs = [
  { icon: "🛡️", label: "SOC2 Type II" },
  { icon: "✅", label: "GDPR Ready" },
  { icon: "🏥", label: "HIPAA Compliant" },
  { icon: "🔐", label: "ISO 27001" },
];

function SecurityCompliance() {
  return (
    <section className="-mt-px py-20 px-4 bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 w-full">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" duration="0.8">
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 sm:p-12 grid md:grid-cols-2 gap-10 items-center border border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-500 hover:shadow-xl dark:hover:border-blue-500/30 hover:-translate-y-1">
            <div>
              <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Security & Compliance by Design
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 transition-colors duration-300">
                We maintain the highest standards of data protection and
                regulatory compliance, so you don't have to worry about the
                legal complexities.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {certs.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-2.5 group"
                  >
                    <span className="text-lg transition-transform duration-300 group-hover:scale-125">
                      {c.icon}
                    </span>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 dark:text-gray-500 text-xs leading-relaxed transition-colors duration-300">
                All our data centres are secured with in-flight and at-rest
                biometric access controls, SAE 24/7 on-site security personnel.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative w-56 h-56 group">
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-500 to-indigo-600 shadow-2xl shadow-blue-300 dark:shadow-blue-900/40 transition-transform duration-500 group-hover:rotate-6" />
                <div className="absolute inset-4 rounded-2xl bg-blue-400/30 border border-blue-300/40 transition-transform duration-500 group-hover:-rotate-3" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl drop-shadow-lg transition-transform duration-500 group-hover:scale-110">
                    🛡️
                  </span>
                </div>
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-white shadow-lg"
                    style={{
                      top: `${50 + 44 * Math.sin((i * Math.PI) / 2)}%`,
                      left: `${50 + 44 * Math.cos((i * Math.PI) / 2)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const infraItems = [
  {
    icon: "📈",
    title: "Auto-Scaling",
    desc: "Dynamically adjust resources based on real-time traffic demands without manual intervention.",
  },
  {
    icon: "🌐",
    title: "Global Edge",
    desc: "Deploy closer to users with our worldwide network of edge nodes, enabling sub-50ms latency.",
  },
  {
    icon: "🛡️",
    title: "High Availability",
    desc: "99.99% uptime guarantee with multi-region redundant architecture and instant failover.",
  },
];

const managedItems = [
  {
    icon: "📊",
    title: "24/7 Monitoring",
    desc: "Real-time dashboards and automated alerts keep you one step ahead of any issues.",
  },
  {
    icon: "📦",
    title: "Patch Management",
    desc: "Automated security and system patches deployed with zero-downtime rolling updates.",
  },
  {
    icon: "⚡",
    title: "Performance Tuning",
    desc: "Continuous performance analysis and optimisation for maximum cost efficiency.",
  },
  {
    icon: "🎧",
    title: "Expert Support",
    desc: "Access senior cloud architects around the clock with guaranteed 15-minute SLA response.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function CloudServices() {
  return (
    <>
      <HeroSection
        badge="Proactive Cloud Solutions"
        bgClassName="bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
        heading={<>Future-Proof Your Business with</>}
        highlightedText="Cloud Excellence"
        description="Scalable, secure, and managed cloud solutions tailored for modern SaaS enterprises. Experience 99.99% uptime and global reach."
        primaryCTA={{ label: "Start Your Migration" }}
        secondaryCTA={{ label: "View Pricing" }}
        visual={<CloudVisual />}
      />

      <FeatureGrid
        title="Scalable Infrastructure"
        subtitle="Our foundation is built on high-performance, redundant nodes that expand as your traffic grows."
        items={infraItems}
        columns={3}
        className="bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 py-20"
      />

      <CloudMigration />

      <FeatureGrid
        title="Fully Managed Services"
        subtitle="Focus on your product while we handle the maintenance, monitoring, and updates of your cloud environment."
        items={managedItems}
        columns={4}
        className="bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 py-20"
      />

      <SecurityCompliance />

      <section className="w-full bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <CTASection
          variant="light"
          bgClassName="bg-transparetn"
          heading="Ready to Scale to New Heights?"
          description="Join 2,500+ companies that trust Codeofy for their mission-critical cloud infrastructure."
          primaryCTA={{ label: "Get Started Today" }}
          secondaryCTA={{ label: "Talk to an Architect" }}
        />
      </section>
    </>
  );
}
