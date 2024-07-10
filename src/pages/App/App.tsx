import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppContainer, RoutesContainer, GlobalStyles, Container, Top, Center, Bottom, Section, LeftItem, RightItem, Navigation } from "./AppStyle";

import Header from "../../Global/Header/Header";
import Artwork from "../Artwork/Artwork";
import About from "../About/About";
import ArtZoomed from "../Artwork/ArtZoomed";

import ScrollToTopButton from "../../ScrollToTop";

const App = () => {
  return (
    <>
    <GlobalStyles />
    <Container>
      <Top>
        <LeftItem>Noelle</LeftItem>
        <RightItem>
          <Navigation>
           <Header />
          </Navigation>
        </RightItem>
      </Top>
      <Center>
      {/* <RoutesContainer>
          <Routes>
            <Route path="/" element={<Artwork />} />
            <Route path="/live-paintings" element={<Artwork />} />
            <Route path="/abstracts" element={<Artwork />} />
            <Route path="/set-pieces" element={<Artwork />} />
            <Route path="/about" element={<About />} />
            <Route path="/artpiece/:imageUrl" element={<ArtZoomed />} />
          </Routes>
        </RoutesContainer> */}
      </Center>
      <Bottom>
        <LeftItem>Tollett</LeftItem>
        <RightItem />
      </Bottom>
    </Container>
  </>
    // <div>
    //   <GlobalStyles />
    //   <AppContainer>
    //     <Header />
        // <RoutesContainer>
        //   <Routes>
        //     <Route path="/" element={<Artwork />} />
        //     <Route path="/live-paintings" element={<Artwork />} />
        //     <Route path="/abstracts" element={<Artwork />} />
        //     <Route path="/set-pieces" element={<Artwork />} />
        //     <Route path="/about" element={<About />} />
        //     <Route path="/artpiece/:imageUrl" element={<ArtZoomed />} />
        //   </Routes>
        // </RoutesContainer>
    //   </AppContainer>
    //   <ScrollToTopButton />
    // </div>
  );
};

export default App;
