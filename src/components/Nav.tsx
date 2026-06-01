import { NavLink } from "@/components/NavLink";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Nav = () => (
  <nav className="flex items-center justify-center gap-4 py-4 lg:justify-end">
    <ThemeToggle />
    <NavLink href="/">Projects</NavLink>
    <NavLink href="/contact">Contact</NavLink>
  </nav>
);
