import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import ProgressBar from "./ProgressBar";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"My Skills"} />

      <InnerLayout className="skills">
        <ProgressBar title={"HTML5"} width={"70%"} text={"70%"} />
        <ProgressBar title={"CSS3"} width={"90%"} text={"90%"} />
        <ProgressBar title={"JavaScript"} width={"85%"} text={"85%"} />
        <ProgressBar title={"Java"} width={"60%"} text={"60%"} />
        <ProgressBar title={"Python"} width={"95%"} text={"95%"} />
        <ProgressBar title={"React JS"} width={"95%"} text={"95%"} />
        <ProgressBar title={"Unity"} width={"75%"} text={"75%"} />
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 2rem;

    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
