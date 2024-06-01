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
    let endpoint = location.pathname;

    if (endpoint === "/") {
      endpoint = "recent";
    }

    axios
      .get(`/.netlify/functions/${endpoint}`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setPictures(response.data);
          setFetching(false);
        }
      })
      .catch((error) => {
        console.error("Could not get S3 Images", error);
        setFetching(false);
      });
  }, [location]);

  return (
    <>
      {fetching ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <ArtGridContainer>
          {pictures.length !== 0 &&
            pictures.map((picture, index) => (
              <ArtPiece key={index} src={picture} />
            ))}
        </ArtGridContainer>
      )}
    </>
  );
};

export default Artwork;
