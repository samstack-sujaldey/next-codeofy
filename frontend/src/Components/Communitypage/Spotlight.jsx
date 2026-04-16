import { Star } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import Image from "next/image";

function Spotlight() {
  const members = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "TOP CONTRIBUTOR",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      color: "border-blue-500",
    },
    {
      id: 2,
      name: "David Miller",
      role: "AI EXPERT",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      color: "border-green-500",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "INNOVATION LEAD",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      color: "border-purple-500",
    },
    {
      id: 4,
      name: "Marcus Thorne",
      role: "AMBASSADOR",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
      color: "border-blue-400",
    },
  ];

  return (
    <section className="-mt-px py-15 bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Community Spotlights
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Recognizing the amazing contributions of our community members.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 max-w-5xl mx-auto">
          {members.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div
                className={`w-24 h-24 rounded-full border-4 ${member.color} p-1 relative`}
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute bottom-0 right-0 bg-white dark:bg-gray-800 rounded-full p-1 shadow">
                  <Star size={16} className="text-yellow-500" />
                </div>
              </div>

              <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h3>

              <p className="px-4 py-1 mt-1.5 text-[10px] font-bold tracking-wider bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Spotlight;
