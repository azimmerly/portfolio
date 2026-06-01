const currentYear = new Date().getFullYear();

export const Footer = () => (
  <footer className="w-full max-w-6xl px-4 py-8">
    <div className="border-t border-neutral-200 pt-8 dark:border-neutral-800">
      <p className="text-center text-xs font-medium tracking-widest text-neutral-400 uppercase lg:text-left dark:text-neutral-600">
        &copy; {currentYear} Andrew Zimmerly
      </p>
    </div>
  </footer>
);
