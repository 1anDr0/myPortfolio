import React, { useState } from "react";
import { FiArrowDownLeft } from "react-icons/fi";
import { FaFutbol, FaCode, FaPaintBrush } from "react-icons/fa";
import dalahorseImage from "../assets/Dalecarlian_horse.svg.png";
import rectangleImage from "../assets/Rectangle.png";
import figmaImage from "../assets/me.jpg";
import CVViewer from "./CVViewer";

const Hero = () => {
  const [isOpenCV, setIsOpenCV] = useState(false);

  return (
    <section className="animate-fadeIn relative bg-[#FDFDFD] text-[#1C1C1C] min-h-screen flex flex-col pl-[300px] pt-[250px] pb-0 overflow-hidden">
      
      {/* Profilbild */}
      <img
        src={figmaImage}
        alt="Jerka Danielsson"
        className="absolute right-[300px] top-[160px] w-[400px] h-auto object-cover rounded-full z-10 motion-safe:transform motion-safe:transition-transform motion-safe:duration-500 hover:scale-105"
      />

      {/* Vita fyrkanter */}
      <img src={rectangleImage} alt="Blur Overlay 1" className="absolute top-0 left-0 w-full h-[350px] z-20 hover:opacity-20 transition-opacity duration-500 pointer-events-auto" />
      <img src={rectangleImage} alt="Blur Overlay 2" className="absolute top-[220px] left-0 w-full h-[530px] z-20 hover:opacity-20 transition-opacity duration-500 pointer-events-auto" />

      {/* Ikoner */}
      <div className="flex space-x-4 mb-10 z-10 absolute top-[180px] left-[300px]">
        <img src={dalahorseImage} alt="Dalahäst" className="w-6 h-6 object-contain" />
        <FaFutbol className="w-6 h-6 text-[#1C1C1C]" />
        <FaPaintBrush className="w-6 h-6 text-[#1C1C1C]" />
        <FaCode className="w-6 h-6 text-[#1C1C1C]" />
      </div>
      <div className="w-[150px] h-[2px] bg-[#1C1C1C] mb-6 z-30 animate-fadeInSlow"></div>

      {/* Text */}
      <h1
        className="text-[72px] font-bold leading-[100%] tracking-[-0.07em] z-30 group relative"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        <span className="group-hover:opacity-0 transition-opacity duration-300">Hey! I’m Jerka Danielsson.</span>
        <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Hej! Jag heter Jerker Danielsson.</span>
      </h1>

      <h2
        className="text-[48px] font-light leading-[100%] tracking-[-0.07em] mt-2 z-10"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        STUDENT @ JENSEN EDUCATION
      </h2>
      <h3
        className="text-[48px] font-light leading-[100%] tracking-[-0.07em] mt-2 z-10"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        (FRONT-END DEVELOPER)
      </h3>

      {/* CV-sektion */}
      <div className="w-full max-w-[800px] border-t border-b border-[#1C1C1C] mt-10 z-30">
        <button
          className="w-full flex justify-between items-center py-1 text-[24px] font-medium tracking-[-0.05em] cursor-pointer"
          style={{ fontFamily: "Helvetica, sans-serif" }}
          onClick={() => setIsOpenCV(!isOpenCV)}
        >
          <span>Curriculum vitae</span>
          <span
            className={`text-[48px] transform transition-transform duration-500 ${
              isOpenCV ? 'rotate-45' : 'rotate-0'
            }`}
          >
            <FiArrowDownLeft />
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpenCV ? "max-h-[200px] opacity-100 py-5" : "max-h-0 opacity-0"
          }`}
        >
        

          <button
            className="border-2 border-[#1C1C1C] text-[#1C1C1C] bg-white h-[44px] px-[20px] rounded-full text-[44px] font-medium tracking-tight flex items-center justify-center transition-all duration-300 hover:bg-[#1C1C1C] hover:text-white"
            style={{ fontFamily: "Helvetica, sans-serif" }}
          >
            DOWNLOAD MY CV
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
