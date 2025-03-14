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
      className={`fixed top-[450px] left-0 xl:left-0 hidden xl:flex z-50 flex-col items-center transition-opacity duration-500 ease-in-out ${
        showBadge ? "opacity-100" : "opacity-0"
      }`}
    >
      <a
        href="https://github.com/1anDr0"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition-opacity duration-300 mb-16 xl:mb-20"
      >
        <TbBrandGithubFilled className="w-7 h-7 xl:w-8 xl:h-8 text-black" />
      </a>

      <span
        className="text-black text-[16px] xl:text-[18px] font-bold tracking-widest rotate-[-90deg] origin-center hover:opacity-50 mt-10 xl:mt-12 cursor-pointer"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        THIS IS MY GITHUB
      </span>
    </div>
  );
};

export default GithubScroller;








