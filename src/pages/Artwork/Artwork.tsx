import React from "react";
import ArtPiece from "./ArtPiece";
import { pictures } from './examplePictures';

import { ArtGridContainer } from './ArtworkStyle';

const Artwork = () => {
  return (
    <ArtGridContainer>
      {pictures.map((picture, index) => (
        <ArtPiece key={index} src={picture} />
      ))}
    </ArtGridContainer>
  );
};

export default Artwork;