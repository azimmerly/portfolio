import { FaRegCopyright } from "react-icons/fa6";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-full justify-center pb-3 pt-12">
      <div className="flex items-center gap-1.5 text-zinc-600">
        <FaRegCopyright className="h-3.5 w-3.5" />
        <p className="text-sm font-medium">{currentYear} Andrew Zimmerly</p>
      </div>
    </footer>
  );
};
