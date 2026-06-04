"use server";

import { isValidFormData, type FormData } from "@/app/contact/schema";

export const sendMessage = async (data: FormData) => {
  try {
    if (!isValidFormData(data)) {
      return { success: false };
    }

    const { name, email, message } = data;

    const res = await fetch(process.env.CONTACT_FORM_API!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
      signal: AbortSignal.timeout(6000),
    });

    return { success: res.ok };
  } catch (e) {
    console.error("[contact/sendMessage]", e);
    return { success: false };
  }
};
