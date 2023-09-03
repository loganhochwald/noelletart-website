import React from 'react';
import { HeaderWrapper, HeaderTitle, LinksWrapper, LinkItem } from './HeaderStyle';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const navigateTo = (endpoint: string) => {
    navigate(endpoint);
  }

  const menuLinks = ['LIVE PAINTINGS', 'ABSTRACTS', 'SET PIECES', 'ABOUT'];

  return (
    <HeaderWrapper>
      <HeaderTitle>Noelle T. Art</HeaderTitle>
      <LinksWrapper>
      <LinkItem key='rec' onClick={() => navigateTo('/')}>RECENT</LinkItem>
      {menuLinks.map((link) => {
        // changes link to lowercase and hyphens
        const endpoint = link.toLowerCase().replace(/\s+/g, '-');
        return (
        <LinkItem key={endpoint.slice(0, 3)} onClick={() => navigateTo(endpoint)}>{link}</LinkItem>)})
      }
      </LinksWrapper>
    </HeaderWrapper>
  );
};

export default Header;
