import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"My Skills"} />

      <InnerLayout>Skills</InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section``;

export default Skills;
