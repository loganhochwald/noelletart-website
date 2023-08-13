import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Global/Header/Header';
import Artwork from './pages/Artwork/Artwork';

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Artwork />} />
      </Routes>
    </>
  );
};

export default App;