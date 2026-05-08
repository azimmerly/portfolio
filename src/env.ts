import { z } from "zod/mini";

const envSchema = z.object({
  CONTACT_FORM_API: z.url(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  throw new Error(z.prettifyError(parsedEnv.error));
}

export const env = parsedEnv.data;
