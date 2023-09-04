import styled from 'styled-components';

const AboutGridContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
border: 1px solid #ccc;
padding: 20px;
max-width: 100%;
box-sizing: border-box;
flex-wrap: wrap;
`;

const AboutImageContainer = styled.div`
max-width: 100%;
height: auto;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
flex: 1;
`;

const NoelleImage = styled.img`
  max-width: 100%;
  height: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const AboutBioContainer = styled.div`
flex: 2;
padding: 0 20px;
`;

export {
  AboutGridContainer,
  AboutImageContainer,
  NoelleImage,
  AboutBioContainer,
}