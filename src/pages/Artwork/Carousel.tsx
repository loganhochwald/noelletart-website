import styled, { keyframes } from 'styled-components';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

type CarouselProps = {
  pictures: string[];
};

interface ImageContainerProps {
  $img: string;
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
    top: 100%;
  }
  100% {
    opacity: 1;
    top: 50%;
  }
`;

const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('${props => props.$img}');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(0.9);
    cursor: pointer;
  }

  &:hover .overlay {
    animation: ${fadeIn} 0.3s ease forwards;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #006e908f 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5em;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  user-select: none;
`;

const getTitle = (src: string) => {
  const imageFilename = src.split("/").pop() || "";
  return imageFilename.replace(/\.[^.]+$/, "");
}

const Carousel: React.FC<CarouselProps> = ({ pictures }) => {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        loop={true}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {pictures.map((picture, index) => (
          <SwiperSlide key={index}>
            <ImageContainer $img={picture}>
              <Overlay className="overlay">{getTitle(picture)}</Overlay>
            </ImageContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
