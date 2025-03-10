import { FaTriangleExclamation } from "react-icons/fa6";

export const ValidationError = ({ text }: { text: string }) => (
  <span className="flex items-center gap-1 rounded-md bg-red-50 px-2 py-0.5 text-xs text-red-600">
    <FaTriangleExclamation className="size-2.5" />
    {text}
  </span>
);
