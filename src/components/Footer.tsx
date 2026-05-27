const currentYear = new Date().getFullYear();

export const Footer = () => (
  <footer className="w-full max-w-6xl px-4 py-8">
    <div className="border-t border-mist-200 pt-8 dark:border-mist-800">
      <p className="text-center text-xs font-medium tracking-widest text-mist-400 uppercase lg:text-left">
        &copy; {currentYear} Andrew Zimmerly
      </p>
    </div>
  </footer>
);
