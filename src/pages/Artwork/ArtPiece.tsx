import React from 'react';
import { useNavigate } from "react-router-dom";
import { ArtPieceContainer, ArtPieceImage } from './ArtPieceStyle';

interface ArtPieceProps {
  src: string;
}

const ArtPiece: React.FC<ArtPieceProps> = ({ src }) => {
  const navigate = useNavigate();

  const zoomIn = (picture: string) => {
    console.log("Image clicked:", picture);
    navigate(`/artpiece/${encodeURIComponent(picture)}`);
  }


  return (
    <ArtPieceContainer>
      <ArtPieceImage src={src} alt="Artwork Image" onClick={() => zoomIn(src)}/>
    </ArtPieceContainer>
  );
};

export default ArtPiece;