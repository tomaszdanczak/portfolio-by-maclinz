import React from "react";
import styled from "styled-components";

function ReviewItem({ text }) {
  return (
    <ReviewItemStyled>
      <p>{text}</p>
    </ReviewItemStyled>
  );
}

const ReviewItemStyled = styled.div``;

export default ReviewItem;
