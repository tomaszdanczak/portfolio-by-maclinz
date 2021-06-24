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

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
  }

  .icons {
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    .icon {
      border: 2px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.4s ease-in-out;
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 1rem;
      }

      svg {
        margin: 0.5rem;
      }
    }

    .i-facebook {
      &:hover {
        border: 2px solid var(--primary-color);
        color: var(--primary-color);
      }
    }

    .i-youtube {
      &:hover {
        border: 2px solid red;
        color: red;
      }
    }

    .i-github {
      &:hover {
        border: 2px solid #574687;
        color: #574687;
      }
    }
  }
`;

export default HomePage;
