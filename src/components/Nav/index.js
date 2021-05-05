import React from "react";
import { FaRegEnvelope, FaPencilAlt, FaCode } from "react-icons/fa";
import { Navigation, NavLinks, StyledLink } from "./style";

function Nav() {
  return (
    <Navigation>
      <NavLinks>
        <StyledLink to="/" activeClassName="active">
          <FaCode />
          Projects
        </StyledLink>
        <StyledLink to="/blog" activeClassName="active" partiallyActive={true}>
          <FaPencilAlt />
          Blog
        </StyledLink>
        <StyledLink to="/contact" activeClassName="active">
          <FaRegEnvelope />
          Contact
        </StyledLink>
      </NavLinks>
    </Navigation>
  );
}

export default Nav;
