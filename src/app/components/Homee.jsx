"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import generalInsuranceIcon from "../../../public/icons/Flaticons/genreralInsurance.png";
import lifeInsuranceIcon from "../../../public/icons/Flaticons/lifeInsurance.png";
import healthInsuranceIcon from "../../../public/icons/Flaticons/healthInsurance.png";
import groupInsuranceIcon from "../../../public/icons/Flaticons/groupInsurance.png";
import financialInsuranceIcon from "../../../public/icons/Flaticons/financialInsurance.png";
import wealthInsuranceIcon from "../../../public/icons/Flaticons/wealthInsurance.png";
import puzzleIcon from "../../../public/icons/Flaticons/puzzle.png";
import goalIcon from "../../../public/icons/Flaticons/goal.png";
import starIcon from "../../../public/icons/Flaticons/star.png";
import { GrNext } from "react-icons/gr";
import { MdArrowBackIosNew } from "react-icons/md";
import Banner1 from "../../../public/images/banner/banner4.png";
import Banner2 from "../../../public/images/banner/banner2.png";
import Banner3 from "../../../public/images/banner/banner3.png";
import Banner4 from "../../../public/images/banner/banner1.png";
import handShakeIcon from "../../../public/icons/handshake.png";
import coupleIcon from "../../../public/images/couple.png";
import Link from "next/link";
import Family from "../../../public/illustrations/family6.png"

const Homee = () => {
  const banners = [Banner1, Banner2, Banner3, Banner4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-move the carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, [banners.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };
  function capitalizeFirstLetter(string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="w-full phone:h-[92vh]  laptop:h-[135vh] desktopxl:h-[87vh] desktopxl:p-2  flex flex-col items-center justify-between phone:justify-start   gap-2  laptop:p-3  phone:p-2   ">
      {/* Moving Advertisement */}
      <div className="relative laptop:w-4/5 laptop:h-40 desktopxl:w-4/5    phone:h-1/4     rounded-2xl overflow-hidden   phone:w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out w-full h-full bg-blue-700 "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <div key={index} className="min-w-full h-full">
              <Image
                src={banner}
                alt={`Banner ${index + 1}`}
                width={1920}
                height={1080}
                className="rounded-2xl bg-cover w-full h-full object-cover phone:object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      
      <div className="w-5/6   bg-white flex flex-col justify-evenly desktopxl:h-3/4    phone:justify-evenly phone:h-2/3   phone:w-full rounded-2xl shadow-lg border border-slate-200  p-5  h-full xxs:h-full xs:h-full lg:h-5/6 xxs:justify-center xs:justify-start xs:gap-10 xxs:w-full  lg:w-5/6 xs:w-full  ">
        <div className="flex flex-col items-center  gap-1 ">
          <h1 className="text-blue-600 font-bold lg:text-5xl xxs:text-2xl xxs:text-center xs:text-3xl desktop3xl:text-7xl desktop2xl:text-3xl phone:text-2xl">
            The Insurance Partner
          </h1>
          <div className="flex items-center gap-2 font-semibold lg:text-lg xxs:text-sm  desktop3xl:text-2xl">
            <p>You can</p>
            <Image
              src={handShakeIcon}
              width={60}
              height={60}
              alt="handshakeIcon xxs:w-12 xxs:h-12"
            />
            <p>Rely On</p>
          </div>
          <p className="font-semibold text-xs text-slate-500 text-center desktop3xl:text-xl">
            Your One-Stop Insurance Shop for Life's Essentials
          </p>
        </div>
        <div className="w-full flex items-start justify-center   laptop:h-2/3 desktopxl:h-2/3    h-full phone:h-1/2 ">
        <div className="w-1/3 h-full  laptop:h-full   phone:hidden lg:block xs:hidden desktopxl:h-full ">
            <Image
              src={Family}
              width={1920}
              height={1080}
              alt="couple"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 h-96 desktopxl:h-full   laptop:h-full   phone:h-56   xxs:h-64 xs:h-96 phone:w-full lg:w-1/2 xs:w-full flex flex-col items-center  ">

            <div className="w-full  rounded-2xl h-full flex items-center flex-wrap   ">
              {[
                { icon: generalInsuranceIcon, title: "General" },
                { icon: healthInsuranceIcon, title: "Health" },
                { icon: lifeInsuranceIcon, title: "Life" },
                { icon: groupInsuranceIcon, title: "group" },
                { icon: financialInsuranceIcon, title: "financial" },
                { icon: wealthInsuranceIcon, title: "wealth" },
              ].map(({ icon, title }, idx) => (
                <Link
                  href={`/insurances/${title}`}
                  key={idx}
                  className="flex flex-col w-1/3 items-center gap-2  hover:bg-blue-50 hover:scale-90 transition-all ease-in-out duration-500 cursor-pointer p-3 rounded-2xl desktop3xl:p-10"
                >
                  <Image
                    src={icon}
                    width={1920}
                    height={1080}
                    alt={`${title} Insurance`}
                    className="lg:w-10 lg:h-10 phone:w-7 phone:h-7 xs:w-9 xs:h-9   desktop3xl:w-28 desktop3xl:h-28"
                  />
                  <div className="flex flex-col items-center">
                    <h1 className="lg:text-lg xxs:text-xs xs:text-sm desktopxl:text-xl desktop3xl:text-3xl">{capitalizeFirstLetter(title)}</h1>
                    <p className="text-xs text-slate-500  desktop3xl:text-xl">Insurance</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="w-full flex items-center justify-center lg:gap-10 phone:gap-3 lg:flex  phone:hidden    ">
        {[{ icon: puzzleIcon, value: "100+", label: "Diverse Variety" },
          { icon: goalIcon, value: "100%", label: "Achievement Rate" },
          { icon: starIcon, value: "4.9", label: "Customer Rating" }
        ].map(({ icon, value, label }, idx) => (
          <div key={idx} className="flex items-center gap-3  border border-slate-300 rounded-lg p-3 desktopxl:w-1/3 laptop:w-1/3 phone:flex-col  phone:items-center lg:flex-row">
            <Image src={icon} width={25} height={25} alt={label} className="xxs:w-5 desktop3xl:w-14" />
            <div className="flex flex-col items-start phone:items-center ">
              <h1 className="text-sm font-bold xxs:text-sm xs:text-xs sm:text-sm">{value}</h1>
              <p className="text-xs font-normal xxs:text-xs xs:text-xs sm:text-xs phone:text-center">{label}</p>
            </div>
          </div>
        ))}
      </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Homee;
