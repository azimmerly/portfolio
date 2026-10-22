import { ThemeToggle } from "@/components/ThemeToggle";

const currentYear = new Date().getFullYear();

export const Footer = () => (
  <footer className="w-full max-w-6xl px-3.5 py-6">
    <div className="flex items-center justify-between border-t border-neutral-200 pt-6 dark:border-neutral-800">
      <p className="text-xs font-medium tracking-widest text-neutral-400 uppercase dark:text-neutral-600">
        &copy; {currentYear} Andrew Zimmerly
      </p>
      <ThemeToggle />
    </div>
  </footer>
);
