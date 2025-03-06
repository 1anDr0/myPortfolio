import React from "react";

const Quote = () => {
  return (
    <section className="bg-white text-[#1C1C1C] py-6 flex flex-col justify-start items-start mt-[100px] pl-[380px] pr-[800px] pb-[100px]">
      <blockquote
        className="text-[96px] font-medium italic leading-[1.1] tracking-[-0.05em] text-start"
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