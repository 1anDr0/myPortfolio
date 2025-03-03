import React, { useState } from "react";

const MySkills = () => {
  const [isOpenFrontend, setIsOpenFrontend] = useState(false);
  const [isOpenDesign, setIsOpenDesign] = useState(false);

  return (
    <section className="bg-[#BAD8B6] text-black py-20 px-[300px]">
      <h2 className="text-4xl font-medium tracking-[-0.05em]" style={{ fontFamily: "Helvetica, sans-serif" }}>
        My Skills
      </h2>

      {/* Frontend Section */}
      <div className="w-full border-t border-b border-black mt-10">
        <button
          className="w-full flex justify-between items-center py-5 text-[32px] font-medium tracking-tight cursor-pointer"
          style={{ fontFamily: "Helvetica, sans-serif" }}
          onClick={() => setIsOpenFrontend(!isOpenFrontend)}
        >
          <span>FRONTEND</span>
          <span className="text-[28px]">{isOpenFrontend ? "−" : "+"}</span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpenFrontend ? "max-h-[1000px] opacity-100 py-5" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="text-[96px] font-regular leading-[110%] tracking-[-0.02em] flex flex-col space-y-4"
            style={{ fontFamily: "Helvetica, sans-serif" }}
          >
            <div className="flex justify-between w-full">
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <div className="flex justify-between w-full">
              <span>JAVASCRIPT</span>
            </div>
            <div className="flex justify-between w-full">
              <span>REACT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Design Section */}
      <div className="w-full border-t border-b border-black mt-10">
        <button
          className="w-full flex justify-between items-center py-5 text-[32px] font-medium tracking-tight cursor-pointer"
          style={{ fontFamily: "Helvetica, sans-serif" }}
          onClick={() => setIsOpenDesign(!isOpenDesign)}
        >
          <span className="text-[28px]">{isOpenDesign ? "−" : "+"}</span>
          <span>DESIGN</span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpenDesign ? "max-h-[1000px] opacity-100 py-5" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="text-[96px] font-regular leading-[110%] tracking-[-0.02em] flex flex-col space-y-4"
            style={{ fontFamily: "Helvetica, sans-serif" }}
          >
            <div className="flex justify-between w-full">
              <span>FIGMA</span>
              <span>ADOBE XD</span>
            </div>
            <div className="flex justify-between w-full">
              <span>PHOTOSHOP</span>
            </div>
            <div className="flex justify-between w-full">
              <span>ILLUSTRATOR</span>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default MySkills;


