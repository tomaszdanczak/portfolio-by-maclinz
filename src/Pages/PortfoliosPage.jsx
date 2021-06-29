import React, { useState } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import portfolios from "../data/portfolios";
import PortfolioItems from "../Components/PortfolioItems";
import Buttons from "../Components/Buttons";

const allButtons = ["All", ...new Set(portfolios.map((item) => item.category))];

function PortfoliosPage() {
  const [portfolioItems, setPortfolioItems] = useState(portfolios);
  const [buttons] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setPortfolioItems(portfolios);
      return;
    }

    const filteredData = portfolios.filter((item) => item.category === button);
    setPortfolioItems(filteredData);
  };

  return (
    <PortfoliosPageStyled>
      <MainLayout>
        <Title title={"Portfolios"} span={"Portfolios"} />
        <InnerLayout>
          <Buttons filter={filter} buttons={buttons} />
          <PortfolioItems portfolioItems={portfolioItems} />
        </InnerLayout>
      </MainLayout>
    </PortfoliosPageStyled>
  );
}

const PortfoliosPageStyled = styled.section``;

export default PortfoliosPage;
