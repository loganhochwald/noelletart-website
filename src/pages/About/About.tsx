import React from 'react';
import { AboutGridContainer, AboutImageContainer, NoelleImage, AboutInfoContainer,
  AboutBioContainer, AboutContAndInfoContainer, VIEWCV, ContactInfo, UnderlinedText, UnderlinedLink
} from './AboutStyle';
import noelle from './Noelle-Headshot.webp';
import cv from './Noelle-CV.pdf';

const About = () => {

  const openPdf = () => {
    window.open(cv, '_blank');
  };

  return (
    <AboutGridContainer>
      <AboutImageContainer>
        <NoelleImage src={noelle} alt="Noelle Image" />
      </AboutImageContainer>
      <AboutInfoContainer>
      <AboutBioContainer>
        NOELLE TOLLETT is an emerging interdisciplinary painter based in New Orleans, LA. Originally from Baton Rouge, LA,
        she graduated magna cum laude from Louisiana State University, earning her Bachelor's of Fine Arts in Studio Art with 
        a concentration in Painting and Drawing. Since moving to New Orleans, Noelle teaches children's art classes, live 
        paints at music shows, and volunteers as a set designer and performer with AquaMob New Orleans.
      </AboutBioContainer>
      <AboutContAndInfoContainer>
      <VIEWCV onClick={openPdf}><UnderlinedText>VIEW CV</UnderlinedText></VIEWCV>
      <ContactInfo>INSTAGRAM: <UnderlinedLink href="https://www.instagram.com/noelle.tart">@noelletart</UnderlinedLink></ContactInfo>
      <ContactInfo>EMAIL: <UnderlinedLink href="mailto:noelletart@gmail.com">noelletart@gmail.com</UnderlinedLink></ContactInfo>
    </AboutContAndInfoContainer>
      </AboutInfoContainer>
    </AboutGridContainer>
  );
};

export default About;