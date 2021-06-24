import React from "react";
import styled from "styled-components";
import Particle from "../Components/Particle";

function HomePage() {
  return (
    <HomePageStyled>
      <Particle />
      Home Page
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header``;

export default HomePage;
