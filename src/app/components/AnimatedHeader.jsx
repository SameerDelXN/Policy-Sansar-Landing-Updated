// components/AnimatedHeader.js
"use client";
import React from 'react';

const AnimatedHeader = ({ text }) => {
  return (
    <div className="flex items-center justify-center">
      <h2 className="text-center font-medium md:text-2xl xs:text-lg sm:text-lg xxs:text-lg">
        {text}
      </h2>
    </div>
  );
};

export default AnimatedHeader;
