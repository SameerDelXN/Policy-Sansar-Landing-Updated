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
import Banner1 from "../../../public/images/banner/banner1.png";
import Banner2 from "../../../public/images/banner/banner2.png";
import Banner3 from "../../../public/images/banner/banner3.png";
import Link from "next/link";

const Homee = () => {
  const banners = [Banner1, Banner2, Banner3];
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

  return (
    <div className="w-full h-[85vh] flex flex-col items-center justify-evenly lg:p-5 gap-5 xxs:p-1 xs:p-1 sm:p-1">
      {/* Moving Advertisement */}
      <div className="relative lg:w-2/3 h-36 rounded-2xl overflow-hidden border shadow-md xxs:w-full xs:w-full sm:w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <div key={index} className="min-w-full">
              <Image
                src={banner}
                alt={`Banner ${index + 1}`}
                layout="responsive"
                width={100}
                height={36}
                className="rounded-2xl"
              />
            </div>
          ))}
        </div>
        <button
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:scale-105"
          onClick={handlePrevious}
        >
          <MdArrowBackIosNew size={20} />
        </button>
        <button
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:scale-105"
          onClick={handleNext}
        >
          <GrNext size={20} />
        </button>
      </div>

      {/* Insurance Options */}
      <div className="lg:w-1/2 bg-white rounded-2xl border border-slate-100 shadow-md h-1/2 flex items-center flex-wrap p-3 xxs:w-full xs:w-full sm:w-full md:w-2/3">
        {[{ icon: generalInsuranceIcon, title: "General" },
          { icon: healthInsuranceIcon, title: "Health" },
          { icon: lifeInsuranceIcon, title: "Life" },
          { icon: groupInsuranceIcon, title: "Group" },
          { icon: financialInsuranceIcon, title: "Financial" },
          { icon: wealthInsuranceIcon, title: "Wealth" }
        ].map(({ icon, title }, idx) => (
          <Link
            href={`/insurances/${title}`}
            key={idx}
            className="flex flex-col items-center gap-2 lg:w-1/3 hover:bg-blue-50 hover:scale-90 transition-all ease-in-out duration-500 cursor-pointer p-3 rounded-2xl xxs:w-1/2 xs:w-1/2 sm:w-1/2 md:w-1/3"
          >
            <Image src={icon} width={50} height={50} alt={`${title} Insurance`} />
            <div className="flex flex-col items-center">
              <h1 className="text-xl font-">{title}</h1>
              <p className="text-sm text-slate-500">Insurance</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer Section */}
      <div className="w-full flex items-center justify-center lg:gap-10 xxs:gap-2 xs:gap-2 sm:gap-2">
        {[{ icon: puzzleIcon, value: "100+", label: "Diverse Variety" },
          { icon: goalIcon, value: "100%", label: "Achievement Rate" },
          { icon: starIcon, value: "4.9", label: "Customer Rating" }
        ].map(({ icon, value, label }, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <Image src={icon} width={25} height={25} alt={label} />
            <div className="flex flex-col items-start">
              <h1 className="lg:text-lg font-bold xxs:text-sm xs:text-sm sm:text-sm">{value}</h1>
              <p className="lg:text-sm font-normal xxs:text-xs xs:text-xs sm:text-xs">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homee;
