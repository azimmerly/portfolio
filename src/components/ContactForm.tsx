"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaRegPaperPlane } from "react-icons/fa6";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

import { sendMessage } from "@/actions/contact";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ValidationError } from "@/components/ValidationError";
import { type FormData, formSchema } from "@/validation";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const handleSendMessage = async (formData: FormData) => {
    const { success } = await sendMessage(formData);
    if (success) {
      toast.success("Thanks for getting in touch!");
      redirect("/");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleSendMessage)}
      className="flex w-full max-w-lg flex-col items-start"
    >
      <div className="mb-0.5 flex items-center gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        {errors.name?.message && <ValidationError text={errors.name.message} />}
      </div>
      <input
        id="name"
        {...register("name")}
        maxLength={30}
        className="mb-2 w-full resize-none rounded-md border-2 border-solid border-transparent bg-gray-100 px-2 py-1 outline-hidden transition focus:border-gray-800 active:border-gray-800"
      />
      <div className="mb-0.5 flex items-center gap-2">
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
        className="mb-2 w-full resize-none rounded-md border-2 border-solid border-transparent bg-gray-100 px-2 py-1 outline-hidden transition focus:border-gray-800 active:border-gray-800"
      />
      <div className="mb-0.5 flex items-center gap-2">
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
        className="mb-2 w-full resize-none rounded-md border-2 border-solid border-transparent bg-gray-100 px-2 py-1 outline-hidden transition focus:border-gray-800 active:border-gray-800"
      />
      <button
        type="submit"
        aria-busy={isSubmitting}
        disabled={isSubmitting}
        className={twMerge(
          "mt-4 flex items-center gap-1.5 self-center rounded-full border-none bg-gray-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700",
          isSubmitting ? "pointer-events-none opacity-70" : "cursor-pointer",
        )}
      >
        {isSubmitting ? (
          <LoadingSpinner className="size-3.5" aria-hidden="true" />
        ) : (
          <FaRegPaperPlane className="size-3.5" aria-hidden="true" />
        )}
        Send Message
      </button>
    </form>
  );
};
