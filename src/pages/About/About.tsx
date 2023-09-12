import React from 'react';
import { AboutGridContainer, AboutImageContainer, NoelleImage, AboutInfoContainer,
  AboutBioContainer, AboutStatementContainer, AboutContAndInfoContainer,
  VIEWCV, ContactInfo, UnderlinedText, UnderlinedLink
} from './AboutStyle';
import noelle from './Noelle-Headshot.webp';
import cv from './Noelle-CV.pdf';

import Bio from './Bio';
import AboutStatement from './AboutStatement';

const About = () => {

  const openPdf = () => {
    window.open(cv, '_blank');
  };

  const openS3Pdf = () => {
    window.open('https://noelletart.s3.amazonaws.com/cv.pdf');
  }

  return (
    <AboutGridContainer>
      <AboutStatementContainer>
        <AboutStatement />
      </AboutStatementContainer>
      <AboutImageContainer>
        <NoelleImage src={noelle} alt="Noelle Image" />
      </AboutImageContainer>
      <AboutInfoContainer>
      <AboutBioContainer>
        <Bio />
      </AboutBioContainer>
      <AboutContAndInfoContainer>
      <VIEWCV onClick={openS3Pdf}><UnderlinedText>VIEW CV</UnderlinedText></VIEWCV>
      <ContactInfo>INSTAGRAM: <UnderlinedLink href="https://www.instagram.com/noelle.tart">@noelletart</UnderlinedLink></ContactInfo>
      <ContactInfo>EMAIL: <UnderlinedLink href="mailto:noelletart@gmail.com">noelletart@gmail.com</UnderlinedLink></ContactInfo>
    </AboutContAndInfoContainer>
      </AboutInfoContainer>
    </AboutGridContainer>
  );
};

export default About;