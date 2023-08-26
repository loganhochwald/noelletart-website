import styled from 'styled-components';

const AboutGridContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(2, 1fr);
grid-row-gap: 0px;
border: 1px solid #ccc;
`;

const AboutImageContainer = styled.div`
align-items: center;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
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

const AboutBioContainer = styled.div`
text-align: center;
border: 1px solid #ccc;
padding: 20px;
margin: 10px;
`

export {
  AboutGridContainer,
  AboutImageContainer,
  NoelleImage,
  AboutBioContainer,
}