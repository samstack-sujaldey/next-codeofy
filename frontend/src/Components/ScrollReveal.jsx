"use client"
import { motion } from "framer-motion";

export default function ScrollReveal({ 
  children, 
  className = "", 
  direction = "up", // Options: "up", "down", "left", "right", or "none"
  delay = 0, 
  duration = 0.6 
}) {
  
  // Calculate where the element should start based on the direction
  const hiddenState = {
    opacity: 0,
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    filter: "blur(4px)", // Adds a slight modern blur while it's hidden
  };

  return (
    <motion.div
      initial={hiddenState}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
      // The magic sauce: 'once: false' makes it animate every time you scroll past it!
      // 'amount: 0.2' means it waits until 20% of the element is visible before animating.
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}