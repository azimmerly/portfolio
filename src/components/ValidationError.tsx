type ValidationErrorProps = {
  text: string;
};

export const ValidationError = ({ text }: ValidationErrorProps) => (
  <span
    role="alert"
    aria-live="assertive"
    className="mt-px flex items-center gap-1 text-xs text-red-500 dark:text-red-400"
  >
    <span className="size-1 rounded-full bg-red-400" aria-hidden="true" />
    {text}
  </span>
);
