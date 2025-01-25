import Image from "next/image";
import React from "react";
import LifeImage from "../../../../public/insurance/lifeee.png";
import HealthImg from "../../../../public/insurance/health-insurance.jpeg";
import PerAccident from "../../../../public/insurance/persnalaccident.png";

import TermImg from "../../../../public/insurance/micro.png";

const GroupInsurance = () => {
  return (
    <div className="container mx-auto p-6 xxs:p-2 mt-12 mb-12">
      <div className="flex items-center justify-center">
        <div className="w-3/4 md:w-3/4 xxs:w-full">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Group Insurance
          </h1>
          <div>
            <p className=" text-gray-700 mb-4 text-justify">
              At Policy Sansar, we understand the importance of providing
              comprehensive coverage to organizations and their members. We are
              proud to partner with 11 Co-operative Banks, offering Credit Life
              policies for their Personal Loans (PL), Home Loans (HL), and Loan
              Against Property (LAP). Additionally, we work with 6 Non-Banking
              Financial Companies (NBFCs) and Microfinance Institutions (MFIs)
              to cover loans under our Group Term Life (GTL) policies, ensuring
              financial security for all borrowers.{" "}
            </p>
            <p className=" text-gray-700 mb-8 text-justify">
              We also offer specialized Kisan Credit Card Holder Group Term Life
              coverage in District Central Co-operative Banks, helping rural
              communities safeguard their financial future. For corporates, we
              provide Employer-Employee Life Term Plans to ensure that both
              employers and their employees are well-protected, fostering a
              secure work environment.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {[
          {
            img: LifeImage,
            title: "Group Life Insurance",
            desc: "Provides life coverage for a group, typically employees or members.",
            extra:
              "Group Life Insurance offers affordable life coverage for groups. It helps protect employees or group members, providing financial support to their beneficiaries in case of death.",
          },
          {
            img: HealthImg,
            title: "Group Health Insurance",
            desc: "Provides medical coverage for employees or group members.",
            extra:
              "Group Health Insurance helps cover medical expenses for a group, including hospitalization, surgeries, and outpatient treatments, ensuring financial security during health emergencies.",
          },
          {
            img: PerAccident,
            title: "Group Personal Accident Insurance",
            desc: "Covers accidental injury or death for a group of individuals.",
            extra:
              "Group Personal Accident Insurance provides financial protection to group members in case of accidental injury or death. It helps cover medical costs, disability, and death benefits.",
          },
          {
            img: TermImg,
            title: "Group Term Life Insurance",
            desc: "Offers life coverage for a specified term to a group.",
            extra:
              "Group Term Life Insurance provides affordable coverage for a group, offering death benefits to the beneficiaries if the insured person passes away during the policy term.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`w-full md:w-3/4 flex flex-col-reverse md:flex-row items-center gap-6 p-6 xxs:p-2  xxs:w-full ${
              index % 2 === 0 ? "md:flex-row-reverse " : ""
            }`}
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

export default GroupInsurance;
