import React, { useState, useEffect } from "react";
import { FiArrowDownLeft } from "react-icons/fi";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
    <div className="navbar-container">
      <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="navbar-title">This is what you need</span>
        <span className={`navbar-icon ${isOpen ? "rotate" : ""}`}>
          <FiArrowDownLeft />
        </span>
      </div>
  
      <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <div className="navbar-links">
        <a href="#contact" className="nav-link">CONTACT</a>

          <a href="#cv" className="nav-link">CV</a>
         
          <a href="https://github.com/1anDr0" target="_blank" rel="noopener noreferrer" className="nav-link icon-link">
            <span>GITHUB</span>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jerker-danielsson/" target="_blank" rel="noopener noreferrer" className="nav-link icon-link">
            <span>LINKEDIN</span>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;

