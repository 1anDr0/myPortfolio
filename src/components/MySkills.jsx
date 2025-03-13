import React, { useState } from "react";
import { FiArrowDownLeft } from "react-icons/fi";
import { FiArrowDownRight } from "react-icons/fi";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaFigma, FaPaintBrush } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import "../styles/MySkills.css";

const MySkills = () => {
  const [isOpenFrontend, setIsOpenFrontend] = useState(false);
  const [isOpenDesign, setIsOpenDesign] = useState(false);

  return (
    <section className="skills-section">
      <h2 className="skills-heading">My Skills</h2>

      {/* Frontend */}
      <div className="skills-box">
        <button
          className="skills-toggle"
          onClick={() => setIsOpenFrontend(!isOpenFrontend)}
        >
          <span>Frontend</span>
          <span className={`skills-icon ${isOpenFrontend ? "open" : ""}`}>
            <FiArrowDownLeft />
          </span>
        </button>

        <div className={`skills-content ${isOpenFrontend ? "open" : ""}`}>
          <div className="skills-tags">
            <div className="tag-row">
              <span><FaHtml5 className="skills-icons" /> HTML</span>
              <span><FaCss3Alt className="skills-icons" /> CSS</span>
              <span><FaJsSquare className="skills-icons" /> JavaScript</span>
              <span><FaReact className="skills-icons" /> React</span>
              <span><SiTailwindcss className="skills-icons" /> Tailwind</span>
            </div>
          </div>
        </div>
      </div>

      {/* Design */}
      <div className="skills-box">
        <button
        
          className="skills-toggle"
          onClick={() => setIsOpenDesign(!isOpenDesign)}
        >
          
          <span className={`skills-icon ${isOpenDesign ? "open" : ""}`}>
            <FiArrowDownRight/>
          </span>
          <span>Design</span>
        </button>

        <div className={`skills-content ${isOpenDesign ? "open" : ""}`}>
          <div className="skills-tags">
            <div className="tag-row">
              <span><FaFigma className="skills-icons" /> Figma</span>
              <span><FaPaintBrush className="skills-icons" /> UI Design</span>
              <span className="skills-icons">UX thinking</span>
              <span className="skills-icons">Typography</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
