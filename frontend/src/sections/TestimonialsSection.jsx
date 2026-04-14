import ScrollReveal from "@/Components/ScrollReveal";
import TestimonialCard from "@/Components/homere/TestimonialCard";
import test1 from "@/assets/test1.jpeg";
import test2 from "@/assets/test2.jpg";
import test3 from "@/assets/test3.jpeg";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <ScrollReveal direction="up" duration={0.8}>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-black dark:text-white">
            Trusted by Innovators World-Wide
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              image={test1}
              name="Alex Chen"
              role="Helix, CanDo"
              text="The concept board is unlike anything I’ve used before."
              company="Company"
            />
            <TestimonialCard
              image={test2}
              name="Sarah Johnson"
              role="Campaigns, Compass"
              text="Codeofy made our workflow incredibly smooth."
              company="Company"
            />
            <TestimonialCard
              image={test3}
              name="Alex Sohon"
              role="Roles, Color"
              text="This platform anchors and simplifies our processes."
              company="Clarify"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
