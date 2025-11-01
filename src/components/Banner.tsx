"use client";
import React from 'react';
import Slider from 'react-slick';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto mt-8">
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/1200/400?random=1" alt="Banner 1" className="w-full h-auto" />
        </div>
        <div>
          <img src="https://picsum.photos/1200/400?random=2" alt="Banner 2" className="w-full h-auto" />
        </div>
        <div>
          <img src="https://picsum.photos/1200/400?random=3" alt="Banner 3" className="w-full h-auto" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
