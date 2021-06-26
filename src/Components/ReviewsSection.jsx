import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import ReviewItem from "./ReviewItem";

function ReviewsSection() {
  return (
    <ReviewsSectionStyled>
      <Title title={"reviews"} span={"reviews"} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi deleniti recusandae ducimus ab!"
            }
          />
          <ReviewItem
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Eligendi deleniti recusandae ducimus ab! Eligendi deleniti recusandae ducimus ab!"
            }
          />
        </div>
      </InnerLayout>
    </ReviewsSectionStyled>
  );
}
const ReviewsSectionStyled = styled.section``;

export default ReviewsSection;
