import { FaCode, FaRegEnvelope } from "react-icons/fa6";

import { NavLink } from "@/components/NavLink";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Nav = () => (
  <nav className="flex justify-center gap-1.5 py-5 lg:justify-end">
    <ThemeToggle className="mr-4" />
    <NavLink href="/">
      <FaCode className="size-3.75" />
      Projects
    </NavLink>
    <NavLink href="/contact">
      <FaRegEnvelope className="size-3.75" />
      Contact
    </NavLink>
  </nav>
);
