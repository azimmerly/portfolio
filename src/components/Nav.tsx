import { FaCode, FaRegEnvelope } from "react-icons/fa6";

import { NavLink } from "@/components/NavLink";

export const Nav = () => (
  <nav className="flex justify-center gap-1 py-4 lg:justify-end">
    <NavLink href="/">
      <FaCode className="size-3.5" />
      Projects
    </NavLink>
    <NavLink href="/contact">
      <FaRegEnvelope className="size-3.5" />
      Contact
    </NavLink>
  </nav>
);
