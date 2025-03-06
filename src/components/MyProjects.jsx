import React, { useState } from "react";
import { FiArrowDownRight, FiArrowDownLeft } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const MyProjects = () => {
  const [isOpenReact, setIsOpenReact] = useState(false);
  const [isOpenVanilla, setIsOpenVanilla] = useState(false);
  const [isOpenFigma, setIsOpenFigma] = useState(false);

  return (
    
    <section className="bg-[#F9F6E6] text-[#1C1C1C] py-6 pl-[780px] pr-[300px] pb-[200px] relative">
    <div className="fixed left-[50px] top-1/2 transform -translate-y-1/2 z-50 text-[24px] text-[#1C1C1C]">
      <FaGithub />
    </div>
      <h1
        className="text-[96px] font-medium tracking-[-0.07em] leading-[1.1] text-left w-full mb-10"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        My Projects
      </h1>

      {/* React */}
      <div className="w-full max-w-[800px] border-t border-b border-[#1C1C1C] mb-12">
        <button
          onClick={() => setIsOpenReact(!isOpenReact)}
          className="w-full flex justify-between items-center py-1 text-[24px] font-medium tracking-[-0.05em] cursor-pointer"
          style={{ fontFamily: "Helvetica, sans-serif" }}
        >
          <span>React</span>
          <span className={`text-[48px] transform transition-transform duration-500 ${isOpenReact ? 'rotate-[-45deg]' : 'rotate-0'}`}>
            <FiArrowDownLeft />
          </span>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpenReact ? "max-h-[1000px] opacity-100 py-6" : "max-h-0 opacity-0"}`}>
          <div className="flex justify-center">
            <div className="w-[700px] h-[393px] bg-[#D9D9D9]"></div>
          </div>
        </div>
      </div>

      {/* Vanilla JavaScript */}
      <div className="w-full max-w-[800px] border-t border-b border-[#1C1C1C] mb-12">
        <button
          onClick={() => setIsOpenVanilla(!isOpenVanilla)}
          className="w-full flex justify-between items-center py-1 text-[24px] font-medium tracking-[-0.05em] cursor-pointer"
          style={{ fontFamily: "Helvetica, sans-serif" }}
        >
          <span className={`text-[48px] transform transition-transform duration-500 ${isOpenVanilla ? 'rotate-45' : 'rotate-0'}`}><FiArrowDownRight /></span>
          <span>Vanilla JavaScript</span>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpenVanilla ? "max-h-[1000px] opacity-100 py-6" : "max-h-0 opacity-0"}`}>
          <div className="flex justify-center">
            <div className="w-[700px] h-[393px] bg-[#D9D9D9]"></div>
          </div>
        </div>
      </div>

      {/* Figma */}
      <div className="w-full max-w-[800px] border-t border-b border-[#1C1C1C]">
        <button
          onClick={() => setIsOpenFigma(!isOpenFigma)}
          className="w-full flex justify-between items-center py-1 text-[24px] font-medium tracking-[-0.05em] cursor-pointer"
          style={{ fontFamily: "Helvetica, sans-serif" }}
        >
          <span>Figma</span>
          <span className={`text-[48px] transform transition-transform duration-500 ${isOpenFigma ? 'rotate-[-45deg]' : 'rotate-0'}`}>
            <FiArrowDownLeft />
          </span>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpenFigma ? "max-h-[1000px] opacity-100 py-6" : "max-h-0 opacity-0"}`}>
          <div className="flex justify-center">
            <iframe
              className="w-[700px] h-[393px] border"
              src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/sq0Bdu3BMUx9RXdZAvZb1O/TECHFLOW?page-id=0%3A1&node-id=47-444&starting-point-node-id=47%3A444"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
