import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ArtZoomedContainer, ArtZoomedImage, ArtZoomedTitle, ArtZoomedButton } from "./ArtZoomedStyle";

const ArtZoomed = () => {
  const navigate = useNavigate();

  // Grab the image URL and title from the location state sent when navigating to this page
  const location = useLocation();
  const url = location.state?.pictureURL;
  const imageTitle = location.state?.title;

  return (
      <ArtZoomedContainer>
        <ArtZoomedImage src={url}/>
        <ArtZoomedTitle>{imageTitle}</ArtZoomedTitle>
        <ArtZoomedButton onClick={() => navigate('/')}>Return to Gallery</ArtZoomedButton>
      </ArtZoomedContainer>
  );
};

export default ArtZoomed;