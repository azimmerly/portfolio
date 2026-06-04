export type FormData = {
  name: string;
  email: string;
  message: string;
};

export const EMAIL_REGEX =
  /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;

const isNonEmptyString = (v: unknown): v is string =>
  typeof v === "string" && v.length > 0;

export const isValidFormData = ({ name, email, message }: FormData) =>
  [name, message, email].every(isNonEmptyString) && EMAIL_REGEX.test(email);
