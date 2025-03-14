import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { FiArrowDownLeft } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/StuffIveDone.css";

const StuffIveDone = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <section className="stuff-section">
      <h2 className="stuff-heading">Stuff I've Done<br />Professionally</h2>

      <div className="stuff-box">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="stuff-toggle"
        >
          <span>YouTube</span>
          <span className={`stuff-icon ${isOpen ? "open" : ""}`}>
            <FiArrowDownLeft />
          </span>
        </button>

        <div className={`stuff-content ${isOpen ? "open" : ""}`}>
          <div className="relative flex items-center justify-center">
          <button
  onClick={prevSlide}
  className="absolute left-0 top-1/2 -translate-y-1/2 text-[#1C1C1C] text-[14px] md:text-[20px] tracking-widest rotate-[-90deg] origin-center z-10 hover:opacity-50 bg-[#FBFBFB]  px-1 py-0.5 rounded"
>
  BACK
</button>

            <Slider ref={sliderRef} {...settings} className="w-full max-w-[700px]">
  <div className="w-full">
    <div className="relative w-full aspect-video">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/HNLajDKs4Jg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>

  <div className="w-full">
    <div className="relative w-full aspect-video">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/x5nwAiPh3j4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>

  <div className="w-full">
    <div className="relative w-full aspect-video">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/DCWPih-FY28"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</Slider>

            <button
  onClick={nextSlide}
  className="absolute right-0 top-1/2 -translate-y-1/2 text-[#1C1C1C] text-[14px] md:text-[20px] tracking-widest rotate-[-90deg] origin-center z-10 hover:opacity-50 bg-[#FBFBFB]  px-1 py-0.5 rounded"
>
  NEXT
</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StuffIveDone;