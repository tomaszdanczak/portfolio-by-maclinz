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

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: var(--background-light-color-2);
  padding: 0.4rem 2rem;
  font-size: inherit;
  color: var(--white-color);
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  margin-bottom: 0.6rem;

  &:not(:last-child) {
    margin-right: 0.6rem;
  }

  &:active,
  &:focus {
    background-color: var(--primary-color);
  }

  &:hover {
    background-color: var(--primary-color);
  }
`;

export default Buttons;
