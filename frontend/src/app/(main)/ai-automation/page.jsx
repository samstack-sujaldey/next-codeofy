"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import HeroSection from "@/Components/ServicePage/layout/HeroSection";
import CTASection from "@/Components/ServicePage/layout/CTASection";
import FeatureGrid from "@/Components/ServicePage/ui/FeatureGrid";
import SectionHeader from "@/Components/ServicePage/ui/SectionHeader";
import ScrollReveal from "@/Components/ScrollReveal";

// ─── HERO VISUAL ─────────────────────────────────────────────────────────────
function NeuralVisual() {
  return (
    <div className="w-full aspect-video rounded-2xl bg-linear-to-br from-gray-900 via-blue-950 to-indigo-950 flex items-center justify-center shadow-2xl overflow-hidden relative transition-transform duration-500 hover:-translate-y-2 hover:shadow-blue-500/20 dark:hover:shadow-blue-900/40">
      <div className="absolute inset-0 opacity-30">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-blue-400 animate-ping"
            style={{
              width: `${60 + i * 40}px`,
              height: `${60 + i * 40}px`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              animationDelay: `${i * 0.4}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>
      <div className="relative z-10 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-blue-500/30 border border-blue-400 flex items-center justify-center text-3xl mb-3">
          🧠
        </div>
        <p className="text-blue-300 text-sm font-medium">
          Neural Network Active
        </p>
      </div>
    </div>
  );
}

// ─── SOLUTION APPROACH ───────────────────────────────────────────────────────
const approaches = [
  {
    title: "Assess & Define",
    desc: "We begin with a deep analysis of your workflows, data assets, and business goals to identify high-impact AI opportunities.",
  },
  {
    title: "Design & Prototype",
    desc: "Our team designs a tailored AI architecture and builds rapid prototypes to validate the solution before full-scale development.",
  },
  {
    title: "Implement & Integrate",
    desc: "We deploy production-ready AI models into your existing infrastructure with seamless integration and minimal disruption.",
  },
];

function SolutionApproach() {
  return (
    <section className="-mt-px py-20 px-4 bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 w-full">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <ScrollReveal direction="right" duration={0.8}>
          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Our Solution Approach
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 max-w-md transition-colors duration-300">
              A proven three-phase methodology ensures that every AI
              implementation delivers measurable business value from day one.
            </p>
            <div className="relative flex flex-col gap-0">
              <div className="absolute left-5 top-5 bottom-5 w-px bg-linear-to-b from-blue-200 via-blue-400 to-blue-200 dark:from-blue-900 dark:via-blue-600 dark:to-blue-900 transition-colors duration-300" />
              {approaches.map((s, i) => (
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
        <ScrollReveal direction="left" duration={0.8}>
          <div className="bg-linear-to-br from-gray-900 to-blue-950 rounded-2xl p-8 shadow-2xl transition-transform duration-500 hover:-translate-y-2 dark:shadow-blue-900/20">
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "95%", l: "Model Accuracy" },
                { v: "3x", l: "Faster Processing" },
                { v: "60%", l: "Cost Reduction" },
                { v: "24/7", l: "AI Monitoring" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center transition-colors duration-300 hover:bg-white/10"
                >
                  <div className="text-2xl font-black text-blue-400 mb-1 transition-colors duration-300">
                    {s.v}
                  </div>
                  <div className="text-gray-400 text-xs transition-colors duration-300">
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

// ─── TECH SECTION ────────────────────────────────────────────────────────────
const techCategories = [
  {
    title: "Frameworks",
    items: ["TensorFlow", "PyTorch", "Scikit-Learn"],
  },
  {
    title: "Cloud AI",
    items: ["AWS SageMaker", "Google AI Platform", "Azure ML"],
  },
  {
    title: "Tools",
    items: ["Docker", "Kubernetes", "MLflow"],
  },
];

function Technologies() {
  return (
    <section className="-mt-px py-20 px-4 bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 w-full">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Technologies We Use"
            subtitle="Industry-leading frameworks and platforms to build robust AI solutions."
          />
          <div className="grid sm:grid-cols-3 gap-8">
            {techCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] dark:hover:border-blue-500/50 dark:hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)] group"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider transition-colors duration-300">
                  {cat.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {cat.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-200"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-400 dark:bg-blue-500 transition-colors duration-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How long does a typical AI implementation take?",
    a: "Timelines vary based on complexity, but most projects move from assessment to production in 8–16 weeks.",
  },
  {
    q: "Do you support existing infrastructure?",
    a: "Absolutely. We design solutions to integrate seamlessly with your current tech stack and data pipelines.",
  },
  {
    q: "What industries do you serve?",
    a: "We've delivered AI solutions across FinTech, Healthcare, E-commerce, Manufacturing, and SaaS platforms.",
  },
];

function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className="py-20 px-4 bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 w-full">
      <ScrollReveal direction="left" duration={0.8}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader title="Frequently Asked Questions" />
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-500/40"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                >
                  <span className="font-semibold text-gray-900 dark:text-white text-sm transition-colors duration-300">
                    {faq.q}
                  </span>
                  <FiChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      openIdx === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIdx === i && (
                  <div className="px-6 pb-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const capabilityItems = [
  {
    icon: "📊",
    title: "Predictive Analytics",
    desc: "Forecast market trends, customer behaviour, and operational risks with high-precision statistical models.",
  },
  {
    icon: "🗣️",
    title: "Natural Language Processing",
    desc: "Extract insights from unstructured text, automate conversations, and maintain intelligent contextual understanding.",
  },
  {
    icon: "🤖",
    title: "Robotic Process Automation",
    desc: "Eliminate mundane manual entry and repetitive tasks with reliable software bots that work 24/7.",
  },
  {
    icon: "🧩",
    title: "Custom ML Models",
    desc: "Bespoke machine learning and data-first solutions, optimised for your proprietary business context.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function AIAutomation() {
  return (
    <>
      <HeroSection
        bgClassName="bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
        breadcrumb="Home › Services › AI & Automation"
        heading={<>AI & Automation</>}
        highlightedText="Solutions"
        description="Streamline your operations and unlock new possibilities with our cutting-edge artificial intelligence and automation services. We transform complex data into actionable intelligence."
        primaryCTA={{ label: "Get Started", icon: "→" }}
        secondaryCTA={{
          label: "Watch Demo",
          icon: (
            <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xs">
              ▶
            </span>
          ),
        }}
        visual={<NeuralVisual />}
      />

      <FeatureGrid
        title="Key Capabilities"
        subtitle="Leverage our deep expertise in specialised AI fields to gain a competitive edge in your industry."
        items={capabilityItems}
        columns={4}
        className="bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 py-20"
      />

      <SolutionApproach />
      <Technologies />
      <FAQ />

      <section className="w-full bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <CTASection
          variant="light"
          bgClassName="bg-transparent"
          heading="Ready to automate your business?"
          description="Partner with Codeofy to build the intelligent infrastructure of tomorrow. Let's start with a free technical audit."
          primaryCTA={{ label: "Contact an Expert" }}
          secondaryCTA={{ label: "Schedule a Consultation" }}
        />
      </section>
    </>
  );
}
