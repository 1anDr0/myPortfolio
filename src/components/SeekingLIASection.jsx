import React, { useState } from "react";

const SeekingLIASection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-black text-white py-6 flex flex-col justify-start items-start mt-[-180px] pl-[780px] pr-[300px] pb-[100px]">


      {/* Rubrik */}
      <h1
        className="text-[96px] font-medium tracking-[-0.07em] leading-[1.1] text-left w-full"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        Seeking LIA internship from November 2025
      </h1>

      {/* Klickbar sektion */}
      <div className="w-full max-w-[1000px] border-t border-b border-white mt-6">
        <button
          className="w-full flex justify-between items-center py-2 text-[24px] font-medium tracking-tight cursor-pointer"
          style={{ fontFamily: "Helvetica, sans-serif" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>about me</span>
          <span className="text-[28px]">{isOpen ? "−" : "+"}</span>
        </button>

        {/* Expanderbar text */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[600px] opacity-100 py-5" : "max-h-0 opacity-0"
          }`}
        >
          <p
            className="text-[20px] font-regular leading-[1.5] max-w-[800px]"
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
        </div>
      </div>
    </section>
  );
};

export default SeekingLIASection;
