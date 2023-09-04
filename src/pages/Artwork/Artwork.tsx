import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import ArtPiece from "./ArtPiece";
import { ArtGridContainer } from './ArtworkStyle';

const Artwork = () => {
  const location = useLocation();

  const [pictures, setPictures] = useState<string[]>([]);

  useEffect(() => {

    let endpoint = location.pathname;

    if(endpoint === '/') {
      endpoint = 'recent';
    }

    axios.get(`/.netlify/functions/${ endpoint }`)
      .then((response) => {
        if(Array.isArray(response.data)) {
          setPictures(response.data);
        }
      })
      .catch((error) => {
        console.error("Could not get S3 Images", error);
      })
  }, [location])  


  return (
    <ArtGridContainer>
      {pictures.length !== 0 && pictures.map((picture, index) => (
        <ArtPiece key={index} src={picture}/>
      ))}
    </ArtGridContainer>
  );
};

export default Artwork;