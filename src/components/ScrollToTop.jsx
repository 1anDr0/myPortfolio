import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
            className="hidden lg:flex fixed bottom-20 right-14 w-10 h-10 bg-black text-white rounded-full items-center justify-center shadow-lg hover:bg-white hover:text-[#1C1C1C] transition-all duration-300"
        >
          <FiArrowUp className="w-8 h-8" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
