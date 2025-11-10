import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { error: "Name required" })
    .max(50, { error: "Max 50 chars" }),
  email: z
    .email({ error: "Valid email required" })
    .max(100, { error: "Max 100 chars" }),
  message: z
    .string()
    .trim()
    .min(1, { error: "Message required" })
    .max(1000, { error: "Max 1000 chars" }),
});

export type FormData = z.infer<typeof formSchema>;
