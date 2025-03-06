import React from "react";
import { FiArrowLeft } from "react-icons/fi";

const FigmaProject = () => {
  return (
    <section className="bg-[#F9F6E6] text-[#1C1C1C] py-8 flex flex-col justify-start items-start mt-[-0px] pl-[780px] pr-[300px] pb-[200px] relative">

      {/* Pil långt till vänster */}
      <button
        className="absolute left-[400px] top-[55%] -translate-y-1/2 text-[#1C1C1C] text-[72px] transition-transform duration-300 hover:-translate-x-2"
      >
        <FiArrowLeft />
      </button>

      {/* Rubrik */}
      <h2
        className="text-[96px] font-medium tracking-[-0.07em] leading-[1.1] text-left w-full mb-10"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        Figma
      </h2>

      {/* Figma prototyp */}
      <div className="w-full max-w-[800px] shadow-xl rounded-lg overflow-hidden">
        <iframe
          className="w-full h-[450px]"
          style={{ border: "none" }}
          src="https://embed.figma.com/proto/sq0Bdu3BMUx9RXdZAvZb1O/TECHFLOW?page-id=0%3A1&node-id=47-444&starting-point-node-id=47%3A444&embed-host=share"
          allowFullScreen
        ></iframe>
      </div>

    </section>
  );
};

export default FigmaProject;
