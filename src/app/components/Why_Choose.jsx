"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Bottom1LeftIcon from "../../../public/icons/re.png";
import MidRightIcon from "../../../public/icons/midRightIcon.png";
import MidLeftIcon from "../../../public/icons/MidLeftIcon.png";
import BottomRightIcon from "../../../public/icons/BottomRightIcon.png";
import TopIcon from "../../../public/icons/TopIcon.png";
import AnimatedHeader from "./AnimatedHeader";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Why_Choose = () => {
  return (
   <div className="w-full h-[100vh]"></div>
  );
};

export default Why_Choose;
