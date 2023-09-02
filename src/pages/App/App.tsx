import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppContainer, RoutesContainer, GlobalStyles } from './AppStyle';

import Header from '../../Global/Header/Header';
import Artwork from '../Artwork/Artwork';
import About from '../About/About';
import Contact from '../Contact/Contact';
import ArtZoomed from '../Artwork/ArtZoomed';



const App = () => {

  return (
    <div>
    <GlobalStyles />
    <AppContainer>
      <Header />
      <RoutesContainer>
      <Routes>
        <Route path="/" element={<Artwork />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/artpiece/:imageUrl" element={<ArtZoomed />} />
      </Routes>
      </RoutesContainer>
    </AppContainer>
    </div>
  );
};

export default App;