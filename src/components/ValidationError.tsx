import { FaTriangleExclamation } from "react-icons/fa6";

type ValidationErrorProps = {
  text: string;
};

export const ValidationError = ({ text }: ValidationErrorProps) => (
  <span className="flex items-center gap-1 rounded bg-red-50 px-1.5 py-px text-xs text-red-700">
    <FaTriangleExclamation className="size-2.5" />
    {text}
  </span>
);
