"use server";

import { redirect } from "next/navigation";

import { formSchema, type FormData } from "@/app/schema";

export const submitForm = async (data: FormData) => {
  try {
    const validatedData = formSchema.parse(data);

    await fetch(process.env.CONTACT_FORM_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validatedData),
    });

    redirect("/thanks");
  } catch {
    redirect("/thanks");
  }
};
