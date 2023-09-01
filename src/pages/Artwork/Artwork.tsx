import React, { useEffect, useState } from "react";
import axios from "axios";

import ArtPiece from "./ArtPiece";
import { ArtGridContainer } from './ArtworkStyle';

const Artwork = () => {
  const [pictures, setPictures] = useState<string[]>([]);

  useEffect(() => {
    axios.get('/.netlify/functions/S3-config')
      .then((response) => {
        if(Array.isArray(response.data)) {
          setPictures(response.data);
        }
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