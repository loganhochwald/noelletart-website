import styled from 'styled-components';

const breakpoint = '1000px';

const AboutGridContainer = styled.div`
display: flex;
flex-direction: row;
padding: 2rem;
max-width: 900px;
box-sizing: border-box;
flex-wrap: wrap;
margin: auto;
column-gap: 1rem;
row-gap: 1rem;

@media (max-width: ${breakpoint}) {
  flex-direction: column;
}
`;

const AboutImageContainer = styled.div`
max-width: 100%;
height: auto;
flex: 1;
display: flex;
`;

const NoelleImage = styled.img`
  max-width: 100%;
  height: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 220px;
  border: solid black;
  border-radius: 2%;
`;

const AboutInfoContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const AboutBioContainer = styled.div`
`;

const AboutContAndInfoContainer = styled.div`
`;

const VIEWCV = styled.div`
text-align: center;
margin: 2rem;
`;

const ContactInfo = styled.div`
`;

const UnderlinedText = styled.span`
  text-decoration: underline;
`;

const UnderlinedLink = styled.a`
  text-decoration: underline;
  color: black;
`;


export {
  AboutGridContainer,
  AboutImageContainer,
  NoelleImage,
  AboutInfoContainer,
  AboutBioContainer,
  AboutContAndInfoContainer,
  VIEWCV,
  ContactInfo,
  UnderlinedText,
  UnderlinedLink,
}