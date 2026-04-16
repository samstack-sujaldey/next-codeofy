"use client"
import { useRouter } from "next/navigation";
import ScrollReveal from "../ScrollReveal";

function Sale() {
  const router = useRouter();
  return (
    <div className="-mt-px w-full flex justify-center items-center py-10 px-6 bg-linear-to-b from-white to-blue-400/70 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="max-w-5xl w-full bg-linear-to-r from-blue-900 to-black rounded-2xl text-center p-12 shadow-xl">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Financial Data?
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join industry leaders like FinFlow Inc. and unlock the power of
            AI-driven analytics today.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button
              onClick={() => router.push("/Contact")}
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition hover:scale-105 ease-in-out duration-300"
            >
              Talk to Sales
            </button>

            <button className="border border-gray-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition">
              View More Case Studies
            </button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
export default Sale;
