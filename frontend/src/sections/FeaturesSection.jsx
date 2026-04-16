import ScrollReveal from "@/Components/ScrollReveal.jsx";
import FeatureCard from "@/Components/homere/FeatureCard";
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg.webp";
import img3 from "@/assets/img3.jpg";
import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.png";
import logo3 from "@/assets/logo3.png";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="-mt-px py-24 bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" duration={0.8}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-16">
            Revolutionize Your Workflow
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="AI-Powered Code Generation"
              desc="Generate intelligent code, automate workflows and accelerate development."
              logo={logo1}
              image={img1}
            />
            <FeatureCard
              title="Visual IDE"
              desc="Connect cloud APIs, design visually and deploy scalable software."
              logo={logo2}
              image={img2}
            />
            <FeatureCard
              title="Real-Time Collaboration"
              desc="Collaborate with your team instantly and build together."
              logo={logo3}
              image={img3}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
