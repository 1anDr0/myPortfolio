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
              className="slider-nav left"
            >
              BACK
            </button>

            <Slider ref={sliderRef} {...settings} className="w-full max-w-[700px]">
              <div>
                <iframe
                  width="100%"
                  height="393"
                  src="https://www.youtube.com/embed/HNLajDKs4Jg"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div>
                <iframe
                  width="100%"
                  height="393"
                  src="https://www.youtube.com/embed/x5nwAiPh3j4"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div>
                <iframe
                  width="100%"
                  height="393"
                  src="https://www.youtube.com/embed/DCWPih-FY28"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Slider>

            <button
              onClick={nextSlide}
              className="slider-nav right"
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