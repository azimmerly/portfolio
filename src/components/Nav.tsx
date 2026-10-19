import { NavLink } from "@/components/NavLink";

export const Nav = () => (
  <nav className="flex items-center justify-center gap-4 py-4 lg:justify-end">
    <NavLink href="/">Projects</NavLink>
    <NavLink href="/contact">Contact</NavLink>
  </nav>
);
