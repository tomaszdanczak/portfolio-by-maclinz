import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import SmallTitle from "./SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ResumeItem from "./ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;

  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"Resume"} />

      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>

        <div className="resume-content">
          <ResumeItem
            year={"2015 - 2020"}
            title={"Computer Science Teacher"}
            subTitle={"Sussex University"}
            text={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, culpa doloremque nesciunt porro ullam id maiores aut ipsum! Recusandae, illo."
            }
          />

          <ResumeItem
            year={"2015 - Present"}
            title={"Full Stack Developer"}
            subTitle={"Microsoft Studios"}
            text={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, culpa doloremque nesciunt porro ullam id maiores aut ipsum! Recusandae, illo."
            }
          />

          <ResumeItem
            year={"2010 - 2017"}
            title={"User Interface Designer"}
            subTitle={"Google Inc"}
            text={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, culpa doloremque nesciunt porro ullam id maiores aut ipsum! Recusandae, illo."
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;

export default Resume;
