import styled from 'styled-components';

const AboutGridContainer = styled.div`
display: flex;
border: 1px solid #ccc;
`;

const AboutImageContainer = styled.div`
align-items: baseline;
display: flex;
border: 1px solid #ccc;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
justify-items: center;
text-align: justify;
`

const NoelleImage = styled.img`
  max-width: 100%;
  height: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const AboutBioContainer = styled.div`
max-width: 50%;
text-align: justify;
`

export {
  AboutGridContainer,
  AboutImageContainer,
  NoelleImage,
  AboutBioContainer,
}