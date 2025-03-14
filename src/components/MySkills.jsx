import React, { useState } from "react";
import { FiArrowDownLeft, FiArrowDownRight } from "react-icons/fi";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaFigma, FaPaintBrush, FaGithub } from "react-icons/fa";

import { SiTailwindcss, SiNpm, SiBootstrap } from "react-icons/si";
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
          onClick={() => setIsOpenFrontend(!isOpenFrontend)}
          className="skills-toggle"
        >
          <span>Frontend</span>
          <span className={`skills-icon ${isOpenFrontend ? "open" : ""}`}>
            <FiArrowDownLeft />
          </span>
        </button>

        <div className={`skills-content ${isOpenFrontend ? "open" : ""}`}>
  <div className="skills-tags">
    <div className="tag-row left">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
    </div>
    <div className="tag-row right">
      <span>React</span>
      <span>Tailwind</span>
      <span>GitHub</span>
    </div>
    <div className="tag-row left">
      <span>NPM</span>
      <span>Bootstrap</span>
      <span>& more</span>
    </div>
  </div>
</div>

      </div>

      {/* Design */}
      <div className="skills-box">
        <button
          onClick={() => setIsOpenDesign(!isOpenDesign)}
          className="skills-toggle"
        >
          <span className={`skills-icon ${isOpenDesign ? "open" : ""}`}>
            <FiArrowDownRight />
          </span>
          <span>Design</span>
        </button>

        <div className={`skills-content ${isOpenDesign ? "open" : ""}`}>
  <div className="skills-tags">
    <div className="tag-row row-1">
      <span>Figma</span>
      <span>Miro</span>
    </div>
    <div className="tag-row row-2">
      <span>Photoshop</span>
      <span>Adobe XD</span>
    </div>
    <div className="tag-row row-3">
      <span>InDesign</span>
      <span>Illustrator</span>
    </div>
    <div className="tag-row row-4">
      <span>Canva</span>
      <span>UX/UI</span>
      <span>& more</span>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default MySkills;
