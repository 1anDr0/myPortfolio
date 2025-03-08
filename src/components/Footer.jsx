import React, { useState } from "react";
import { FiArrowDownLeft } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <section className="bg-[#1C1C1C] text-white py-8 px-6 md:px-[500px]">
        {/* Huvudrubrik */}
        <h1 className="text-[36px] md:text-[128px] font-bold tracking-[-0.07em] leading-[1.1] text-left w-full mb-6">
          Let's Connect
        </h1>

        <div className="w-full border-t border-b border-white">
          {/* Klickbar knapp */}
          <button
            className="w-full flex justify-between items-center py-1 text-[20px] md:text-[24px] font-medium tracking-[-0.05em] cursor-pointer"
            style={{ fontFamily: "Helvetica, sans-serif" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>Jerker Danielsson</span>
            <span
              className={`text-[36px] md:text-[48px] transform transition-transform duration-500 ${
                isOpen ? "rotate-[-45deg]" : "rotate-0"
              }`}
            >
              <FiArrowDownLeft />
            </span>
          </button>

          {/* Kontaktinformation + Location */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? "max-h-[500px] opacity-100 py-10 md:py-20" : "max-h-0 opacity-0"
            }`}
          >
            <div className="w-full">
              {/* Kontaktinformation */}
              <div className="flex flex-col md:flex-row justify-between text-[16px] md:text-[20px] font-medium tracking-[-0.07em]">
                {/* Vänster sida (E-post, telefon) */}
                <div className="text-left">
                  <div className="flex items-center space-x-4 md:space-x-6">
                    <FaEnvelope className="w-5 h-5 md:w-6 md:h-6" />
                    <span>jerker_danielsson@hotmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4 md:space-x-6 mt-4">
                    <FaPhone className="w-5 h-5 md:w-6 md:h-6" />
                    <span>073-992 97 98</span>
                  </div>
                </div>

                {/* Höger sida (LinkedIn & GitHub) */}
                <div className="mt-10 md:mt-0 md:absolute md:right-[300px] md:w-[500px]">
                  <a
                    href="https://linkedin.com/in/jerkerdanielsson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 md:space-x-6 text-[16px] md:text-[20px] font-medium tracking-[-0.05em] hover:opacity-70"
                  >
                    <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/1anDr0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 md:space-x-6 text-[16px] md:text-[20px] font-medium tracking-[-0.05em] hover:opacity-70 mt-4"
                  >
                    <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
                    <span>Github</span>
                  </a>
                </div>
              </div>

              {/* Location längst ner vid linjen */}
              <div className="w-full flex justify-between items-center font-medium mt-10 md:mt-2">
                <div className="flex items-center space-x-4 md:space-x-6 text-[20px]">
                  <FaMapMarkerAlt className="w-5 h-5 md:w-6 md:h-6" />
                  <span>Stockholm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Designed by Jerker Danielsson - Separat avslutande sektion */}
      <div className="bg-[#1C1C1C] text-white py-4 text-center md:text-end md:pr-[500px]">
        <p className="text-[16px] md:text-[20px] font-light tracking-[-0.05em] opacity-70">
          Designed & built by Jerker Danielsson
        </p>
      </div>
    </>
  );
};

export default Footer;







