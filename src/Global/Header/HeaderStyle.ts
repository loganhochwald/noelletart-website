import styled, { keyframes } from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.5rem;
  padding-bottom: 1rem;
  margin: 0 1rem;
`;

export const HeaderTitle = styled.h1`
  margin: 0 1rem;
  font-size: 4rem;
  font-family: "Consolas", monospace;
  cursor: default;
  text-align: center;
  margin-bottom: 1rem;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const LinkItem = styled.h4`
 font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  margin: 1rem;
  text-align: center;
  position: relative;

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #006e90;
    bottom: -4px;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
`;

export const CurrentLinkItem = styled.h4`
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  margin: 1rem;
  text-align: center;
  position: relative;
  color: #006e90;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #006e90;
    bottom: -4px;
    left: 0;
  }
`;

const rotateAnimation = keyframes`
  0% {
    border-width: 10px;
  }
  25% {
    border-width: 3px;
  }
  50% {
    transform: rotate(115deg);
    border-width: 10px;
  }
  75% {
    border-width: 3px;
  }
  100% {
    border-width: 10px;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  width: 70px;
  height: 70px;
  border: 5px solid #fae3e8;
  border-color: #fcfcff #fcfcff #fae3e8 #fae3e8;
  border-radius: 50%;
  box-sizing: border-box;
  animation: ${rotateAnimation} 3s ease-in-out infinite;
  transform: rotate(-200deg);
`;
