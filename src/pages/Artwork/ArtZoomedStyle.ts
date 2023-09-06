import styled from 'styled-components';

export const ArtZoomedContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem;
max-width: 900px;
margin: auto;
`;

export const ArtZoomedImage = styled.img`
  max-width: 100%;
  height: auto;
  border: solid 1px rgb(0 0 0);
`;

export const ArtZoomedTitle = styled.h2`
text-align: center;
`;

export const ReturnButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  padding: 10px 20px;
  background-color: #133e6d;
  color: #fff;
  border: none;
  cursor: 'pointer';
  outline: none;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;