import React from 'react';
import { AboutGridContainer, AboutImageContainer, NoelleImage } from './AboutStyle';
import { noellePic } from './NoellePic';

const About = () => {

  return (
    <AboutGridContainer>
      <p>This is the About, I want this to contain grids.</p>
      <AboutImageContainer>
        <NoelleImage src={noellePic} alt="Noelle Image" />
      </AboutImageContainer>
    </AboutGridContainer>
  );
};

export default About;