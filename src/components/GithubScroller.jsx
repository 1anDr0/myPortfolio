import React, { useState, useEffect } from "react";
import { TbBrandGithubFilled } from "react-icons/tb";

const GithubScroller = () => {
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || 0;
      setShowBadge(scrollY > 600 && scrollY < 5000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-[450px] left-10 lg:-left-10 xl:left-10 2xl:left-10 hidden lg:flex z-50 flex-col items-center transition-opacity duration-500 ease-in-out ${
        showBadge ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* GitHub ikon */}
      <a
        href="https://github.com/1anDr0"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition-opacity duration-300 mb-20"
      >
        <TbBrandGithubFilled className="w-8 h-8 text-black" />
      </a>

      {/* Vertikal klickbar text */}
      <a
        href="https://github.com/1anDr0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black text-[18px] font-bold tracking-[0.20em] rotate-[-90deg] origin-center hover:opacity-50 mt-12 cursor-pointer"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        THIS IS MY GITHUB
      </a>
    </div>
  );
};

export default GithubScroller;








