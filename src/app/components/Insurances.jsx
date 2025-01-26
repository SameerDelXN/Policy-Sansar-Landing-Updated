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
    { name: "General Insurance", img: GeneralImg, link: "/General" },
    { name: "Health Insurance", img: HealthImg, link: "/Health" },
    { name: "Life Insurance", img: LifeImg, link: "/life" },
    { name: "Group Insurance", img: GroupImg, link: "/group" },
    { name: "Financial Insurance", img: FinancialImg, link: "/financial" },
    { name: "Wealth Insurance", img: WealthImg, link: "/wealth" },
  ];

  return (
    
    <div className="w-full min-h-[100vh] p-10 ">
        <h2 className="text-center text-xl md:text-3xl font-medium mb-6">
         Explore Our Insurance Plans
       </h2>
       <div className="flex flex-wrap justify-center gap-6 w-full">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative w-96 h-96  border-2 bg-white border-black rounded-full p-3 group hover:p-0 transition-all duration-300"
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
            <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center text-sm font-medium bg-white px-3 py-1 rounded-lg shadow-md">
              {plan.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsurancePlans;
