import { Calendar, MapPin, Video } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

function Event() {
  const events = [
    {
      id: 1,
      date: "MAY 15, 2024 • 10:00 AM PST",
      title: "AI Innovation Summit 2024",
      location: "Virtual Event",
      people: "+250",
      icon: <Calendar size={40} />,
    },
    {
      id: 2,
      date: "JUNE 10, 2024 • 09:00 AM PST",
      title: "Future Tech Conference",
      location: "Online Event",
      people: "+180",
      icon: <Video size={40} />,
    },
  ];

  return (
    <section className="py-12 px-1 bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="mb-9 py-2 px-5 lg:text-left text-center max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Upcoming Events
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium mt-2">
            Join our upcoming sessions to learn directly from experts.
          </p>
        </div>

        <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-6 ">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex items-center justify-between bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="text-blue-600 dark:text-blue-400">
                {event.icon}
              </div>

              <div className="flex-1 ml-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {event.date}
                </p>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {event.title}
                </h2>

                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm gap-1 mt-1">
                  <MapPin size={16} />
                  {event.location}
                </div>

                <div className="flex justify-between mt-4">
                  <div className="flex -space-x-2 items-center">
                    <div className="w-8 h-8 bg-orange-200 rounded-full border-2 border-white dark:border-gray-800"></div>
                    <div className="w-8 h-8 bg-orange-300 rounded-full border-2 border-white dark:border-gray-800"></div>
                    <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">
                      {event.people}
                    </span>
                  </div>

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
export default Event;
