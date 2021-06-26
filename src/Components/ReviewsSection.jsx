import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";

function ReviewsSection() {
  return (
    <ReviewsSectionStyled>
      <Title title={"reviews"} span={"reviews"} />
      <InnerLayout></InnerLayout>
    </ReviewsSectionStyled>
  );
}
const ReviewsSectionStyled = styled.section``;

export default ReviewsSection;
