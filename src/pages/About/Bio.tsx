import React, { useEffect, useState } from "react";
import axios from "axios";

const Bio = () => {

    const [bio, setBio] = useState<string>('');

    useEffect(() => {
        axios.get('/.netlify/functions/bio')
          .then((response) => {
            setBio(response.data);
          })
          .catch((error) => {
            // Backup old bio
            console.error("Could not get the bio", error);
            setBio(`NOELLE TOLLETT is an emerging interdisciplinary painter based in New Orleans, LA. Originally from Baton Rouge, LA,
            she graduated magna cum laude from Louisiana State University, earning her Bachelor's of Fine Arts in Studio Art with 
            a concentration in Painting and Drawing. Since moving to New Orleans, Noelle teaches children's art classes, live 
            paints at music shows, and volunteers as a set designer and performer with AquaMob New Orleans.`)
          })
      }, []) 



  return (
    <>{bio}</>
  );
};

export default Bio;
