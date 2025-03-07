import React from "react";

const Quote = () => {
  return (
    <section className="bg-[#FFF5E4] text-[#1C1C1C] py-6 flex flex-col justify-start items-start mt-[00px] pl-[780px] pr-[300px] pb-[200px]">
      <blockquote
        className="text-[128px] font-bold italic leading-[1.1] tracking-[-0.05em] text-start"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        “God have mercy on the man who doubts what he's sure of.”
      </blockquote>
      <p
        className="text-[24px] font-regular text-end mt-8"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        – Bruce Springsteen
      </p>
    </section>
  );
};

export default Quote;