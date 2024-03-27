import { z } from "zod";

export const formSchema = z.object({
  name: z.string().trim().min(1, { message: "Please include your name" }),
  email: z.string().trim().email("Please include a valid email"),
  message: z.string().trim().min(1, { message: "Please include a message" }),
});

export type FormData = z.infer<typeof formSchema>;
