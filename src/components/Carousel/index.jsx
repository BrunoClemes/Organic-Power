import React, { useState } from 'react';
import { CarouselWrapper, CarouselContent, CarouselButton } from './styles';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = React.Children.count(children);

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalItems - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalItems - 1 ? 0 : prevIndex + 1));
  };

  return (
    <CarouselWrapper>
      <CarouselButton className="left" onClick={previousSlide}>‹</CarouselButton>
      <CarouselContent>
        {React.Children.toArray(children)[currentIndex]}
      </CarouselContent>
      <CarouselButton className="right" onClick={nextSlide}>›</CarouselButton>
    </CarouselWrapper>
  );
};

export default Carousel;