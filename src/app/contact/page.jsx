import React from 'react';
import Image from 'next/image';
import mailicon from "../../../public/icons/mail.png";
import callicon from "../../../public/icons/call.png";
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
        <div className="flex lg:flex-col xxs:flex-col xs:flex-col  md:flex-col xl:flex-row 2xl:flex-row sm:flex-col  w-full justify-between gap-6 sm:gap-12">
          
          {/* Map Section */}
          <div className="w-full lg:w-full md:w-full sm:w-full xl:w-1/2 2xl:w-1/2 h-auto bg-blue-300 rounded-2xl p-6 sm:p-10 flex flex-col items-start justify-between">
            <div className="text-white">
              <p className="text-xl sm:text-3xl font-bold">Contact Us</p>
              <p className="text-sm sm:text-base pt-2 sm:pt-4">Let's Build a Conversation - Contact Us Today.</p>
            </div>

            {/* Email & Mobile Number */}
            <div className="flex lg:flex-row md:items-center xl:flex md:justify-between md:w-full gap-3 md:gap-6 p-2 xxs:flex-col">
              <div className=" flex gap-2">
                <Image width={25} height={25} src={mailicon} alt="Email Icon" />
                <p className="text-xs sm:text-base">po@policysansar.com</p>
              </div>
              <div className="flex  gap-2">
                <Image width={25} height={25} src={callicon} alt="Phone Icon" />
                <p className="text-xs sm:text-base ">
                  <span>+91 </span> <span>9644170004</span>
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-[250px] sm:h-[350px] relative rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8225589217414!2d72.97050121490196!3d19.08693748708432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b90f0eeb62eb%3A0xc2d676bcb110db4d!2sThane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1632846857241!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
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
