import React, { useState } from "react";
import { FiArrowDownLeft } from "react-icons/fi";
import "../styles/SeekingLIA.css";

const SeekingLIASection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("sv");

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
            {language === "sv" ? (
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
                <div className="about-text">
  <p>
    <strong>Nice!</strong> That’s probably the word that best describes what I want to work with in the future. <br /><br />
    “Nice” might sound vague – what does it even mean? To me, it’s about when something both works well and looks good. That sense of simplicity, spaciousness and clarity, where form and function come together in a way that just feels right.
  </p>

  <p>
    I think that feeling has been with me longer than I realized. As a kid, I could spend hours drawing/designing football kits – with high ambition and meticulous precision. But it wasn’t really about the details themselves – it was about the feeling of when it all came together and looked... nice. A small club badge, just the right size and placed just right – that’s when it clicked. <em>No unnecessary stripes, no weird colors. Clean!</em>
  </p>

  <p>
    Today, it’s that same feeling I try to capture in what I create as a frontend student. Making things feel intuitive. Building interfaces that not only work – but feel considered, easy to take in – and yes, nice.
  </p>
</div>
                
              </>
            )}

            {/* Språkväljare inuti accordionen */}
            <div className="language-toggle inside-accordion">
            <button
                onClick={() => setLanguage("sv")}
                className={language === "sv" ? "active-lang" : ""}
              >
                SV
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={language === "en" ? "active-lang" : ""}
              >
                EN
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeekingLIASection;
