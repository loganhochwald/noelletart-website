import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #fae3e8;
  }
`;

export const AppContainer = styled.div`
max-width: 80%;
margin: auto;
font-family: 'Consolas', monospace;
background-color: #fcfcff;
box-shadow: 0 2px 4px rgb(0 0 0 / 61%);
`

export const RoutesContainer = styled.div`
margin: 1rem;
`