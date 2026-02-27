const currentYear = new Date().getFullYear();

export const Footer = () => (
  <footer className="flex w-screen justify-center pt-12 pb-2">
    <p className="text-xs text-mist-500 dark:text-mist-400">
      &copy; {currentYear} Andrew Zimmerly
    </p>
  </footer>
);
