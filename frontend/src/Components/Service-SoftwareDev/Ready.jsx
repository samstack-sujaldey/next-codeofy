"use client"
import ScrollReveal from "../ScrollReveal";
import { useRouter } from "next/navigation";

function Ready() {
  const router = useRouter();
  return (
    <>
      <section className="w-full px-6 py-16 bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <ScrollReveal direction="up" duration={0.8}>
          <div className="max-w-6xl mx-auto mt-12 bg-blue-500 text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-3">
                Ready to start your digital journey?
              </h2>

              <p className="text-gray-300">
                Let's build something extraordinary together. Schedule a free
                consultation with our senior architects.
              </p>
            </div>

            <div
              onClick={() => router.push("/Contact")}
              className="flex gap-4 mt-6 md:mt-0"
            >
              <button className="bg-white text-blue-600 px-6 py-3 rounded-xl">
                Contact Us Now
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
export default Ready;
