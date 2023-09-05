import styled from 'styled-components';

export const ArtPieceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin: 1rem;
  justify-content: flex-end;
`;

export const ArtPieceImage = styled.img`
  max-width: 100%;
  height: auto;
  cursor: pointer;
  border: solid 1px rgb(0 0 0);
`;

export const ArtPieceTitle = styled.p`
margin-top: 1.5rem;
margin-bottom: 0rem;
text-align: center;
`
export const ArtPieceVideo = styled.video`
  max-width: 100%;
  height: auto;
  border: solid 1px rgb(0 0 0);
`;