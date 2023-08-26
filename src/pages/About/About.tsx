import React from 'react';
import { AboutGridContainer, AboutImageContainer, NoelleImage,
  AboutBioContainer, } from './AboutStyle';
import { noellePic } from './NoellePic';

const About = () => {

  return (
    <AboutGridContainer>
      <AboutImageContainer>
        <NoelleImage src={noellePic} alt="Noelle Image" />
        <p>Noelle's About Info goes into here!</p>
      </AboutImageContainer>
      <AboutBioContainer>
        <p>View CV and Download CV Links go Here</p>
      </AboutBioContainer>
    </AboutGridContainer>
  );
};

export default About;