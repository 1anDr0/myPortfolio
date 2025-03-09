import React, { useState, useEffect } from "react";
import { TbBrandGithubFilled } from "react-icons/tb";

const GithubScroller = () => {
  const [showBadge, setShowBadge] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || 0;
      setScrollPos(scrollY); // Uppdatera state för att debugga
      setShowBadge(scrollY > 1600 && scrollY < 3000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log("Current scroll position:", scrollPos); // Felsökningslogg

  return (
    <div
      className={`fixed left-[60px] top-[550px] z-50 flex flex-col items-center transition-opacity duration-500 ease-in-out ${
        showBadge ? "opacity-100" : "opacity-0"
      } hidden md:flex`}
    >
      <a
        href="https://github.com/1anDr0"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition-opacity duration-300"
      >
        <TbBrandGithubFilled className="w-6 h-6 md:w-8 md:h-8 text-black" />
      </a>

      <span
        className="text-black text-[16px] md:text-[16px] font-bold tracking-widest rotate-[-90deg] tracking-[+0.20em] origin-center hover:opacity-50 mt-20"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        MY GITHUB
      </span>
    </div>
    
  );
};

export default GithubScroller;





