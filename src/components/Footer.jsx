import React, { useState } from "react";
import { FiArrowDownLeft } from "react-icons/fi";
import { Icon } from "@iconify/react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="bg-white text-[#1C1C1C] py-20 px-6 md:px-[300px]">
      
      {/* Namn */}
      <h1
        className="text-[72px] md:text-[128px] font-bold tracking-[-0.07em] leading-[1.1] text-left w-full mb-10"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        Jerker Danielsson
      </h1>

      {/* Kontakt-knapp */}
      <div className="w-full border-t border-b border-bg-[#1C1C1C]">
        <button
          className="w-full flex justify-between items-center py-1 text-[32px] font-medium tracking-[-0.05em] cursor-pointer"
          style={{ fontFamily: "Helvetica, sans-serif" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Contact</span>
          <span
            className={`text-[48px] transform transition-transform duration-500 ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
          >
            <FiArrowDownLeft />
          </span>
        </button>

        {/* Kontaktinfo */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[1000px] opacity-100 py-10" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col text-[20px] font-light space-y-6">

            <div className="flex items-center space-x-4">
              <Icon icon="mdi:email-outline" width="24" height="24" />
              <a href="mailto:jerker_danielsson@hotmail.com" className="underline">
                jerker_danielsson@hotmail.com
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Icon icon="mdi:phone-outline" width="24" height="24" />
              <a href="tel:+46739929798" className="underline">
                073-992 97 98
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Icon icon="mdi:map-marker-outline" width="24" height="24" />
              <span>Stockholm, Sweden</span>
            </div>

            <div className="flex items-center space-x-4">
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

            <div className="flex items-center space-x-4">
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
      </div>
    </section>
  );
};

export default Footer;







