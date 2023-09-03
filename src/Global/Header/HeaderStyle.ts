import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.5rem;
  padding-bottom: 1rem;
  margin: 0 1rem;
`;

export const HeaderTitle = styled.h1`
  margin: 0 1rem;
  font-size: 4rem;
  font-family: 'Consolas', monospace;
  cursor: default;
  text-align: center;
  margin-bottom: 1rem;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const LinkItem = styled.h3`
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
  margin: 1rem;
  text-align: center;

  &:hover {
    color:#006e90;
    transition: all 0.3s ease;
  }
`;