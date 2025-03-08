import React from "react";

const Quote = () => {
  return (
    <section className="bg-[#FFA725] text-white py-6 px-6 md:pl-[780px] md:pr-[300px] pb-[200px]">
      <blockquote
        className="text-[36px] md:text-[96px] font-bold italic leading-[1.1] tracking-[-0.05em] text-left max-w-[900px]"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        “God have mercy on the man who doubts what he's sure of.”
      </blockquote>
      <p
        className="text-[12px] md:text-[24px] font-regular text-right w-full mt-8"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        – Bruce Springsteen
      </p>
    </section>
  );
};

export default Quote;
