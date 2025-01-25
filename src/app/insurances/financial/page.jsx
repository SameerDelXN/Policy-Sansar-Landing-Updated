import Image from "next/image";
import React from "react";
import HealthImg from "../../../../public/insurance/health-insurance.jpeg";
import VehicleImg from "../../../../public/insurance/car-insurance.jpeg";
// import HomeImg from "../../../../public/insurance/home-insurance.jpeg";
import MicroImg from "../../../../public/insurance/micro.png";
import ruralImg from "../../../../public/insurance/h2.png";
import CropImg from "../../../../public/insurance/crop.png";
import AccidentImg from "../../../../public/insurance/persnalaccident.png";

// import travelImg from "../../../../public/insurance/travel-insurance.jpeg";

const FinancialInsurance = () => {
  return (
    <div className="container mx-auto p-6 xxs:p-2 mt-12 mb-12">
      <div className="flex items-center justify-center">
        <div className="w-3/4 md:w-3/4 xxs:w-full">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Financial Inclusion Insurance
          </h1>
          <div>
            <p className=" text-gray-700 mb-4 text-justify">
            Policy Sansar is committed to promoting financial inclusion by offering accessible and affordable insurance products. Our Micro Insurance plans provide essential coverage for low-income individuals, especially in rural areas, helping them protect themselves and their families from unexpected financial risks. Additionally, our Rural Small Saving Policies cater to the needs of rural communities, offering savings and protection plans that are both affordable and simple to understand.
            </p>
            <p className=" text-gray-700 mb-8 text-justify">
            We aim to bridge the insurance gap by ensuring that every individual, regardless of their background, has access to essential protection. Through these efforts, we support social and economic inclusion, helping families in underserved areas build financial security.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {[
  {
    "img": MicroImg,
    "title": "Micro Insurance",
    "desc": "Affordable insurance aimed at low-income individuals and rural populations.",
    "extra": "Micro Insurance provides basic coverage for individuals in underserved communities. It covers life, health, and accident risks, offering protection for those excluded from traditional insurance."
  },
  {
    "img": ruralImg,
    "title": "Rural Health Insurance",
    "desc": "Provides healthcare coverage for rural populations.",
    "extra": "Rural Health Insurance offers coverage for medical expenses in rural areas, ensuring access to healthcare services and protecting individuals from high medical costs."
  },
  {
    "img": CropImg,
    "title": "Crop Insurance",
    "desc": "Protects farmers against crop loss due to natural disasters or disease.",
    "extra": "Crop Insurance helps farmers safeguard their livelihoods by covering crop loss from natural disasters, pests, or diseases, ensuring financial stability in tough times."
  },
  {
    "img": AccidentImg,
    "title": "Accident Insurance",
    "desc": "Covers accidental injuries or death, providing financial protection.",
    "extra": "Accident Insurance offers financial protection in the event of an accident, covering medical expenses, permanent disability, and even death, helping families recover financially."
  }
]
.map((item, index) => (
          <div
            key={index}
            className={`w-full md:w-3/4 flex flex-col-reverse md:flex-row items-center gap-6 p-6 xxs:p-2  xxs:w-full ${index % 2 === 0 ? 'md:flex-row-reverse ' : ''}`}
          >
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-start">{item.title}</h2>
              <p className="text-gray-700 mt-4 text-justify">{item.desc}</p>
              <p className="text-gray-700 mt-4 text-justify">{item.extra}</p>
            </div>
            <div className="relative flex-1 w-full h-48 md:h-full ">
              <Image
                width={1920}
                height={1080}
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75 rounded-3xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialInsurance;
