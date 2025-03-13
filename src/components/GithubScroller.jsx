import React, { useState, useEffect } from "react";
import { TbBrandGithubFilled } from "react-icons/tb";

const GithubScroller = () => {
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || 0;
      setShowBadge(scrollY > 800 && scrollY < 5000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`hidden 2xl:flex fixed  lg:-left-10Ö xl:left-0 2xl:left-10 fixed left-16 xl:left-10 top-[550px] hidden lg:flex z-50 flex-col items-center transition-opacity duration-500 ease-in-out ${
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

      {/* Vertikal text */}
      <span
        className="text-black text-[18px] font-bold tracking-widest rotate-[-90deg] origin-center hover:opacity-50 mt-12"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        THIS IS MY GITHUB
      </span>
    </div>
  );
};

export default GithubScroller;







