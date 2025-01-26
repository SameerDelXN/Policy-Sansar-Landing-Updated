"use client";
import React from "react";
import Image from "next/image";
import Promote from "../../../public/insurance/promote.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Unique = () => {
  // Separate useInView hooks for each section
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const { ref: card1Ref, inView: card1InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const { ref: card2Ref, inView: card2InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const { ref: card3Ref, inView: card3InView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="w-full h-auto flex flex-col items-center gap-14 ">
      <div className="w-full bg-white flex flex-col lg:flex-row items-center justify-between p-5 gap-10">
        <div className="flex flex-col items-start gap-14 w-full lg:w-2/4">
          {/* Title and Divider */}
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: titleInView ? 1 : 0, x: titleInView ? 0 : -100 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-3"
          >
            <h1 className="text-3xl lg:text-4xl font-extrabold">What makes us Different?</h1>
            <hr className="w-96 h-0.5 bg-slate-200" />
          </motion.div>

          {/* Cards Section */}
          <div className="flex flex-col items-start gap-4 w-full p-5">
            {/* Card 1 */}
            <motion.div
              ref={card1Ref}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: card1InView ? 1 : 0, x: card1InView ? 0 : -100 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full lg:w-96 h-32 bg-white shadow-lg border border-x border-slate-200 rounded-lg flex items-center justify-center hover:bg-[#000f23] transition-all ease-in-out duration-700 hover:text-white  p-3"
            >
              <div className="flex items-start gap-6 p-3 xxs:p-2 xs:p-2 sm:p-2 xxs:gap-2 xs:gap-2 sm:gap-2 w-full">
                <div className="bg-[#0040FF] w-10 h-10 rounded-full flex items-center justify-center text-white font-bold xxs:w-6 xs:w-6 sm:w-6 xxs:h-6 xs:h-6 sm:h-6 xxs:p-4 xs:p-4 sm:p-4">1</div>
                <div className="flex flex-col items-start gap-3 w-full">
                  <h1 className="text-lg font-bold xxs:text-sm xs:text-sm sm:text-sm">Real-Solutions</h1>
                  <p className="text-sm font-medium xxs:text-xs xs:text-xs sm:text-xs ">Seamless support and claim assistance.</p>
                </div>
              </div>
            </motion.div>
            
            
            {/* Card 2 */}
            <div className="w-full flex items-center justify-end">
              <motion.div
                ref={card2Ref}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: card2InView ? 1 : 0, x: card2InView ? 0 : 100 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full lg:w-96 h-32 bg-white shadow-lg border border-x border-slate-200 rounded-lg flex items-center justify-center hover:bg-[#000f23] transition-all ease-in-out duration-700 hover:text-white  xs:justify-start xxs:justify-start sm:justify-start p-3"
              >
                <div className="flex items-start gap-6 p-3 xxs:p-2 xs:p-2 sm:p-2 xxs:gap-2 xs:gap-2 sm:gap-2">
                  <div className="bg-[#0040FF] w-10 h-10 rounded-full flex items-center justify-center text-white font-bold xxs:w-6 xs:w-6 sm:w-6 xxs:h-6 xs:h-6 sm:h-6 xxs:p-4 xs:p-4 sm:p-4">2</div>
                  <div className="flex flex-col items-start gap-3">
                    <h1 className="text-lg font-bold xxs:text-sm xs:text-sm sm:text-sm">Diverse Insurance Products</h1>
                    <p className="text-sm font-medium xxs:text-xs xs:text-xs sm:text-xs">Comprehensive coverage options.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Card 3 */}
            <motion.div
              ref={card3Ref}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: card3InView ? 1 : 0, x: card3InView ? 0 : -100 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full lg:w-96 h-32 bg-white shadow-lg border border-x border-slate-200 rounded-lg flex items-center justify-center hover:bg-[#000f23] transition-all ease-in-out duration-700 hover:text-white  xxs:justify-start xs:justify-start sm:justify-start p-3"
            >
              <div className="flex items-start gap-6 p-3 xxs:p-2 xs:p-2 sm:p-2 xxs:gap-2 xs:gap-2 sm:gap-2 ">
                <div className="bg-[#0040FF] w-10 h-10 rounded-full flex items-center justify-center text-white font-bold xxs:w-6 xs:w-6 sm:w-6 xxs:h-6 xs:h-6 sm:h-6 xxs:p-4 xs:p-4 sm:p-4">3</div>
                <div className="flex flex-col items-start gap-3">
                  <h1 className="text-lg font-bold xxs:text-sm xs:text-sm sm:text-sm">Local Experts</h1>
                  <p className="text-sm font-medium xxs:text-xs xs:text-xs sm:text-xs">Knowledgeable team providing personalized care.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Image Section with Slide In Animation */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: imageInView ? 1 : 0, x: imageInView ? 0 : 100 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-3/5 h-96 lg:h-3/4"
        >
          <Image
            src={Promote}
            width={7680}
            height={4320}
            alt="promote Image"
            className="w-full h-full object-cover rounded-2xl "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Unique;
