import React, { useState } from "react";
import { FiArrowDownLeft, FiDownload } from "react-icons/fi";
import { FaCode, FaPaintBrush } from "react-icons/fa";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import dalahorseImage from "../assets/Dalecarlian_horse.svg.png";
import rectangleImage from "../assets/Rectangle.png";
import figmaImage from "../assets/me.jpg";
import "../styles/Hero.css";

const Hero = () => {
  const [isOpenCV, setIsOpenCV] = useState(false);

  return (
    <section className="hero-section container">
       
  
      <div className="hero-icons">
        <div className="icon-row">
          <img src={dalahorseImage} alt="Dalahäst" className="icon-img" />
          <MdOutlineSportsVolleyball className="icon" />
          <FaPaintBrush className="icon" />
          <FaCode className="icon" />
        </div>
        <div className="icon-line" />
      </div>

      <img src={rectangleImage} alt="Blur Overlay 1" className="rectangle top" />
      <img src={rectangleImage} alt="Blur Overlay 2" className="rectangle bottom" />

      <img src={figmaImage} alt="Jerker Danielsson" className="hero-profile" />

      <div className="hero-text">
        <h1 className="hero-title group">
          <span className="title-en">Hey! I’m Jerker Danielsson.</span>
          <span className="title-sv">Hej! Jag heter Jerker Danielsson.</span>
        </h1>
        <h2 className="hero-subtitle">STUDENT @ JENSEN EDUCATION</h2>
        <h3 className="hero-subtitle">(FRONT-END DEVELOPER)</h3>
      </div>

      {/* ✅ CV-knapp som öppnar innehåll */}
      <div className="cv-box">
        <button className="cv-button" onClick={() => setIsOpenCV(!isOpenCV)}>
          <span>CV</span>
          <span className={`cv-icon ${isOpenCV ? "open" : ""}`}>
            <FiArrowDownLeft />
          </span>
        </button>

        {/* ✅ CV-innehåll inkl. download-knapp */}
        <div className={`cv-content ${isOpenCV ? "open" : ""}`}>
          <p className="cv-text">
            I’m a frontend developer with a strong passion for layout and design.
            Originally from Rättvik, Dalarna, I’ve been living in Stockholm for over
            10 years. I thrive on creating modern, intuitive, and visually appealing
            interfaces that enhance user experience. With a keen eye for detail, I
            focus on clean layouts, thoughtful UI components, and seamless
            responsiveness. I’m always exploring new trends in web design to refine
            my craft, ensuring that my work balances aesthetics with functionality.
          </p>

          <a
            href="/cv-jerker-danielsson.pdf"
            download
            className="cv-download-btn"
          >
            <FiDownload className="cv-download-icon" />
            Download my CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;




