import React, { useState, useEffect } from "react";
import { FiArrowDownLeft } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
      <div className="navbar-container container">
      <div className={`navbar-container ${isOpen ? "open" : ""}`}>
        <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="navbar-title">This is what you need</span>
          <span className={`navbar-icon ${isOpen ? "rotate" : ""}`}>
            <FiArrowDownLeft />
          </span>
        </div>

        <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <div className="navbar-links">
            <a href="#cv" className="nav-link">CV</a>
            <a href="#cover-letter" className="nav-link">COVER LETTER</a>
            <a href="https://github.com/dittkonto" target="_blank" rel="noopener noreferrer" className="nav-link icon-link">
              <span>GITHUB</span>
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/dittkonto" target="_blank" rel="noopener noreferrer" className="nav-link icon-link">
              <span>LINKEDIN</span>
              <FaLinkedin />
            </a>
            <a href="#contact" className="nav-link">CONTACT</a>
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;


