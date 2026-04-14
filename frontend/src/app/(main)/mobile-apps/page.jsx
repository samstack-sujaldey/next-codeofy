"use client";
import { useEffect, useState } from "react";
import HeroSection from "../../../Components/ServicePage/layout/HeroSection";
import CTASection from "../../../Components/ServicePage/layout/CTASection";
import ProcessSteps from "../../../Components/ServicePage/ui/ProcessSteps";
import ScrollReveal from "../../../Components/ScrollReveal";

// ─── PERFORMANCE DASHBOARD ───────────────────────────────────────────────────
function PerformanceDashboard() {
  const [cpu, setCpu] = useState(17);
  const bars = [
    { label: "CPU", width: 17, color: "bg-blue-500" },
    { label: "MEM", width: 42, color: "bg-indigo-400" },
    { label: "NET", width: 28, color: "bg-blue-300" },
  ];

  useEffect(() => {
    const t = setInterval(
      () => setCpu(Math.floor(12 + Math.random() * 10)),
      2000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-white dark:bg-[#0f1923] rounded-2xl border border-gray-100 dark:border-white/10 p-5 font-mono text-xs shadow-2xl w-full max-w-md transition-colors duration-300">
      <div className="flex justify-between items-center mb-5">
        <span className="text-gray-500 dark:text-gray-400 transition-colors duration-300">
          CPU USAGE:{" "}
          <span className="text-gray-900 dark:text-white font-bold">
            {cpu}%
          </span>
        </span>
        <span className="text-green-500 dark:text-green-400 text-xs font-bold transition-colors duration-300">
          STATUS: STABLE
        </span>
      </div>
      <div className="space-y-3 mb-6">
        {bars.map((b) => (
          <div key={b.label}>
            <div className="flex justify-between text-gray-500 dark:text-gray-400 mb-1 transition-colors duration-300">
              <span>{b.label}</span>
              <span>{b.width}%</span>
            </div>
            <div className="h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden transition-colors duration-300">
              <div
                className={`h-full rounded-full ${b.color} transition-all duration-1000`}
                style={{ width: `${b.width}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-3 transition-colors duration-300">
          <p className="text-gray-400 dark:text-gray-500 text-[10px] uppercase tracking-wider mb-1 transition-colors duration-300">
            Average Load
          </p>
          <p className="text-gray-900 dark:text-white text-xl font-black transition-colors duration-300">
            0.4s
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-3 transition-colors duration-300">
          <p className="text-gray-400 dark:text-gray-500 text-[10px] uppercase tracking-wider mb-1 transition-colors duration-300">
            Crash Rate
          </p>
          <p className="text-green-500 dark:text-green-400 text-xl font-black transition-colors duration-300">
            &lt;0.01%
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── PERFORMANCE SECTION ─────────────────────────────────────────────────────
const perfFeatures = [
  {
    icon: "⚡",
    title: "Ultra-Low Latency",
    desc: "Optimised backend integration for snappy data fetching and real-time updates.",
  },
  {
    icon: "🔒",
    title: "Military-Grade Security",
    desc: "End-to-end encryption and secure data storage as a standard for every project.",
  },
  {
    icon: "🎯",
    title: "Native Smoothness",
    desc: "60FPS animations and seamless transitions that users expect from high-end apps.",
  },
];

function Performance() {
  return (
    <section className="py-20 px-4 bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 w-full">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <ScrollReveal direction="right" duration={0.8}>
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white leading-tight mb-5 transition-colors duration-300">
              Focus on Performance
              <br />& Unrivaled Quality
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-10 max-w-md transition-colors duration-300">
              We don't just build apps; we engineer digital experiences that
              feel instantaneous. Our commitment to performance is at the core
              of every line of code we write.
            </p>
            <div className="flex flex-col gap-7">
              {perfFeatures.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-600/20 border border-blue-100 dark:border-blue-500/30 flex items-center justify-center text-lg shrink-0 transition-colors duration-300">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
                      {f.title}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="flex justify-center">
          <ScrollReveal direction="down" duration={0.8}>
            <PerformanceDashboard />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const serviceCards = [
  {
    icon: "🍎",
    title: "iOS Development",
    desc: "Native Swift and SwiftUI apps optimised for the full Apple ecosystem, including WatchOS and iPadOS.",
    imgBg: "from-slate-700 to-slate-900",
    imgContent: (
      <div className="flex items-end justify-center gap-1 h-full pb-4">
        {[40, 55, 45, 60, 50, 70, 65].map((h, i) => (
          <div
            key={i}
            className="w-5 rounded-sm bg-blue-400/60"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    ),
  },
  {
    icon: "🤖",
    title: "Android Development",
    desc: "High-performance Kotlin applications engineered for diverse hardware and the latest Android features.",
    imgBg: "from-gray-800 to-gray-950",
    imgContent: (
      <div className="flex items-center justify-center h-full">
        <div className="font-mono text-left text-xs text-green-400/80 leading-5 px-3">
          <div>
            <span className="text-gray-500">1</span>{" "}
            <span className="text-blue-300">fun</span> main() {"{"}
          </div>
          <div>
            <span className="text-gray-500">2</span> val app ={" "}
            <span className="text-yellow-300">App()</span>
          </div>
          <div>
            <span className="text-gray-500">3</span> app.
            <span className="text-green-300">launch()</span>
          </div>
          <div>
            <span className="text-gray-500">4</span> {"}"}
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: "🔗",
    title: "Cross-platform",
    desc: "Efficient Flutter and React Native apps with a single codebase to reach all users simultaneously.",
    imgBg: "from-teal-900 to-gray-950",
    imgContent: (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="text-4xl mb-2">📱</div>
          <div className="flex gap-2 justify-center">
            <span className="text-xs bg-teal-500/30 text-teal-300 px-2 py-0.5 rounded">
              iOS
            </span>
            <span className="text-xs bg-blue-500/30 text-blue-300 px-2 py-0.5 rounded">
              Android
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: "📈",
    title: "Optimization",
    desc: "Data-driven strategies to increase organic visibility and conversion in App Store and Play Store.",
    imgBg: "from-emerald-950 to-gray-950",
    imgContent: (
      <div className="flex items-end justify-center gap-2 h-full pb-4 px-3">
        {[30, 45, 38, 55, 48, 70, 80, 90].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-linear-to-t from-emerald-500 to-emerald-300"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    ),
  },
];

function MobileServices() {
  return (
    <section className="py-20 px-4 bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 w-full">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((card) => (
            <div
              key={card.title}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] dark:hover:border-blue-500/50 dark:hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)] group"
            >
              <div
                className={`h-36 bg-linear-to-br ${card.imgBg} relative overflow-hidden`}
              >
                {card.imgContent}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-2 transition-colors duration-300">
                  <span>{card.icon}</span>
                  <span>{card.title}</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-300">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

// ─── JOURNEY STEPS ───────────────────────────────────────────────────────────
const journeySteps = [
  {
    title: "Discovery & UI/UX",
    desc: "We define user personas and map out intuitive journeys before a single line of code is written.",
  },
  {
    title: "Agile Sprints",
    desc: "Transparent development with bi-weekly updates and functional builds for you to test on your own device.",
  },
  {
    title: "Scale & Support",
    desc: "Post-launch monitoring, performance tuning, and scaling your infrastructure as your user base grows.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function MobilePage() {
  return (
    <>
      <div className="relative w-full bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        {/* Strictly absolute backgrounds that will not push text to the side */}
        <div
          className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none transition-opacity duration-300"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-150 h-100 bg-blue-500/10 dark:bg-blue-500/20 blur-[100px] rounded-full pointer-events-none transition-colors duration-300" />

        <HeroSection
          centered={true}
          badge="Expert Mobile Engineering"
          bgClassName="bg-transparent relative z-10" // Kept transparent so the grid/glow shows through perfectly
          heading={
            <>
              Build Robust & Scalable <br className="hidden sm:block" />
            </>
          }
          highlightedText="Mobile Applications"
          description="We transform your ideas into high-performing mobile experiences for iOS, Android, and beyond using cutting-edge technologies."
          primaryCTA={{ label: "Get a Quote" }}
          secondaryCTA={{ label: "View Portfolio" }}
        />
      </div>

      <MobileServices />
      <Performance />

      <ProcessSteps
        title="Our Development Journey"
        subtitle="From conceptual whiteboard sessions to App Store trending lists."
        steps={journeySteps}
        variant="open"
        bgClassName="bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 py-16"
      />

      <section className="w-full bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <CTASection
          variant="light"
          heading="Ready to start your mobile journey?"
          description="Join 50+ successful companies that have launched world-class mobile products with Codeofy. Let's talk about your project today."
          primaryCTA={{ label: "Schedule a Free Consultation" }}
        />
      </section>
    </>
  );
}
