"use server";

import { EMAIL_REGEX, type FormData } from "@/app/contact/schema";

export const sendMessage = async (data: FormData) => {
  try {
    const { name, email, message } = data;

    if (!name || !message || !email || !EMAIL_REGEX.test(email)) {
      return { success: false };
    }

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
