"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaRegPaperPlane } from "react-icons/fa6";

import { submitForm } from "@/app/actions/contact";
import { ValidationError } from "@/app/components";
import { formSchema, type FormData } from "@/app/schema";

export const ContactForm = () => {
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const { isSubmitting, errors } = formState;

  return (
    <form
      onSubmit={handleSubmit((data) => submitForm(data))}
      className="flex w-full max-w-lg flex-col items-start"
    >
      <div className="mb-1 flex items-center gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        {errors.name?.message && <ValidationError text={errors.name.message} />}
      </div>
      <input
        id="name"
        {...register("name")}
        maxLength={30}
        aria-invalid={errors.name ? true : undefined}
        className="mb-3.5 w-full resize-none rounded-lg border-2 border-solid border-transparent bg-zinc-100 p-2 text-zinc-800 outline-none transition focus:border-zinc-800 active:border-zinc-800"
      />

      <div className="mb-1 flex items-center gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        {errors.email?.message && (
          <ValidationError text={errors.email.message} />
        )}
      </div>
      <input
        id="email"
        {...register("email")}
        aria-invalid={errors.email ? true : undefined}
        className="mb-3.5 w-full resize-none rounded-lg border-2 border-solid border-transparent bg-zinc-100 p-2 text-zinc-800 outline-none transition focus:border-zinc-800 active:border-zinc-800"
      />

      <div className="mb-1 flex items-center gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        {errors.message?.message && (
          <ValidationError text={errors.message.message} />
        )}
      </div>
      <textarea
        rows={5}
        id="message"
        {...register("message")}
        maxLength={1000}
        aria-invalid={errors.message ? true : undefined}
        className="mb-3.5 w-full resize-none rounded-lg border-2 border-solid border-transparent bg-zinc-100 p-2 text-zinc-800 outline-none transition focus:border-zinc-800 active:border-zinc-800"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 flex items-center justify-center gap-2 self-center rounded-full border-none bg-zinc-800 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700"
      >
        <FaRegPaperPlane className="h-4 w-4" />
        Send Message
      </button>
    </form>
  );
};
