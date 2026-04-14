"use client"
import img1 from "@/assets/img1.jpg";
import BlurText from "@/Components/homere/BlurText";
import { motion } from "framer-motion";
import { useState, useEffect } from "react"; // 1. Import useState and useEffect

export default function HeroSection() {
  // 2. Create a state to track if it's the first time loading
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // 3. Set a timer to turn off the delay after the initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoad(false); // After 1.5 seconds, permanently set delay to 0
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 text-white py-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl text-black dark:text-white lg:text-7xl font-bold mb-6 ">
            <BlurText
              text="Turn Your Ideas Into Code in Minutes!"
              delay={200}
              animateBy="words"
              direction="top"
              className="justify-center md:justify-start"
            />
          </h1>

          <p className="text-black dark:text-gray-300 mb-12">
            Codeofy uses intelligent AI to seamlessly translate concepts,
            diagrams, and requirements into functional, scalable software.
            Empower your development team today.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#pricing"
              className="bg-blue-950 dark:bg-blue-600 text-white px-6 py-3 rounded-lg transform transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:scale-105 inline-block"
            >
              Start Building
            </a>

            <a
              href="#demo"
              className="border border-black dark:border-white text-black dark:text-white px-6 py-3 rounded-lg transform transition-all duration-300 ease-in-out hover:bg-blue-950 dark:hover:bg-white dark:hover:text-black hover:text-white hover:-translate-y-1 hover:shadow-lg inline-block"
            >
              Watch Demo
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center">
          <motion.img
            src={img1.src}
            alt="Hero"
            className="w-full max-w-md rounded-xl"
            
            initial={{ 
              scale: 1, 
              y: 0, 
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" 
            }}
            
            whileInView={{ 
              scale: 1.08, 
              y: -16, 
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.3)" 
            }}
            
            viewport={{ once: false, amount: 0.3 }}
            
            transition={{ 
              // 4. THE MAGIC TRICK: 1s delay on load, 0s delay on scroll!
              delay: isFirstLoad ? 1.5 : 0.1, 
              duration: 0.8, 
              ease: "easeOut" 
            }}
          />
        </div>
      </div>
    </section>
  );
}