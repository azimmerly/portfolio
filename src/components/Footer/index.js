import React from "react";
import { FooterSection, Text } from "./style";

function Footer() {
  return (
    <FooterSection>
      <Text>&copy; {new Date().getFullYear()} Andrew Zimmerly</Text>
    </FooterSection>
  );
}

export default Footer;
