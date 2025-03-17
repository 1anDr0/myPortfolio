import React, { useState } from "react";
import { FiArrowDownLeft } from "react-icons/fi";
// import { FaCode, FaPaintBrush } from "react-icons/fa";
// import { MdOutlineSportsVolleyball } from "react-icons/md";
// import dalahorseImage from "../assets/Dalecarlian_horse.svg.png";
import rectangleImage from "../assets/Rectangle.png";
import figmaImage from "../assets/me.jpg";
import "../styles/Hero.css";

const Hero = () => {
  const [isOpenCV, setIsOpenCV] = useState(false);
  const [language, setLanguage] = useState("sv");

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
            {language === "sv" ? (
             <>
             <p className="cv-text">
               Strukturerad och kreativ frontendutvecklare med god känsla för design, detaljer och användarvänlighet.
               Jag arbetar noggrant, är lösningsorienterad och har lätt för att samarbeta i team. Som person är jag lugn,
               flexibel och positiv, med en förmåga att bidra till en trygg och effektiv arbetsmiljö.
             </p>
           
             <h3 className="cv-heading">Färdigheter</h3>
             <hr />
             <ul className="my-list">
               <li>HTML, CSS, JavaScript</li>
               <li>React</li>
               <li>Figma, UX/UI-principer</li>
               <li>Photoshop, InDesign, DaVinci Resolve</li>
               <li>Responsiv design, Git & versionshantering</li>
             </ul>
           
             <br />
           
             <h3 className="cv-heading">Utbildning</h3>
             <hr />
             <ul className="my-list">
               <li>Jensen Education – Frontendutveckling (2024–pågående)</li>
             </ul>
           
             <br />
           
             <h3 className="cv-heading">Övriga kurser</h3>
             <hr />
             <ul className="my-list">
               <li>NTI-Skolan – Grafisk Kommunikation (2023)</li>
             </ul>
           
             <br />
           
             <h3 className="cv-heading">Yrkeserfarenhet</h3>
             <hr />
           
             <br />
             <h3 className="cv-heading">Rena Snitt Sverige AB (cleancut.se)</h3>
             <br />
             <div className="header-row">
             
               <h5>E-handelskoordinator</h5>
               <h5>Feb 2013 – Jun 2024</h5>
             </div>
             <ul className="my-list">
               <li>Ansvarade för den dagliga orderhanteringen och säkerställde effektiv logistik och kundkommunikation.</li>
               <li>Skötte kundtjänst och gav professionell service genom att hantera frågor, beställningar och supportärenden.</li>
               <li>Hanterade och utvecklade företagets närvaro på sociala medier, inklusive Instagram och YouTube.</li>
               <li>Arbetade med hemsidans layout och design, skapade och uppdaterade artiklar samt utförde bildredigering för en enhetlig visuell profil.</li>
               <li>Se exempel på vad jag har gjort längre ner på sidan.</li>
             </ul>
           
             <br />
           
             <h3 className="cv-heading">Boda skola / Fritidshem</h3>
             <br />
             <div className="header-row">
             
               <h5>Fritidsledare och lärare</h5>
               <h5>Sep 2009 – Dec 2012</h5>
             </div>
             <ul className="my-list">
               <li>Arbetade med både undervisning och fritidsverksamhet, med fokus på att skapa en trygg och stimulerande miljö för elever i lågstadieålder.</li>
             </ul>
           </>
            ) : (
              <>
              <p className="cv-text">
              Structured and creative frontend developer with a strong sense for design, detail, and user experience. I work thoroughly, am solution-oriented, and collaborate easily in a team. As a person, I’m calm, flexible, and positive, with an ability to contribute to a safe and efficient work environment.
             </p>
            <h3 className="cv-heading">Skills</h3>
             <hr />
             <ul className="my-list">
               <li>HTML, CSS, JavaScript</li>
               <li>React</li>
               <li>Figma, UX/UI-principles</li>
               <li>Photoshop, InDesign, DaVinci Resolve</li>
               <li>Responsive design, Git & version control
               </li>
             </ul>
<br />
<h3 className="cv-heading">Education</h3>
<hr />
<ul className="my-list">
 <li>Jensen Education – Frontend Development (2024–ongoing)</li>
</ul>
<br />
<h3 className="cv-heading">Additional Courses</h3>
<hr />
<ul className="my-list">
 <li>NTI-Skolan – Graphic Communication (2023)</li>
</ul>
<br />
<h3 className="cv-heading">Work Experience</h3>
<hr />
<br />
<h3 className="cv-heading">Rena Snitt Sverige AB (cleancut.eu)</h3>
<br />
<div className="header-row">
 <h5>E-commerce Coordinator</h5>
 <br />
 <h5>Feb 2013 – Jun 2024</h5>
</div>
<ul className="my-list">
 <li>Handled daily order management and ensured efficient logistics and customer communication.</li>
 <li>Provided customer support by managing inquiries, orders, and service requests.</li>
 <li>Managed and developed the company’s social media presence, including Instagram and YouTube, through content creation and publishing.</li>
 <li>Worked with the website's layout and design, created and updated product articles, and performed image editing to ensure a consistent visual profile.</li>
 <li>See examples of my previous work further down on this page.</li>
</ul>
<br />
<h3 className="cv-heading">Boda School / After-school program</h3>
<br />
<div className="header-row">
 <h5>Leisure Educator & Teacher</h5>
 <h5>Sep 2009 – Dec 2012</h5>
</div>
<ul className="my-list">
 <li>Worked in both teaching and after-school activities, focusing on creating a safe and stimulating environment for students.</li>
</ul>

              
             </>

            )}
              {/* Språkväljare längst ner i CV-accordion */}
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

export default Hero;




