"use client";
import React from "react";
import { FaXTwitter, FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa6";
import { IoCallSharp, IoMailOpenSharp, IoLocationSharp } from "react-icons/io5";
import { Link, animateScroll as scroll } from "react-scroll";
import { useInView } from "react-intersection-observer"; // Importing useInView
import Link1 from "next/link";
import Image from "next/image";
import FooterLogo from "../../../public/icons/footerLogo.png"
const Footer = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="w-full h-auto bg-[#121212] text-white p-8 overflow-hidden">
      {/* logo social with navigations */}
      <div className="flex flex-col lg:flex-row items-start justify-between w-full space-y-8 lg:space-y-0 lg:space-x-10 ">
        {/* text logos */}
        <div ref={ref1} className="flex flex-col items-center justify-between gap-5 xs:w-full xs:items-center xxs:w-full xxs:items-center">
        <div>
            <Image
              src={FooterLogo}
              alt="Logo"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
         <div className="flex flex-col items-center gap-2">
         <h1
            className={`text-4xl font-extrabold transition-all duration-700 xxs:text-xl xs:text-xl sm:text-xl ${
              inView1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            Policy Sansar
          </h1>
         
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full  border border-x-2 border-y-2 border-white hover:border-[#1D951B] hover:bg-[#1D951B] hover:-translate-y-1 transition-all ease-in-out duration-300 cursor-pointer xxs:text-sm xs:text-sm sm:text-sm xxs:p-2 xs:p-2 sm:p-2">
              <FaXTwitter />
            </div>
            <div className="p-3 rounded-full border border-x-2 border-y-2 border-white hover:border-[#1D951B] hover:bg-[#1D951B] hover:-translate-y-1 transition-all ease-in-out duration-300 cursor-pointer xxs:text-sm xs:text-sm sm:text-sm xxs:p-2 xs:p-2 sm:p-2">
              <FaLinkedinIn />
            </div>
            <div className="p-3 rounded-full border border-x-2 border-y-2 border-white hover:border-[#1D951B] hover:bg-[#1D951B] hover:-translate-y-1 transition-all ease-in-out duration-300 cursor-pointer xxs:text-sm xs:text-sm sm:text-sm xxs:p-2 xs:p-2 sm:p-2">
              <FaFacebook />
            </div>
            <div className="p-3 rounded-full border border-x-2 border-y-2 border-white hover:border-[#1D951B] hover:bg-[#1D951B] hover:-translate-y-1 transition-all ease-in-out duration-300 cursor-pointer xxs:text-sm xs:text-sm sm:text-sm xxs:p-2 xs:p-2 sm:p-2">
              <FaInstagram />
            </div>
          </div>
         </div>
         
        </div>

            {/* PRODUCT LINKS */}

          <div className="flex items-start xs:justify-between xs:w-full xxs:w-full gap-8 xxs:justify-between ">
          <div className="flex flex-col items-start gap-5">
              <h1 className="text-xl font-bold">Products</h1>
              <ul className="text-md flex flex-col gap-3 xxs:text-sm">
                <li><Link1 href={"/insurances/General"} className="hover:text-[#1D951B] transition-all ease-in-out duration-300">General Inusrance</Link1></li>
                <li><Link1 href={"/insurances/Health"} className="hover:text-[#1D951B] transition-all ease-in-out duration-300">Health Insurance</Link1></li>
                <li><Link1 href={"/insurances/Life"} className="hover:text-[#1D951B] transition-all ease-in-out duration-300">Life Insurance</Link1></li>
                <li><Link1 href={"/insurances/group"} className="hover:text-[#1D951B] transition-all ease-in-out duration-300">Group Insurance</Link1></li>
                <li><Link1 href={"/insurances/financial"} className="hover:text-[#1D951B] transition-all ease-in-out duration-300">Financial Insurance</Link1></li>
                <li><Link1 href={"/insurances/wealth"} className="hover:text-[#1D951B] transition-all ease-in-out duration-300">Wealth Insurance</Link1></li>
              </ul>
            </div>
            {/* <div className="flex flex-col items-start gap-5">
              <h1>Quick Links</h1>
              <ul className="flex flex-col items-start gap-3">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Securityy</li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-5">
              <h1>Quick Links</h1>
              <ul className="flex flex-col items-start gap-3">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Securityy</li>
              </ul>
            </div> */}
            <div className="flex flex-col items-start gap-5 xs:w-1/2 xs:items-end sm:w-1/2 xxs:items-end xxs:w-1/2">
            <h1 className="text-xl font-bold xs:items-end">Quick Links</h1>
            <div
            className={`flex flex-col items-start gap-3 text-md font-md transition-all duration-700 xs:items-end  xs:w-full xxs:w-full xss:item-end xxs:items-end ${
              inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            
            <Link1
              href={"/"}
              className="cursor-pointer  transition-all ease-in-out duration-300 hover:text-[#1D951B] xxs:text-sm xs:text-sm sm:text-sm"
            >
              Home
            </Link1>
           
            <Link1
              href={"/Distribution"}
              className="cursor-pointer  transition-all ease-in-out duration-300 hover:text-[#1D951B] xxs:text-sm xs:text-sm sm:text-sm"
            >
              Process
            </Link1>
            <Link1
              href={"/about-us"}
              className="cursor-pointer  transition-all ease-in-out duration-300 hover:text-[#1D951B] xxs:text-sm xs:text-sm sm:text-sm"
            >
              About Us
            </Link1>
            <Link1
              href={"/contact"}
              className="cursor-pointer transition-all ease-in-out duration-300 hover:text-[#1D951B] xxs:text-sm xs:text-sm sm:text-sm"
            >
              Contact Us
            </Link1>
          </div>
            </div>
          
          </div>
        <div ref={ref2} className="flex flex-col items-end gap-10 w-full">
          

          <div
            ref={ref3}
            className={`w-full xs:w-full lg:w-96 xl:w-96 2xl:w-full md:w-96 flex flex-col items-start gap-4 p-5 bg-[#474747] rounded-2xl transition-all duration-700 ${
              inView3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h1
              className={`transition-all duration-700 ${
                inView3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              Contact
            </h1>
            <div className="flex items-center gap-3 text-lg xxs:text-xs  w-full">
              <IoCallSharp className="text-lg"/> - <h1 className="text-sm sm:text-base">+91 9644170004</h1>
            </div>
            <div className="flex items-center gap-3 text-lg xxs:text-xs  w-full">
              <IoMailOpenSharp className="text-lg"/> -{" "}
              <h1 className="text-sm sm:text-base">po@policysansar.com</h1>
            </div>
            <div className="flex items-center gap-3 w-full">
             <IoLocationSharp className="text-4xl"/> -{" "}
             <h1 className="text-sm sm:text-base">3rd Floor,Plot No.264/265,Vaswani Chamber,Dr.Annie Besant Road,Worli Colony,Mumbai-400018</h1>
             </div>
            
             
             <div className="flex items-center gap-3 w-full">
             <IoLocationSharp className="text-3xl"/> -{" "}
             <h1 className="text-sm sm:text-base">104,1st Floor,A-Wing,Boomerang,Chandivali Farm Road,Andheri(E),Mumbai-40072</h1>
             </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
