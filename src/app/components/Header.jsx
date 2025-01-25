"use client";
import React, { useState, useEffect, useRef } from "react";
import Logo from "../../../public/insurance/logo.png";
import Link1 from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  const [logoSize, setLogoSize] = useState(120); // Initial logo size in px
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state for large screens
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); // Submenu state for mobile

  const menuRef = useRef(null); // Ref for mobile menu
  const dropdownRef = useRef(null); // Ref for dropdown menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubmenu = () => setIsSubmenuOpen(!isSubmenuOpen);

  // Close the menu if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) && // Check if the click is outside the mobile menu
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) // Check if the click is outside the dropdown menu
      ) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
        setIsSubmenuOpen(false);
      } else if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false); // Ensures the mobile menu closes if clicked outside
      } else if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false); // Ensures the dropdown menu closes if clicked outside
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenWidth = window.innerWidth;

      if (screenWidth >= 768) {
        if (scrollPosition > 2) {
          setLogoSize(Math.max(50, 130 - scrollPosition));
        } else {
          setLogoSize(120);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };

  return (
    <div className="w-full sticky top-0 z-10 bg-white">
      <div className="w-full flex items-center justify-between px-4 py-2 lg:py-1 text-lg font-medium shadow-[0_4px_10px_rgba(0,0,0,0.1)] border-b border-gray-200">
        {/* Logo Section */}
        <Link1
          href={"/"}
          className="text-2xl font-bold text-black tracking-wide flex items-center gap-3 w-1/2"
        >
          <Image
            src={Logo}
            width={logoSize}
            height={logoSize}
            alt="Logo"
            className="transition-all ease-in-out duration-300"
          />
          <h1 className="text-2xl text-[#1D951B]">Policy Sansar</h1>
        </Link1>

        {/* Hamburger or Back Button */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-black focus:outline-none"
        >
          {isMenuOpen ? (
            <IoIosArrowForward className="text-2xl font-extrabold" />
          ) : (
            <RxHamburgerMenu className="text-2xl font-extrabold" />
          )}
        </button>

        {/* Navigation Links */}
        <div className="hidden lg:flex gap-8">
          <Link1
            href="/"
            className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]"
          >
            Home
          </Link1>
          <div
            className="relative cursor-pointer text-black group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="relative after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]">
              Products
            </span>
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-full mt-0 bg-white shadow-lg border rounded-md py-2 w-72"
              >
                <Link1
                  onClick={()=>setIsDropdownOpen(!isDropdownOpen)}
                  href="/insurances/General"
                  className="block px-4 py-2  text-black relative after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]"
                >
                  General Insurance
                </Link1>
                <Link1
                onClick={()=>setIsDropdownOpen(!isDropdownOpen)}
                  href="/insurances/Health"
                  className="block px-4 py-2  text-black relative after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]"
                >
                  Health Insurance
                </Link1>
                <Link1
                onClick={()=>setIsDropdownOpen(!isDropdownOpen)}
                  href="/insurances/Life"
                  className="block px-4 py-2  text-black relative after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]"
                >
                  Life Insurance
                </Link1>
                <Link1
                onClick={()=>setIsDropdownOpen(!isDropdownOpen)}
                  href="/insurances/group"
                  className="block px-4 py-2  text-black relative after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]"
                >
                  Group Insurance
                </Link1>
                <Link1
                onClick={()=>setIsDropdownOpen(!isDropdownOpen)}
                  href="/insurances/financial"
                  className="block px-4 py-2  text-black relative after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]"
                >
                  Financial Insurance
                </Link1>
                <Link1
                onClick={()=>setIsDropdownOpen(!isDropdownOpen)}
                  href="/insurances/wealth"
                  className="block px-4 py-2  text-black relative after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]"
                >
                  Wealth Insurance
                </Link1>
              </div>
            )}
          </div>
          <Link1
            href="/Distribution"
            className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]"
          >
            Process
          </Link1>
          <Link1
            href="/about-us"
            className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]"
          >
            About Us
          </Link1>
          <Link1
            href="/contact"
            className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]"
          >
            Contact Us
          </Link1>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              className="fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg z-20 flex flex-col items-start px-6 py-4 lg:hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <Link1
              onClick={()=>setIsMenuOpen(!isMenuOpen)}
                href="/"
                className="py-2 text-lg text-black border-b border-gray-200 w-full text-left"
              >
                Home
              </Link1>
              <div className="w-full text-left">
                <button
                  onClick={toggleSubmenu}
                  className="py-2 text-lg text-black border-b border-gray-200 w-full flex justify-between items-center"
                >
                  Products
                  <IoIosArrowForward
                    className={`transition-transform duration-300 ${
                      isSubmenuOpen ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </button>
                {isSubmenuOpen && (
                  <div className="ml-4 mt-2">
                    <Link1
                      onClick={()=>setIsMenuOpen(!isMenuOpen)}
                      href="/insurances/General"
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                    >
                      General Insurance
                    </Link1>
                    <Link1
                    onClick={()=>setIsMenuOpen(!isMenuOpen)}
                      href="/insurances/Health"
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                    >
                      Health Insurance
                    </Link1>
                    <Link1
                    onClick={()=>setIsMenuOpen(!isMenuOpen)}
                      href="/insurances/Life"
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                    >
                      Life Insurance
                    </Link1>
                    <Link1
                    onClick={()=>setIsMenuOpen(!isMenuOpen)}
                      href="/insurances/group"
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                    >
                      Group Insurance
                    </Link1>
                    <Link1
                    onClick={()=>setIsMenuOpen(!isMenuOpen)}
                      href="/insurances/financial"
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                    >
                      Financial Insurance
                    </Link1>
                    <Link1
                    onClick={()=>setIsMenuOpen(!isMenuOpen)}
                      href="/insurances/wealth"
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                    >
                      Wealth Insurance
                    </Link1>
                  </div>
                )}
              </div>
              <Link1
              onClick={()=>setIsMenuOpen(!isMenuOpen)}
                href="/Distribution"
                className="py-2 text-lg text-black border-b border-gray-200 w-full text-left"
              >
                Process
              </Link1>
              <Link1
              onClick={()=>setIsMenuOpen(!isMenuOpen)}
                href="/about-us"
                className="py-2 text-lg text-black border-b border-gray-200 w-full text-left"
              >
                About Us
              </Link1>
              <Link1
              onClick={()=>setIsMenuOpen(!isMenuOpen)}
                href="/contact"
                className="py-2 text-lg text-black border-b border-gray-200 w-full text-left"
              >
                Contact Us
              </Link1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;