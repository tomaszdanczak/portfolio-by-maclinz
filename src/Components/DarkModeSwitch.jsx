import React from "react";
import styled from "styled-components";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Switch from "@material-ui/core/Switch";

function DarkModeSwitch() {
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

const DarkModeSwitchStyled = styled.div``;

export default DarkModeSwitch;
