import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 3rem;
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
`;

module.exports = {
  HeaderWrapper,
  HeaderTitle,
  LinksWrapper,
  LinkItem
}