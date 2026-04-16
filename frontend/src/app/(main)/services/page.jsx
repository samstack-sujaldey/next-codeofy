import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { CiMobile3, CiCloudOn } from "react-icons/ci";
import { LuBrainCircuit } from "react-icons/lu";
import { IoColorPaletteOutline, IoCodeOutline } from "react-icons/io5";
import { PiBracketsCurly } from "react-icons/pi";
import { AiOutlineCode, AiOutlineStock } from "react-icons/ai";
import { SiAdguard } from "react-icons/si";
import { FaArrowTrendUp, FaLock } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import HeroSection from "@/Components/ServicePage/layout/HeroSection";
import CTASection from "@/Components/ServicePage/layout/CTASection";
import ScrollReveal from "@/Components/ScrollReveal";
import ServiceHero from "@/assets/ServiceHero.png";

// ─── EXPERTISE ───────────────────────────────────────────────────────────────
const expertiseCards = [
  {
    title: "Web Development",
    desc: "Building high-performance, responsive web applications using modern stacks like React and Next.js.",
    icon: <IoCodeOutline />,
    to: "/web-development",
  },
  {
    title: "Mobile Apps",
    desc: "Crafting native and cross-platform mobile experiences for iOS and Android that users love.",
    icon: <CiMobile3 />,
    to: "/mobile-apps",
  },
  {
    title: "AI & Automation",
    desc: "Streamlining workflows and enhancing decision making with intelligent machine learning models.",
    icon: <LuBrainCircuit />,
    to: "/ai-automation",
  },
  {
    title: "Cloud Services",
    desc: "Secure, scalable, and optimized cloud infrastructure management on AWS and Azure.",
    icon: <CiCloudOn />,
    to: "/cloud-services",
  },
  {
    title: "UI/UX Design",
    desc: "Creating modern, intuitive, and user-centered interfaces that drive engagement.",
    icon: <IoColorPaletteOutline />,
    to: "/ui-ux-design",
  },
  {
    title: "API Integration",
    desc: "Seamlessly connecting your platform with third-party tools and complex ecosystems.",
    icon: <PiBracketsCurly />,
    to: "/api-integration",
  },
  {
    title: "Software Dev",
    desc: "Custom enterprise software solutions built for stability and long-term maintainability.",
    icon: <AiOutlineCode />,
    to: "#",
  },
  {
    title: "IT Consulting",
    desc: "Strategic roadmap planning and tech stack selection to future-proof your business.",
    icon: <AiOutlineStock />,
    to: "/it-consulting",
  },
];

function Expertise() {
  return (
    <section className="-mt-px w-full bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 py-16 md:py-28">
      <ScrollReveal direction="up" duration="0.8">
        <div className="px-6 lg:px-12 flex flex-col items-center gap-12 max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-2 md:gap-5">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-gray-900 dark:text-white transition-colors duration-300">
              Our Expertise
            </h2>
            <p className="text-center text-slate-500 dark:text-gray-400 text-lg max-w-3xl transition-colors duration-300">
              Comprehensive technology services designed to scale your
              operations and drive digital transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8 w-full">
            {expertiseCards.map((ele) => (
              <div
                key={ele.title}
                className="group border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex flex-col items-start justify-between p-8 rounded-3xl gap-y-5 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] dark:hover:border-blue-500/50 dark:hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)]"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500">
                    {ele.icon}
                  </div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    {ele.title}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-300">
                    {ele.desc}
                  </div>
                </div>
                <Link
                  href={ele.to}
                  className="text-blue-600 dark:text-blue-400 font-bold cursor-pointer flex items-center gap-2 group/link text-sm transition-colors duration-300"
                >
                  Learn More
                  <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

// ─── WHY CHOOSE ──────────────────────────────────────────────────────────────
const whyFeatures = [
  {
    icon: <SiAdguard />,
    title: "Expert Developers",
    description: "Top 3% talent with deep technical expertise.",
  },
  {
    icon: <FaArrowTrendUp />,
    title: "Scalable Solutions",
    description: "Architecture built to grow with your user base.",
  },
  {
    icon: <FaLock />,
    title: "Secure Infrastructure",
    description: "Military-grade security by default.",
  },
  {
    icon: <MdOutlineSupportAgent />,
    title: "24/7 Support",
    description: "Around the clock monitoring and assistance.",
  },
];

function WhyChoose() {
  return (
    <section className="-mt-px w-full bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 py-16 md:py-28">
      <ScrollReveal direction="up" duration="0.8">
        <div className="px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start lg:flex-1">
            <h2 className="text-center lg:text-start text-3xl font-bold sm:text-4xl lg:text-5xl flex flex-col text-gray-900 dark:text-white transition-colors duration-300">
              Why High-Growth Companies{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Choose Codeofy
              </span>
            </h2>
            <p className="text-center lg:text-start text-slate-600 dark:text-gray-400 text-lg max-w-2xl mt-5 transition-colors duration-300">
              We combine technical excellence with a deep understanding of
              business goals to deliver software that makes a real impact.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 w-full">
              {whyFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-3 items-center">
                  <div className="text-blue-600 dark:text-blue-400 text-2xl transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex flex-col">
                    <div className="text-gray-900 dark:text-white font-bold transition-colors duration-300">
                      {feature.title}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:flex-1 w-full max-w-xl lg:max-w-none bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 flex justify-evenly p-5 sm:p-8 rounded-3xl gap-5 transition-colors duration-300">
            <div className="flex-1 flex flex-col gap-5 mx-auto max-w-3xs">
              <div className="bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center max-h-50 w-auto aspect-square flex-col transition-colors duration-300 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
                  99%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Client Retention
                </div>
              </div>
              <div className="bg-blue-600 text-white rounded-xl flex items-center justify-center max-h-50 w-auto aspect-square flex-col transition-colors duration-300 shadow-md">
                <div className="text-2xl sm:text-3xl font-bold">50+</div>
                <div className="text-sm text-blue-100 mt-1">Tech Experts</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-5 mx-auto max-w-3xs">
              <div className="bg-blue-600 text-white rounded-xl flex items-center justify-center max-h-50 w-auto aspect-square flex-col transition-colors duration-300 shadow-md">
                <div className="text-2xl sm:text-3xl font-bold">250+</div>
                <div className="text-sm text-blue-100 mt-1 text-center px-2">
                  Projects Delivered
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center max-h-50 w-auto aspect-square flex-col transition-colors duration-300 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="text-2xl sm:text-3xl text-blue-600 dark:text-blue-400 font-bold">
                  15+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mt-1 text-center px-2">
                  Countries Served
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

// ─── PROCESS ─────────────────────────────────────────────────────────────────
const processData = [
  {
    id: 1,
    title: "Requirement Analysis",
    desc: "Deep dive into your business needs, goals, and technical requirements.",
  },
  {
    id: 2,
    title: "Planning & Strategy",
    desc: "Defining architecture, roadmap, and choosing the right technology stack.",
  },
  {
    id: 3,
    title: "Dev & Testing",
    desc: "Agile development sprints with continuous quality assurance and feedback.",
  },
  {
    id: 4,
    title: "Deployment & Support",
    desc: "Launch, monitoring, and ongoing maintenance to ensure peak performance.",
  },
];

function Process() {
  return (
    <section className="-mt-px w-full bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 py-16 md:py-28">
      <ScrollReveal direction="up" duration="0.8">
        <div className="px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl mb-4 text-gray-900 dark:text-white transition-colors duration-300">
              Our Streamlined Process
            </h2>
            <p className="text-slate-500 dark:text-gray-400 text-lg max-w-2xl mx-auto transition-colors duration-300">
              How we turn your complex ideas into working products
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processData.map((step, i) => (
              <div
                key={step.id}
                className="group relative bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] dark:hover:border-blue-500/50 dark:hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)]"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white font-black text-sm flex items-center justify-center mb-5 shadow-lg shadow-blue-300/40 dark:shadow-blue-900/40 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  {i + 1}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-300">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

// ─── TECH STACK MARQUEE ──────────────────────────────────────────────────────
function TechStack() {
  const technologies = [
    "React",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "MongoDB",
    "Tailwind",
  ];
  const repeated = [...technologies, ...technologies, ...technologies];
  return (
    <section className="-mt-px w-full bg-white dark:bg-gray-900 overflow-hidden py-16 md:py-28 flex flex-col gap-y-10 transition-colors duration-300">
      <ScrollReveal direction="up" duration="0.8">
        <p className="text-center text-xs sm:text-lg font-semibold tracking-[0.25em] text-slate-400 dark:text-gray-500 uppercase transition-colors duration-300">
          Technologies We Master
        </p>
        <div className="relative flex mt-10">
          <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none transition-colors duration-300" />
          <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none transition-colors duration-300" />

          <div className="flex animate-marquee whitespace-nowrap">
            {repeated.map((tech, i) => (
              <span
                key={i}
                className="mx-8 text-lg sm:text-xl md:text-2xl font-bold text-slate-400 dark:text-gray-600 hover:text-slate-800 dark:hover:text-gray-300 transition-colors duration-300 select-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function Services() {
  return (
    <>
      <HeroSection
        badge="✨ Next-Gen IT Solutions"
        bgClassName="bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
        heading={<>Our IT Services That </>}
        highlightedText="Power Your Business"
        description="Scalable and innovative digital solutions tailored for high-growth startups and enterprises. Transform your vision into reality with cutting-edge technologies."
        primaryCTA={{ label: "Get a Quote" }}
        secondaryCTA={{ label: "Contact Us" }}
        visual={
          <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] dark:shadow-blue-900/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <Image
              src={ServiceHero}
              alt="IT Services Dashboard"
              className="rounded-xl w-full object-cover aspect-video shadow-sm"
            />
          </div>
        }
      />

      <Expertise />
      <WhyChoose />
      <Process />
      <TechStack />

      <CTASection
        variant="light"
        heading="Ready to build something amazing?"
        description="Let's discuss your project requirements and create a solution that drives real business impact."
        primaryCTA={{ label: "Start Your Project" }}
        secondaryCTA={{ label: "Schedule a Call" }}
      />
    </>
  );
}
