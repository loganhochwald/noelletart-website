import styled from 'styled-components';

export const ArtGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  margin: 0 2rem;
  justify-content: center;
  align-items: flex-start;

  
  @media (max-width: 20rem) {
    grid-template-columns: 1fr;
  }
  `;