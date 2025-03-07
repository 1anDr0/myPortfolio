import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

const GithubBadge = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <a
    href="https://github.com/1anDr0"
    target="_blank"
    rel="noopener noreferrer"
    className={`hidden md:flex fixed left-[30px] top-1/2 transform -translate-y-1/2 z-50 flex-col items-center transition-opacity duration-500 ${
      isVisible ? "opacity-100" : "opacity-0"
    }`}
  >
    <FaGithub className="w-8 h-8 text-black hover:scale-110 transition-transform duration-300" />
    <span
      className="text-[12px] tracking-[0.2em] text-black mt-2"
      style={{
        fontFamily: "Helvetica, sans-serif",
      }}
    >
      MY GITHUB
    </span>
  </a>
  

  );
};

export default GithubBadge;

