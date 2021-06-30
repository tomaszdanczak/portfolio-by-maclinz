import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";

function HamburgerMenu() {
  return (
    <HamburgerMenuStyled>
      <IconButton>
        <MenuIcon />
      </IconButton>
    </HamburgerMenuStyled>
  );
}

const HamburgerMenuStyled = styled.div``;

export default HamburgerMenu;
