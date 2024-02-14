"use server";

import { redirect } from "next/navigation";

import type { FormData } from "@/app/components";

export const submitForm = async (data: FormData) => {
  if (!data.name || !data.email || !data.message) {
    return;
  }

  try {
    await fetch(process.env.CONTACT_FORM_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    redirect("/thanks");
  } catch {
    redirect("/thanks");
  }
};
