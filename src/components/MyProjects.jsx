import React from "react";
import { FiArrowLeft } from "react-icons/fi";

const MyProjects = () => {
  return (
    <section className="bg-[#F9F6E6] text-[#1C1C1C] py-8 flex flex-col justify-start items-start mt-[-0px] pl-[780px] pr-[300px] pb-[100px] relative">

      {/* Pil långt till vänster */}
      <button
        className="absolute left-[400px] top-[55%] -translate-y-1/2 text-[#1C1C1C] text-[72px] transition-transform duration-300 hover:-translate-x-2"
      >
        <FiArrowLeft />
      </button>

      <h2
        className="text-[96px] font-medium tracking-[-0.07em] leading-[1.1] text-left w-full"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        My Projects
      </h2>

      <div className="w-full max-w-[6000px] mt-10 flex flex-col items-start ">
        <h3
          className="text-[72px] font-medium tracking-[-0.05em] mb-4 text-right"
          style={{ fontFamily: "Helvetica, sans-serif" }}
        >
          REACT
        </h3>
        <div className="w-[700px] h-[393px] bg-white text-black flex items-center justify-center">
          <span className="text-[24px]" style={{ fontFamily: "Helvetica, sans-serif" }}>
            Placeholder för projekt
          </span>
        </div>
      </div>

    </section>
  );
};

export default MyProjects;
