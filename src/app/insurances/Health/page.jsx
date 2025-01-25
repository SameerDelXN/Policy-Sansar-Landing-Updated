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
      annualIncome &&
      insuranceType &&
      mobileNumber.match(/^[0-9]{10}$/) // Ensure mobile number is 10 digits
    );
  };
  const handleEnquireClick=()=>{
    setShowModal(true);
  }
  return (
    <div className="w-full h-auto p-10 ">
      <Toaster/>
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          
        >
          <motion.div
            initial={{ opacity: 0, y: -100 }} // Start above the screen
            animate={{ opacity: 1, y: 0 }} // Animate to its final position
            exit={{  y: 100,opacity:0 }} // Exit animation
            transition={{ duration: 0.5 }} // Duration of the animation
          className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-start gap-6 w-full max-w-4xl">
            <div className="w-full flex items-center justify-between">
                       <h1 className="text-xl font-semibold">Get in touch</h1>
                       <button className="text-red-500 text-xl" onClick={handleCloseModal}><RxCross1 /></button>
                       </div>
            <form className="w-full flex flex-col gap-4">
              <div className="flex items-center justify-between w-full gap-4">
                <input
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border border-slate-300 p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="First Name"
                />
                <input
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border border-slate-300 p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Last Name"
                />
              </div>

              <input
                required
                type="tel"
                pattern="^[0-9]{10}$"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="border border-slate-300 p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Mobile Number"
              />

              <div className="flex items-center justify-between w-full gap-4">
                <select
                  required
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(e.target.value)}
                  className="border border-slate-300 p-4 rounded-lg w-full bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-50"
                >
                  <option value="">Select Annual Income</option>
                  <option value="1-2 lac">1-2 Lac</option>
                  <option value="2-5 lac">2-5 Lac</option>
                  <option value="5-10 lac">5-10 Lac</option>
                  <option value="10-20 lac">10-20 Lac</option>
                  <option value="20+ lac">20+ Lac</option>
                </select>

                <select
                  required
                  value={insuranceType}
                  onChange={(e) => setInsuranceType(e.target.value)}
                  className="border border-slate-300 p-4 rounded-lg w-full bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-50"
                >
                  <option value="">Select Insurance Type</option>
                  <option value="Health">Health Insurance</option>
                  <option value="Vehicle">Vehicle Insurance</option>
                  <option value="Home">Home Insurance</option>
                  <option value="Travel">Travel Insurance</option>
                </select>
              </div>

              <input
                onClick={handleContinueClick}
                type="submit"
                value="Continue"
                disabled={!isFormValid()} // Disable button if form is not valid
                className={`p-4 rounded-lg text-white cursor-pointer ${isFormValid() ? "bg-blue-700" : "bg-gray-400"}`}
              />
            </form>
          </motion.div>
        </div>
      )}
      <div>
      <div className="bg-white w-full h-[150vh] rounded-2xl flex shadow-lg border border-slate-300">
          {/* Red container with background image */}
          <div
  className="w-1/2 h-full rounded-tl-2xl rounded-bl-2xl text-white pt-24 pl-10 flex flex-col items-start gap-2 bg-opacity-30 backdrop-blur-2xl"
  style={{
    backgroundImage: `url(${bgImage.src})`, // Setting the imported background image
    backgroundSize: 'cover', // Ensure the image covers the entire container
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', // Ensure the background doesn't repeat
  }}
>
  <h1 className="text-4xl">
    <span className="text-5xl font-bold">H</span>ealth Insurance
  </h1>
  <p className="w-2/3">
  Health insurance provides financial protection against high medical costs, ensuring you and your family receive quality healthcare without financial burden. It covers hospitalization, treatments, and preventive care, safeguarding your well-being.  </p>
</div>

          <div className="w-1/2  flex flex-col  justify-evenly">
          <div className="flex flex-col gap-5 p-8">
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-2xl font-bold">Why <span className="text-blue-700">Health</span> Insurance?</h1>
            <hr className="w-64"/>
            
            </div>
           <h1 className="text-xl">At Policy Sansar, we offer comprehensive health insurance plans tailored to your needs. Our policies cover a range of medical expenses, including surgeries, doctor consultations, diagnostic tests, and post-hospitalization care.</h1>
          </div>
          <div className="flex flex-col gap-5 p-8 w-full">
          <div className="flex flex-col items-start gap-3 ">
            <h1 className="text-2xl font-bold">Top Features of <span className="text-blue-700">Health</span> Insurance</h1>
            <hr className="w-64"/>
            
            </div>
            <div className="w-full flex flex-wrap items-center justify-center gap-3 ">
              <div className="w-72 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300">
                  <Image
                    src={instantPolicyIcon}
                    width={90}
                    height={90}
                    alt="Instant Policy Icon"
                  />
                  <h1 className="text-3xl text-center ">Personalized Health Plans</h1>
                  <p className="text-center text-slate-500">customized health insurance plans based on user needs and medical history.</p>
              </div>
              <div className="w-72 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300">
                  <Image
                    src={claimTrackingIcon}
                    width={90}
                    height={90}
                    alt="Instant Policy Icon"
                  />
                  <h1 className="text-3xl text-center ">Cashless Hospitalization</h1>
                  <p className="text-center text-slate-500">cashless treatment options at a wide network of hospitals.</p>
              </div>
              <div className="w-72 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300">
                  <Image
                    src={supportIcon}
                    width={90}
                    height={90}
                    alt="Instant Policy Icon"
                  />
                  <h1 className="text-3xl text-center ">Free Health Check-up</h1>
                  <p className="text-center text-slate-500">Provide free annual health check-ups with selected health plans.</p>
              </div>
              <div className="w-72 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300">
                  <Image
                    src={securePaymentIcon}
                    width={90}
                    height={90}
                    alt="Instant Policy Icon"
                  />
                  <h1 className="text-3xl text-center ">Family Floater Plan</h1>
                  <p className="text-center text-slate-500">Allow users to cover their entire family under a single health plan.</p>
              </div>
            </div>
          </div>
        <div className="p-3 w-full">
        <button onClick={handleEnquireClick} className="text-blue-700 w-full p-3 rounded-lg border-x-2 border-y-2 border-blue-700 ">Enquire Now</button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInsurance;
