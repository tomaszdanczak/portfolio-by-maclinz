import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";

function Resume() {
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"Resume"} />
      <InnerLayout>Resume</InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section``;

export default Resume;
