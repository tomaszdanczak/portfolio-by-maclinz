import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";

function ReviewsSection() {
  return (
    <InnerLayout>
      <ReviewsSectionStyled>Reviews Section</ReviewsSectionStyled>
    </InnerLayout>
  );
}
const ReviewsSectionStyled = styled.section``;

export default ReviewsSection;
