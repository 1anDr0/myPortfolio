import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { FiArrowDownRight, FiArrowDownLeft } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import wtrAppImage from "../assets/wtrApp.png";
import arenaQuizImage from "../assets/arenaQuiz.png";
import toDoImage from "../assets/toDo.png";
import myPortfolioImage from "../assets/myPortfolio.png";
import "../styles/MyProjects.css";

const MyProjects = () => {
  const [isOpenReact, setIsOpenReact] = useState(false);
  const [isOpenVanilla, setIsOpenVanilla] = useState(false);
  const [isOpenFigma, setIsOpenFigma] = useState(false);

  const sliderRef = useRef(null);
  const nextSlide = () => sliderRef.current?.slickNext();
  const prevSlide = () => sliderRef.current?.slickPrev();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
  };

  return (
    <section className="projects-section">
      <h1 className="projects-heading">My Projects</h1>

      {/* React */}
      <div className="projects-box">
        <button
          onClick={() => setIsOpenReact(!isOpenReact)}
          className="projects-toggle"
        >
          <span>React</span>
          <span className={`projects-icon ${isOpenReact ? "open" : ""}`}>
            <FiArrowDownLeft />
          </span>
        </button>
        <div className={`projects-content ${isOpenReact ? "open" : ""}`}>
          <div className="flex flex-col items-center">
            <p className="text-[16px] md:text-[20px] text-center max-w-[700px]">
              Ett portfolio-projekt byggt i React med Tailwind CSS
            </p>
            <a
              href="https://jerkerdanielsson.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <img
                src={myPortfolioImage}
                alt="Portfolio"
                className="w-[350px] md:w-[700px] h-auto object-cover"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Vanilla JavaScript */}
      <div className="projects-box">
        <button
          onClick={() => setIsOpenVanilla(!isOpenVanilla)}
          className="projects-toggle"
        >
          <span className={`projects-icon ${isOpenVanilla ? "open right" : "right"}`}>
            <FiArrowDownRight />
          </span>
          <span>HTML, CSS, JavaScript</span>
        </button>
        <div className={`projects-content ${isOpenVanilla ? "open" : ""}`}>
          <div className="relative flex items-center justify-center">
          <button
  onClick={prevSlide}
  className="absolute left-0 top-1/2 -translate-y-1/2 text-[#1C1C1C] text-[14px] md:text-[20px] tracking-widest rotate-[-90deg] origin-center z-10 hover:opacity-50 bg[#FBFBFB]  px-1 py-0.5 rounded"
>
  BACK
</button>
            <Slider ref={sliderRef} {...settings} className="w-full max-w-[700px]">
              <div className="flex flex-col items-center">
                <p className="text-[16px] md:text-[20px] text-start max-w-[700px]">Weather app</p>
                <a href="https://webtherapp.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src={wtrAppImage} alt="Weather App" className="w-[350px] md:w-[700px] h-auto object-cover" />
                </a>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[16px] md:text-[20px] text-start max-w-[700px]">Football quiz</p>
                <a href="https://arenaquizet.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src={arenaQuizImage} alt="Football Quiz" className="w-[350px] md:w-[700px] h-auto object-cover" />
                </a>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[16px] md:text-[20px] text-start max-w-[700px]">To Do App</p>
                <a href="https://to-do-jd-24.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src={toDoImage} alt="To Do App" className="w-[350px] md:w-[700px] h-auto object-cover" />
                </a>
              </div>
            </Slider>
            <button
  onClick={prevSlide}
  className="absolute right-0 top-1/2 -translate-y-1/2 text-[#1C1C1C] text-[14px] md:text-[20px] tracking-widest rotate-[-90deg] origin-center z-10 hover:opacity-50 bg-[FBFBFB] px-1 py-0.5 rounded"
>
  NEXT
</button>
          </div>
        </div>
      </div>

      {/* Figma */}
      <div className="projects-box">
        <button
          onClick={() => setIsOpenFigma(!isOpenFigma)}
          className="projects-toggle"
        >
          <span>Figma</span>
          <span className={`projects-icon ${isOpenFigma ? "open" : ""}`}>
            <FiArrowDownLeft />
          </span>
        </button>
        <div className={`projects-content ${isOpenFigma ? "open" : ""}`}>
          <div className="flex justify-center">
            <iframe
              className="w-[350px] h-[196px] md:w-[700px] md:h-[393px] border"
              src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/sq0Bdu3BMUx9RXdZAvZb1O/TECHFLOW?page-id=0%3A1&node-id=47-444&starting-point-node-id=47%3A444"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
