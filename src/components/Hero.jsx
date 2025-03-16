import React, { useState } from "react";
import { FiArrowDownLeft, FiDownload } from "react-icons/fi";
// import { FaCode, FaPaintBrush } from "react-icons/fa";
// import { MdOutlineSportsVolleyball } from "react-icons/md";
// import dalahorseImage from "../assets/Dalecarlian_horse.svg.png";
import rectangleImage from "../assets/Rectangle.png";
import figmaImage from "../assets/me.jpg";
import "../styles/Hero.css";

const Hero = () => {
  const [isOpenCV, setIsOpenCV] = useState(false);
  const [language, setLanguage] = useState("en");

  return (
    <section className="hero-section">
      {/* Background rectangles */}
      <img src={rectangleImage} alt="Blur Overlay 1" className="rectangle top" />
      <img src={rectangleImage} alt="Blur Overlay 2" className="rectangle bottom" />
      <img src={figmaImage} alt="Jerker Danielsson" className="hero-profile" />

      <div className="container">
        <div className="hero-text">
          <h1 className="hero-title group">
            <span className="title-en">Hey! I’m Jerker Danielsson.</span>
            <span className="title-sv">Hej! Jag heter Jerker Danielsson.</span>
          </h1>
          <h2 className="hero-subtitle">STUDENT @ JENSEN EDUCATION</h2>
          <h3 className="hero-subtitle">(FRONT-END DEVELOPER)</h3>
        </div>

        <div className="cv-box">
          <button className="cv-button" onClick={() => setIsOpenCV(!isOpenCV)}>
            <span className="hero-cv">CV</span>
            <span className={`cv-icon ${isOpenCV ? "open" : ""}`}>
              <FiArrowDownLeft />
            </span>
          </button>

          <div className={`cv-content ${isOpenCV ? "open" : ""}`}>
            {language === "en" ? (
              <>
                <p className="cv-text">
                  I’m a frontend developer with a strong passion for layout and design.
                  Originally from Rättvik, Dalarna, I’ve been living in Stockholm for over
                  10 years. I thrive on creating modern, intuitive, and visually appealing
                  interfaces that enhance user experience. With a keen eye for detail, I
                  focus on clean layouts, thoughtful UI components, and seamless
                  responsiveness. I’m always exploring new trends in web design to refine
                  my craft, ensuring that my work balances aesthetics with functionality.
                </p>
               
              </>
            ) : (
              <>
              <p className="my list">
                Strukturerad och kreativ frontendutvecklare med god känsla för design, detaljer och användarvänlighet.
                Jag arbetar noggrant, är lösningsorienterad och har lätt för att samarbeta i team. Som person är jag lugn,
                flexibel och positiv, med en förmåga att bidra till en trygg och effektiv arbetsmiljö.
              </p>
              <br />
              <h3>Färdigheter</h3>
              <hr />
              <p className="my-list">
                Se mina färdigheter längre ner på sidan.</p>
              
              <br />
              <h3>UTBILDNING</h3>
              <hr />
              <ul className="my-list">
                <li>Jensen Education – Frontendutveckling (2024–pågående)</li>
              </ul>
              <br />
              <h3>ÖVRIGA KURSER</h3>
              <hr />
              <ul className="my-list">
                <li>NTI-Skolan – Grafisk Kommunikation (2023)</li>
              </ul>
               <br />
              <h3>YRKESERFARENHETER</h3>
              <hr />
              <br />
              <h3>Rena Snitt Sverige AB (cleancut.eu)</h3>
            
              <div className="header-row">
                <h4>E-handelskoordinator</h4>
                <h4>Feb 2013 – Jun 2024</h4>
              </div>
            
              <ul className="my-list">
                <li>Ansvarade för den dagliga orderhanteringen och säkerställde effektiv logistik och kundkommunikation.</li>
                <li>Skötte kundtjänst och gav professionell service genom att hantera frågor, beställningar och supportärenden.</li>
                <li>Hanterade och utvecklade företagets närvaro på sociala medier, inklusive Instagram och YouTube, genom innehållsskapande och publicering.</li>
                <li>Arbetade med hemsidans layout och design, skapade och uppdaterade artiklar samt utförde bildredigering för en enhetlig visuell profil.</li>
                <li>Se vad jag har gjort tidigare längre ner på sidan.</li>
              </ul>
              <br />
              <h3>Boda skola/fritidshem</h3>
              <div className="header-row">
                <h4>Fritidsledare och lärare</h4>
                <h4>Sep 2009 - dec 2012</h4>
              </div>
              <ul className="my-list">
                <li>Arbetade med både undervisning och fritidsverksamhet, där fokus låg på att skapa en trygg och stimulerande miljö för eleverna.</li>
              </ul>
             
            </>
            
            )}
              {/* Språkväljare längst ner i CV-accordion */}
            <div className="language-toggle inside-accordion">
              <button
                onClick={() => setLanguage("en")}
                className={language === "en" ? "active-lang" : ""}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("sv")}
                className={language === "sv" ? "active-lang" : ""}
              >
                SV
              </button>
            </div>
            {/* CV-knapp */}
            <a href="/cv-jerker-danielsson.pdf" download className="cv-download-btn">
              DOWNLOAD MY CV
            </a>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




