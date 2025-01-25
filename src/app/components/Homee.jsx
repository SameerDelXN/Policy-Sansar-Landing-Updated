"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import handshakeIcon from '../../../public/icons/handshake.png'; 
import family2 from "../../../public/icons/family2.png";
import family from "../../../public/icons/family.png";
import HomeIcon from "../../../public/icons/homelock.png";
import LockIcon from "../../../public/icons/lock.png";

const Homee = () => {
  return (
    <div name="home" className='w-full h-[90vh] flex flex-col justify-between pt-5'>

      {/* HERO SECTION HEADLINE */}
      <motion.div 
        className="w-full flex flex-col items-center justify-center text-center gap-3 pt-8 "
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 className="font-bold text-6xl text-blue-700 xs:text-2xl xxs:text-2xl sm:text-2xl lg:text-6xl md:text-6xl ">
          The Insurance Partner
        </motion.h1>
        <div className='flex items-center gap-2'>
          <motion.h3 className="text-3xl xxs:text-xl xs:text-xl sm:text-xl lg:text-3xl md:text-3xl">
            You can
          </motion.h3>
          <motion.div>
            <Image
              src={handshakeIcon} // Use imported image
              alt="Handshake icon"
              width={60}
              height={60}
            />
          </motion.div>
          <motion.h3 className="text-3xl xxs:text-xl xs:text-xl sm:text-xl lg:text-3xl md:text-3xl">
            Rely On
          </motion.h3>
        </div>
        <motion.h6 className='text-lg text-[#646262] font-semibold xxs:text-sm xs:text-sm sm:text-sm lg:text-lg md:text-lg'>
          Your One-Stop Insurance Shop for Life's Essentials
        </motion.h6>
      </motion.div>

      {/* FEATURE SECTION CARD */}
      <div className='w-full flex items-center justify-evenly'>
      <motion.div
  className="bg-white w-80 h-96 shadow-2xl rounded-xl p-5 flex flex-col gap-3 relative hidden lg:block xl:block 2xl:block" // Show only on sm and larger screens
  initial={{ opacity: 0, y: 50 }} // Initial state, invisible and slightly lower
  animate={{ opacity: 1, y: 0 }} // Final state, visible and in normal position
  transition={{ duration: 1, delay: 1 }} // Delay of 2 seconds and 1 second duration
>
  <motion.h1
    className="text-2xl font-extrabold"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    Discover the best options to safeguard your future.
  </motion.h1>
  <motion.h6
    className="text-xs font-bold text-[#646262]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    Empowering Your Future with the Right Coverage.
  </motion.h6>
  <div className="w-full h-2/3">
    <Image
      src={family2}
      width={1920}
      height={1000}
      alt="family"
      className="absolute -bottom-2 w-full h-full object-cover"
    />
  </div>
</motion.div>


        {/* ADVERTISEMENT COUPLE - INSURANCE CARD POP UP ANIMATION */}
        <motion.div 
          className='relative'
          initial={{ opacity: 0, y: 50 }} // Initial state, invisible and slightly lower
          animate={{ opacity: 1, y: 0 }} // Final state, visible and in normal position
          transition={{ duration: 1, delay: 1 }} // Delay of 2 seconds and 1 second duration
        >
          <Image
            src={family}
            width={720}
            height={1080}
            alt='Happy Family'
          />
          <div className='w-80 xxs:w-56 xs:w-56 sm:w-56 h-40 xxs:h-32 xs:h-32 sm:h-32 bg-white rounded-xl shadow-2xl absolute -top-28 -right-32 xxs:right-4 flex flex-col items-start justify-evenly pt-3 pl-5 xxs:pt-1 xs:pt-1 sm:pt-1'>
            <h1 className='text-2xl font-bold xxs:text-sm xs:text-sm sm:text-sm'>My Insurance</h1>
            <div className='flex flex-col items-start gap-3'>
              <div className='flex items-center gap-3'>
                <Image src={HomeIcon} width={24} height={24} alt='HomeIcon' />
                <h1 className='text-lg xxs:text-xs xs:text-xs sm:text-xs'>Home Insurance</h1>
              </div>
              <div className='flex items-center gap-3'>
                <Image src={LockIcon} width={24} height={24} alt='LockIcon' />
                <h1 className='text-lg xxs:text-xs xs:text-xs sm:text-xs'>Term Life Insurance</h1>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Homee;
