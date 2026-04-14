import { FiZap, FiMap, FiShield, FiDollarSign } from "react-icons/fi";
import HeroSection from "@/Components/ServicePage/layout/HeroSection";
import CTASection from "@/Components/ServicePage/layout/CTASection";
import FeatureGrid from "@/Components/ServicePage/ui/FeatureGrid";
import ScrollReveal from "@/Components/ScrollReveal";

// ─── HERO VISUAL ─────────────────────────────────────────────────────────────
function CubeVisual() {
  return (
    <div className="w-44 h-44 relative mx-auto group">
      <div className="absolute inset-0 rounded-2xl border border-blue-500/30 bg-blue-500/5 dark:bg-blue-900/10 backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-xl dark:group-hover:shadow-blue-900/40" />
      <div className="absolute inset-4 rounded-xl border border-blue-400/20 bg-blue-500/10 dark:bg-blue-800/10 transition-transform duration-500 group-hover:-translate-y-1" />
      <div className="absolute inset-8 rounded-lg border border-blue-300/20 bg-blue-500/15 dark:bg-blue-700/10 transition-transform duration-500" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 rounded-lg bg-blue-500/40 border border-blue-400/60 animate-pulse" />
      </div>
      {[
        "top-2 left-2",
        "top-2 right-2",
        "bottom-2 left-2",
        "bottom-2 right-2",
      ].map((pos, i) => (
        <div
          key={i}
          className={`absolute ${pos} w-2 h-2 rounded-full bg-blue-500/80 dark:bg-blue-400/80`}
        />
      ))}
    </div>
  );
}

// ─── TESTIMONIAL CARD ────────────────────────────────────────────────────────
function TestimonialCard() {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3 bg-linear-to-br from-slate-700 via-slate-800 to-gray-900 flex items-end transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/20 dark:hover:shadow-blue-900/40">
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div
          className="w-48 h-48 rounded-full border-2 border-blue-400/40 animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute w-32 h-32 rounded-full border border-indigo-400/30 animate-spin"
          style={{ animationDuration: "14s", animationDirection: "reverse" }}
        />
        <div className="absolute w-16 h-16 rounded-full bg-blue-500/20" />
      </div>
      <div className="relative z-10 p-6 bg-linear-to-t from-black/80 via-black/40 to-transparent w-full">
        <p className="text-gray-200 text-sm leading-relaxed italic mb-3">
          &quot;Codeofy didn&apos;t just give us a plan; they gave us a
          future-proof foundation. Our efficiency increased by 40% in just six
          months.&quot;
        </p>
        <p className="text-blue-400 text-xs font-bold">
          — CTO, Global FinTech Solutions
        </p>
      </div>
    </div>
  );
}

// ─── TRANSFORMATION PROCESS ──────────────────────────────────────────────────
const transformSteps = [
  {
    title: "Discovery & Analysis",
    desc: "We deep-dive into your existing infrastructure and business objectives to identify gaps and opportunities.",
  },
  {
    title: "Strategic Planning",
    desc: "Our experts draft a comprehensive roadmap with clear milestones, tech selections, and budget projections.",
  },
  {
    title: "Guided Implementation",
    desc: "We oversee the deployment of solutions, ensuring best practices are followed and teams are trained.",
  },
];

function TransformationProcess() {
  return (
    <section className="py-20 px-4 bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 w-full">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <ScrollReveal direction="up" duration="0.8">
          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-10 transition-colors duration-300">
              The Transformation Process
            </h2>
            <div className="relative flex flex-col gap-0">
              <div className="absolute left-5 top-5 bottom-5 w-px bg-linear-to-b from-blue-200 via-blue-400 to-blue-200 dark:from-blue-900 dark:via-blue-600 dark:to-blue-900 transition-colors duration-300" />
              {transformSteps.map((s, i) => (
                <div
                  key={s.title}
                  className="relative flex gap-6 pb-10 last:pb-0 group"
                >
                  <div className="relative z-10 w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-lg shadow-blue-300/40 dark:shadow-blue-900/40 transition-transform duration-500 group-hover:scale-110">
                    {i + 1}
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1.5 transition-colors duration-300">
                      {s.title}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-300">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" duration="0.8">
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <TestimonialCard />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const pillarItems = [
  {
    icon: <FiZap className="w-6 h-6" />,
    title: "Digital Transformation",
    desc: "Revitalise your business processes with cutting-edge cloud and AI solutions designed for scale.",
    tags: ["Legacy Migration", "Cloud-Native Strategy", "AI Integration"],
  },
  {
    icon: <FiMap className="w-6 h-6" />,
    title: "Technology Roadmap",
    desc: "A clear, actionable strategy to align your tech stack with long-term business goals and ROI.",
    tags: ["3–5 Year Planning", "Vendor Selection", "Architecture Design"],
  },
  {
    icon: <FiShield className="w-6 h-6" />,
    title: "Security Audits",
    desc: "Rigorous assessments to protect your digital assets and ensure strict industry compliance.",
    tags: ["Risk Assessment", "Penetration Testing", "Compliance (SOC2/GDPR)"],
  },
  {
    icon: <FiDollarSign className="w-6 h-6" />,
    title: "Cost Optimisation",
    desc: "Eliminate technical debt and optimise infrastructure spending for maximum business ROI.",
    tags: ["Cloud FinOps", "Licence Management", "Tech-Debt Reduction"],
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function ITConsultingPage() {
  return (
    <>
      <HeroSection
        badge="Expert IT Solutions"
        bgClassName="bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
        heading={
          <>
            Strategic IT Consulting
            <br />
            for Modern Enterprises
          </>
        }
        description="Accelerate your digital journey with Codeofy's expert guidance. We bridge the gap between business strategy and technological execution."
        primaryCTA={{ label: "Book a Free Consultation" }}
        secondaryCTA={{ label: "View Case Studies" }}
        visual={
          <div className="hidden sm:flex justify-center relative">
            <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl scale-125 pointer-events-none transition-colors duration-300" />
            <CubeVisual />
          </div>
        }
      />

      <FeatureGrid
        title="Our Core Consulting Pillars"
        subtitle="Comprehensive solutions tailored to navigate the complexities of today's digital landscape."
        items={pillarItems}
        columns={4}
        className="bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 py-20"
      />

      <TransformationProcess />

      <section className="w-full bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <CTASection
          variant="light"
          heading="Ready to optimise your IT strategy?"
          description="Join 200+ companies that have scaled their operations through our consulting services."
          primaryCTA={{ label: "Schedule My Call" }}
          secondaryCTA={{ label: "Download Services PDF" }}
        />
      </section>
    </>
  );
}
