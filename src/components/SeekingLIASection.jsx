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
             <div className="about-text">
             <p>
               <strong>Snyggt!</strong> Det är nog det ord som bäst beskriver vad jag vill jobba med i framtiden. <br /><br />
               Snyggt kanske är ett vagt ord – vad betyder det egentligen? För mig handlar det om när något både fungerar och ser bra ut. Det är den där känslan av stilrenhet, luftighet och tydlighet, där form och funktion hänger ihop utan att man riktigt kan sätta fingret på varför det känns så rätt.
             </p>
           
             <p>
               Det där har nog funnits med mig längre än jag själv förstått. Som barn kunde jag lägga timmar på att rita/designa fotbollströjor – med hög ambition och minutiös precision. Men det jag egentligen var ute efter var inte detaljer för detaljernas skull – det var känslan av att det blev… snyggt. Det räckte ofta med ett litet klubbemblem i rätt storlek och rätt placering – då satt det. <em>Inga onödiga ränder, inga konstiga färger. Cleant!</em>
             </p>
           
             <p>
               Idag är det just den känslan jag vill förmedla i det jag skapar som frontendstudent. Att få något att kännas självklart. Att bygga gränssnitt som inte bara fungerar, utan känns genomtänkta, enkla att ta in – och snygga.
             </p>
           </div>
           
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
