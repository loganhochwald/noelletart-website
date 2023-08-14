import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Global/Header/Header';
import Artwork from './pages/Artwork/Artwork';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Artwork />} />
        <Route path="about/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;