import React, { useState } from "react";
import { Icon } from "@iconify/react";

// Använd hamburgarikonen från Font Awesome via Iconify
const menuIcon = "fa-solid:bars";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Växla menyns öppna/stänga status
  };

  return (
    <nav className="bg-black text-white py-4 px-8">
      <div className="flex justify-between items-center">
        {/* About Me till vänster */}
        <div className="text-lg">My Portfolio</div>

        {/* Hamburgarmenyn */}
        <div onClick={toggleMenu}>
          <div className="w-8 h-0.5 bg-white mb-1"></div>
          <div className="w-8 h-0.5 bg-white mb-1"></div>
          <div className="w-8 h-0.5 bg-white"></div>
        </div>
      </div>

      {/* Menyn när den är öppen */}
      {isOpen && (
        <div className="bg-black text-white p-4 mt-4">
          <ul>
            <li className="py-2">Home</li>
            <li className="py-2">About</li>
            <li className="py-2">Services</li>
            <li className="py-2">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
