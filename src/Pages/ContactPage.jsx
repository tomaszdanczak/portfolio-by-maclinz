import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";

function ContactPage() {
  return (
    <MainLayout>
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>Contact Page</InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section``;

export default ContactPage;
