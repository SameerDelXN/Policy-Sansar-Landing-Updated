import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedHeader from './AnimatedHeader';
import Integrity from "../../../public/core/result.png";
import Inclusivity from "../../../public/core/inclusivity.png";
import Empowerment from "../../../public/core/empowerment.png";
import Customer from "../../../public/core/customer.png";
import Compassion from "../../../public/core/compare.png";
import Innovation from "../../../public/core/innovation.png";
import Sustainability from "../../../public/core/sustainability.png";
import Accountability from "../../../public/insurance/micro.png";

// Core values data
const coreValues = [
  { name: 'Integrity', desc: 'Upholding the highest standards of honesty and transparency in all our actions.', image: Integrity },
  { name: 'Inclusivity', desc: 'Promoting diversity and ensuring equal opportunities for all.', image: Inclusivity },
  { name: 'Empowerment', desc: 'Enabling our clients and teams to achieve their goals and make informed decisions.', image: Empowerment },
  { name: 'Customer-Centricity', desc: 'Putting customers at the heart of everything we do to deliver exceptional value.', image: Customer },
  { name: 'Compassion', desc: 'Demonstrating care and understanding in our interactions and support.', image: Compassion },
  { name: 'Innovation', desc: 'Continuously exploring new ideas to improve services and drive industry progress.', image: Innovation },
  { name: 'Sustainability', desc: 'Committing to eco-friendly practices that benefit society and the environment.', image: Sustainability },
  { name: 'Accountability', desc: 'Taking responsibility for our actions and ensuring transparency in our processes.', image: Accountability },
];

const CoreValue = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="flex flex-col items-center gap-10 mt-12 p-6 w-full overflow-hidden">
      <AnimatedHeader text="Our Core Values" />
      <motion.div
        className="flex flex-wrap items-center gap-4 justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {coreValues.map((value, index) => (
          <motion.div
            key={index}
            className="relative w-96 h-80 text-black rounded-lg overflow-hidden group bg-white shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              ease: 'easeOut', 
              delay: index * 0.2 // Delay each card by 0.2s multiplied by its index
            }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Background Image */}
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${value.image.src})` }}
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            ></motion.div>

            {/* Name - Moves Up on Hover */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-3xl font-extrabold text-white bg-black/50"
              initial={{ y: 0 }}
              whileHover={{ y: -30 }}
              transition={{ duration: 0.3 }}
            >
              {value.name}
            </motion.div>

            {/* Description - Appears on Hover */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-center p-4 backdrop-blur-md bg-white/0 text-white opacity-0 group-hover:opacity-100"
              initial={{ y: '100%' }}
              whileHover={{ y: 0 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <div className="flex flex-col items-center justify-center text-center">
                {/* Name */}
                <motion.h3 className="text-2xl font-extrabold mb-4">{value.name}</motion.h3>
                {/* Description */}
                <p>{value.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CoreValue;
