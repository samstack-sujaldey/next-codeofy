import { FiMonitor, FiServer, FiTerminal, FiCloud } from "react-icons/fi";
import HeroSection from "@/Components/ServicePage/layout/HeroSection";
import CTASection from "@/Components/ServicePage/layout/CTASection";
import FeatureGrid from "@/Components/ServicePage/ui/FeatureGrid";
import ScrollReveal from "@/Components/ScrollReveal";

// ─── HERO VISUAL ─────────────────────────────────────────────────────────────
function BrowserMockup() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl aspect-4/3 bg-linear-to-br from-teal-800 via-teal-900 to-gray-900 flex items-center justify-center relative">
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-teal-400/80 shadow-2xl shadow-teal-300/50 blur-sm" />
      <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 w-36 shadow-xl">
        <div className="flex gap-1.5 mb-3">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="space-y-1.5">
          <div className="h-1.5 bg-white/30 rounded-full w-full" />
          <div className="h-1.5 bg-white/20 rounded-full w-4/5" />
          <div className="h-1.5 bg-white/20 rounded-full w-3/5" />
        </div>
        <div className="mt-4 flex justify-center">
          <div className="w-8 h-8 border border-white/40 rounded flex items-center justify-center">
            <span className="text-white/80 text-xs">☰</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── TABLET MOCKUP ───────────────────────────────────────────────────────────
function TabletMockup() {
  return (
    <div className="w-64 sm:w-72 mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-300">
      <div className="bg-gray-100 dark:bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full w-24 transition-colors duration-300" />
        <div className="w-4" />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex gap-2">
          <div className="h-5 bg-blue-100 dark:bg-blue-500/20 rounded w-16 transition-colors duration-300" />
          <div className="h-5 bg-gray-100 dark:bg-gray-700 rounded flex-1 transition-colors duration-300" />
          <div className="h-5 bg-blue-500 rounded w-10 transition-colors duration-300" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-end p-1.5 transition-colors duration-300"
            >
              <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded w-full transition-colors duration-300" />
            </div>
          ))}
        </div>
        <div className="flex gap-2 pt-1">
          {[
            { v: "3", l: "Cart" },
            { v: "✓", l: "Paid" },
            { v: "↑", l: "Ship" },
          ].map((s) => (
            <div
              key={s.l}
              className="flex-1 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-lg p-2 text-center transition-colors duration-300"
            >
              <div className="font-bold text-gray-800 dark:text-gray-200 text-sm transition-colors duration-300">
                {s.v}
              </div>
              <div className="text-gray-400 dark:text-gray-500 text-[9px] transition-colors duration-300">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── PHONE MOCKUP ────────────────────────────────────────────────────────────
function PhoneMockup() {
  return (
    <div className="w-40 sm:w-48 mx-auto relative group perspective">
      <div className="bg-gray-950 rounded-[2.5rem] border-4 border-gray-800 shadow-2xl overflow-hidden aspect-9/19 flex flex-col transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-y-6">
        <div className="flex justify-center pt-2 pb-1 relative z-20 bg-gray-950">
          <div className="w-16 h-4 bg-gray-800 rounded-full" />
        </div>
        <div className="flex-1 bg-linear-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 flex flex-col items-center justify-center gap-4 px-4 transition-colors duration-300">
          <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-black text-sm shadow-sm transition-colors duration-300">
            PWA
          </div>
          <div className="space-y-2 w-full">
            <div className="h-2 bg-blue-100 dark:bg-gray-700 rounded-full w-full transition-colors duration-300" />
            <div className="h-2 bg-blue-100 dark:bg-gray-700 rounded-full w-4/5 transition-colors duration-300" />
            <div className="h-2 bg-blue-100 dark:bg-gray-700 rounded-full w-3/5 transition-colors duration-300" />
          </div>
          <div className="flex gap-2 w-full justify-center mt-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-gray-700 border border-blue-100 dark:border-gray-600 transition-colors duration-300"
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center py-2 bg-gray-950 relative z-20">
          <div className="w-24 h-1 bg-gray-700 rounded-full" />
        </div>
      </div>
    </div>
  );
}

// ─── E-COMMERCE SECTION ──────────────────────────────────────────────────────
const cmsFeatures = [
  {
    title: "Headless Commerce",
    desc: "Decoupled frontends for faster performance and multi-channel reach.",
  },
  {
    title: "Custom CMS Development",
    desc: "Tailored management systems using Contentful, Strapi, or WordPress.",
  },
  {
    title: "Secure Payment Gateways",
    desc: "Stripe, PayPal, and multi-currency integrations for global sales.",
  },
];

function Ecommerce() {
  return (
    <section className="py-20 px-4 bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 w-full">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <ScrollReveal direction="up" duration={0.8}>
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200/50 dark:bg-blue-900/30 rounded-3xl blur-3xl scale-90 pointer-events-none transition-colors duration-300" />
              <div className="relative">
                <TabletMockup />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" duration={0.8}>
          <div className="order-1 md:order-2">
            <p className="text-blue-500 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-300">
              E-Commerce & CMS
            </p>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white leading-tight mb-4 transition-colors duration-300">
              Scalable Online Retail &amp; Content
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 transition-colors duration-300">
              We build conversion-focused shopping experiences and flexible
              content systems that empower your team.
            </p>
            <div className="flex flex-col gap-5">
              {cmsFeatures.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
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
                      {f.title}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed transition-colors duration-300">
                      {f.desc}
                    </p>
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

// ─── PWA SECTION ─────────────────────────────────────────────────────────────
const pwaFeatures = [
  { icon: "📶", label: "Offline Functionality" },
  { icon: "⚡", label: "Instant Loading" },
  { icon: "🔔", label: "Push Notifications" },
  { icon: "📲", label: "Add to Home Screen" },
];

function PWASection() {
  return (
    <section className="py-20 px-4 bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300 w-full">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <p className="text-blue-500 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 transition-colors duration-300">
              Next-Gen Apps
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white leading-tight mb-5 transition-colors duration-300">
              Progressive Web Apps (PWA)
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 max-w-md transition-colors duration-300">
              Bridge the gap between web and mobile. We develop high-performance
              PWAs that work offline, send push notifications, and can be
              installed on any device without an app store.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {pwaFeatures.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 dark:hover:border-blue-500/50 hover:shadow-md dark:hover:shadow-[0_4px_20px_rgb(59,130,246,0.1)]"
                >
                  <span className="text-lg bg-white dark:bg-gray-900 w-8 h-8 rounded-lg flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-700">
                    {f.icon}
                  </span>
                  <span className="text-gray-900 dark:text-white text-xs font-semibold">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-3xl scale-x-125 scale-y-90 pointer-events-none transition-colors duration-300" />
              <PhoneMockup />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const stackItems = [
  {
    icon: <FiMonitor className="w-6 h-6" />,
    title: "Frontend Mastery",
    desc: "Reactive UIs using React, Vue, and Tailwind CSS for superior micro-engagement.",
  },
  {
    icon: <FiServer className="w-6 h-6" />,
    title: "Robust Backends",
    desc: "Secure and scalable server-side logic powered by Node.js, Python, or Go.",
  },
  {
    icon: <FiTerminal className="w-6 h-6" />,
    title: "API Integration",
    desc: "Seamless connectivity between your platform and third-party services.",
  },
  {
    icon: <FiCloud className="w-6 h-6" />,
    title: "Cloud Infrastructure",
    desc: "Optimised deployment on AWS, Azure, or Google Cloud for 99.9% uptime.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function WebDevPage() {
  return (
    <>
      <HeroSection
        badge="Premium Web Solutions"
        bgClassName="bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
        heading={<>Modern Web </>}
        highlightedText="Development Solutions"
        description="Building scalable, high-performance digital experiences tailored to your business goals. From single-page apps to complex enterprise systems."
        primaryCTA={{ label: "Start Your Project" }}
        secondaryCTA={{ label: "View Portfolio" }}
        visual={<BrowserMockup />}
      />

      <FeatureGrid
        label="End-to-End"
        title="Full-Stack Solutions"
        subtitle="From database architecture to pixel-perfect frontends, we handle every layer of your digital product using the latest industry standards."
        items={stackItems}
        columns={4}
        headerAlign="left"
        className="bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 py-20"
      />

      <Ecommerce />
      <PWASection />

      <section className="w-full bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <CTASection
          variant="light"
          heading="Ready to start your digital transformation?"
          description="Our team is ready to discuss your project requirements and provide a custom-tailored solution for your business."
          primaryCTA={{ label: "Get a Custom Quote" }}
          secondaryCTA={{ label: "Schedule a Call" }}
        />
      </section>
    </>
  );
}
