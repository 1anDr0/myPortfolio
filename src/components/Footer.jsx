import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[#1C1C1C] text-white py-20 px-6 md:px-[300px]">
      <footer className="w-full border-t border-b border-white">
        <button
          className="w-full flex justify-between items-center py-4 text-[32px] font-light tracking-[-0.05em] cursor-pointer"
          style={{ fontFamily: "Helvetica, sans-serif" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Contact</span>
          <span
            className={`text-[48px] transform transition-transform duration-500 ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
          >
            +
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[1000px] opacity-100 py-10" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center text-[20px] font-light space-y-6 md:space-y-0">
            
            <div className="flex items-center space-x-3">
              <Icon icon="mdi:email-outline" width="24" height="24" />
              <a href="mailto:jerker_danielsson@hotmail.com" className="underline">
                jerker_danielsson@hotmail.com
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <Icon icon="mdi:phone-outline" width="24" height="24" />
              <a href="tel:+46739929798" className="underline">
                073-992 97 98
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <Icon icon="mdi:map-marker-outline" width="24" height="24" />
              <span>Stockholm, Sweden</span>
            </div>

            <div className="flex items-center space-x-3">
              <Icon icon="mdi:linkedin" width="24" height="24" />
              <a
                href="https://linkedin.com/in/jerkerdanielsson"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <Icon icon="mdi:github" width="24" height="24" />
              <a
                href="https://github.com/1anDr0"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GitHub
              </a>
            </div>

          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;





