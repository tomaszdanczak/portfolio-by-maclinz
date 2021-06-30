import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";

function HamburgerMenu({ onToggle }) {
  return (
    <HamburgerMenuStyled>
      <IconButton onClick={() => onToggle()}>
        <MenuIcon />
      </IconButton>
    </HamburgerMenuStyled>
  );
}

const HamburgerMenuStyled = styled.div`
  position: absolute;
  right: 5%;
  top: 3%;
  z-index: 25;

  svg {
    font-size: 3rem;
  }
`;

export default HamburgerMenu;
