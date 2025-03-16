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
                <p className="cv-text">
                Strukturerad och kreativ frontendutvecklare med god känsla för design, detaljer och användarvänlighet. Jag arbetar noggrant, är lösningsorienterad och har lätt för att samarbeta i team. Som person är jag lugn, flexibel och positiv, med en förmåga att bidra till en trygg och effektiv arbetsmiljö.
                <br />
                <br />
                <h2>UTBILDNING</h2>
                <hr></hr>
                <ul className="my-list">
               <li>Jensen Education – Frontendutveckling (2024–pågående)</li>
               </ul>
                <br />
                <h2>ÖVRIGA KURSER</h2>
                <hr></hr>
                <ul className="my-list">
               <li>NTI-Skolan - Grafisk Kommunikation (2023)</li>
                <br />
                </ul>
                <h2>YRKESERFARENHETER</h2>
                <hr></hr>
                <h3>Rena snitt Sverige AB (cleancut.eu)</h3> <br />
                <div class="header-row">
                <h4>E-handelskoordinator</h4>
                <h4>Feb 2013 - Jun 2024</h4>
                </div>
                <ul className="my-list">
               <li>Ansvarade för den dagliga orderhanteringen och säkerställde effektiv logistik och kundkommunikation.</li>
               <li>Skötte kundtjänst och gav professionell service genom att hantera frågor, beställningar och supportärenden.</li>
              <li>Hanterade och utvecklade företagets närvaro på sociala medier, inklusive Instagram och YouTube, genom innehållsskapande och publicering.</li>
              <li>Arbetade med hemsidans layout och design, skapade och uppdaterade artiklar samt utförde bildredigering för en enhetlig visuell profil.</li>
               </ul>
               <br />
               <h3>Rena snitt Sverige AB (cleancut.eu)</h3> <br />
                <h4>E-handelskoordinator</h4>
                <ul className="my-list">
               <li>Ansvarade för den dagliga orderhanteringen och säkerställde effektiv logistik och kundkommunikation.</li>
               <li>Skötte kundtjänst och gav professionell service genom att hantera frågor, beställningar och supportärenden.</li>
              <li>Hanterade och utvecklade företagets närvaro på sociala medier, inklusive Instagram och YouTube, genom innehållsskapande och publicering.</li>
              <li>Arbetade med hemsidans layout och design, skapade och uppdaterade artiklar samt utförde bildredigering för en enhetlig visuell profil.</li>
               </ul>

               
              

                </p>
               
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




