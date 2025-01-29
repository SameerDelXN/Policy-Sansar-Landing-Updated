"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import HealthImg from "../../../../public/insurance/health-insurance.jpeg";
import VehicleImg from "../../../../public/insurance/car-insurance.jpeg";
import HomeImg from "../../../../public/insurance/home-insurance.jpeg";
import travelImg from "../../../../public/insurance/travel-insurance.jpeg";
import bgImage from "../../../../public/images/wealthInsurance.jpg"
import carIcon from "../../../../public/icons/carIcon.png"
import bikeIcon from "../../../../public/icons/bikeIcon.png"
import homeIcon from "../../../../public/icons/homeIcon.png"
import travelIcon from "../../../../public/icons/travelIcon.png"
import UlipIcon from "../../../../public/icons/ulip.png"
import PlanIcon from "../../../../public/icons/plan.png"
import PensionIcon from "../../../../public/icons/pension.png"
import ChildIcon from "../../../../public/icons/child.png"
import {toast,Toaster} from "react-hot-toast"
import GuranteeIcon from "../../../../public/icons/guarantee.png"
import BenefitIcon from "../../../../public/icons/benefits.png"
import WithdrawIcon from "../../../../public/icons/cash-withdrawal.png"
import LoanIcon from "../../../../public/icons/pay.png"
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
    <div className="w-full h-auto p-10 phone:p-2">
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
          className="bg-white lg:p-10 rounded-lg shadow-lg flex flex-col items-start gap-6 w-full max-w-4xl phone:p-4 phone:w-5/6 ">
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
                  className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 phone:p-3 phone:text-xs"
                  placeholder="First Name"
                />
                <input
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 phone:p-3 phone:text-xs"
                  placeholder="Last Name"
                />
              </div>

              <input
                required
                type="tel"
                pattern="^[0-9]{10}$"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 phone:p-3 phone:text-xs"
                placeholder="Mobile Number"
              />
               <input
                required
                type="email"
                className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 phone:p-3 phone:text-xs"
                placeholder="Email address"
              />

             

              <input
                onClick={handleContinueClick}
                type="submit"
                value="Continue"
                disabled={!isFormValid()} // Disable button if form is not valid
                className={`lg:p-4 phone:p-3 rounded-lg text-white cursor-pointer ${isFormValid() ? "bg-blue-700" : "bg-gray-400"}`}
              />
            </form>
          </motion.div>
        </div>
      )}
      <div>
      <div className="bg-white w-full  laptop:h-[190vh] md2:h-[150vh] desktop2xl:h-[100vh] phone:min-h-[145vh]  xs:h-[120vh]  rounded-2xl phone:flex-col lg:flex-row  flex shadow-lg border border-slate-300 ">
          {/* Red container with background image */}
          <div
  className="lg:w-1/2 laptop:h-full bg-black lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-tr-none text-white lg:pt-24 lg:pl-10 lg:flex lg:flex-col phone:rounded-tl-2xl lg:items-start gap-2 bg-opacity-10 backdrop-blur-2xl phone:w-full phone:rounded-bl-none phone:rounded-tr-2xl phone:p-10"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <h1 className="lg:text-4xl phone:text-xl">
    <span className="lg:text-5xl font-bold phone:text-2xl">W</span>ealth Insurance
  </h1>
  <p className="w-2/3 phone:w-full phone:text-sm lg:text-xl">
  Wealth insurance provides financial protection against risks that may impact an individual wealth, including market fluctuations, investment losses, and unforeseen financial emergencies. It ensures that individuals and families can preserve and grow their wealth.
</p>
</div>

          <div className="lg:w-1/2  flex flex-col  lg:justify-between phone:justify-end  phone:w-full ">
         <div className="flex flex-col items-start w-full">
         <div className="flex flex-col gap-5 lg:p-8 phone:p-4 w-full">
          <div className="flex flex-col items-start gap-3">
            <h1 className="lg:text-2xl font-semibold  phone:text-sm ">Types of <span className="text-blue-700">Wealth</span> Insurance</h1>
            <hr className="w-64"/>
            
            </div>
            <div className="w-full flex flex-wrap items-center justify-evenly">
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={UlipIcon}
                  width={50}
                  height={50}
                  alt="Ulip Icon"
                  className="phone:w-8 phone:h-8 lg:w-14 lg:h-14"
                />
               <div className="flex flex-col items-center ">
               <h1 className="text-lg font-bold phone:text-sm">ULIP's</h1>
               <p className="text-sm text-slate-500 phone:text-xs">Insurance</p>
               </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={PlanIcon}
                  width={50}
                  height={50}
                  alt="Endowment Icon"
                  className="phone:w-8 phone:h-8 lg:w-14 lg:h-14"
                />
               <div className="flex flex-col items-center ">
               <h1 className="text-lg font-bold phone:text-sm">Endowment</h1>
               <p className="text-sm text-slate-500 phone:text-xs">Insurance</p>
               </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={PensionIcon}
                  width={50}
                  height={50}
                  alt="Pension Icon"
                  className="phone:w-8 phone:h-8 lg:w-14 lg:h-14"
                />
               <div className="flex flex-col items-center ">
               <h1 className="text-lg font-bold phone:text-sm">Pension</h1>
               <p className="text-sm text-slate-500 phone:text-xs">Insurance</p>
               </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={ChildIcon}
                  width={50}
                  height={50}
                  alt="Child Icon"
                  className="phone:w-8 phone:h-8 lg:w-14 lg:h-14"
                />
               <div className="flex flex-col items-center ">
               <h1 className="text-lg font-bold phone:text-sm">Child</h1>
               <p className="text-sm text-slate-500 phone:text-xs">Insurance</p>
               </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:p-8 w-full phone:p-4">
          <div className="flex flex-col items-start gap-3 ">
            <h1 className="lg:text-2xl font-bold phone:text-sm">Top Features of <span className="text-blue-700">Wealth</span> Insurance</h1>
            <hr className="w-64"/>
            
            </div>
            <div className="w-full flex flex-wrap items-center justify-center  gap-3 ">
              <div className="lg:w-72 xl:w-64 desktop2xl:w-72 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 lg:h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300 xs:w-40 xs:h-56 phone:w-44 phone:h-52  phone:shadow-md phone:border phone:border-slate-100">
                  <Image
                    src={GuranteeIcon}
                    width={480}
                    height={480}
                    alt="Gurantee Icon"
                    className="phone:w-12 phone:h-12 lg:w-20 lg:h-20"
                  />
                  <h1 className="lg:text-2xl text-center phone:text-sm">Guaranteed Returns</h1>
                  <p className="lg:text-sm text-center text-slate-500 phone:text-xs">Provides assured payouts at maturity, ensuring financial stability.</p>
              </div>
              <div className="lg:w-72 xl:w-64 desktop2xl:w-72 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 lg:h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300 xs:w-40 xs:h-56  phone:w-44 phone:h-52  phone:shadow-md phone:border phone:border-slate-100">
                  <Image
                    src={BenefitIcon}
                    width={480}
                    height={480}
                    alt="Tax Benefit Icon"
                    className="phone:w-12 phone:h-12 lg:w-20 lg:h-20"
                  />
                  <h1 className="lg:text-2xl text-center phone:text-sm">Tax Benefits</h1>
                  <p className="text-center lg:text-sm text-slate-500 phone:text-xs">Offers tax deductions on premiums paid under Section 80C of the Income Tax Act.</p>
              </div>
              <div className="lg:w-72 xl:w-64 desktop2xl:w-72 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 lg:h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300 xs:w-40 xs:h-56 phone:w-44 phone:h-52  phone:shadow-md phone:border phone:border-slate-100">
                  <Image
                    src={WithdrawIcon}
                    width={480}
                    height={480}
                    alt="Withdraw Icon"
                    className="phone:w-12 phone:h-12 lg:w-20 lg:h-20"
                  />
                  <h1 className="lg:text-2xl text-center phone:text-sm ">Partial Withdrawals</h1>
                  <p className="text-center lg:text-sm text-slate-500 phone:text-xs">Allows withdrawals after a specific period to meet financial needs.</p>
              </div>
              <div className="lg:w-72 xl:w-64 desktop2xl:w-72 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 lg:h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300 xs:w-40 xs:h-56 phone:w-44 phone:h-52  phone:shadow-md phone:border phone:border-slate-100">
                  <Image
                    src={LoanIcon}
                    width={480}
                    height={480}
                    alt="Loan Icon"
                    className="phone:w-12 phone:h-12 lg:w-20 lg:h-20"
                  />
                  <h1 className="lg:text-2xl text-center phone:text-sm">Loan Facility</h1>
                  <p className="text-center lg:text-sm text-slate-500 phone:text-xs">Enables policyholders to borrow against the policy during emergencies.</p>
              </div>
            </div>
          </div>
         </div>
        <div className="p-3 w-full">
        <button onClick={handleEnquireClick} className="text-blue-700 w-full p-3 rounded-lg border-x-2 border-y-2 border-blue-700 phone:p-2 ">Enquire Now</button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInsurance;
