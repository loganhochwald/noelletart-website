import styled, { keyframes } from 'styled-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay, FreeMode } from 'swiper/modules';

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

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  /* Reset styles for images */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
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

  @media (max-width: 640px) {
    top: 50%;
    opacity: 1;
  }
`;

const getTitle = (src: string) => {
  const imageFilename = src.split("/").pop() || "";
  return imageFilename.replace(/\.[^.]+$/, "");
}

const isVideo = (src: string) => {
  const imageFileName = src.split("/").pop() || "";
  return !imageFileName.endsWith(".jpg");
}

const Carousel: React.FC<CarouselProps> = ({ pictures }) => {

  const navigate = useNavigate();

  const zoomIn = (picture: string, imageTitle: string) => {
    navigate(`/artpiece/${imageTitle}`, {
      state: {
        pictureURL: picture,
        title: imageTitle,
        endpoint: window.location.pathname,
      },
    });
  };

  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        freeMode={true}
        spaceBetween={20}
        loop={true}
        className="mySwiper"
        modules={[Autoplay, FreeMode]}
        autoplay={
          window.innerWidth <= 640
            ? {
                delay: 2000,
                disableOnInteraction: false,
              }
            : false
        }
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            effect: 'fade',
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {pictures.map((picture, index) => (
          <SwiperSlide key={index}>
            <ImageContainer $img={picture} onClick={() => zoomIn(picture, getTitle(picture))}>
              {isVideo(picture) ? (
                <video controls>
                  <source src={picture} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={picture} alt={`Slide ${index}`} loading="lazy" />
              )}
              <Overlay className="overlay">{getTitle(picture)}</Overlay>
            </ImageContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
