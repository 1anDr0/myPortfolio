import React from "react";
import footballQuiz from "../assets/football-quiz.png";
import { FiArrowRight } from "react-icons/fi";

const VanillaJavascriptProjects = () => {
  return (
    <section className="bg-[#F9F6E6] text-[#1C1C1C] py-0 flex flex-col justify-start items-start mt-[-0px] pl-[300px] pr-[780px] pb-[100px] relative">
      
      {/* Pil långt till höger */}
      <button
        className="absolute right-[400px] top-[55%] -translate-y-1/2 text-[#1C1C1C] text-[72px] transition-transform duration-300 hover:translate-x-2"
      >
        <FiArrowRight />
      </button>

      {/* Rubrik */}
      <h2
        className="text-[72px] font-medium tracking-[-0.07em] leading-[1.1] text-left w-full"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        VANILLA JAVASCRIPT
      </h2>

      <div className="w-full max-w-[800px] mt-10">
        <div className="flex justify-center">
          <img
            src={footballQuiz}
            alt="Football Quiz Project"
            width="700"
            height="393"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default VanillaJavascriptProjects;
