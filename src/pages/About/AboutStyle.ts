import styled from 'styled-components';

const AboutGridContainer = styled.div`
  display: grid;
`;

const AboutImageContainer = styled.div`
align-items: center;
border: 1px solid #ccc;
padding: 20px;
margin: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const NoelleImage = styled.img`
  max-width: 100%;
  height: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export {
  AboutGridContainer,
  AboutImageContainer,
  NoelleImage
}