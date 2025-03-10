import React, { useState } from "react";
import { FiArrowDownLeft, FiDownload } from "react-icons/fi";
import { FaCode, FaPaintBrush } from "react-icons/fa";
import dalahorseImage from "../assets/Dalecarlian_horse.svg.png";
import rectangleImage from "../assets/Rectangle.png";
import figmaImage from "../assets/me.jpg";
import { MdOutlineSportsVolleyball } from "react-icons/md";

const Hero = () => {
  const [isOpenCV, setIsOpenCV] = useState(false);

  return (
    <section className="relative bg-[#FDFDFD] text-[#1C1C1C] min-h-screen flex flex-col 
      px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-[300px] 
      pt-[80px] sm:pt-[120px] md:pt-[160px] lg:pt-[250px] 
      pb-[80px] sm:pb-[120px] md:pb-[160px] lg:pb-[200px] 
      transition-all duration-500">

     

      {/* Profilbild för desktop */}
      <img
          src={figmaImage}
          alt="Jerker Danielsson"
          className="w-[200px] sm:w-[260px] md:w-[300px] lg:w-[360px] xl:w-[400px] 
            h-auto object-cover rounded-full hover:scale-105 transition-transform duration-500 
            md:absolute md:right-2 sm:md:right-4 md:right-8 lg:right-12 xl:right-20 2xl:md:right-[280px] 
            md:top-[120px] mx-auto"
        />

      {/* Rektanglar för desktop */}
      <img
        src={rectangleImage}
        alt="Blur Overlay 1"
        className="absolute top-0 left-0 w-full h-[240px] md:h-[280px] lg:h-[320px] z-30 hover:opacity-20 transition-opacity duration-1000"
      />
      <img
        src={rectangleImage}
        alt="Blur Overlay 2"
        className="absolute top-[100px] md:top-[260px] left-0 w-full h-[400px] md:h-[440px] lg:h-[400px] z-30 hover:opacity-20 transition-opacity duration-1000"
      />

      {/* Ikoner + linje */}
      <div className="hidden md:flex flex-col space-y-4 z-10 text-[16px] md:text-[20px] lg:text-[24px] absolute top-[150px] left-4 sm:left-6 md:left-10 lg:left-16 xl:left-24 2xl:left-[300px]">
        <div className="flex space-x-3 md:space-x-4">
          <img src={dalahorseImage} alt="Dalahäst" className="w-[18px] sm:w-[20px] md:w-[24px] lg:w-[28px] object-contain" />
          <MdOutlineSportsVolleyball className="w-[18px] sm:w-[20px] md:w-[24px] lg:w-[32px]" />
          <FaPaintBrush className="w-[18px] sm:w-[20px] md:w-[24px] lg:w-[28px]" />
          <FaCode className="w-[18px] sm:w-[20px] md:w-[24px] lg:w-[28px]" />
        </div>
        <div className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] h-[2px] bg-[#1C1C1C] animate-fadeInSlow"></div>
      </div>

      {/* Titlar */}
      <div className="mt-[-0px]">
        <h1
          className="font-bold tracking-[-0.07em] leading-[100%] z-50 group relative text-left"
          style={{
            fontFamily: "Helvetica, sans-serif",
            fontSize: "clamp(32px, 5.5vw, 72px)",
            paddingBottom: "0.5rem"
          }}
        >
          <span className="group-hover:opacity-0 transition-opacity duration-1000 z-50">
            Hey! I’m Jerker Danielsson.
          </span>
          <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            Hej! Jag heter Jerker Danielsson.
          </span>
        </h1>

        <h2 className="text-[16px] sm:text-[18px] md:text-[28px] lg:text-[36px] xl:text-[44px] font-light leading-[100%] tracking-[-0.07em] mt-4 z-10">
          STUDENT @ JENSEN EDUCATION
        </h2>
        <h3 className="text-[16px] sm:text-[18px] md:text-[28px] lg:text-[36px] xl:text-[44px] font-light leading-[100%] tracking-[-0.07em] mt-2 z-10">
          (FRONT-END DEVELOPER)
        </h3>
      </div>
      {/* CV-knapp och innehåll */}
      <div className="w-full max-w-[780px] border-t border-b border-[#1C1C1C] mt-8 z-30">
        <button
          className="w-full flex justify-between items-center py-2 text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] font-medium tracking-[-0.05em] cursor-pointer"
          onClick={() => setIsOpenCV(!isOpenCV)}
        >
          <span>CV</span>
          <span
            className={`text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] transform transition-transform duration-500 ${
              isOpenCV ? "rotate-[-45deg]" : "rotate-0"
            }`}
          >
            <FiArrowDownLeft />
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpenCV ? "max-h-[1000px] opacity-100 py-5" : "max-h-0 opacity-0"
          }`}
        >
          <p
            className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] max-w-[780px]"
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

          <div className="mt-10 ">
            <button
              className="border-2 border-black text-white bg-[#1C1C1C] h-[40px] sm:h-[44px] md:h-[48px] lg:h-[52px] px-[20px] sm:px-[24px] rounded-full text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-medium tracking-tight flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white hover:text-[#1C1C1C]"
              style={{ fontFamily: "Helvetica, sans-serif" }}
            >
              DOWNLOAD MY CV <FiDownload className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



