import React, { useState } from "react";
import { FiArrowDownLeft, FiArrowDownRight } from "react-icons/fi";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs, FaGitAlt, FaGithub, FaBootstrap, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaFigma } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiMiro } from "react-icons/si";

const MySkills = () => {
  const [isOpenFrontend, setIsOpenFrontend] = useState(false);
  const [isOpenDesign, setIsOpenDesign] = useState(false);

  return (
    <section className="bg-[#D9CAB3] text-[#1C1C1C] py-6 px-6 md:pl-[300px] md:pr-[780px] pb-[200px]">

      <h1 className="text-[36px] md:text-[128px] font-bold tracking-[-0.07em] leading-[1.1] text-left w-full" style={{ fontFamily: "Helvetica, sans-serif" }}>
        My skills /experience
      </h1>

      <div className="w-full border-t border-b border-[#1C1C1C] mt-10">
        <button
          className="w-full flex justify-between items-center py-1 text-[20px] md:text-[24px] font-medium tracking-[-0.05em] cursor-pointer"
          style={{ fontFamily: "Helvetica, sans-serif" }}
          onClick={() => setIsOpenFrontend(!isOpenFrontend)}
        >
          <span>Frontend</span>
          <span className={`text-[32px] md:text-[48px] transform transition-transform duration-500 ${isOpenFrontend ? 'rotate-[-45deg]' : 'rotate-0'}`}>
            <FiArrowDownLeft />
          </span>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpenFrontend ? "max-h-[1000px] opacity-100 py-6" : "max-h-0 opacity-0"}`}>
          <div className="text-[24px] md:text-[72px] font-[#1C1C1C] font-bold leading-[150%] tracking-[-0.07em] flex flex-col space-y-4">
            <div className="flex justify-between w-full transition-transform duration-1000 ease-out hover:translate-x-[-10px]">
              <span>HTML,</span>
              <span>CSS,</span>
              <span>Javascript,</span>
            </div>
            <div className="flex justify-between w-full transition-transform duration-1000 ease-out hover:translate-x-[-10px]">
              <span>React,</span>
              <span>Node.js,</span>
              <span>Git,</span>
              <span>Github,</span>
            </div>
            <div className="flex justify-between w-full transition-transform duration-1000 ease-out hover:translate-x-[-10px]">
              <span> Bootstrap,</span>
              <span>Tailwind CSS</span>
            </div>
            <div className="flex justify-end space-x-4 mt-4 py-10">
              <FaHtml5 className="w-[32px] md:w-[44px] h-[32px] md:h-[44px]" />
              <FaCss3Alt className="w-[32px] md:w-[44px] h-[32px] md:h-[44px]" />
              <FaJsSquare className="w-[32px] md:w-[44px] h-[32px] md:h-[44px]" />
              <FaReact className="w-[32px] md:w-[44px] h-[32px] md:h-[44px]" />
              <FaNodeJs className="w-[32px] md:w-[44px] h-[32px] md:h-[44px]" />
              <FaGitAlt className="w-[32px] md:w-[44px] h-[32px] md:h-[44px]" />
              <FaGithub className="w-[32px] md:w-[44px] h-[32px] md:h-[44px]" />
              <SiTailwindcss className="w-[32px] md:w-[44px] h-[32px] md:h-[44px]" />
              <FaBootstrap className="w-[32px] md:w-[44px] h-[32px] md:h-[44px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-b border-[#1C1C1C] mt-12">
        <button
          className="w-full flex justify-between items-center py-1 text-[20px] md:text-[24px] font-medium tracking-[-0.05em] cursor-pointer"
          style={{ fontFamily: "Helvetica, sans-serif" }}
          onClick={() => setIsOpenDesign(!isOpenDesign)}
        >
          <span className={`text-[32px] md:text-[48px] transform transition-transform duration-500 ${isOpenDesign ? 'rotate-45' : 'rotate-0'}`}><FiArrowDownRight /></span>
          <span>Design</span>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpenDesign ? "max-h-[1000px] opacity-100 py-6" : "max-h-0 opacity-0"}`}>
          <div className="text-[24px] md:text-[72px] font-[#1C1C1C] font-bold leading-[150%] tracking-[-0.07em] flex flex-col space-y-4">
            <div className="flex justify-between w-full transition-transform duration-1000 ease-out hover:translate-x-[-10px]">
              <span>Figma,</span>
              <span>Miro,</span>
              <span>Adobe XD,</span>
            </div>
            <div className="flex justify-between w-full transition-transform duration-1000 ease-out hover:translate-x-[-10px]">
              <span>Photoshop,</span>
              <span>InDesign,</span>
              <span>Miro,</span>
            </div>
            <div className="flex justify-between w-full transition-transform duration-1000 ease-out hover:translate-x-[-10px]">
              <span> Illustrator,</span>
              <span>UX/UI,</span>
            </div>
            <div className="flex justify-between w-full transition-transform duration-1000 ease-out hover:translate-x-[-10px]">
              <span> Davinci Resolve</span>
            </div>
            <div className="flex justify-start space-x-4 mt-6 py-10">
              <FaFigma className="w-[32px] md:w-[44px] h-[32px] md:h-[44px]" />
              <SiAdobexd className="w-[32px] md:w-[44px] h-[32px] md:h-[44px]" />
              <SiAdobephotoshop className="w-[32px] md:w-[44px] h-[32px] md:h-[44px]" />
              <SiAdobeillustrator className="w-[32px] md:w-[44px] h-[32px] md:h-[44px]" />
              <SiAdobeindesign className="w-[32px] md:w-[44px] h-[32px] md:h-[44px]" />
              <SiMiro className="w-[32px] md:w-[44px] h-[32px] md:h-[44px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
