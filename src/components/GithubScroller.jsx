import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

const GithubScroller = () => {
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBadge(scrollY > 1800 && scrollY < 4000);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-[10px] top-[150px] z-50 flex flex-col items-center transition-opacity duration-500 ${
        showBadge ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* GitHub-ikon */}
      <FaGithub className="w-8 h-8 mb-16 text-[#1C1C1C]" />

      {/* Vertikal text precis som BACK-knappen */}
      <span
        className="text-[#1C1C1C] text-[14px] md:text-[24px] tracking-widest rotate-[-90deg] origin-center hover:opacity-50"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        MY GITHUB
      </span>
    </div>
  );
};

export default GithubScroller;



