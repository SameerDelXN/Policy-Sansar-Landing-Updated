"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import HealthImg from "../../../../public/insurance/health-insurance.jpeg";
import VehicleImg from "../../../../public/insurance/car-insurance.jpeg";
import HomeImg from "../../../../public/insurance/home-insurance.jpeg";
import travelImg from "../../../../public/insurance/travel-insurance.jpeg";
import MonthlySalaryIcon from "../../../../public/icons/monthly-salary.png"
import SuretyIcon from "../../../../public/icons/surety.png"
import BankerGuaranteeIcon from "../../../../public/icons/bankerGuarantee.png"
import IncomeLossIcon from "../../../../public/icons/incomeLoss.png"
import InvestmentProtectionIcon from "../../../../public/icons/investmentProtection.png"
import SuretyBondIcon from "../../../../public/icons/suretyBonf.png"
import LiabilityProtectionIcon from "../../../../public/icons/liabilityProtection.png"
import MortgageIcon from "../../../../public/icons/mortgage.png"
import bgImage from "../../../../public/images/financialInsurance.jpg"
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
  const [formData, setFormData] = useState({ fname: "",lname:"", email: "", mobile: "",insuranceType:"Financial" });
  const [showModal, setShowModal] = useState(true); // Initially show the modal
  const [annualIncome, setAnnualIncome] = useState(""); // Track the selected annual income
  const [insuranceType, setInsuranceType] = useState(""); // Track the selected insurance type
  const [firstName, setFirstName] = useState(""); // Track the first name input
  const [lastName, setLastName] = useState(""); // Track the last name input
  const [mobileNumber, setMobileNumber] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }; // Track the mobile number input
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("/api/form-data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
        if (data.success) {
          setShowModal(false);
      toast("We will get back to you soon...",{
        icon:"😊"
      })
        } else {
          toast.error("Something went wrong!");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred.");
      }
    };
  
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
                      <h1 className="text-xl font-semibold">Reach out for <span className="text-blue-700">Financial Insurance</span> !</h1>
                      <button className="text-red-500 text-xl" onClick={handleCloseModal}><RxCross1 /></button>
                      </div>
                      <form className="w-full flex flex-col gap-4">
              <div className="flex items-center justify-between w-full gap-4">
                <input
                  required
                  value={formData.fname}
                  name="fname"
                  onChange={handleChange}
                  className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 xxs:p-3 xxs:text-xs"
                  placeholder="First Name"
                />
                <input
                  required
                  value={formData.lname}
                  name="lname"
                  onChange={handleChange}
                  className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 xxs:p-3 xxs:text-xs"
                  placeholder="Last Name"
                />
              </div>

              <input
                required
                type="tel"
                pattern="^[0-9]{10}$"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 xxs:p-3 xxs:text-xs"
                placeholder="Mobile Number"
              />
                <input
               name="email"
                required
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 xxs:p-3 xxs:text-xs"
                placeholder="Email address"
              />

              <input
                onClick={handleSubmit}
                type="submit"
                value="Continue"
                className={`lg:p-4 xxs:p-3 rounded-lg text-white cursor-pointer bg-blue-700`}
              />
            </form>
          </motion.div>
        </div>
      )}
      <div>
      <div className="bg-white w-full  lg:h-[150vh] xxs:h-[130vh] xs:h-[120vh]  rounded-2xl xxs:flex-col lg:flex-row  flex shadow-lg border border-slate-300 ">
          {/* Red container with background image */}
          <div
  className="lg:w-1/2 lg:h-full bg-black lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-tr-none text-white lg:pt-24 lg:pl-10 lg:flex lg:flex-col xxs:rounded-tl-2xl lg:items-start gap-2 bg-opacity-10 backdrop-blur-2xl xxs:w-full xxs:rounded-bl-none xxs:rounded-tr-2xl xxs:p-10"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <h1 className="lg:text-4xl xxs:text-xl">
    <span className="lg:text-5xl font-bold xxs:text-2xl">F</span>inancial Insurance
  </h1>
  <p className="w-2/3 xxs:w-full xxs:text-sm lg:text-xl">
  Financial insurance provides protection against risks that may impact an individual or business's financial stability, such as unexpected events, market volatility, or economic downturns. It ensures that individuals and businesses can maintain their financial well-being and continue to meet their financial obligations during times of uncertainty or loss.
</p>
</div>

          <div className="lg:w-1/2  flex flex-col  lg:justify-evenly xxs:justify-end  xxs:w-full ">
          <div className="flex flex-col gap-5 lg:p-8 xxs:p-4">
          <div className="flex flex-col items-start gap-3">
            <h1 className="lg:text-2xl font-semibold  xxs:text-sm ">Types of <span className="text-blue-700">Financial</span> Insurance</h1>
            <hr className="w-64"/>
            
            </div>
            <div className="w-full flex flex-wrap items-center justify-evenly">
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={MonthlySalaryIcon}
                  width={50}
                  height={50}
                  alt="Monthly Salary Icon"
                  className="xxs:w-8 xxs:h-8 lg:w-14 lg:h-14"
                />
               <div className="flex flex-col items-center ">
               <h1 className="text-lg font-bold xxs:text-sm">Monthly-Salary</h1>
               <p className="text-sm text-slate-500 xxs:text-xs">Insurance</p>
               </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={SuretyIcon}
                  width={50}
                  height={50}
                  alt="Surety Icon"
                  className="xxs:w-8 xxs:h-8 lg:w-14 lg:h-14"
                />
               <div className="flex flex-col items-center ">
               <h1 className="text-lg font-bold xxs:text-sm">Surety</h1>
               <p className="text-sm text-slate-500 xxs:text-xs">Insurance</p>
               </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={BankerGuaranteeIcon}
                  width={50}
                  height={50}
                  alt="Banker's Guarantee Icon"
                  className="xxs:w-8 xxs:h-8 lg:w-14 lg:h-14"
                />
               <div className="flex flex-col items-center ">
               <h1 className="text-lg font-bold xxs:text-sm">Banker's Gurantee</h1>
               <p className="text-sm text-slate-500 xxs:text-xs">Insurance</p>
               </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={IncomeLossIcon}
                  width={50}
                  height={50}
                  alt="IncomeLoss Icon"
                  className="xxs:w-8 xxs:h-8 lg:w-14 lg:h-14"
                />
               <div className="flex flex-col items-center ">
               <h1 className="text-lg font-bold xxs:text-sm">Income Loss</h1>
               <p className="text-sm text-slate-500 xxs:text-xs">Insurance</p>
               </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:p-8 w-full xxs:p-4">
          <div className="flex flex-col items-start gap-3 ">
            <h1 className="lg:text-2xl font-bold xxs:text-sm">Top Features of <span className="text-blue-700">Financial</span> Insurance</h1>
            <hr className="w-64"/>
            
            </div>
            <div className="w-full flex flex-wrap items-center justify-center  gap-3 ">
              <div className="lg:w-72 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 lg:h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300 xs:w-40 xs:h-56 xxs:w-36 xxs:h-48 xxs:shadow-md xxs:border xxs:border-slate-100">
                  <Image
                    src={InvestmentProtectionIcon}
                    width={480}
                    height={480}
                    alt="Investment Protection Icon"
                    className="xxs:w-12 xxs:h-12 lg:w-20 lg:h-20"
                  />
                  <h1 className="lg:text-2xl text-center xxs:text-sm">Investment Protection</h1>
                  <p className="lg:text-sm text-center text-slate-500 xxs:text-xs">Offers coverage for market-linked investments against significant downturns or specific risks.</p>
              </div>
              <div className="lg:w-72 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 lg:h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300 xs:w-40 xs:h-56  xxs:w-36 xxs:h-48 xxs:shadow-md xxs:border xxs:border-slate-100">
                  <Image
                    src={SuretyBondIcon}
                    width={480}
                    height={480}
                    alt="Surety Bond Icon"
                    className="xxs:w-12 xxs:h-12 lg:w-20 lg:h-20"
                  />
                  <h1 className="lg:text-2xl text-center xxs:text-sm">Surety Bonds</h1>
                  <p className="text-center lg:text-sm text-slate-500 xxs:text-xs">Guarantees project completion or payment obligations, typically for contractors.</p>
              </div>
              <div className="lg:w-72 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 lg:h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300 xs:w-40 xs:h-56 xxs:w-36 xxs:h-48 xxs:shadow-md xxs:border xxs:border-slate-100">
                  <Image
                    src={LiabilityProtectionIcon}
                    width={480}
                    height={480}
                    alt="Liability Protection Icon"
                    className="xxs:w-12 xxs:h-12 lg:w-20 lg:h-20"
                  />
                  <h1 className="lg:text-2xl text-center xxs:text-sm ">Liability Protection</h1>
                  <p className="text-center lg:text-sm text-slate-500 xxs:text-xs">Covers legal costs and compensation in cases of financial liabilities or lawsuits.</p>
              </div>
              <div className="lg:w-72 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 lg:h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300 xs:w-40 xs:h-56 xxs:w-36 xxs:h-48 xxs:shadow-md xxs:border xxs:border-slate-100">
                  <Image
                    src={MortgageIcon}
                    width={480}
                    height={480}
                    alt="Mortgage Icon"
                    className="xxs:w-12 xxs:h-12 lg:w-20 lg:h-20"
                  />
                  <h1 className="lg:text-2xl text-center xxs:text-sm">Mortgage Insurance</h1>
                  <p className="text-center lg:text-sm text-slate-500 xxs:text-xs">EEnsures home loan repayments are made if the borrower encounters financial challenges.</p>
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
