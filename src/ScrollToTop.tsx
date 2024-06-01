import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ScrollToTopButtonWrapper = styled.div<{ isVisible: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: opacity 0.3s ease-in-out;
  z-index: 999;

  button {
    padding: 10px 20px;
    background-color: #133e6d;
    color: #fff;
    border: none;
    cursor: ${(props) => (props.isVisible ? "pointer" : "default")};
    outline: none;
    border-radius: 5px;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollToTopButtonWrapper isVisible={isVisible}>
      <button className="scroll-to-top-button" onClick={scrollToTop}>
        ⬆
      </button>
    </ScrollToTopButtonWrapper>
  );
}

export default ScrollToTopButton;
