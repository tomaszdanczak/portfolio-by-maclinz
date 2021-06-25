import React from "react";
import styled from "styled-components";
import resume from "../img/resume.jpg";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Lorem Ipsum</span>
        </h4>
        <p className="paragraphy">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          doloremque ratione doloribus labore dolor, vel deleniti totam deserunt
          quisquam recusandae veniam similique fugit in natus?
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Lorem Ipsum</p>
            <p>: 36</p>
            <p>: Spanish</p>
            <p>: Spanish, French, English</p>
            <p>: London, United Kingdom</p>
            <p>: Freelance</p>
          </div>
        </div>
        <PrimaryButton title={"Download CV"} />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;

  .left-content {
    width: 100%;

    img {
      width: 95%;
      object-fit: cover;
    }
  }
`;

export default ImageSection;
