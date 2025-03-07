import React, { useState } from "react";
import { FiArrowDownLeft } from "react-icons/fi";
import { FaCode, FaPaintBrush } from "react-icons/fa";
import dalahorseImage from "../assets/Dalecarlian_horse.svg.png";
import rectangleImage from "../assets/Rectangle.png";
import figmaImage from "../assets/me.jpg";
import { MdOutlineSportsVolleyball } from "react-icons/md";

const Hero = () => {
  const [isOpenCV, setIsOpenCV] = useState(false);

  return (
    <section className="animate-fadeIn relative bg-[#FDFDFD] text-[#1C1C1C] min-h-screen flex flex-col px-6 md:px-[300px] md:pt-[250px] md:pb-[100px] overflow-hidden">

      {/* Profilbild */}
      <img
        src={figmaImage}
        alt="Jerka Danielsson"
        className="hidden md:block absolute right-[300px] top-[160px] w-[400px] h-auto object-cover rounded-full z-10 motion-safe:transform motion-safe:transition-transform motion-safe:duration-500 hover:scale-105"
      />

      {/* Rektanglar (bara på större skärmar) */}
      <img
        src={rectangleImage}
        alt="Blur Overlay 1"
        className="hidden md:block absolute top-0 left-0 w-full h-[350px] z-20 hover:opacity-20 transition-opacity duration-1000 ease-in-out pointer-events-auto"
      />
      <img
        src={rectangleImage}
        alt="Blur Overlay 2"
        className="hidden md:block absolute top-[220px] left-0 w-full h-[530px] z-20 hover:opacity-20 transition-opacity duration-1000 ease-in-out pointer-events-auto"
      />

      {/* Ikoner (bara på större skärmar) */}
      <div className="hidden md:flex space-x-4 mb-10 z-10 absolute top-[180px] left-[300px]">
        <img src={dalahorseImage} alt="Dalahäst" className="w-8 h-8 object-contain" />
        <MdOutlineSportsVolleyball className="w-9 h-9 text-[#1C1C1C]" />
        <FaPaintBrush className="w-8 h-8 text-[#1C1C1C]" />
        <FaCode className="w-9 h-9 text-[#1C1C1C]" />
      </div>

      <div className="w-[190px] h-[2px] bg-[#1C1C1C] mt-[100px] md:mt-0 mb-6 z-10 animate-fadeInSlow"></div>

      <h1
        className="text-[40px] md:text-[72px] font-bold leading-[100%] tracking-[-0.07em] z-30 group relative"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        <span className="group-hover:opacity-0 transition-opacity duration-1000 ease-in-out">
          Hey! I’m Jerka Danielsson.
        </span>
        <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out">
          Hej! Jag heter Jerker Danielsson.
        </span>
      </h1>

      <h2 className="text-[28px] md:text-[48px] font-light leading-[100%] tracking-[-0.07em] mt-4 z-10">
        STUDENT @ JENSEN EDUCATION
      </h2>
      <h3 className="text-[28px] md:text-[48px] font-light leading-[100%] tracking-[-0.07em] mt-2 z-10">
        (FRONT-END DEVELOPER)
      </h3>

      <div className="w-full max-w-[780px] border-t border-b border-[#1C1C1C] mt-10 z-30">
        <button
          className="w-full flex justify-between items-center py-1 text-[24px] md:text-[32px] font-light tracking-[-0.02em] cursor-pointer"
          onClick={() => setIsOpenCV(!isOpenCV)}
        >
          <span>CV</span>
          <span
            className={`text-[32px] md:text-[48px] transform transition-transform duration-500 ${
              isOpenCV ? 'rotate-[-45deg]' : 'rotate-0'
            }`}
          >
            <FiArrowDownLeft />
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpenCV ? "max-h-[1000px] opacity-100 py-5 mb-20" : "max-h-0 opacity-0"
          }`}
        >
          <p
            className="text-[18px] md:text-[20px] leading-[1.5] max-w-[800px]"
            style={{ fontFamily: "Helvetica, sans-serif" }}
          >
            Jag är en kreativ och noggrann frontendutvecklare med ett starkt öga för design och layout. Med en naturlig känsla för estetik ser jag detaljer som andra ofta missar, vilket resulterar i snygga och välstrukturerade lösningar. Jag är lugn, anpassningsbar och har lätt för att samarbeta, samtidigt som jag bidrar med en positiv och glad energi i team. Utöver mitt intresse för design har jag ett stort engagemang för idrott, både aktivt och som åskådare.
          </p>

          <a
            href="/cv-jerker-danielsson.pdf"
            download
            className="border-2 border-[#1C1C1C] text-[#1C1C1C] mt-10 bg-white h-[44px] px-4 w-fit rounded-full text-[32px] md:text-[44px] font-medium tracking-tight flex items-center justify-center transition-all duration-300 hover:bg-[#1C1C1C] hover:text-white"
            style={{ fontFamily: "Helvetica, sans-serif" }}
          >
            DOWNLOAD MY CV
          </a>
          {isOpenCV && (
            <div className="w-full max-w-[780px] border-b border-[#1C1C1C] mt-5 mb-16"></div>
          )}
        </div>
      </div>

    </section>
  );
};

export default Hero;
