import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';

import Header from './Global/Header/Header';
import Artwork from './pages/Artwork/Artwork';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ArtZoomed from './pages/Artwork/ArtZoomed';

const AppContainer = styled.div`
margin: 2rem;
`

const RoutesContainer = styled.div`
margin: 1rem;
`

const App = () => {

  return (
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
  );
};

export default App;