import React from 'react';
import { HeaderWrapper, HeaderTitle, LinksWrapper, LinkItem } from './HeaderStyle';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Noelle T Art</HeaderTitle>
      <LinksWrapper>
        <LinkItem>Artwork</LinkItem>
        <LinkItem>About</LinkItem>
        <LinkItem>Contact</LinkItem>
      </LinksWrapper>
    </HeaderWrapper>
  );
};

export default Header;
