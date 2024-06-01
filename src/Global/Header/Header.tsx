import React from "react";
import {
  HeaderWrapper,
  HeaderTitle,
  LinksWrapper,
  LinkItem,
  CurrentLinkItem,
} from "./HeaderStyle";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = (endpoint: string) => {
    navigate(endpoint);
  };

  const menuLinks = ["LIVE PAINTINGS", "ABSTRACTS", "SET PIECES", "ABOUT"];

  // THIS IS SUCH UGLY CODE BUT IM ON SUCH A TIME CRUNCH
  return (
    <HeaderWrapper>
      <HeaderTitle>Noelle T. Art</HeaderTitle>
      <LinksWrapper>
        {location.pathname === "/" ? (
          <CurrentLinkItem key="rec" onClick={() => navigateTo("/")}>
            RECENT
          </CurrentLinkItem>
        ) : (
          <LinkItem key="rec" onClick={() => navigateTo("/")}>
            RECENT
          </LinkItem>
        )}
        {menuLinks.map((link) => {
          // changes link to lowercase and hyphens
          const endpoint = link.toLowerCase().replace(/\s+/g, "-");
          return location.pathname.slice(1, 4) === `${endpoint.slice(0, 3)}` ? (
            <CurrentLinkItem
              key={endpoint.slice(0, 3)}
              onClick={() => navigateTo(endpoint)}
            >
              {link}
            </CurrentLinkItem>
          ) : (
            <LinkItem
              key={endpoint.slice(0, 3)}
              onClick={() => navigateTo(endpoint)}
            >
              {link}
            </LinkItem>
          );
        })}
      </LinksWrapper>
    </HeaderWrapper>
  );
};

export default Header;
