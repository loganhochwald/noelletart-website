import React, { useEffect, useState } from "react";
import axios from "axios";

import ArtPiece from "./ArtPiece";
// import { pictures } from './examplePictures';
import { useNavigate } from "react-router-dom";

import { ArtGridContainer } from './ArtworkStyle';

const Artwork = () => {
  const navigate = useNavigate();
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    axios.get('aws/images')
    .then((images) => {
      setPictures(images.data);
    })
    .catch((error) => {
      console.error(error);
    })
  }, [])


  return (
    <ArtGridContainer>
      {pictures.length !== 0 && pictures.map((picture, index) => (
        <ArtPiece key={index} src={picture}/>
      ))}
    </ArtGridContainer>
  );
};

export default Artwork;