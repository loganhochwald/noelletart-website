import styled from 'styled-components';

export const ArtPieceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 2rem;
  margin: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  justify-content: flex-end;
`;

export const ArtPieceImage = styled.img`
  max-width: 100%;
  height: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: solid 1px rgb(0 0 0);
`;

export const ArtPieceTitle = styled.p`
margin-top: 1.5rem;
margin-bottom: 0rem;
text-align: center;
`