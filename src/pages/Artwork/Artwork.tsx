import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import ArtPiece from "./ArtPiece";
import { ArtGridContainer } from "./ArtworkStyle";
import { LoaderContainer, Loader } from "../../Global/Header/HeaderStyle";

const Artwork = () => {
  const location = useLocation();

  const [pictures, setPictures] = useState<string[]>([]);
  const [fetching, setFetching] = useState<boolean>(true);

  useEffect(() => {
    const endpoint = location.pathname === "/" ? "/recent" : location.pathname;

    // check if the pictures are in session storage (every time the website is opened)
    const cachedPictures = sessionStorage.getItem(endpoint);

    if (cachedPictures) {
      setPictures(JSON.parse(cachedPictures));
      setFetching(false);
    } else {
      axios
        .get(`/.netlify/functions${endpoint}`)
        .then((response) => {
          if (Array.isArray(response.data)) {
            setPictures(response.data);
            // Save data to session storage
            sessionStorage.setItem(endpoint, JSON.stringify(response.data));
          }
          setFetching(false);
        })
        .catch((error) => {
          console.error("Could not get S3 Images", error);
          setFetching(false);
        });
    }
  }, [location]);

  if(fetching) {
    return (
      <LoaderContainer>
      <Loader />
    </LoaderContainer>
    )
  }

  return (
    <>
        <ArtGridContainer>
          {pictures.length !== 0 &&
            pictures.map((picture, index) => (
              <ArtPiece key={index} src={picture} />
            ))}
        </ArtGridContainer>
    </>
  );
};

export default Artwork;
