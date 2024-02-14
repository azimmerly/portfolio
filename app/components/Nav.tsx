import { FaCode, FaRegEnvelope } from "react-icons/fa6";

import { NavLink } from "@/app/components";

export const Nav = () => (
  <nav className="flex justify-center gap-2.5 py-4 lg:justify-end">
    <NavLink href="/">
      <FaCode className="h-4 w-4" />
      Projects
    </NavLink>
    <NavLink href="/contact">
      <FaRegEnvelope className="h-4 w-4" />
      Contact
    </NavLink>
  </nav>
);
