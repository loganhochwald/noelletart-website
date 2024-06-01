import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppContainer, RoutesContainer, GlobalStyles } from "./AppStyle";

import Header from "../../Global/Header/Header";
import Artwork from "../Artwork/Artwork";
import About from "../About/About";
import ArtZoomed from "../Artwork/ArtZoomed";

import ScrollToTopButton from "../../ScrollToTop";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <RoutesContainer>
          <Routes>
            <Route path="/" element={<Artwork />} />
            <Route path="/live-paintings" element={<Artwork />} />
            <Route path="/abstracts" element={<Artwork />} />
            <Route path="/set-pieces" element={<Artwork />} />
            <Route path="/about" element={<About />} />
            <Route path="/artpiece/:imageUrl" element={<ArtZoomed />} />
          </Routes>
        </RoutesContainer>
      </AppContainer>
      <ScrollToTopButton />
    </div>
  );
};

export default App;
