import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>Services Section</ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section``;

export default ServicesSection;
