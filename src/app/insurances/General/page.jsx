import Image from "next/image";
import React from "react";
import HealthImg from "../../../../public/insurance/health-insurance.jpeg";
import VehicleImg from "../../../../public/insurance/car-insurance.jpeg";
import HomeImg from "../../../../public/insurance/home-insurance.jpeg";
import travelImg from "../../../../public/insurance/travel-insurance.jpeg";

const GeneralInsurance = () => {
  return (
    <div className="container mx-auto p-6 xxs:p-2 mt-12 mb-12">
      <div className="flex items-center justify-center">
        <div className="w-3/4 md:w-3/4 xxs:w-full">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
            General Insurance
          </h1>
          <div>
            <p className=" text-gray-700 mb-4 text-justify">
              General insurance provides financial protection against unforeseen
              losses, including health issues, vehicle damages, property loss, and
              travel uncertainties. It ensures that individuals and businesses
              remain financially stable during emergencies.
            </p>
            <p className=" text-gray-700 mb-8 text-justify">
              At Policy Sansar, we are committed to providing full support to our
              customers by offering a wide range of general insurance services. We
              help you choose the best policy tailored to your needs while
              ensuring hassle-free claims and excellent customer service.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {[
          {
            img: HealthImg,
            title: "Health Insurance",
            desc: "Covers medical expenses, ensuring financial security during health emergencies.",
            extra: "Health insurance provides coverage for hospitalization, surgeries, and outpatient treatments. It safeguards your financial well-being during illness or accidents, preventing heavy medical costs from burdening you."
          },
          {
            img: VehicleImg,
            title: "Vehicle Insurance",
            desc: "Protects your vehicle from accidents, theft, and damages.",
            extra: "Vehicle insurance not only covers damages to your vehicle but also protects you from third-party liabilities, accidents, and theft. This ensures peace of mind while driving and financial protection in case of emergencies."
          },
          {
            img: HomeImg,
            title: "Home Insurance",
            desc: "Covers damages to your home and belongings due to unforeseen events.",
            extra: "Home insurance covers damages to your home structure, furniture, and valuables from natural disasters, fire, theft, and other risks. It helps restore your home and property to its original condition after a loss."
          },
          {
            img: travelImg,
            title: "Travel Insurance",
            desc: "Covers trip cancellations, medical emergencies, and travel-related risks.",
            extra: "Travel insurance ensures coverage for unexpected events while traveling, such as trip cancellations, medical emergencies abroad, lost luggage, and delayed flights. It guarantees you peace of mind during your journeys."
          },
        ].map((item, index) => (
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

export default GeneralInsurance;
