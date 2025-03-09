import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { FiArrowDownRight, FiArrowDownLeft } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Exempelbild – byt till din riktiga bild från assets
import wtrAppImage from "../assets/wtrApp.png";
import arenaQuizImage from "../assets/arenaQuiz.png";
import toDoImage from "../assets/toDo.png";
import myPortfolioImage from "../assets/myPortfolio.png";

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
    arrows: false,
  };

  return (
    <section className="bg-[#6D9886] text-white py-6 px-6 md:pl-[780px] md:pr-[300px] pb-[200px] relative">
      <h1
        className="text-[36px] md:text-[72px] font-bold tracking-[-0.07em] leading-[1.1] text-left w-full mb-10"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        My Projects
      </h1>

     {/* React */}
<div className="w-full max-w-[1000px] border-t border-white mb-0">
  <button
    onClick={() => setIsOpenReact(!isOpenReact)}
    className="w-full flex justify-between items-center py-1 text-[20px] md:text-[24px] font-medium tracking-[-0.07em] cursor-pointer"
    style={{ fontFamily: "Helvetica, sans-serif" }}
  >
    <span>React</span>
    <span
      className={`text-[32px] md:text-[48px] transform transition-transform duration-500 ${
        isOpenReact ? "rotate-[-45deg]" : "rotate-0"
      }`}
    >
      <FiArrowDownLeft />
    </span>
  </button>
  <div
    className={`overflow-hidden transition-all duration-500 ease-in-out ${
      isOpenReact ? "max-h-[1000px] opacity-100 py-6" : "max-h-0 opacity-0"
    }`}
  >
    <div className="flex flex-col items-center">
    <p className="text-[16px] md:text-[20px] text-center max-w-[700px] tracking-tight" style={{ fontFamily: "Helvetica, sans-serif" }}>
        Ett portfolio-projekt byggt i React med Tailwind CSS 
      </p>
      {/* Klickbar bild */}
      <a
        href="https://jerkerdanielsson.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity duration-300"
      >
        <img
         src={myPortfolioImage}
         alt="Weather App"
         className="w-[350px] md:w-[700px] h-auto object-cover"
        />
      </a>

      {/* Förklaringstext under bilden */}
      
    </div>
  </div>
</div>


      {/* Vanilla JavaScript */}
      <div className="w-full max-w-[1000px] border-t border-white mb-0">
        <button
          onClick={() => setIsOpenVanilla(!isOpenVanilla)}
          className="w-full flex justify-between items-center py-1 text-[20px] md:text-[24px] font-medium tracking-[-0.05em] cursor-pointer"
          style={{ fontFamily: "Helvetica, sans-serif" }}
        >
          <span
            className={`text-[32px] md:text-[48px] transform transition-transform duration-500 ${
              isOpenVanilla ? "rotate-45" : "rotate-0"
            }`}
          >
            <FiArrowDownRight />
          </span>
          <span>HTML, CSS, Javascript</span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpenVanilla ? "max-h-[1000px] opacity-100 py-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="relative flex items-center justify-center">
            {/* BACK */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-[14px] md:text-[20px] tracking-widest rotate-[-90deg] origin-center z-10 hover:opacity-50"
              style={{ fontFamily: "Helvetica, sans-serif" }}
            >
              BACK
            </button>

         {/* Slider */}  
<Slider ref={sliderRef} {...settings} className="w-full max-w-[700px]">
  {/* Slide 1 – Weather App */}
  <div className="flex flex-col items-center">
  <p
      className="text-[16px] md:text-[20px] text-start max-w-[700px]"
      style={{ fontFamily: "Helvetica, sans-serif" }}
    >
     Weather app
    </p>
    <a
      href="https://webtherapp.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-70 transition-opacity duration-300"
    >
      <img
        src={wtrAppImage}
        alt="Weather App"
        className="w-[350px] md:w-[700px] h-auto object-cover"
      />
    </a>
   
  </div>

  {/* Slide 2 – Arena Quiz */}
  <div className="flex flex-col items-center">
  <p
      className="text-[16px] md:text-[20px] text-start max-w-[700px]"
      style={{ fontFamily: "Helvetica, sans-serif" }}
    >
      Footballquiz
    </p>
    <a
      href="https://https://arenaquizet.netlify.app//"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-70 transition-opacity duration-300"
    >
      <img
        src={arenaQuizImage}
        alt="Weather App"
        className="w-[350px] md:w-[700px] h-auto object-cover"
      />
    </a>
   
  </div>

    {/* Slide 3 - toDO*/}
    <div className="flex flex-col items-center">
  <p
      className="text-[16px] md:text-[20px] text-start max-w-[700px]"
      style={{ fontFamily: "Helvetica, sans-serif" }}
    >
      Footballquiz
    </p>
    <a
      href="https://to-do-jd-24.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-70 transition-opacity duration-300"
    >
      <img
        src={toDoImage}
        alt="Weather App"
        className="w-[350px] md:w-[700px] h-auto object-cover"
      />
    </a>
   
  </div>
</Slider>


            {/* NEXT */}
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-[14px] md:text-[20px] tracking-widest rotate-90 origin-center z-10 hover:opacity-50"
              style={{ fontFamily: "Helvetica, sans-serif" }}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>

      {/* Figma */}
      <div className="w-full max-w-[1000px] border-t border-b border-white">
        <button
          onClick={() => setIsOpenFigma(!isOpenFigma)}
          className="w-full flex justify-between items-center py-1 text-[20px] md:text-[24px] font-medium tracking-[-0.05em] cursor-pointer"
          style={{ fontFamily: "Helvetica, sans-serif" }}
        >
          <span>Figma</span>
          <span
            className={`text-[32px] md:text-[48px] transform transition-transform duration-500 ${
              isOpenFigma ? "rotate-[-45deg]" : "rotate-0"
            }`}
          >
            <FiArrowDownLeft />
          </span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpenFigma ? "max-h-[1000px] opacity-100 py-6" : "max-h-0 opacity-0"
          }`}
        >
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
