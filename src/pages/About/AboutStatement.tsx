import React, { useEffect, useState } from "react";
import axios from "axios";

const AboutStatement = () => {

    const [about, setAbout] = useState<string>('');

    useEffect(() => {
        axios.get('/.netlify/functions/about')
          .then((response) => {
            setAbout(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            // Backup old About
            console.error("Could not get the about statement", error);
            setAbout(`"Heavily influenced by the children I teach and their creative process, I delight in mimicking and fostering their innocent connection to their environment and their direct way of playing with materials. The combination of joy with reckless chaos leaves room for chance and allows the process to determine the final piece. Creativity grows from the intersection of presence and play, a lesson that I strive to impart to my students, peers, and audience. My practice is enlivened by painting in public spaces, bringing in external engagement and a looseness that offers others insight into the evolution of the work. By focusing on the joys of the process and by utilizing events as studio spaces, the painting or sculpture becomes a performative piece. This way of working values the performance of creating more than the final finished piece.
            I gravitate towards maximalist non-representationalism, abstraction of the figure, and illustration of energy and emotion. I convey these emotional concepts through seemingly spontaneous material play, mark making, and intuitive color responses. Additionally, through collecting and using recycled materials as my substrates and tools, I seek to demonstrate how sustainable responsibility can be a form of play and discovery as well as a necessity. These layers woven throughout my work physically and metaphorically allow the work to change and breathe every time it is viewed, hovering in between painting, sculpture and performance, while giving the viewer room to grow new perspectives and connect in fresh ways."`)
          })
      }, []) 



  return (
    <>{about}</>
  );
};

export default AboutStatement;
