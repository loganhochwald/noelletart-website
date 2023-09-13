import React, { useEffect, useState } from "react";
import { AboutGridContainer, AboutImageContainer, NoelleImage, AboutInfoContainer,
  AboutBioContainer, AboutStatementContainer, AboutContAndInfoContainer,
  VIEWCV, ContactInfo, UnderlinedText, UnderlinedLink
} from './AboutStyle';
import noelle from './Noelle-Headshot.webp';
import { LoaderContainer, Loader } from '../../Global/Header/HeaderStyle';
import axios from "axios";


const About = () => {

  const [loading, setLoading] = useState(true);
  const [about, setAbout] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    // wait for both API calls to complete
    Promise.all([
      axios.get('/.netlify/functions/about'),
      axios.get('/.netlify/functions/bio')
    ])
    .then(([aboutResponse, bioResponse]) => {
      setAbout(aboutResponse.data);
      setBio(bioResponse.data);
       // set loading to false when both data are loaded
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error loading data", error);
      setLoading(false);
    });
  }, []);

  const openS3Pdf = () => {
    window.open('https://noelletart.s3.amazonaws.com/cv.pdf');
  }

  if (loading) {
    return <LoaderContainer><Loader/></LoaderContainer>;
  }

  return (
    <AboutGridContainer>
      <AboutStatementContainer>
      { about }
    </AboutStatementContainer>
    <AboutImageContainer>
      <NoelleImage src={noelle} alt="Noelle Image" />
    </AboutImageContainer>
    <AboutInfoContainer>
    <AboutBioContainer>
      { bio }
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