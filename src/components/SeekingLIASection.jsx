import React, { useState } from "react";
import { FiDownload, FiArrowDownLeft } from "react-icons/fi";

const SeekingLIASection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[#1C1C1C] text-white py-8 px-6 flex flex-col justify-start items-start mt-[-160px] md:pl-[780px] md:pr-[300px] pb-[200px] transform -translate-y-[0px]">
      <h1
        className="text-[36px] md:text-[128px] font-bold tracking-[-0.07em] leading-[1.1] text-left w-full"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        Seeking LIA /internship from November 2025
      </h1>

      <div className="w-full max-w-[1000px] border-t border-b border-white mt-6">
        <button
          className="w-full flex justify-between items-center py-1 text-[20px] md:text-[24px] font-medium tracking-[-0.05em] tracking-tight cursor-pointer"
          style={{ fontFamily: "Helvetica, sans-serif" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Read my cover letter</span>
          <span className={`text-[32px] md:text-[48px] transform transition-transform duration-500 ${isOpen ? 'rotate-[-45deg]' : 'rotate-0'}`}><FiArrowDownLeft /></span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[600px] opacity-100 py-5" : "max-h-0 opacity-0"
          }`}
        >
          <p
            className="text-[12px] md:text-[20px] font-regular leading-[1.5] max-w-[780px]"
            style={{ fontFamily: "Helvetica, sans-serif" }}
          >
            I’m a frontend developer with a strong passion for layout and design.
            Originally from Rättvik, Dalarna, I’ve been living in Stockholm for over
            10 years. I thrive on creating modern, intuitive, and visually appealing
            interfaces that enhance user experience. With a keen eye for detail, I
            focus on clean layouts, thoughtful UI components, and seamless
            responsiveness. I’m always exploring new trends in web design to refine
            my craft, ensuring that my work balances aesthetics with functionality.
          </p>
          <div className="mt-10">
        <button
          className="border-2 border-white text-white bg-[#1C1C1C] h-[44px] px-[20px] rounded-full text-[32px] md:text-[44px] font-medium tracking-tight flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white hover:text-[#1C1C1C]"
          style={{ fontFamily: "Helvetica, sans-serif" }}
        >
          COVER LETTER <FiDownload className="w-8 h-8 md:w-10 md:h-10" />
        </button>
      </div>
        </div>
      </div>

      
    </section>
  );
};

export default SeekingLIASection;