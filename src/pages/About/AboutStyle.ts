import styled from "styled-components";

const breakpoint = "1000px";

const AboutGridContainer = styled.div`
  display: flex;
  padding: 2rem;
  padding-top: 0rem;
  max-width: 900px;
  box-sizing: border-box;
  flex-wrap: wrap;
  margin: auto;
  column-gap: 0.5rem;
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
  max-width: 95%;
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
  text-align: justify;
`;

const AboutStatementContainer = styled.div`
  text-align: justify;
  margin-bottom: 2rem;
  white-space: pre-line;
`;

const AboutContAndInfoContainer = styled.div``;

const VIEWCV = styled.div`
  text-align: center;
  margin: 2rem;
  cursor: pointer;
`;

const ContactInfo = styled.div``;

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
  AboutStatementContainer,
  AboutContAndInfoContainer,
  VIEWCV,
  ContactInfo,
  UnderlinedText,
  UnderlinedLink,
};
