import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

const HeaderTitle = styled.h1`
  margin: 0;
`;

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`;

const LinkItem = styled.h3`
  text-decoration: none;
  font-weight: bold;
`;

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
