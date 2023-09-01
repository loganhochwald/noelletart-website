import React, { useEffect, useState } from "react";
import axios from "axios";

import ArtPiece from "./ArtPiece";
import { ArtGridContainer } from './ArtworkStyle';

const Artwork = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    axios.get('aws/images')
    .then((images) => {
      console.log("the data: ", images.data);
      console.log("the images object: ", images);
      setPictures(images.data);
    })
    .catch((error) => {
      console.error("Could not get S3 Images", error);
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