import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";

function ReviewsSection() {
  return (
    <InnerLayout>
      <ReviewsSectionStyled>
        <Title title={"reviews"} span={"reviews"} />
      </ReviewsSectionStyled>
    </InnerLayout>
  );
}
const ReviewsSectionStyled = styled.section``;

export default ReviewsSection;
