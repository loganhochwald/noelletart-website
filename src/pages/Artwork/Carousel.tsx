import { useRef, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import React from 'react';


type CarouselProps = {
    pictures: string[];
  };
  
  const Carousel: React.FC<CarouselProps> = ({ pictures }) => {
 
  return (
    <>
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      loop={true}
      className="mySwiper"
    >
        {pictures.map((picture, index) => (
          <SwiperSlide><img key={index} src={picture} alt={`Artwork ${index}`} /></SwiperSlide>
        ))}
    </Swiper>
  </>
  );
};

export default Carousel;