"use client"
import { useRouter } from "next/navigation";
import ScrollReveal from "../ScrollReveal";

function Card() {
  const router = useRouter();
  return (
    <div className="-mt-px w-full flex justify-center items-center py-10 px-6 bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="max-w-5xl w-full bg-blue-700 dark:bg-blue-800 rounded-2xl text-center p-12 shadow-xl transition-colors duration-300">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Be Part of the Future of AI
          </h1>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of developers building the next generation of
            intelligent applications on Codeofy.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button
              onClick={() => router.push("/Signup")}
              className="bg-white hover:bg-gray-50 text-blue-700 px-6 py-3 rounded-2xl font-semibold transition duration-100 hover:scale-105"
            >
              Sign Up Today
            </button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
export default Card;
