import ScrollReveal from "@/Components/ScrollReveal";
import CommunityCard from "@/Components/homere/CommunityCard";
import blog1 from "@/assets/blog1.jpg.webp";
import blog2 from "@/assets/blog2.jpg";

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="-mt-px py-24 bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 text-center transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal direction="up" duration={0.8}>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-black dark:text-white">
            Stay Ahead with Our Community
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <CommunityCard
                image={blog1}
                title="Blog Add In for Codeofy and Your Community"
                time="16 hours ago"
              />
              <CommunityCard
                image={blog2}
                title="The room building the contents also and user comments"
                time="25 mins ago"
              />
            </div>

            <div className="bg-blue-950 dark:bg-gray-800 text-white p-8 rounded-2xl shadow-xl text-left transition-colors">
              <h3 className="text-lg font-semibold mb-4">Forum</h3>
              <p className="text-sm text-gray-300 dark:text-gray-400 mb-6">
                Discuss features, share feedback, and collaborate with other
                developers in our growing community.
              </p>
              <div className="bg-white/10 dark:bg-gray-700 p-3 rounded-lg text-sm text-gray-200 dark:text-gray-300">
                Send a message...
              </div>
            </div>
          </div>

          <div className="mt-16">
            <button className="bg-blue-950 dark:bg-blue-600 text-white px-8 py-3 rounded-lg hover:scale-105 transition-all">
              Join Our Discord
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
