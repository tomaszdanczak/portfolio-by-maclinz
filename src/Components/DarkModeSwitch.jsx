import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Switch from "@material-ui/core/Switch";

function DarkModeSwitch() {
  const [theme, setTheme] = useState("dark-theme");
  const [checked, setChecked] = useState(false);

  return (
    <DarkModeSwitchStyled>
      <div className="left-content">
        <Brightness4Icon />
      </div>
      <div className="right-content">
        <Switch
          value=""
          // checked={}
          inputProps={{ "aria-label": "" }}
          size="medium"
          // onClick={}
        />
      </div>
    </DarkModeSwitchStyled>
  );
}

const DarkModeSwitchStyled = styled.div`
  position: fixed;
  right: 0;
  top: 35%;
  background-color: var(--background-light-color-2);
  width: 6.5rem;
  height: 2.5rem;
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    display: flex;
    align-items: center;
    font-size: 1.7rem;
    color: var(--white-color);
  }
`;

export default DarkModeSwitch;
