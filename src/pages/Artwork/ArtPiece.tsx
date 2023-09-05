import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ArtPieceContainer, ArtPieceImage, ArtPieceTitle, ArtPieceVideo } from './ArtPieceStyle';
import e from 'express';

interface ArtPieceProps {
  src: string;
}

const ArtPiece: React.FC<ArtPieceProps> = ({ src }) => {
  const navigate = useNavigate();
  const imageFilename = src.split('/').pop() || '';
  const imageTitle = imageFilename.replace(/\.[^.]+$/, '');
  
  const [isVideo, setIsVideo] = useState<boolean>(false);

  const zoomIn = (picture: string) => {
    navigate(`/artpiece/${imageTitle}`, { state: { pictureURL: picture, title: imageTitle } });
  }

  useEffect(() => {
    if(!imageFilename.endsWith('.jpg')) {
      console.log(imageFilename);
      setIsVideo(true);
    } else {
      setIsVideo(false);
    }
  }, [src]);

  return (
    <ArtPieceContainer>
      {isVideo ? <ArtPieceVideo src={src} controls></ArtPieceVideo> : <ArtPieceImage src={src} alt="Artwork Image" onClick={() => zoomIn(src)}/>}
    <ArtPieceTitle>{imageTitle}</ArtPieceTitle>
    </ArtPieceContainer>
  );
};

export default ArtPiece;