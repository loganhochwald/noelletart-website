import React from 'react';
import { HeaderWrapper, HeaderTitle, LinksWrapper, LinkItem } from './HeaderStyle';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const navigateTo = (endpoint: string) => {
    navigate(endpoint);
  }

  return (
    <HeaderWrapper>
      <HeaderTitle>Noelle T Art</HeaderTitle>
      <LinksWrapper>
        <LinkItem onClick={() => navigateTo('/')}>ARTWORK</LinkItem>
        <LinkItem onClick={() => navigateTo('/about')}>ABOUT</LinkItem>
        <LinkItem onClick={() => navigateTo('/contact')}>CONTACT</LinkItem>
      </LinksWrapper>
    </HeaderWrapper>
  );
};

export default Header;
