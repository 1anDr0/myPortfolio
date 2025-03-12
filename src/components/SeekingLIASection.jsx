import React, { useState } from "react";
import { FiDownload, FiArrowDownLeft } from "react-icons/fi";
import "../styles/SeekingLIA.css";

const SeekingLIASection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="seeking-lia container section-spacing">

      <div className="lia-wrapper">
        <h1 className="lia-heading">
          Seeking LIA /internship from November 2025/11/04
        </h1>

        <div className="lia-box">
          <button className="lia-toggle" onClick={() => setIsOpen(!isOpen)}>
            <span>About me</span>
            <span className={`lia-icon ${isOpen ? "open" : ""}`}>
              <FiArrowDownLeft />
            </span>
          </button>

          <div className={`lia-content ${isOpen ? "open" : ""}`}>
            <p className="lia-text">
              I’m a frontend developer with a strong passion for layout and design.
              Originally from Rättvik, Dalarna, I’ve been living in Stockholm for over
              10 years. I thrive on creating modern, intuitive, and visually appealing
              interfaces that enhance user experience. With a keen eye for detail, I
              focus on clean layouts, thoughtful UI components, and seamless
              responsiveness. I’m always exploring new trends in web design to refine
              my craft, ensuring that my work balances aesthetics with functionality.
            </p>

            <div className="lia-button-wrapper">
              <button className="lia-download-btn">
                COVER LETTER <FiDownload className="lia-download-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeekingLIASection;

