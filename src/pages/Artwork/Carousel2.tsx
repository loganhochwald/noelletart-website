import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import styled from 'styled-components';
import React from 'react';


type CarouselProps = {
    pictures: string[];
  };

  interface ImageContainerProps {
    $img: string;
  }

  const ImageContainer = styled.div<ImageContainerProps>`
    width: 100%;
    height: 100%;
    background-image: url('${props => props.$img}');
    background-size: contain;
    background-position: center;
    border-radius: 10px;
    object-fit: contain;
    background-repeat: no-repeat;
    background-color: #006e908f;
    border: lightgrey 5px solid;
  `

  const Carousel: React.FC<CarouselProps> = ({ pictures }) => {

  return (
    <>
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      className="mySwiper"
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
    >
        {pictures.map((picture, index) => (
         <SwiperSlide key={index}>
         <ImageContainer $img={picture} />
       </SwiperSlide>
        ))}
    </Swiper>
  </>
  );
};

export default Carousel;