import { z } from "zod";

export const formSchema = z.object({
  name: z.string().trim().min(1, { error: "Required" }),
  email: z
    .string()
    .trim()
    .min(1, { error: "Required" })
    .email({ error: "Invalid email" }),
  message: z
    .string()
    .trim()
    .min(1, { error: "Required" })
    .max(1000, { error: "Max 1000 chars" }),
});

export type FormData = z.infer<typeof formSchema>;
