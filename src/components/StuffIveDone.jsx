import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { FiArrowDownLeft } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <section className="relative bg-[#FFF5E4] text-[#1C1C1C] py-8 px-6 md:pl-[300px] md:pr-[700px] pb-[200px]">
      <h2
        className="text-[48px] md:text-[128px] font-bold tracking-[-0.07em] leading-[1.1] text-left w-full mb-10"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        Stuff I've Done Professionally
      </h2>

      <div className="w-full max-w-[800px] border-t border-b border-black">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center py-1 text-[20px] md:text-[32px] font-light tracking-[-0.05em] cursor-pointer"
          style={{ fontFamily: "Helvetica, sans-serif" }}
        >
          <span>YouTube</span>
          <span
            className={`text-[32px] md:text-[48px] transform transition-transform duration-500 ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
          >
            <FiArrowDownLeft />
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[1000px] opacity-100 py-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="relative flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-black text-[14px] md:text-[20px] tracking-widest rotate-[-90deg] origin-center z-10 hover:opacity-50"
              style={{ fontFamily: "Helvetica, sans-serif" }}
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
              className="absolute right-2 top-1/2 -translate-y-1/2 text-black text-[14px] md:text-[20px] tracking-widest rotate-90 origin-center z-10 hover:opacity-50"
              style={{ fontFamily: "Helvetica, sans-serif" }}
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
