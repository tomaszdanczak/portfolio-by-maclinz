import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import SmallTitle from "./SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ResumeItem from "./ResumeItem";
import SchoolIcon from "@material-ui/icons/School";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;

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

        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>

        <div className="resume-content">
          <ResumeItem
            year={"2019-2022"}
            title={"Computer Science Degree"}
            subTitle={"Sussex University"}
            text={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, culpa doloremque nesciunt porro ullam id maiores aut ipsum! Recusandae, illo."
            }
          />

          <ResumeItem
            year={"2015 - 2017"}
            title={"A - Levels"}
            subTitle={"Church Hill High"}
            text={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, culpa doloremque nesciunt porro ullam id maiores aut ipsum! Recusandae, illo."
            }
          />

          <ResumeItem
            year={"2015 - 2017"}
            title={"High School Graduation"}
            subTitle={"ABC School"}
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

  .u-small-title-margin {
    margin-top: 4rem;
  }
`;

export default Resume;
