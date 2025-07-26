import { FaRegCopyright } from "react-icons/fa6";

const currentYear = new Date().getFullYear();

export const Footer = () => (
  <footer className="flex w-full justify-center pt-12 pb-3">
    <div className="flex items-center gap-1 text-gray-500">
      <FaRegCopyright className="size-3" />
      <p className="text-xs font-medium">{currentYear} Andrew Zimmerly</p>
    </div>
  </footer>
);
