import Image from "next/image";
import React from "react";
import HealthImg from "../../../../public/insurance/health-insurance.jpeg";
import VehicleImg from "../../../../public/insurance/car-insurance.jpeg";
// import HomeImg from "../../../../public/insurance/home-insurance.jpeg";
import ulipsImg from "../../../../public/insurance/ulips.png";
import childImg from "../../../../public/insurance/child.png";
import PensionImg from "../../../../public/insurance/pention.png";

import EndowermentPlan from "../../../../public/insurance/plans.png";

const WealthInsurance = () => {
  return (
    <div className="container mx-auto p-6 xxs:p-2 mt-12 mb-12">
      <div className="flex items-center justify-center">
        <div className="w-3/4 md:w-3/4 xxs:w-full">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Wealth Creation Insurance
          </h1>
          <div>
            <p className=" text-gray-700 mb-4 text-justify">
            At Policy Sansar, we provide tailored Wealth Creation Insurance products designed for high-net-worth individuals (HNIs), Non-Resident Indians (NRIs), and NRI clients. Our dedicated team offers personalized wealth creation advisory services, helping you secure your financial future while growing your wealth. We combine the security of life insurance with investment opportunities, allowing you to achieve long-term financial goals such as retirement planning, education funding, or wealth accumulation.
            </p>
            <p className=" text-gray-700 mb-8 text-justify">
            We go beyond traditional wealth management by offering innovative Wealth Creation Insurance solutions that not only provide life coverage but also present robust opportunities for investment growth. Our plans are carefully designed to help individuals build and secure their wealth over time, ensuring financial stability and peace of mind. With a focus on high-net-worth individuals (HNIs), Non-Resident Indians (NRIs), and clients with specialized financial goals, we provide expert guidance to help you navigate the complexities of wealth creation. By offering a blend of insurance protection and strategic investments, we enable you to achieve financial independence and long-term
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {[
  {
    "img": ulipsImg,
    "title": "Unit-Linked Insurance Plans (ULIPs)",
    "desc": "Combines life insurance with investment opportunities to create wealth.",
    "extra": "ULIPs allow you to invest in a mix of funds while offering life insurance protection. They offer potential for wealth accumulation and help you achieve long-term financial goals."
  },
  {
    "img": EndowermentPlan,
    "title": "Endowment Plans",
    "desc": "Provides life coverage along with a savings plan for future goals.",
    "extra": "Endowment plans combine life insurance and savings, paying out a lump sum at the end of the policy term or in case of death, helping you plan for future needs like education, marriage, or retirement."
  },
  {
    "img": PensionImg,
    "title": "Pension Plans",
    "desc": "Helps build a steady income stream post-retirement.",
    "extra": "Pension plans allow you to accumulate savings during your working years and provide a regular income after retirement, ensuring financial independence in your later years."
  },
  {
    "img": childImg,
    "title": "Child Plans",
    "desc": "Secures the future of your children by providing financial coverage.",
    "extra": "Child Plans ensure your child's education and other future needs are covered by offering a combination of life coverage and savings, providing financial security for their future."
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

export default WealthInsurance;
