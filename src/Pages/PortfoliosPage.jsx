import React, { useState } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import portfolios from "../data/portfolios";

function PortfoliosPage() {
  const [portfolioItems, setPortfolioItems] = useState(portfolios);

  return (
    <PortfoliosPageStyled>
      <MainLayout>
        <Title title={"Portfolios"} span={"Portfolios"} />
        <InnerLayout>Portfolios Page</InnerLayout>
      </MainLayout>
    </PortfoliosPageStyled>
  );
}

const PortfoliosPageStyled = styled.section``;

export default PortfoliosPage;
