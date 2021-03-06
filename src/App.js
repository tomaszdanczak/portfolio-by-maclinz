import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import { Route, Switch } from "react-router";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import Lines from "./Components/Lines";
import DarkModeSwitch from "./Components/DarkModeSwitch";
import HamburgerMenu from "./Components/HamburgerMenu";
import { useState } from "react";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const handleToggle = () => {
    setNavToggle(!navToggle);
  };

  return (
    <div className="App">
      <Sidebar navToggle={navToggle} />

      <HamburgerMenu onToggle={handleToggle} />

      <DarkModeSwitch />

      <MainContentStyled>
        <Lines />

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage />
          </Route>
          <Route path="/portfolios" exact>
            <PortfoliosPage />
          </Route>
          <Route path="/blogs" exact>
            <BlogsPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
        </Switch>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  transition: all 0.4s ease-in-out;

  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;

export default App;
