import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 1rem;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 4rem;
  font-family: 'Consolas', monospace;
  cursor: default;
`;

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const LinkItem = styled.h3`
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color:#006e90;
    transition: all 0.3s ease;
  }
`;