import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";

function PortfoliosPage() {
  return (
    <PortfoliosPageStyled>
      <MainLayout>
        <InnerLayout>Portfolios Page</InnerLayout>
      </MainLayout>
    </PortfoliosPageStyled>
  );
}

const PortfoliosPageStyled = styled.section``;

export default PortfoliosPage;
