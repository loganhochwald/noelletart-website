import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export const AppContainer = styled.div`
  max-width: 80%;
  margin: auto;
  font-family: "Consolas", monospace;
  background-color: #fcfcff;
  box-shadow: 0 2px 4px rgb(0 0 0 / 61%);
  min-height: 100vh;
`;

export const RoutesContainer = styled.div`
  margin: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const Section = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgrey;
`;

export const Top = styled(Section)`
  background-color: rgb(250, 227, 232);
`;

export const LeftItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9em;
`;

export const RightItem = styled.div`
  flex: 2;
  height: 100%;
`;

export const Center = styled(Section)`
  background-color: white;
  flex: 2;
`;

export const Bottom = styled(Section)`
  background-color: rgb(250, 227, 232);
  display: flex;
  flex-direction: row-reverse;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  /* Small screens */
  @media all and (max-width: 500px) {
    flex-direction: column;
  }
`;