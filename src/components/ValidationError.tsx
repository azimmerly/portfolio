import { FaTriangleExclamation } from "react-icons/fa6";

type ValidationErrorProps = {
  text: string;
};

export const ValidationError = ({ text }: ValidationErrorProps) => (
  <span
    role="alert"
    aria-live="assertive"
    className="flex items-center gap-1 rounded bg-red-400/15 px-1.5 py-px text-xs text-red-700 dark:text-red-300"
  >
    <FaTriangleExclamation aria-hidden="true" className="size-2.5" />
    {text}
  </span>
);
