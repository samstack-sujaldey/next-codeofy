import { FiLayout, FiGrid, FiMousePointer } from "react-icons/fi";
import HeroSection from "../../../Components/ServicePage/layout/HeroSection";
import CTASection from "../../../Components/ServicePage/layout/CTASection";
import FeatureGrid from "../../../Components/ServicePage/ui/FeatureGrid";
import AnimatedBar from "../../../Components/ServicePage/ui/AnimatedBar";
import ScrollReveal from "../../../Components/ScrollReveal";

// ─── PROCESS TABS ────────────────────────────────────────────────────────────
const processTabs = [
  { icon: "🔍", label: "User Research" },
  { icon: "✏️", label: "Wireframing" },
  { icon: "🎨", label: "Visual Design" },
  { icon: "🧪", label: "Usability Testing" },
];

function ProcessTabs() {
  return (
    <section className="-mt-px bg-blue-400/70 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 py-4 px-4 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2">
        {processTabs.map((t, i) => (
          <a
            key={t.label}
            href={`#step-${i + 1}`}
            className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all group"
          >
            <span className="text-base group-hover:scale-110 transition-transform">
              {t.icon}
            </span>
            <span>{t.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

// ─── HERO VISUAL ─────────────────────────────────────────────────────────────
function DeskVisual() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl aspect-4/3 bg-linear-to-br from-amber-50 via-stone-100 to-stone-200 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 relative flex items-end justify-center transition-colors duration-300">
      <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-linear-to-b from-amber-700/20 to-amber-800/40 dark:from-blue-900/10 dark:to-blue-900/30 rounded-b-2xl transition-colors duration-300" />
      <div className="relative z-10 mb-8 flex flex-col items-center group">
        <div className="w-48 sm:w-60 h-32 sm:h-40 bg-gray-900 rounded-xl border-4 border-gray-700 shadow-2xl flex items-center justify-center relative overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-900/40">
          <div className="absolute inset-0 bg-linear-to-br from-gray-800 to-gray-900" />
          <div className="relative z-10 space-y-2 px-4 w-full">
            <div className="h-1.5 bg-blue-400/50 rounded w-3/4" />
            <div className="h-1.5 bg-gray-600 rounded w-full" />
            <div className="h-1.5 bg-gray-600 rounded w-2/3" />
            <div className="mt-3 flex gap-2">
              <div className="h-6 w-12 bg-blue-500/60 rounded text-white text-[8px] flex items-center justify-center">
                UI
              </div>
              <div className="h-6 w-12 bg-gray-700 rounded" />
            </div>
          </div>
        </div>
        <div className="w-8 h-4 bg-gray-600 mx-auto transition-transform duration-500 group-hover:-translate-y-2" />
        <div className="w-20 h-1.5 bg-gray-500 rounded mx-auto" />
      </div>
      <div className="absolute top-4 right-8 text-4xl">🌿</div>
      <div className="absolute bottom-10 right-10 text-2xl">☕</div>
    </div>
  );
}

// ─── 01 USER RESEARCH ────────────────────────────────────────────────────────
const methods = [
  {
    title: "Stakeholder Interviews",
    desc: "Align business goals with design objectives.",
  },
  {
    title: "User Personas",
    desc: "Creating detailed archetypes of your target audience.",
  },
  {
    title: "Competitive Analysis",
    desc: "Identify opportunities and market gaps.",
  },
];

function UserResearch() {
  return (
    <section
      id="step-1"
      className="py-20 px-4 bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 scroll-mt-24 transition-colors duration-300 w-full"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <ScrollReveal direction="up" duration="0.8">
          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3 transition-colors duration-300">
              01. User Research
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 max-w-md transition-colors duration-300">
              Understanding your users is the foundation of every successful
              product. We dive deep into user behaviour, pain points, and market
              trends.
            </p>
            <div className="flex flex-col gap-4">
              {methods.map((m) => (
                <div key={m.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300">
                    <svg
                      className="w-3 h-3 text-blue-600 dark:text-blue-400 transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-0.5 transition-colors duration-300">
                      {m.title}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed transition-colors duration-300">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" duration="0.8">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_4px_20px_rgb(59,130,246,0.15)] dark:hover:border-blue-500/40 group">
              <div className="text-2xl mb-3 transition-transform group-hover:scale-110">
                👥
              </div>
              <div className="text-3xl font-black text-gray-900 dark:text-white mb-1 transition-colors duration-300">
                150+
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-xs font-medium transition-colors duration-300">
                User Interviews Conducted
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_4px_20px_rgb(59,130,246,0.15)] dark:hover:border-blue-500/40 group">
              <div className="text-2xl mb-3 transition-transform group-hover:scale-110">
                📊
              </div>
              <div className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-1 transition-colors duration-300">
                98%
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-xs font-medium transition-colors duration-300">
                Accuracy in User Insights
              </div>
            </div>
            <div className="col-span-2 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_4px_20px_rgb(59,130,246,0.15)]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-900 dark:text-white text-sm font-bold transition-colors duration-300">
                  Research Coverage
                </span>
                <span className="text-blue-600 dark:text-blue-400 text-xs font-bold transition-colors duration-300">
                  Q4 2024
                </span>
              </div>
              <div className="space-y-2">
                {[
                  { label: "Qualitative", pct: 85 },
                  { label: "Quantitative", pct: 72 },
                  { label: "Ethnographic", pct: 60 },
                ].map((b) => (
                  <div key={b.label}>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-0.5 transition-colors duration-300">
                      <span>{b.label}</span>
                      <span>{b.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-blue-100 dark:bg-gray-700 rounded-full overflow-hidden transition-colors duration-300">
                      <div
                        className="h-full bg-blue-500 dark:bg-blue-400 rounded-full transition-all duration-1000"
                        style={{ width: `${b.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── 02 WIREFRAMING ──────────────────────────────────────────────────────────
const wireItems = [
  {
    icon: <FiLayout className="w-6 h-6" />,
    title: "Information Architecture",
    desc: "Defining the hierarchy and structure of content to ensure intuitive navigation.",
  },
  {
    icon: <FiGrid className="w-6 h-6" />,
    title: "Low-Fidelity Wireframes",
    desc: "Fast, iterative layouts that focus on core functionality and user journeys.",
  },
  {
    icon: <FiMousePointer className="w-6 h-6" />,
    title: "Interactive Prototypes",
    desc: "High-fidelity simulations that feel like the real product for stakeholder testing.",
  },
];

// ─── 03 VISUAL DESIGN ────────────────────────────────────────────────────────
const visualFeatures = [
  {
    title: "Design Systems",
    desc: "Reusable components, typography, and colour tokens for consistency.",
    accent: "border-blue-500 dark:border-blue-400",
  },
  {
    title: "Micro-interactions",
    desc: "Delightful animations that provide feedback and improve UX.",
    accent: "border-indigo-400 dark:border-indigo-400",
  },
  {
    title: "Responsive Design",
    desc: "Flawless performance across desktop, tablet, and mobile devices.",
    accent: "border-violet-400 dark:border-violet-400",
  },
];

function UIPreviewCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 w-full max-w-xs mx-auto transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/20 dark:hover:shadow-blue-900/40">
      <div className="bg-gray-100 dark:bg-gray-900 px-4 py-2.5 flex items-center justify-between border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <span className="text-xs font-bold text-gray-700 dark:text-gray-300 transition-colors duration-300">
          UI Design
        </span>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
      </div>
      <div className="px-4 py-2 flex items-center gap-2 border-b border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <div className="flex gap-1.5">
          {[
            "bg-gray-300 dark:bg-gray-600",
            "bg-gray-200 dark:bg-gray-700",
            "bg-gray-200 dark:bg-gray-700",
          ].map((c, i) => (
            <div
              key={i}
              className={`w-5 h-5 rounded transition-colors duration-300 ${c}`}
            />
          ))}
        </div>
        <div className="flex-1 h-4 bg-gray-100 dark:bg-gray-700 rounded-full transition-colors duration-300" />
        <div className="w-16 h-5 bg-blue-100 dark:bg-blue-500/20 rounded text-blue-600 dark:text-blue-400 text-[9px] font-bold flex items-center justify-center transition-colors duration-300">
          Export
        </div>
      </div>
      <div className="p-4 bg-gray-50 dark:bg-gray-800 min-h-40 relative transition-colors duration-300">
        <div className="mx-auto w-20 h-36 bg-gray-900 dark:bg-gray-950 rounded-xl border-2 border-gray-700 overflow-hidden flex flex-col p-1.5 transition-colors duration-300">
          <div className="h-3 bg-blue-500 rounded-sm mb-1" />
          <div className="flex gap-1 mb-1">
            <div className="flex-1 h-8 bg-gray-700 rounded-sm" />
            <div className="flex-1 h-8 bg-gray-700 rounded-sm" />
          </div>
          <div className="h-2 bg-gray-600 rounded-sm mb-0.5" />
          <div className="h-2 bg-gray-600 rounded-sm w-4/5 mb-0.5" />
          <div className="h-4 bg-blue-500/50 rounded-sm mt-auto" />
        </div>
        <div className="absolute bottom-3 left-3 right-3 bg-gray-900/80 dark:bg-black/60 backdrop-blur-sm rounded-lg p-2 transition-colors duration-300">
          <p className="text-white text-[10px] font-semibold text-center">
            Modern SaaS Interface Design
          </p>
        </div>
      </div>
    </div>
  );
}

function VisualDesign() {
  return (
    <section
      id="step-3"
      className="-mt-px py-20 px-4 bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 scroll-mt-24 transition-colors duration-300 w-full"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <ScrollReveal direction="up" duration="0.8">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100/60 dark:bg-blue-900/20 rounded-3xl blur-3xl scale-90 pointer-events-none transition-colors duration-300" />
              <div className="relative">
                <UIPreviewCard />
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" duration="0.8">
          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              03. Visual Design
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 max-w-md transition-colors duration-300">
              Where brand identity meets pixel-perfect execution. We create
              aesthetic interfaces that drive conversions and loyalty.
            </p>
            <div className="flex flex-col gap-5">
              {visualFeatures.map((f) => (
                <div
                  key={f.title}
                  className={`pl-4 py-1 border-l-4 transition-colors duration-300 ${f.accent}`}
                >
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
                    {f.title}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── 04 USABILITY TESTING ────────────────────────────────────────────────────
const testingMethods = [
  { icon: "👁️", label: "Eye Tracking" },
  { icon: "👤", label: "User Journaling" },
  { icon: "⚗️", label: "A/B Testing" },
  { icon: "⏱️", label: "Task Analysis" },
];

function UsabilityTesting() {
  return (
    <section
      id="step-4"
      className="-mt-px py-20 px-4 bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 scroll-mt-24 transition-colors duration-300 w-full"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <ScrollReveal direction="up" duration="0.8">
          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              04. Usability Testing
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 max-w-md transition-colors duration-300">
              We validate every design decision through rigorous testing with
              real users.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {testingMethods.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500/40 rounded-xl px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="text-lg">{m.icon}</span>
                  <span className="text-gray-900 dark:text-white text-xs font-semibold transition-colors duration-300">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" duration="0.8">
          <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-2xl dark:shadow-blue-900/20 transition-colors duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-gray-900 dark:text-white font-bold text-sm transition-colors duration-300">
                Test Results Snapshot
              </h3>
              <span className="text-green-600 dark:text-green-400 text-xs font-semibold bg-green-100 dark:bg-green-400/10 border border-green-200 dark:border-green-400/20 px-2 py-1 rounded-full transition-colors duration-300">
                Live
              </span>
            </div>
            <div className="space-y-5">
              <AnimatedBar
                label="Navigation Efficiency"
                pct={96}
                color="bg-blue-500"
                delay={0}
              />
              <AnimatedBar
                label="Content Clarity"
                pct={89}
                color="bg-indigo-400"
                delay={200}
              />
              <AnimatedBar
                label="User Satisfaction"
                pct={97}
                color="bg-violet-500"
                delay={400}
              />
            </div>
            <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-gray-100 dark:border-gray-700 transition-colors duration-300">
              {[
                { v: "240", l: "Testers" },
                { v: "4.9", l: "Avg Score" },
                { v: "3wk", l: "Duration" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-gray-900 dark:text-white font-black text-lg transition-colors duration-300">
                    {s.v}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-[10px] uppercase tracking-wide transition-colors duration-300">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function UXDesignPage() {
  return (
    <>
      <HeroSection
        badge="Expert UX/UI Solutions"
        badgeVariant="dotted"
        bgClassName="bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
        heading={<>Crafting </>}
        highlightedText="Exceptional Digital Experiences"
        description="We combine user-centric research with cutting-edge design patterns to build digital products that people love and businesses scale with."
        primaryCTA={{ label: "Book a Consultation", icon: "→" }}
        secondaryCTA={{ label: "View Case Studies" }}
        visual={<DeskVisual />}
      />

      <ProcessTabs />
      <UserResearch />

      <div id="step-2" className="scroll-mt-24">
        <FeatureGrid
          title="02. Wireframing & Prototyping"
          subtitle="We transform concepts into tangible structures. This stage focuses on usability and flow before adding aesthetic layers."
          items={wireItems}
          columns={3}
          className="bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 scroll-mt-24 py-20"
        />
      </div>

      <VisualDesign />
      <UsabilityTesting />

      <section className="w-full bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <CTASection
          variant="light"
          bgClassName="bg-transparent"
          heading="Ready to craft your next digital experience?"
          description="Join 200+ brands that trust Codeofy to design products their users can't stop talking about."
          primaryCTA={{ label: "Start a Project" }}
          secondaryCTA={{ label: "View Our Portfolio" }}
        />
      </section>
    </>
  );
}
