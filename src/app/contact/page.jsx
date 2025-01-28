"use client";
import React from 'react';
import Image from 'next/image';
import mailicon from "../../../public/icons/Flaticons/mail.png";
import callicon from "../../../public/icons/Flaticons/callI.png";
import AnimatedHeader from '../components/AnimatedHeader';
import callbanner from '../../../public/coverimg/call.png';

const Contact = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-56 bg-black">
        <Image src={callbanner} layout="fill" objectFit="cover" alt="Call Banner" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center px-6 sm:px-16 text-white">
          <h1 className="text-xl sm:text-3xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Main Contact Section */}
      <div name="contact" className="h-auto flex flex-col items-center justify-center gap-12 p-6 sm:p-10 bg-white">
        <AnimatedHeader text="Contact Us" />

        {/* Parent Container */}
        <div className="flex lg:flex-col xxs:flex-col xs:flex-col md:flex-col xl:flex-row 2xl:flex-row sm:flex-col w-full justify-between gap-6 sm:gap-12">

          {/* Map Section */}
          <div className="w-full lg:w-full md:w-full sm:w-full xl:w-1/2 2xl:w-1/2 h-auto bg-[#E6ECFF] rounded-2xl p-6 sm:p-10 flex flex-col items-start justify-between">
            <div className="">
              <p className="text-xl sm:text-3xl font-bold">Visit Policy Sansar</p>
              <p className="text-sm sm:text-base pt-2 sm:pt-4">Let's Build a Conversation - Contact Us Today.</p>
            </div>

            {/* Email & Mobile Number */}
            <div className=" xxs:flex-col gap-4  pt-4 pb-4 justify-start  flex xs:flex-row xs:justify-between  w-full ">
              <div className="flex items-center gap-2">
                <Image width={25} height={25} src={mailicon} alt="Email Icon" />
                <p className="text-xs sm:text-base">po@policysansar.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Image width={25} height={25} src={callicon} alt="Phone Icon" />
                <p className="text-xs sm:text-base">
                  <span>+91 </span> <span>9644170004</span>
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full space-y-4">
              {/* First Location */}
              <div
                className="w-full h-[250px] sm:h-[350px] relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => window.open("https://maps.app.goo.gl/qDDFFVQkVke94YA59", '_blank', 'noopener,noreferrer')}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8653856063793!2d72.89023277493088!3d19.113560550792815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c92d5e58cdc9%3A0x94c2dec7f68a1d1b!2z4KSs4KWB4KSu4KSw4KSB4KSXIOCkrOCkv-CksuCljeCkoeCkv-CkguCklw!5e0!3m2!1shi!2sin!4v1737356266212!5m2!1shi!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full pointer-events-none" // Prevents iframe interaction
                  title="First Location Map" // Added title for accessibility
                />
              </div>

              {/* Second Location */}
              <div
                className="w-full h-[250px] sm:h-[350px] relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => window.open("https://maps.app.goo.gl/waCc29mgzyJsvb7eA", '_blank', 'noopener,noreferrer')}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.1753228734137!2d72.81877477492861!3d19.01199455397927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf3304e7b959%3A0x86db87def27be600!2z4KS14KWA4KS14KSw4KWN4KSVIOCkteCkvuCkuOCkteCkvuCkqOClgCDgpJrgpYjgpILgpKzgpLDgpY3gpLg!5e0!3m2!1shi!2sin!4v1737356362283!5m2!1shi!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full pointer-events-none" // Prevents iframe interaction
                  title="Second Location Map" // Added title for accessibility
                />
              </div>
            </div>
          </div>

          {/* Google Form Embed Section */}
          <div className="bg-white w-full lg:w-full md:w-full xl:w-1/2 2xl:w-1/2 sm:w-full h-auto p-6 sm:p-8 flex flex-col items-start justify-center gap-6 sm:gap-12 rounded-2xl border border-gray-400">
            <p className="text-xl sm:text-2xl font-bold">Get in Touch</p>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfA_lb0gzs4Pk2k_8gN0atWHIXCb6820M_AUCw5T6G_y7QM4A/viewform?embedded=true"
              width="100%"
              height="600px"
              className="rounded-lg border border-gray-400"
              title="Contact Form" // Added title for accessibility
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;