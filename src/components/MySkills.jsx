import React, { useState } from "react";
import {
  FiArrowDownLeft,
  FiArrowDownRight,
  FiDownload,
} from "react-icons/fi";
import {
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiMiro,
} from "react-icons/si";
import "../styles/MySkills.css";

const MySkills = () => {
  const [isOpenFrontend, setIsOpenFrontend] = useState(false);
  const [isOpenDesign, setIsOpenDesign] = useState(false);

  return (
    <section className="skills-section">
      <h1 className="skills-heading">My skills /experience</h1>

      {/* Frontend */}
      <div className="skills-box">
        <button className="skills-toggle" onClick={() => setIsOpenFrontend(!isOpenFrontend)}>
          <span>Frontend</span>
          <span className={`skills-icon ${isOpenFrontend ? "open" : ""}`}>
            <FiArrowDownLeft />
          </span>
        </button>

        <div className={`skills-content ${isOpenFrontend ? "open" : ""}`}>
          <div className="skills-tags">
            <div className="tag-row">
              <span>HTML</span><span>CSS</span><span>JavaScript</span>
            </div>
            <div className="tag-row">
              <span>React</span><span>Node.js</span><span>Git</span><span>Github</span>
            </div>
            <div className="tag-row">
              <span>Bootstrap</span><span>Tailwind CSS</span>
            </div>
          </div>
          <div className="skills-icons">
            <FaHtml5 /><FaCss3Alt /><FaJsSquare /><FaReact />
            <FaNodeJs /><FaGitAlt /><FaGithub /><SiTailwindcss /><FaBootstrap />
          </div>
        </div>
      </div>

      {/* Design */}
      <div className="skills-box">
        <button className="skills-toggle" onClick={() => setIsOpenDesign(!isOpenDesign)}>
          <span className={`skills-icon ${isOpenDesign ? "open right" : "right"}`}>
            <FiArrowDownRight />
          </span>
          <span>Design</span>
        </button>

        <div className={`skills-content ${isOpenDesign ? "open" : ""}`}>
          <div className="skills-tags">
            <div className="tag-row">
              <span>Figma</span><span>Miro</span><span>Adobe XD</span>
            </div>
            <div className="tag-row">
              <span>Photoshop</span><span>InDesign</span><span>Miro</span>
            </div>
            <div className="tag-row">
              <span>Illustrator</span><span>UX/UI</span>
            </div>
            <div className="tag-row">
              <span>DaVinci Resolve</span>
            </div>
          </div>
          <div className="skills-icons">
            <FaFigma /><SiAdobexd /><SiAdobephotoshop /><SiAdobeillustrator />
            <SiAdobeindesign /><SiMiro />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
