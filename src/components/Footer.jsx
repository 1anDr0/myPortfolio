import React, { useState } from "react";
import { FiArrowDownLeft } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <section className="footer-section">
        <h1 className="footer-heading">Let's Connect</h1>

        <div className="footer-box-wrapper">
          <div className="footer-box">
            <button
              className="footer-toggle"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>Jerker Danielsson</span>
              <span className={`footer-icon ${isOpen ? "open" : ""}`}>
                <FiArrowDownLeft />
              </span>
            </button>

            <div className={`footer-content ${isOpen ? "open" : ""}`}>
              <div className="footer-inner">
                <div className="footer-info">
                  <div className="footer-left">
                    <div className="footer-row">
                      <FaEnvelope className="footer-icon-sm" />
                      <span>jerker_danielsson@hotmail.com</span>
                    </div>
                    <div className="footer-row">
                      <FaPhone className="footer-icon-sm" />
                      <span>073-992 97 98</span>
                    </div>
                  </div>

                  <div className="footer-right">
                    <a
                      href="https://linkedin.com/in/jerkerdanielsson"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link"
                    >
                      <FaLinkedin className="footer-icon-sm" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/1anDr0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link"
                    >
                      <FaGithub className="footer-icon-sm" />
                      <span>Github</span>
                    </a>
                  </div>
                </div>

                <div className="footer-location">
                  <FaMapMarkerAlt className="footer-icon-sm" />
                  <span>Stockholm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-bottom">
        <p>Designed & built by Jerker Danielsson</p>
      </div>
    </>
  );
};

export default Footer;







