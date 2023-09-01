import styled from 'styled-components';

export const ArtZoomedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArtZoomedImage = styled.img`
  max-width: 100%;
  height: auto;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ArtZoomedTitle = styled.h2`
`;

export const ArtZoomedButton = styled.button`
margin-top: 0.5rem;
cursor: pointer;
`