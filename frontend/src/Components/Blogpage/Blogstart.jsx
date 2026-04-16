"use client";
import { useRouter } from "next/navigation";
import ScrollReveal from "../ScrollReveal";

function Blogstart() {
  const router = useRouter();
  return (
    <div className="-mt-px px-6 py-10 bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="max-w-6xl mx-auto mt-12 bg-linear-to-r from-black to-gray-900 text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-3">
              Start Building With Codeofy Today
            </h2>
            <p className="text-gray-300">
              Join 10,000+ developers building the future of software.
            </p>
          </div>

          <div className="flex gap-4 mt-6 md:mt-0">
            <button
              onClick={() => router.push("/Login")}
              className="bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Get Started Free
            </button>
            <button
              onClick={() => router.push("/Contact")}
              className="bg-gray-700 px-6 py-3 rounded-full hover:bg-gray-600 transition-colors"
            >
              Talk to Sales
            </button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
export default Blogstart;
