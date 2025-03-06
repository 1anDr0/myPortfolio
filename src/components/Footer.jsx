import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="bg-[#1C1C1C] py-20">
      <footer className="bg-[#1C1C1C] text-white py-10 w-full max-w-full">
        <div className="mx-[300px] border-t border-b border-white">
          <button
            className="w-full flex justify-between items-center py-4 text-[24px] font-medium tracking-tight cursor-pointer"
            style={{ fontFamily: "Helvetica, sans-serif" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>Contact me</span>
            <span className="text-[24px]">{isOpen ? "−" : "+"}</span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? "max-h-[500px] opacity-100 py-5" : "max-h-0 opacity-0"
            }`}
          >
            <div className="grid grid-cols-3 gap-10 text-[20px] font-regular leading-[1.5]"
              style={{ fontFamily: "Helvetica, sans-serif" }}>
              <div className="text-left space-y-0">
                <p>Email</p>
                <p>Phone</p>
                <p>Location</p>
                <p>LinkedIn</p>
                <p>GitHub</p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <Icon icon="mdi:email" width="24" height="24" />
                <Icon icon="mdi:phone" width="24" height="24" />
                <Icon icon="mdi:map-marker" width="24" height="24" />
                <Icon icon="mdi:linkedin" width="24" height="24" />
                <Icon icon="mdi:github" width="24" height="24" />
              </div>

              <div className="text-right space-y-0">
                <p>jerker_danielsson@hotmail.com</p>
                <p>073-992 97 98</p>
                <p>Stockholm, Sweden</p>
                <p><a href="https://linkedin.com/in/dittnamn" className="underline">linkedin.com/in/jerkerdanielsson</a></p>
                <p><a href="https://github.com/dittgithub" className="underline">github.com/1anDr0</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;




