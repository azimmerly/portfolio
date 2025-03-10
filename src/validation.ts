import { z } from "zod";

export const formSchema = z.object({
  name: z.string().trim().min(1, { message: "Required" }),
  email: z.string().trim().min(1, { message: "Required" }).email(),
  message: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(1000, { message: "Max 1000 chars" }),
});

export type FormData = z.infer<typeof formSchema>;
