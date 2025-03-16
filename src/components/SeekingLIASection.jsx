import React, { useState } from "react";
import { FiArrowDownLeft } from "react-icons/fi";
import "../styles/SeekingLIA.css";

const SeekingLIASection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  return (
    <section className="lia-section">
      <div className="lia-wrapper">
        <h1 className="lia-heading">
          Seeking LIA /internship from November 2025/11/04
        </h1>

        <div className="lia-box">
          <button className="lia-toggle" onClick={() => setIsOpen(!isOpen)}>
            <span className="lia-about">About me</span>
            <span className={`lia-icon ${isOpen ? "open" : ""}`}>
              <FiArrowDownLeft />
            </span>
          </button>

          <div className={`lia-content ${isOpen ? "open" : ""}`}>
            {language === "en" ? (
              <>
                <p className="lia-text">
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
                <p className="lia-text">
                  Jag är en frontendutvecklare med stark passion för layout och design.
                  Ursprungligen från Rättvik i Dalarna, men har bott i Stockholm i över
                  10 år. Jag brinner för att skapa moderna, intuitiva och visuellt tilltalande
                  gränssnitt som förbättrar användarupplevelsen. Med ett öga för detaljer
                  fokuserar jag på rena layouter, genomtänkta UI-komponenter och
                  responsiv design. Jag följer gärna nya trender inom webbdesign för att
                  ständigt utveckla min kompetens och skapa balans mellan form och funktion.
                </p>
                
              </>
            )}

            {/* Språkväljare inuti accordionen */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeekingLIASection;
