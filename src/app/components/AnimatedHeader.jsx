// components/AnimatedHeader.js
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
const AnimatedHeader = ({ text }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger only once when it enters the viewport
    threshold: 0.1, // Trigger when 10% of the element is in the viewport
  });

  return (
    <div ref={ref} className="flex items-center justify-center gap-4">
      {/* Animated <hr> elements */}
      <motion.hr
        className="border-gray-300 w-64 "
        initial={{ width: 0 }}
        animate={{ width: inView ? '16rem' : 0 }}
        transition={{ duration: 1 }}
      />
      <motion.h2
        className="text-center font-bold text-2xl xs:text-lg sm:text-lg xxs:text-lg"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {text}
      </motion.h2>
      <motion.hr
        className="border-gray-300 w-64 "
        initial={{ width: 0 }}
        animate={{ width: inView ? '16rem' : 0 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default AnimatedHeader;
