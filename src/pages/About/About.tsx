import React from 'react';
import { AboutGridContainer, AboutImageContainer, NoelleImage,
  AboutBioContainer, } from './AboutStyle';
import { noellePic } from './NoellePic';

const About = () => {

  return (
    <AboutGridContainer>
      <AboutImageContainer>
        <NoelleImage src={noellePic} alt="Noelle Image" />
        <p>Noelle Tollett is an emerging interdisciplinary painter based in New Orleans. Originally from Baton Rouge, she graduated magna cum laude from LSU, earning her BFA in Studio Art with concentration in Painting and Drawing. Since moving to New Orleans, Noelle teaches children's art classes, live paints at music shows, volunteers as a set designer and performer with AquaMob, and hosts figure drawing classes.</p>
      </AboutImageContainer>
      <AboutBioContainer>
        <p>View CV and Download CV Links go Here</p>
      </AboutBioContainer>
    </AboutGridContainer>
  );
};

export default About;