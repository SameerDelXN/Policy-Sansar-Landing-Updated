import Image from "next/image";
import Link from "next/link";
import GeneralImg from "../../../public/insurance/generalInsurance.png";
import HealthImg from "../../../public/insurance/healthInsurance.png";
import LifeImg from "../../../public/insurance/lifeInsurance.png";
import GroupImg from "../../../public/insurance/GroupInsurance.png";
import FinancialImg from "../../../public/insurance/financensurance.png";
import WealthImg from "../../../public/insurance/wealthInsurance.png"; // Replace with your actual image path
import ArrowIcon from "../../../public/icons/arrow.png";

const InsurancePlans = () => {
  const plans = [
    { name: "General Insurance", img: GeneralImg, link: "/insurances/General" },
    { name: "Health Insurance", img: HealthImg, link: "/insurances/Health" },
    { name: "Life Insurance", img: LifeImg, link: "/insurances/Life" },
    { name: "Group Insurance", img: GroupImg, link: "/insurances/Group" },
    { name: "Financial Insurance", img: FinancialImg, link: "/insurances/Financial" },
    { name: "Wealth Insurance", img: WealthImg, link: "/insurances/Wealth" },
  ];

  return (
    <div className="w-full min-h-[100vh] p-10 flex flex-col items-center gap-10">
      <h2 className="text-center text-xl md:text-3xl font-medium mb-6">
        Explore Our Insurance Plans
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 xxs:grid-cols-1 xxs:gap-8 xs:grid-cols-2">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative lg:w-64 lg:h-64 border-2 bg-white border-slate-300 rounded-full p-3 group hover:p-0 transition-all duration-300 mx-auto xxs:w-44 xxs:h-44"
          >
            <Link href={plan.link}>
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={plan.img}
                  alt={plan.name}
                  layout="fill"
                  className="object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/90 rounded-full p-3">
                    <Image
                      src={ArrowIcon}
                      alt="Arrow Icon"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </Link>
            <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center text-sm font-medium bg-white px-3 py-1 rounded-lg shadow-md lg:w-24 xs:w-28  xxs:text-xs">
              {plan.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsurancePlans;
