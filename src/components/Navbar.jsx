import React, { useState, useEffect } from "react";
import { FiArrowDownLeft } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1C1C1C] text-white z-50">
    <div
      className={`w-full md:px-[300px] border-t border-b border-white transition-all duration-300 ${
        isOpen ? "py-1" : "py-1"
      }`}
      style={{ fontFamily: "Helvetica, sans-serif" }}
    >
      {/* Klickbar rad */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center cursor-pointer"
      >
        <span className="text-[20px] md:text-[24px] font-medium tracking-[-0.05em]">
          This is what you need
        </span>
        <span
          className={`text-[44px] transform transition-transform duration-500 ${
            isOpen ? "rotate-[-45deg]" : "rotate-0"
          }`}
        >
          <FiArrowDownLeft />
        </span>
      </div>
  
      {/* Meny */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out bg-[#1C1C1C]   ${
          isOpen ? "max-h-[500px] opacity-100 pt-6" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="flex justify-end space-x-8 text-[12px] md:text-[24px] font-medium tracking-[-0.05em]"
          style={{ fontFamily: "Helvetica, sans-serif" }}
        >
          <a href="#cv" className="hover:underline">
            CV
          </a>
          <a href="#cover-letter" className="hover:underline">
            COVER LETTER
          </a>
          <a
            href="https://github.com/dittkonto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <span>GITHUB</span>
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/dittkonto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <span>LINKEDIN</span>
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="#contact" className="hover:underline">
            CONTACT
          </a>
        </div>
      </div>
    </div>
  </nav>
  
  
  );
};

export default Navbar;
