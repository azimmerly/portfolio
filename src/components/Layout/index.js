import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import { Container, Content, GlobalStyles } from "./style";

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Content>
          <Nav />
          {children}
        </Content>
        <Footer />
      </Container>
    </>
  );
}

export default Layout;
