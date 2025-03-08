import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

const GithubScroller = () => {
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBadge(scrollY > 1600 && scrollY < 5000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-[60px] top-[150px] z-50 flex flex-col items-center transition-opacity duration-500 ease-in-out ${
        showBadge ? "opacity-100" : "opacity-0"
      } hidden md:flex`}
    >
      {/* GitHub-ikon */}
      <a
        href="https://github.com/1anDr0"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition-opacity duration-300"
      >
        <FaGithub className="w-8 h-8 md:w-10 md:h-10 text-black" />
      </a>

      {/* Vertikal text precis som BACK-knappen */}
      <span
        className="text-black text-[14px] md:text-[16px] tracking-[+0.40em] tracking-widest rotate-[-90deg] origin-center hover:opacity-50 mt-20"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        MY GITHUB
      </span>
    </div>
  );
};

export default GithubScroller;




