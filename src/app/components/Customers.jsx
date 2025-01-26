import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Policy Sansar made my insurance buying experience so smooth! I found the perfect term plan in just minutes and got it approved on the same day. Highly recommended!",
    emoji: "👍",
  },
  {
    text: "I was confused about choosing the right health insurance, but their expert advice and transparent comparison helped me make an informed decision. Great service!",
    emoji: "👤",
  },
  {
    text: "Policy Sansar made my insurance buying experience so smooth! I found the perfect term plan in just minutes and got it approved on the same day. Highly recommended!",
    emoji: "💬",
  },
];

const Customers = () => {
  return (
    <div className="flex flex-col items-center py-8 w-full min-h-[50vh] bg-white">
      <h2 className="text-2xl font-bold mb-6">Customer's Say !!</h2>
      <div className="flex flex-wrap items-center gap-4 xxs:items-center xxs:justify-center xxs:w-full xs:justify-center xs:items-center xs:w-full sm:items-center sm:w-full sm:justify-center">
        {/* Left Arrow */}
        {/* <ChevronLeft className="cursor-pointer w-6 h-6" /> */}
        
        {/* Testimonials */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col justify-between w-64"
          >
            <p className="text-base mb-4">{testimonial.text}</p>
            <span className="text-2xl">{testimonial.emoji}</span>
          </div>
        ))}

        {/* Right Arrow */}
        {/* <ChevronRight className="cursor-pointer w-6 h-6" /> */}
      </div>
    </div>
  );
};

export default Customers;
