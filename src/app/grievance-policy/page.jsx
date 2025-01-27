import React from "react";
import graveance from "../../../public/coverimg/graveance.png";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full h-auto flex flex-col lg:gap-10 xxs:gap-5 p-6 bg-gray-50">
      {/* Header Section */}
      <div className="w-full h-56 bg-black p-6 relative ">
                       <Image src={graveance} layout="fill" objectFit="cover" alt="about-us"  />
                       <div className="absolute inset-0 bg-black opacity-40"></div>
                       <div className="absolute inset-0 flex items-center pl-16 text-white ">
                         <h1 className="text-2xl font-bold">Grievance</h1>
               
                       </div>
                     </div>

      {/* Content Section */}
      <div className="bg-white shadow-md border border-gray-200 rounded-3xl p-8 text-gray-700 space-y-4 leading-relaxed">
        <p className="text-justify">
          The customer can lodge their complaint through any of the following modes:
          by visiting the branch/office, writing a letter, through email, direct
          calling, or via our website. If the customer is not satisfied with the
          resolution provided by the customer service team/executives of the
          company OR no response is received within 15 days, the customer could
          write to:
        </p>
        <div className="space-y-2 text-justify">
          <p>
            <span className="font-semibold">Grievance Redressal Officer (GRO):</span> Sample Name
          </p>
          <p>
            <span className="font-semibold">Address:(Registered Office ) : </span> 3rd Floor,Plot No.264/265,Vaswani Chamber,Dr.Annie Besant Road,Worli Colony,Mumbai-400018
          </p>
          <p>
            <span className="font-semibold">Address:(Corporate Office ) : </span>104,1st Floor, A-Wing,Boomerang, Chandivali Farm Road,Andheri East,Mumbai-40072
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:info@riskfreelife.com" className="text-blue-600 underline">
            po@policysansar.com
            </a>
          </p>
          <p>
            <span className="font-semibold">Call:</span> +91 9644170004 between 10:30 AM to 06:00 PM, Monday
            to Friday.
          </p>
          <p>
            <span className="font-semibold">Reply:</span> A response to the complaint will be given
            within 7 working days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
