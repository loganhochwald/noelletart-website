import React from 'react';
import { useNavigate } from "react-router-dom";
import { ArtPieceContainer, ArtPieceImage, ArtPieceTitle } from './ArtPieceStyle';

interface ArtPieceProps {
  src: string;
}

const ArtPiece: React.FC<ArtPieceProps> = ({ src }) => {
  const navigate = useNavigate();
  const imageFilename = src.split('/').pop() || '';
  const imageTitle = imageFilename.replace(/\.[^.]+$/, '');  

  const zoomIn = (picture: string) => {
    navigate(`/artpiece/${imageTitle}`, { state: { pictureURL: picture, title: imageTitle } });
  }

  return (
    <ArtPieceContainer>
      <ArtPieceImage src={src} alt="Artwork Image" onClick={() => zoomIn(src)}/>
      <ArtPieceTitle>{imageTitle}</ArtPieceTitle>
    </ArtPieceContainer>
  );
};

export default ArtPiece;