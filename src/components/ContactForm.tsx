"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const handleSendMessage = async (formData: FormData) => {
    try {
      const { success } = await sendMessage(formData);
      if (success) {
        toast.success("Thanks for getting in touch!");
      } else {
        toast.error("Something went wrong");
      }
    } catch {
      toast.error("Network error, please try again");
    } finally {
      reset();
    }
  };

  const fieldClasses = twMerge(
    "mb-2.5 w-full resize-none rounded-md border-2 border-transparent bg-mist-200/60 px-2 py-1 outline-hidden focus:border-blue-600 dark:bg-mist-900",
    isSubmitting && "text-mist-500 dark:text-mist-500",
  );

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(handleSendMessage)}
      className="flex w-full max-w-md flex-col items-start px-2 lg:max-w-lg"
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
        maxLength={50}
        disabled={isSubmitting}
        aria-invalid={!!errors.name}
        className={fieldClasses}
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
        maxLength={100}
        disabled={isSubmitting}
        aria-invalid={!!errors.email}
        className={fieldClasses}
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
        disabled={isSubmitting}
        aria-invalid={!!errors.message}
        className={fieldClasses}
      />
      <button
        type="submit"
        aria-busy={isSubmitting}
        disabled={isSubmitting}
        className={twMerge(
          "animate-shimmer mt-4 flex w-full items-center justify-center gap-1.5 self-center rounded-md border-none bg-linear-to-br from-blue-500 to-blue-700 px-4 py-2 text-sm font-medium text-white shadow-xs transition will-change-transform hover:brightness-120 active:scale-99 lg:w-fit",
          isSubmitting ? "pointer-events-none opacity-85" : "cursor-pointer",
        )}
      >
        {isSubmitting ? (
          <LoadingSpinner className="size-3.5" aria-hidden="true" />
        ) : (
          <FaRegPaperPlane className="size-3.5" aria-hidden="true" />
        )}
        Send message
      </button>
    </form>
  );
};
