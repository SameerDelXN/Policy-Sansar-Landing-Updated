import React from "react";
import Image from "next/image";
import AnimatedHeader from "./AnimatedHeader";

const Our_Partners = () => {
  const partners = [
    { id: 1, img: "/providers/lombard.png", name: "Partner 2" },
    { id: 2, img: "/providers/icici-life.png", name: "Partner 2" },
    { id: 3, img: "/providers/tata-aia-life-logo.png", name: "Partner 3" },
    { id: 4, img: "/providers/hdfc.png", name: "Partner 4" },
    { id: 5, img: "/providers/hdfc-ergo.jpeg", name: "Partner 5" },
    { id: 6, img: "/providers/bajaj.png", name: "Partner 6" },
    { id: 7, img: "/providers/tata-aig.png", name: "Partner 7" },
    { id: 8, img: "/providers/kotak.png", name: "Partner 8" },
    { id: 9, img: "/providers/max-life.png", name: "Partner 9" },
    { id: 10, img: "/providers/lic.png", name: "Partner 9" },
    { id: 11, img: "/providers/iffco.png", name: "Partner 9" },
    { id: 12, img: "/providers/zurich.png", name: "Partner 9" },
    { id: 13, img: "/providers/uiico.png", name: "Partner 9" },
    { id: 14, img: "/providers/national.png", name: "Partner 9" },
    { id: 15, img: "/providers/digit.png", name: "Partner 9" },
  ];

  return (
    <div className="mt-24 w-full h-[50vh] bg-white flex flex-col items-center justify-center gap-5 overflow-hidden px-4">
      <AnimatedHeader text="Our Partners" />
      <div className="relative overflow-hidden w-full">
  <div className="flex animate-scroll gap-4 sm:gap-6 md:gap-8">
    {partners.concat(partners).map((partner, index) => ( // Combine original and duplicate
      <div
        key={index} // Use index for unique keys in the combined array
        className="flex-shrink-0 w-32 xs:w-36 sm:w-40 md:w-48 text-center bg-white rounded-2xl"
      >
        <Image
          width={400}
          height={400}
          src={partner.img}
          alt={partner.name}
          className="w-full h-28 xs:h-32 sm:h-36 md:h-40 rounded-lg object-contain"
        />
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Our_Partners;
