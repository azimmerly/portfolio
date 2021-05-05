import React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";

const ContactSection = styled.div`
  padding-top: clamp(5rem, 6vw, 8rem);
  padding-bottom: clamp(5rem, 6vw, 8rem);
  align-self: center;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  font-family: var(--font-secondary);
  font-size: var(--font-size-large);
`;

function ContactPage() {
  return (
    <>
      <SEO title="Contact" />
      <Layout>
        <ContactSection>
          <Title>Contact Me</Title>
          <ContactForm />
        </ContactSection>
      </Layout>
    </>
  );
}

export default ContactPage;
