import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ArtZoomedContainer, ArtZoomedImage, ArtZoomedTitle, ReturnButton } from "./ArtZoomedStyle";

const ArtZoomed = () => {
  const navigate = useNavigate();

  // Grab the image URL and title from the location state sent when navigating to this page
  const location = useLocation();
  const url = location.state?.pictureURL;
  const imageTitle = location.state?.title;
  const endpoint = location.state?.endpoint;

  return (
      <ArtZoomedContainer>
        <ArtZoomedImage src={url}/>
        <ArtZoomedTitle>{imageTitle}</ArtZoomedTitle>
        <ReturnButton onClick={() => navigate(endpoint)}>Return</ReturnButton>
      </ArtZoomedContainer>
  );
};

export default ArtZoomed;