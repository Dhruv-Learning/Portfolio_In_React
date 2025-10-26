import React from "react";
import { motion } from "framer-motion";

const AnimatedSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start hidden
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
