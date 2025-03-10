"use server";

import { type FormData, formSchema } from "@/validation";

export const sendMessage = async (data: FormData) => {
  try {
    const validatedData = formSchema.parse(data);

    const res = await fetch(process.env.CONTACT_FORM_API!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validatedData),
    });

    return { success: res.ok };
  } catch (e) {
    console.error(e);
    return { success: false };
  }
};
