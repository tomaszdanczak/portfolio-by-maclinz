import React from "react";
import styled from "styled-components";
import Particle from "../Components/Particle";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";

function HomePage() {
  return (
    <HomePageStyled>
      <Particle />

      <div className="typography">
        <h1>
          Hi, I'm <span>Lorem Ipsum</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          odit voluptate dolores eligendi quia, dolorem accusantium corporis quo
          dignissimos nisi! Lorem ipsum dolor sit amet.
        </p>
        <div className="icons">
          <a href="https://codepen.io/pen" className="icon i-facebook">
            <FacebookIcon />
          </a>
          <a href="https://codepen.io/pen" className="icon i-github">
            <GithubIcon />
          </a>
          <a href="https://codepen.io/pen" className="icon i-youtube">
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export default HomePage;
