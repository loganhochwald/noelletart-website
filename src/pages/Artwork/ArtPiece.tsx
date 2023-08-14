import React from 'react';
import { ArtPieceContainer, ArtPieceImage } from './ArtPieceStyle';

interface ArtPieceProps {
  src: string
}

const ArtPiece: React.FC<ArtPieceProps> = ({ src }) => {
  return (
    <ArtPieceContainer>
      <ArtPieceImage src={src} alt="Artwork Image" />
    </ArtPieceContainer>
  );
};

export default ArtPiece;