import { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { HeroSliderData } from './HeroSliderData';

import './HeroSlider.scss';

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = HeroSliderData.length;

  // const autoScroll = true;
  // let slideInterval;
  // let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  // const auto = () => {
  //   slideInterval = setInterval(nextSlide, intervalTime);
  // };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  // useEffect(() => {
  //   if (autoScroll) {
  //     auto();
  //   }
  //   return () => clearInterval(slideInterval);
  // }, [currentSlide]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft onClick={prevSlide} className="arrow prev" />
      <AiOutlineArrowRight onClick={nextSlide} className="arrow next" />
      {HeroSliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? 'slide current' : 'slide'}
            key={index}
          >
            {index === currentSlide && (
              <>
                <img src={slide.img} alt="slide" />
                <div className="content">
                  <h2>{slide.heading}</h2>
                  <p>{slide.description}</p>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
