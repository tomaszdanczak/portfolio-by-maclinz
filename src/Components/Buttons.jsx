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

const ButtonsStyled = styled.div``;

const ButtonStyled = styled.button``;

export default Buttons;
