import React, { useState, useEffect } from "react";
import { IoCopy } from "react-icons/io5";

const EmailScroller = () => {
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBadge(scrollY > 800 && scrollY < 5000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("jerker_danielsson@hotmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <div
      className={`fixed right-[60px] top-[150px] z-50 flex flex-col items-center transition-opacity duration-500 ease-in-out ${
        showBadge ? "opacity-100" : "opacity-0"
      } hidden md:flex`}
    >
      {/* Email kopiera-ikon */}
      <button
        onClick={copyToClipboard}
        className="hover:opacity-70 transition-opacity duration-300"
      >
        <IoCopy className="w-8 h-8 md:w-6 md:h-6 text-white" />
      </button>

      {/* Vertikal text (likt MY GITHUB) */}
      <span
        className="text-white text-[24px] md:text-[16px] font-bold tracking-widest rotate-[-90deg] tracking-[+0.20em] origin-center hover:opacity-50 mt-20"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        MY EMAIL
      </span>
    </div>
  );
};

export default EmailScroller;
