import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ArtPieceContainer,
  ArtPieceImage,
  ArtPieceTitle,
  ArtPieceVideo,
} from "./ArtPieceStyle";

interface ArtPieceProps {
  src: string;
}

const ArtPiece: React.FC<ArtPieceProps> = ({ src }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const imageFilename = src.split("/").pop() || "";
  const imageTitle = imageFilename.replace(/\.[^.]+$/, "");

  const [isVideo, setIsVideo] = useState<boolean>(false);

  const zoomIn = (picture: string) => {
    navigate(`/artpiece/${imageTitle}`, {
      state: {
        pictureURL: picture,
        title: imageTitle,
        endpoint: location.pathname,
      },
    });
  };

  useEffect(() => {
    if (!imageFilename.endsWith(".jpg")) {
      setIsVideo(true);
    } else {
      setIsVideo(false);
    }
  }, [src]);

  return (
    <ArtPieceContainer>
      {isVideo ? (
        <ArtPieceVideo src={src} controls></ArtPieceVideo>
      ) : (
        <ArtPieceImage
          src={src}
          alt="Artwork Image"
          onClick={() => zoomIn(src)}
        />
      )}
      <ArtPieceTitle>{imageTitle}</ArtPieceTitle>
    </ArtPieceContainer>
  );
};

export default ArtPiece;
