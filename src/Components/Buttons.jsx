import React from "react";
import styled from "styled-components";

function Buttons({ filter, buttons }) {
  return (
    <ButtonsStyled>
      {buttons.map((but, i) => {
        return (
          <ButtonStyled key={i} onClick={() => filter(but)}>
            {but}
          </ButtonStyled>
        );
      })}
    </ButtonsStyled>
  );
}

const ButtonsStyled = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  margin: 2.4rem auto;
`;

const ButtonStyled = styled.button``;

export default Buttons;
