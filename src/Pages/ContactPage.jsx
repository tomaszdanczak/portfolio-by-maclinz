import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";

function ContactPage() {
  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>

            <form className="form">
              <div className="form-field">
                <label htmlFor="name">Enter your name</label>
                <input type="text" id="name" />
              </div>

              <div className="form-field">
                <label htmlFor="email">Enter your email</label>
                <input type="email" id="email" />
              </div>

              <div className="form-field">
                <label htmlFor="subject">Enter your subject</label>
                <input type="text" id="subject" />
              </div>

              <div className="form-field">
                <label htmlFor="textarea">Enter your message</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <div className="form-field f-button">
                <PrimaryButton title={"Send Email"} />
              </div>
            </form>
          </div>

          <div className="right-content">Right Content</div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section``;

export default ContactPage;
