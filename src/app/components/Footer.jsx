"use client";
import React from "react";
import { FaXTwitter, FaLinkedinIn, FaFacebook, FaInstagram ,FaYoutube} from "react-icons/fa6";
import { IoCallSharp, IoMailOpenSharp, IoLocationSharp } from "react-icons/io5";
import { Link, animateScroll as scroll } from "react-scroll";
import { useInView } from "react-intersection-observer"; // Importing useInView
import Link1 from "next/link";
import { HiMiniBuildingOffice ,HiMiniBuildingOffice2} from "react-icons/hi2";
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
    <div className="w-full h-auto bg-[#121212] text-white p-8 overflow-hidden phone:p-4">
      {/* logo social with navigations */}
      <div className="flex flex-col lg:flex-row items-start justify-between phone:items-center w-full space-y-8 lg:space-y-0 lg:space-x-10 ">
        {/* text logos */}
        <div ref={ref1} className="flex flex-col  items-center justify-between gap-5 xs:w-full xs:items-center xxs:w-full xxs:items-center">
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
            <div className="p-3 rounded-full  border border-x-2 border-y-2 border-white hover:border-blue-500 hover:bg-blue-500 hover:-translate-y-1 transition-all ease-in-out duration-300 cursor-pointer xxs:text-sm xs:text-sm sm:text-sm xxs:p-2 xs:p-2 sm:p-2">
              <FaXTwitter />
            </div>
            <div className="p-3 rounded-full border border-x-2 border-y-2 border-white hover:border-blue-500 hover:bg-blue-500 hover:-translate-y-1 transition-all ease-in-out duration-300 cursor-pointer xxs:text-sm xs:text-sm sm:text-sm xxs:p-2 xs:p-2 sm:p-2">
              <FaLinkedinIn />
            </div>
            <div className="p-3 rounded-full border border-x-2 border-y-2 border-white hover:border-blue-500 hover:bg-blue-500 hover:-translate-y-1 transition-all ease-in-out duration-300 cursor-pointer xxs:text-sm xs:text-sm sm:text-sm xxs:p-2 xs:p-2 sm:p-2">
              <FaFacebook />
            </div>
            <div className="p-3 rounded-full border border-x-2 border-y-2 border-white hover:border-blue-500 hover:bg-blue-500 hover:-translate-y-1 transition-all ease-in-out duration-300 cursor-pointer xxs:text-sm xs:text-sm sm:text-sm xxs:p-2 xs:p-2 sm:p-2">
              <FaInstagram />
            </div>
            <div className="p-3 rounded-full border border-x-2 border-y-2 border-white hover:border-blue-500 hover:bg-blue-500 hover:-translate-y-1 transition-all ease-in-out duration-300 cursor-pointer xxs:text-sm xs:text-sm sm:text-sm xxs:p-2 xs:p-2 sm:p-2">
              <FaYoutube />
            </div>

          </div>
         </div>
         
        </div>

            {/* PRODUCT LINKS */}

          <div className="flex items-start  laptop:justify-start xs:justify-between  xs:w-full laptop:w-96 phone:w-full gap-28 laptop:gap-8 phone:gap-0 phone:justify-between ">
          <div className="flex flex-col items-start gap-5 phone:w-1/2 desktopxl:w-2/3 ">
              <h1 className="text-xl font-bold phone:text-lg">Products</h1>
              <ul className="text-md flex flex-col gap-3 xxs:text-sm">
                <li><Link1 href={"/insurances/General"} className="hover:text-blue-500 transition-all ease-in-out duration-300 phone:text-sm">General Inusrance</Link1></li>
                <li><Link1 href={"/insurances/Health"} className="hover:text-blue-500 transition-all ease-in-out duration-300 phone:text-sm">Health Insurance</Link1></li>
                <li><Link1 href={"/insurances/Life"} className="hover:text-blue-500 transition-all ease-in-out duration-300 phone:text-sm">Life Insurance</Link1></li>
                <li><Link1 href={"/insurances/group"} className="hover:text-blue-500 transition-all ease-in-out duration-300 phone:text-sm">Group Insurance</Link1></li>
                <li><Link1 href={"/insurances/financial"} className="hover:text-blue-500 transition-all ease-in-out duration-300 phone:text-sm">Financial Insurance</Link1></li>
                <li><Link1 href={"/insurances/wealth"} className="hover:text-blue-500 transition-all ease-in-out duration-300 phone:text-sm">Wealth Insurance</Link1></li>
              </ul>
            </div>

            <div className="flex flex-col items-start phone:items-end gap-5  xs:w-1/2  xs:items-end sm:w-1/2 xxs:items-end phone:w-1/2 laptop:w-1/2">
            <h1 className="text-xl font-bold phone:items-end text-end phone:text-lg">Quick Links</h1>
            <div
            className={`flex flex-col items-start phone:items-end desktopxl:items-end gap-3 text-md font-md transition-all duration-700 xs:items-end  xs:w-full xxs:w-full xss:item-end xxs:items-end ${
              inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            
            <Link1
              href={"/"}
              className="cursor-pointer  transition-all ease-in-out duration-300 hover:text-blue-500 phone:text-sm xs:text-sm sm:text-sm text-end"
            >
              Home
            </Link1>
           
            <Link1
              href={"/Distribution"}
              className="cursor-pointer  transition-all ease-in-out duration-300 hover:text-blue-500 phone:text-sm xs:text-sm sm:text-sm text-end"
            >
              Process
            </Link1>
            <Link1
              href={"/about-us"}
              className="cursor-pointer  transition-all ease-in-out duration-300 hover:text-blue-500 phone:text-sm xs:text-sm sm:text-sm text-end"
            >
              About Us
            </Link1>
            <Link1
              href={"/contact"}
              className="cursor-pointer transition-all ease-in-out duration-300 hover:text-blue-500 phone:text-sm xs:text-sm sm:text-sm text-end"
            >
              Contact Us
            </Link1>
            <Link1
              href={"/privacy-policy"}
              className="cursor-pointer transition-all ease-in-out duration-300 hover:text-blue-500 phone:text-sm xs:text-sm sm:text-sm text-end"
            >
              Privacy Policy
            </Link1>
            <Link1
              href={"/terms-and-conditions"}
              className="cursor-pointer transition-all ease-in-out duration-300 hover:text-blue-500 phone:text-sm xs:text-sm sm:text-sm text-end"
            >
              Terms & Conditions
            </Link1>
            <Link1
              href={"/grievance-policy"}
              className="cursor-pointer transition-all ease-in-out duration-300 hover:text-blue-500 phone:text-sm xs:text-sm sm:text-sm text-end"
            >
              Grievance Policy
            </Link1>
          </div>
            </div>
          
          </div>
        <div ref={ref2} className="flex flex-col items-end gap-10 w-1/3 laptop:w-1/2 phone:w-full ">
          

          <div
            ref={ref3}
            className={`w-full phone:w-full laptop:w-full xl:w-96 2xl:w-full md:w-96 flex flex-col items-start gap-4 p-5 bg-[#474747] rounded-2xl transition-all duration-700 ${
              inView3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h1
              className={`transition-all duration-700  text-xl font-bold ${
                inView3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              Contact
            </h1>
            <div className="laptop:flex laptop:justify-between w-full desktopxl:flex ">
            <div className="flex items-center gap-3 text-lg xxs:text-xs  w-full ">
              <IoCallSharp className="text-lg"/><h1 className="text-sm sm:text-base">+91 9644170004</h1>
            </div>
            <div className="flex items-center gap-3 text-lg xxs:text-xs  w-full">
              <IoMailOpenSharp className="text-lg"/>
              <h1 className="text-sm sm:text-base">po@policysansar.com</h1>
            </div>
            </div>
            <div className="flex items-start gap-3 w-full flex-col  ">
              <h1 className="flex items-center gap-1 text-xl font-bold"> <HiMiniBuildingOffice className="text-lg "/>
              Registered office </h1>
           
             {/* <IoLocationSharp className="text-4xl"/> -{" "} */}
             <h1  onClick={() => window.open("https://maps.app.goo.gl/qDDFFVQkVke94YA59", '_blank', 'noopener,noreferrer')} className="text-sm sm:text-base xxs:xs hover:text-blue-500 transition-all ease-in-out duration-300  underline">3rd Floor, Plot No.264/265, Vaswani Chamber,    {} {}{}{} <br/>Dr.Annie Besant Road, Worli Colony, Mumbai-400018</h1>
             </div>
            
             
             <div className="flex items-start gap-3 w-full flex-col ">
             <h1 className="flex items-center gap-1 text-xl font-bold"> <HiMiniBuildingOffice2 className="text-lg"/>
              Corporate office </h1>
             {/* <IoLocationSharp className="text-3xl"/> -{" "} */}
                 <h1  onClick={() => window.open("https://maps.app.goo.gl/waCc29mgzyJsvb7eA", '_blank', 'noopener,noreferrer')}className="text-sm sm:text-base xxs:xs hover:text-blue-500 underline transition-all ease-in-out duration-300 ">104,1st Floor, A-Wing,Boomerang, Chandivali Farm Road, Andheri East, Mumbai-40072</h1>
             </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
