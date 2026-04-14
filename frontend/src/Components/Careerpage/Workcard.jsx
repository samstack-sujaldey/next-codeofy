import { CheckCircle } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "../ScrollReveal";
import teamMeeting from "@/assets/teamMeeting.jpeg"

function Workcard() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={teamMeeting.src}
            alt="team meeting"
            className="rounded-xl shadow-lg hover:shadow-blue-400 transform transition-all duration-500 ease-in-out hover:scale-105"
          />
        </div>

        <ScrollReveal direction="up" duration={0.8}>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Driven by Curiosity, Built on Trust.
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              At Codeofy, we believe that the best products are built by teams
              that have the freedom to experiment. We are a collective of
              curious builders and thinkers who are obsessed with solving the
              hardest developer issues.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-500" size={20} />
                <p className="text-gray-700 dark:text-gray-300">
                  Deep Work First – We minimize meetings to focus on building.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-500" size={20} />
                <p className="text-gray-700 dark:text-gray-300">
                  Radical Transparency – Open boards and strategy for all.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-500" size={20} />
                <p className="text-gray-700 dark:text-gray-300">
                  Inclusive by Design – Diverse perspectives fuel our AI.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
export default Workcard;
