import React from "react";

const Hero = () => {
  return (
    <section className="bg-white text-black min-h-screen flex flex-col pl-[300px] pt-[00px] pt-[250px]">
      <h1
        className="text-[60px] font-bold leading-[100%] tracking-[-0.07em]"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        HEY. I’M JERKA DANIELSSON,
      </h1>
      <h2
        className="text-[48px] font-medium leading-[100%] tracking-[-0.07em] mt-2"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        STUDENT AT JENSEN EDUCATION
      </h2>
      <h3
        className="text-[48px] font-medium leading-[100%] tracking-[-0.07em] mt-2"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        (FRONT-END DEVELOPER)
      </h3>

      {/* Wrapper div för knappen */}
      <div className="mt-4 flex justify-start">
        <button
          className="border-2 border-black text-black bg-white h-[44px] px-[20px] rounded-full text-[44px] font-medium tracking-tight flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white"
          style={{ fontFamily: "Helvetica, sans-serif" }}
        >
          DOWNLOAD MY CV
        </button>
      </div>
    </section>
  );
};

export default Hero;
