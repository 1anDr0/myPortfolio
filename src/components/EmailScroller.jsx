import React, { useState, useEffect } from "react";
import { IoCopy } from "react-icons/io5";

const EmailScroller = () => {
  const [showBadge, setShowBadge] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBadge(scrollY > 200 && scrollY < 5000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("jerker_danielsson@hotmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Visa färg + feedback i 2 sek
  };

  return (
    <div
      className={`fixed right-0 top-[150px] hidden lg:flex z-50 flex-col items-center transition-opacity duration-500 ease-in-out ${
        showBadge ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Email kopiera-ikon */}
      <button
        onClick={copyToClipboard}
        className="hover:opacity-70 translate-x-[44px] transition-opacity duration-300 mb-20"
      >
        <IoCopy
          className={`w-8 h-8 md:w-6 md:h-6 ${
            copied ? "text-green-600" : "text-[#1C1C1C]"
          } transition-colors duration-300`}
        />
      </button>

      {/* Klickbar vertikal text */}
      <span
        onClick={copyToClipboard}
        className={`${
          copied ? "text-green-600" : "text-[#1C1C1C]"
        } text-[18px] font-bold tracking-widest rotate-[-90deg] translate-x-[44px] tracking-[0.20em] origin-center hover:opacity-50 mt-20 cursor-pointer transition-colors duration-300`}
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        MY EMAIL // COPY HERE
      </span>

     
    </div>
  );
};

export default EmailScroller;
