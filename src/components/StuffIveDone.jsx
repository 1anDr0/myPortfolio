import React, { useRef } from "react";
import Slider from "react-slick";
import { FiArrowLeft } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StuffIveDone = () => {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="bg-black text-white py-8 flex flex-col justify-start items-start mt-[-0px] pl-[780px] pr-[300px] pb-[200px] relative">
      
      {/* Pil långt till vänster */}
      <button
        onClick={nextSlide}
        className="absolute left-[400px] top-[55%] -translate-y-1/2 text-white text-[72px] transition-transform duration-300 hover:-translate-x-2"
      >
        <FiArrowLeft />
      </button>

      <h2
        className="text-[96px] font-medium tracking-[-0.07em] leading-[1.1] text-left w-full"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        Stuff I've Done Professionally
      </h2>

      <div className="w-full max-w-[800px] mt-10">
        <Slider ref={sliderRef} {...settings}>
          {/* Film 1 */}
          <div className="flex justify-center">
            <iframe
              width="700"
              height="380"
              src="https://www.youtube.com/embed/HNLajDKs4Jg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Film 2 */}
          <div className="flex justify-center">
            <iframe
              width="700"
              height="380"
             src="https://www.youtube.com/embed/x5nwAiPh3j4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Film 3 */}
          <div className="flex justify-center">
            <iframe
              width="700"
              height="380"
              src="https://www.youtube.com/embed/DCWPih-FY28" 
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default StuffIveDone;
