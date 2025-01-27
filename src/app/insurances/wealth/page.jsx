"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import HealthImg from "../../../../public/insurance/health-insurance.jpeg";
import VehicleImg from "../../../../public/insurance/car-insurance.jpeg";
import HomeImg from "../../../../public/insurance/home-insurance.jpeg";
import travelImg from "../../../../public/insurance/travel-insurance.jpeg";
import bgImage from "../../../../public/icons/bgImages/bgImage.png"
import carIcon from "../../../../public/icons/carIcon.png"
import bikeIcon from "../../../../public/icons/bikeIcon.png"
import homeIcon from "../../../../public/icons/homeIcon.png"
import travelIcon from "../../../../public/icons/travelIcon.png"
import instantPolicyIcon from "../../../../public/icons/Flaticons/instantPolicy.png"
import claimTrackingIcon from "../../../../public/icons/Flaticons/claimTracking.png"
import supportIcon from "../../../../public/icons/Flaticons/247Icon.png"
import securePaymentIcon from "../../../../public/icons/Flaticons/securePayment.png"
import {toast,Toaster} from "react-hot-toast"
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
const GeneralInsurance = () => {
  const [showModal, setShowModal] = useState(true); // Initially show the modal
  const [annualIncome, setAnnualIncome] = useState(""); // Track the selected annual income
  const [insuranceType, setInsuranceType] = useState(""); // Track the selected insurance type
  const [firstName, setFirstName] = useState(""); // Track the first name input
  const [lastName, setLastName] = useState(""); // Track the last name input
  const [mobileNumber, setMobileNumber] = useState(""); // Track the mobile number input

  const handleContinueClick = () => {
    setShowModal(false);
    toast("We will get back to you soon...",{
      icon:"😊"
    })
  };
  const handleCloseModal = ()=>{
    setShowModal(false)
  }


  // Check if all fields are filled and valid
  const isFormValid = () => {
    return (
      firstName &&
      lastName &&
      mobileNumber &&
      
      mobileNumber.match(/^[0-9]{10}$/) // Ensure mobile number is 10 digits
    );
  };
  const handleEnquireClick=()=>{
    setShowModal(true);
  }
  return (
    <div className="w-full h-auto p-10 xxs:p-2">
      <Toaster/>
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 "
          
        >
          <motion.div
            initial={{ opacity: 0, y: -100 }} // Start above the screen
            animate={{ opacity: 1, y: 0 }} // Animate to its final position
            exit={{  y: 100,opacity:0 }} // Exit animation
            transition={{ duration: 0.5 }} // Duration of the animation
          className="bg-white lg:p-10 rounded-lg shadow-lg flex flex-col items-start gap-6 w-full max-w-4xl xxs:p-4 xxs:w-5/6 ">
           <div className="w-full flex items-center justify-between">
                      <h1 className="text-xl font-semibold">Reach out for  <span></span>Wealth Insurance</h1>
                      <button className="text-red-500 text-xl" onClick={handleCloseModal}><RxCross1 /></button>
                      </div>
            <form className="w-full flex flex-col gap-4">
              <div className="flex items-center justify-between w-full gap-4">
                <input
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 xxs:p-3 xxs:text-xs"
                  placeholder="First Name"
                />
                <input
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 xxs:p-3 xxs:text-xs"
                  placeholder="Last Name"
                />
              </div>

              <input
                required
                type="tel"
                pattern="^[0-9]{10}$"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 xxs:p-3 xxs:text-xs"
                placeholder="Mobile Number"
              />
               <input
                required
                type="email"
                className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 xxs:p-3 xxs:text-xs"
                placeholder="Email address"
              />

             

              <input
                onClick={handleContinueClick}
                type="submit"
                value="Continue"
                disabled={!isFormValid()} // Disable button if form is not valid
                className={`lg:p-4 xxs:p-3 rounded-lg text-white cursor-pointer ${isFormValid() ? "bg-blue-700" : "bg-gray-400"}`}
              />
            </form>
          </motion.div>
        </div>
      )}
      <div>
      <div className="bg-white w-full  lg:h-[150vh] xxs:h-[137vh] xs:h-[120vh]  rounded-2xl xxs:flex-col lg:flex-row  flex shadow-lg border border-slate-300 ">
          {/* Red container with background image */}
          <div
  className="lg:w-1/2 lg:h-full bg-slate-200 lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-tr-none text-white lg:pt-24 lg:pl-10 lg:flex lg:flex-col xxs:rounded-tl-2xl lg:items-start gap-2 bg-opacity-30 backdrop-blur-2xl xxs:w-full xxs:rounded-bl-none xxs:rounded-tr-2xl xxs:p-10"
  style={{
    backgroundImage: `url(${bgImage.src})`, // Setting the imported background image
    backgroundSize: 'cover', // Ensure the image covers the entire container
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', // Ensure the background doesn't repeat
  }}
>
  <h1 className="lg:text-4xl xxs:text-xl">
    <span className="lg:text-5xl font-bold xxs:text-2xl">W</span>ealth Insurance
  </h1>
  <p className="w-2/3 xxs:w-full xxs:text-sm lg:text-xl">
  Wealth insurance provides financial protection against risks that may impact an individual wealth, including market fluctuations, investment losses, and unforeseen financial emergencies. It ensures that individuals and families can preserve and grow their wealth.
</p>
</div>

          <div className="lg:w-1/2  flex flex-col  lg:justify-evenly xxs:justify-end  xxs:w-full ">
          <div className="flex flex-col gap-5 lg:p-8 xxs:p-4">
          <div className="flex flex-col items-start gap-3">
            <h1 className="lg:text-2xl font-semibold  xxs:text-sm ">Types of <span className="text-blue-700">Wealth</span> Insurance</h1>
            <hr className="w-64"/>
            
            </div>
            <div className="w-full flex flex-wrap items-center justify-evenly">
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={carIcon}
                  width={50}
                  height={50}
                  alt="carIcon"
                  className="xxs:w-8 xxs:h-8 lg:w-14 lg:h-14"
                />
               <div className="flex flex-col items-center ">
               <h1 className="text-lg font-bold xxs:text-sm">Car</h1>
               <p className="text-sm text-slate-500 xxs:text-xs">Insurance</p>
               </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={bikeIcon}
                  width={50}
                  height={50}
                  alt="carIcon"
                  className="xxs:w-8 xxs:h-8 lg:w-14 lg:h-14"
                />
               <div className="flex flex-col items-center ">
               <h1 className="text-lg font-bold xxs:text-sm">Bike</h1>
               <p className="text-sm text-slate-500 xxs:text-xs">Insurance</p>
               </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={homeIcon}
                  width={50}
                  height={50}
                  alt="carIcon"
                  className="xxs:w-8 xxs:h-8 lg:w-14 lg:h-14"
                />
               <div className="flex flex-col items-center ">
               <h1 className="text-lg font-bold xxs:text-sm">Home</h1>
               <p className="text-sm text-slate-500 xxs:text-xs">Insurance</p>
               </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={travelIcon}
                  width={50}
                  height={50}
                  alt="carIcon"
                  className="xxs:w-8 xxs:h-8 lg:w-14 lg:h-14"
                />
               <div className="flex flex-col items-center ">
               <h1 className="text-lg font-bold xxs:text-sm">Travel</h1>
               <p className="text-sm text-slate-500 xxs:text-xs">Insurance</p>
               </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:p-8 w-full xxs:p-4">
          <div className="flex flex-col items-start gap-3 ">
            <h1 className="lg:text-2xl font-bold xxs:text-sm">Top Features of <span className="text-blue-700">Wealth</span> Insurance</h1>
            <hr className="w-64"/>
            
            </div>
            <div className="w-full flex flex-wrap items-center justify-center  gap-3 ">
              <div className="lg:w-72 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 lg:h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300 xs:w-40 xs:h-56 xxs:w-36 xxs:h-48 xxs:shadow-md xxs:border xxs:border-slate-100">
                  <Image
                    src={instantPolicyIcon}
                    width={480}
                    height={480}
                    alt="Instant Policy Icon"
                    className="xxs:w-12 xxs:h-12 lg:w-20 lg:h-20"
                  />
                  <h1 className="lg:text-3xl text-center xxs:text-sm">Instant Policy Quotes</h1>
                  <p className="lg:text-sm text-center text-slate-500 xxs:text-xs">Compare plans from multiple providers in seconds.</p>
              </div>
              <div className="lg:w-72 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 lg:h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300 xs:w-40 xs:h-56  xxs:w-36 xxs:h-48 xxs:shadow-md xxs:border xxs:border-slate-100">
                  <Image
                    src={claimTrackingIcon}
                    width={480}
                    height={480}
                    alt="Instant Policy Icon"
                    className="xxs:w-12 xxs:h-12 lg:w-20 lg:h-20"
                  />
                  <h1 className="lg:text-3xl text-center xxs:text-sm">Claim Tracking</h1>
                  <p className="text-center lg:text-sm text-slate-500 xxs:text-xs">Allow users to track claim status in real-time.</p>
              </div>
              <div className="lg:w-72 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 lg:h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300 xs:w-40 xs:h-56 xxs:w-36 xxs:h-48 xxs:shadow-md xxs:border xxs:border-slate-100">
                  <Image
                    src={supportIcon}
                    width={480}
                    height={480}
                    alt="Instant Policy Icon"
                    className="xxs:w-12 xxs:h-12 lg:w-20 lg:h-20"
                  />
                  <h1 className="lg:text-3xl text-center xxs:text-sm ">24/7 Support</h1>
                  <p className="text-center lg:text-sm text-slate-500 xxs:text-xs">Provide chat or call support for assistance with claims and policy queries.</p>
              </div>
              <div className="lg:w-72 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 lg:h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300 xs:w-40 xs:h-56 xxs:w-36 xxs:h-48 xxs:shadow-md xxs:border xxs:border-slate-100">
                  <Image
                    src={securePaymentIcon}
                    width={480}
                    height={480}
                    alt="Instant Policy Icon"
                    className="xxs:w-12 xxs:h-12 lg:w-20 lg:h-20"
                  />
                  <h1 className="lg:text-3xl text-center xxs:text-sm">Secure Payment</h1>
                  <p className="text-center lg:text-sm text-slate-500 xxs:text-xs">Enable safe and seamless premium payments.</p>
              </div>
            </div>
          </div>
        <div className="p-3 w-full">
        <button onClick={handleEnquireClick} className="text-blue-700 w-full p-3 rounded-lg border-x-2 border-y-2 border-blue-700 xxs:p-2 ">Enquire Now</button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInsurance;
