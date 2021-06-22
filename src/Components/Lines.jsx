import React from 'react'
import styled from 'styled-components'

function Lines() {
  return (
    <LinesStyled>
      <div className="line-1"></div>
      <div className="line-2"></div>
      <div className="line-3"></div>
      <div className="line-4"></div>
    </LinesStyled>
  )
}

const LinesStyled = styled.div`
  position: absolute;
  min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  opacity: 0.4;
  z-index: -1;

  .line-1,
  .line-2,
  .line-3,
  .line-4 {
    width: 1px;
    min-height: 100vh;
    background-color: var(--border-color);
  }`

export default Lines
