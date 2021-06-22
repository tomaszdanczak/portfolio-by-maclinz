import React from 'react'
import styled from 'styled-components'

function Sidebar() {
  return (
    <SidebarStyled>Sidebar</SidebarStyled>
  )
}

const SidebarStyled = styled.div`
  width: 16.3rem;
  position: fixed;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
`

export default Sidebar
