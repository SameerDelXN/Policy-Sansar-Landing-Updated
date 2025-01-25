"use client";
import React from "react";
import Image from "next/image";
import generalInsuranceIcon from "../../../public/icons/Flaticons/genreralInsurance.png";
import lifeInsuranceIcon from "../../../public/icons/Flaticons/lifeInsurance.png"
import healthInsuranceIcon from "../../../public/icons/Flaticons/healthInsurance.png"
import groupInsuranceIcon from "../../../public/icons/Flaticons/groupInsurance.png"
import financialInsuranceIcon from "../../../public/icons/Flaticons/financialInsurance.png"
import wealthInsuranceIcon from "../../../public/icons/Flaticons/wealthInsurance.png"
import puzzleIcon from "../../../public/icons/Flaticons/puzzle.png"
import goalIcon from "../../../public/icons/Flaticons/goal.png"
import starIcon from "../../../public/icons/Flaticons/star.png"
const Homee = () => {
  return (
    <div className="w-full h-[85vh] flex flex-col items-center justify-evenly p-5 gap-5">
      <div className="w-full flex items-center justify-evenly ">
        <div className="w-1/4 bg-yellow-600 h-40"></div>
        <div className="w-1/4 bg-pink-600 h-40"></div>
      </div>
      <div className="w-1/2 bg-white rounded-2xl border border-slate-100 shadow-md h-1/2 flex items-center flex-wrap  p-3">
        <div className="flex flex-col items-center gap-2 w-1/3 hover:bg-blue-100 hover:scale-90 transition-all ease-in-out duration-500 cursor-pointer p-3 rounded-2xl">
          <Image
            src={generalInsuranceIcon}
            width={50}
            height={50}
            alt="General Insurance"
          />
          <div className="flex flex-col items-center ">
            <h1 className="text-xl font-bold">General</h1>
            <p className="text-md font-normal text-slate-500">Insurance</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2  w-1/3 hover:bg-blue-100 hover:scale-90 transition-all ease-in-out duration-500 cursor-pointer p-3 rounded-2xl">
          <Image
            src={healthInsuranceIcon}
            width={50}
            height={50}
            alt="General Insurance"
          />
          <div className="flex flex-col items-center ">
            <h1 className="text-xl font-bold">Health</h1>
            <p className="text-md font-normal text-slate-500 ">Insurance</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2  w-1/3 hover:bg-blue-100 hover:scale-90 transition-all ease-in-out duration-500 cursor-pointer p-3 rounded-2xl">
          <Image
            src={lifeInsuranceIcon}
            width={50}
            height={50}
            alt="General Insurance"
          />
          <div className="flex flex-col items-center ">
            <h1 className="text-xl font-bold">Life</h1>
            <p className="text-md font-normal text-slate-500">Insurance</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2  w-1/3 hover:bg-blue-100 hover:scale-90 transition-all ease-in-out duration-500 cursor-pointer p-3 rounded-2xl">
          <Image
            src={groupInsuranceIcon}
            width={50}
            height={50}
            alt="General Insurance"
          />
          <div className="flex flex-col items-center ">
            <h1 className="text-xl font-bold">Group</h1>
            <p className="text-md font-normal text-slate-500">Insurance</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2  w-1/3 hover:bg-blue-100 hover:scale-90 transition-all ease-in-out duration-500 cursor-pointer p-3 rounded-2xl">
          <Image
            src={financialInsuranceIcon}
            width={50}
            height={50}
            alt="General Insurance"
          />
          <div className="flex flex-col items-center ">
            <h1 className="text-xl font-bold">Financial</h1>
            <p className="text-md font-normal text-slate-500">Insurance</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2  w-1/3 hover:bg-blue-100 hover:scale-90 transition-all ease-in-out duration-500 cursor-pointer p-3 rounded-2xl">
          <Image
            src={wealthInsuranceIcon}
            width={50}
            height={50}
            alt="General Insurance"
          />
          <div className="flex flex-col items-center ">
            <h1 className="text-xl font-bold">Wealth</h1>
            <p className="text-md font-normal text-slate-500">Insurance</p>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center gap-10  ">
        <div className=" flex items-center gap-3 ">
          <Image
            src={puzzleIcon}
            width={25}
            height={25}
            alt="Diverse Insurance"
          />
         <div className="flex flex-col items-start ">
         <h1 className="text-lg font-bold">100+</h1>
         <p className="text-sm font-normal">Diverse Variety</p>
         </div>
        </div>
        <div className=" flex items-center gap-3 ">
          <Image
            src={goalIcon}
            width={25}
            height={25}
            alt="Diverse Insurance"
          />
         <div className="flex flex-col items-start ">
         <h1 className="text-lg font-bold">100%</h1>
         <p className="text-sm font-normal">Achievement Rate</p>
         </div>
        </div>
        <div className=" flex items-center gap-3 ">
          <Image
            src={starIcon}
            width={25}
            height={25}
            alt="Diverse Insurance"
          />
         <div className="flex flex-col items-start ">
         <h1 className="text-lg font-bold">4.9</h1>
         <p className="text-sm font-normal">Customer Rating</p>
         </div>
        </div>
       
      </div>
    </div>
  );
};

export default Homee;
