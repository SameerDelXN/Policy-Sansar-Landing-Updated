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
    <div className="w-full   xxs:h-[80vh] xs:h-[80vh]  lg:h-[100vh]   flex flex-col items-center justify-between xxs:justify-center xs:justify-center  gap-2    lg:p-3  xxs:p-3  xs:p-2 sm:p-1">
      {/* Moving Advertisement */}
      <div className="relative lg:w-4/5 lg:h-40    xxs:h-32    xs:h-32  rounded-2xl overflow-hidden   xxs:w-full xs:w-full sm:w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out w-full h-full bg-blue-700 "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <div key={index} className="min-w-full h-full">
              <Image
                src={banner}
                alt={`Banner ${index + 1}`}
                layout="responsive"
                width={100}
                height={36}
                className="rounded-2xl bg-cover w-full h-full object-cover xs:object-cover"
              />
            </div>
          ))}
        </div>
        {/* <button
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:scale-105 xs:-translate-y-12 xxs:-translate-y-16  "
          onClick={handlePrevious}
        >
          <MdArrowBackIosNew size={20} />
        </button>
        <button
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:scale-105 xs:-translate-y-12"
          onClick={handleNext}
        >
          <GrNext size={20} />
        </button> */}
      </div>

      {/* Insurance Options */}
      {/* <div className="lg:w-1/2 bg-white rounded-2xl border border-slate-100 shadow-md h-1/2 flex items-center flex-wrap p-3 xxs:w-full xs:w-full sm:w-full md:w-2/3 ">
        {[{ icon: generalInsuranceIcon, title: "General" },
          { icon: healthInsuranceIcon, title: "Health" },
          { icon: lifeInsuranceIcon, title: "Life" },
          { icon: groupInsuranceIcon, title: "group" },
          { icon: financialInsuranceIcon, title: "financial" },
          { icon: wealthInsuranceIcon, title: "wealth" }
        ].map(({ icon, title }, idx) => (
          <Link
            href={`/insurances/${title}`}
            key={idx}
            className="flex flex-col items-center gap-2 lg:w-1/3 hover:bg-blue-50 hover:scale-90 transition-all ease-in-out duration-500 cursor-pointer p-3 rounded-2xl xxs:w-1/2 xs:w-1/2 sm:w-1/2 md:w-1/3 xl:p-6"
          >
            <Image src={icon} width={50} height={50} alt={`${title} Insurance`}  className="xxs:w-6 lg:w-12 xl:w-14"/>
            <div className="flex flex-col items-center">
              <h1 className="lg:text-xl xxs:text-sm">{capitalizeFirstLetter(title)}</h1>
              <p className="lg:text-sm text-slate-500 xxs:text-xs">Insurance</p>
            </div>
          </Link>
        ))}
      </div>

      Footer Section
      <div className="w-full flex items-center justify-center lg:gap-10 xxs:gap-3 xs:gap-3 sm:gap-2 ">
        {[{ icon: puzzleIcon, value: "100+", label: "Diverse Variety" },
          { icon: goalIcon, value: "100%", label: "Achievement Rate" },
          { icon: starIcon, value: "4.9", label: "Customer Rating" }
        ].map(({ icon, value, label }, idx) => (
          <div key={idx} className="flex items-center gap-3 xxs:flex-col xxs:items-center">
            <Image src={icon} width={25} height={25} alt={label} />
            <div className="flex flex-col items-start xxs:items-center">
              <h1 className="lg:text-lg font-bold xxs:text-sm xs:text-sm sm:text-sm">{value}</h1>
              <p className="lg:text-sm font-normal xxs:text-xs xs:text-xs sm:text-xs xxs:text-center">{label}</p>
            </div>
          </div>
        ))}
      </div> */}
      <div className="w-5/6  bg-white flex flex-col   rounded-2xl shadow-lg border border-slate-200  p-5 h-full xxs:h-full xs:h-full lg:h-5/6 xxs:justify-center xs:justify-start xs:gap-10 xxs:w-full lg:w-5/6 xs:w-full  ">
        <div className="flex flex-col items-center gap-1 ">
          <h1 className="text-blue-600 font-bold lg:text-5xl xxs:text-2xl xxs:text-center xs:text-3xl">
            The Insurance Partner
          </h1>
          <div className="flex items-center gap-2 font-semibold lg:text-lg xxs:text-sm">
            <p>You can</p>
            <Image
              src={handShakeIcon}
              width={60}
              height={60}
              alt="handshakeIcon xxs:w-12 xxs:h-12"
            />
            <p>Rely On</p>
          </div>
          <p className="font-semibold text-xs text-slate-500 text-center">
            Your One-Stop Insurance Shop for Life's Essentials
          </p>
        </div>
        <div className="w-full flex items-center justify-center ">
        <div className="w-1/3 h-96 xxs:hidden lg:block xs:hidden ">
            <Image
              src={coupleIcon}
              width={500}
              height={500}
              alt="couple"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 h-64 xxs:w-full lg:w-1/2 xs:w-full  ">
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
                  className="flex flex-col w-1/3 items-center gap-2  hover:bg-blue-50 hover:scale-90 transition-all ease-in-out duration-500 cursor-pointer p-3 rounded-2xl "
                >
                  <Image
                    src={icon}
                    width={480}
                    height={480}
                    alt={`${title} Insurance`}
                    className="lg:w-10 lg:h-10 xxs:w-7 xxs:h-7 xs:w-9 xs:h-9"
                  />
                  <div className="flex flex-col items-center">
                    <h1 className="text-sm xxs:text-xs xs:text-sm">{capitalizeFirstLetter(title)}</h1>
                    <p className="text-xs text-slate-500">Insurance</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="w-full flex items-center justify-center lg:gap-10 xxs:gap-3 xs:gap-3 sm:gap-2 lg:flex  xs:flex xxs:hidden   ">
        {[{ icon: puzzleIcon, value: "100+", label: "Diverse Variety" },
          { icon: goalIcon, value: "100%", label: "Achievement Rate" },
          { icon: starIcon, value: "4.9", label: "Customer Rating" }
        ].map(({ icon, value, label }, idx) => (
          <div key={idx} className="flex items-center gap-3 border border-slate-300 rounded-lg p-3    xs:w-1/3 xs:flex-col lg:flex-row">
            <Image src={icon} width={25} height={25} alt={label} className="xxs:w-5" />
            <div className="flex flex-col items-start xxs:items-center">
              <h1 className="text-sm font-bold xxs:text-sm xs:text-xs sm:text-sm">{value}</h1>
              <p className="text-xs font-normal xxs:text-xs xs:text-xs sm:text-xs xxs:text-center">{label}</p>
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
