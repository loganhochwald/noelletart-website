import React from "react";
import { LinkItem, CurrentLinkItem } from "./HeaderStyle";
import { useNavigate } from "react-router-dom";

const AboutLink: React.FC = () => {
  const aboutLink = "ABOUT";
  const endpoint = 'about';

  const navigate = useNavigate();

  return (
    location.pathname.slice(1, 4) === `${endpoint.slice(0, 3)}` ? (
      <CurrentLinkItem
        key={endpoint.slice(0, 3)}
        onClick={() => navigate(endpoint)}
      >
        {aboutLink}
      </CurrentLinkItem>
    ) : (
      <LinkItem
        key={endpoint.slice(0, 3)}
        onClick={() => navigate(endpoint)}
      >
        {aboutLink}
      </LinkItem>
    )
  );
};

export default AboutLink;