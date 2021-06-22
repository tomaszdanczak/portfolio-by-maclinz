import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avatar from "../img/avatar.jpg";

function Navigation() {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>

      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-class" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active-class" exact>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active-class" exact>
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolios" activeClassName="active-class" exact>
            Portfolios
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blogs" activeClassName="active-class" exact>
            Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class" exact>
            Contact
          </NavLink>
        </li>
      </ul>

      <footer className="footer">
        <p>@2021 My Portfolio Website</p>
      </footer>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);`;

export default Navigation;