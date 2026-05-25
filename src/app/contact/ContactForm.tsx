"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaRegPaperPlane } from "react-icons/fa6";
import { toast } from "sonner";

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

  const fieldClasses =
    "mb-2.5 w-full resize-none rounded-md border-2 border-transparent bg-mist-200 px-2 py-1.25 text-[15px] outline-hidden focus:border-mist-900 dark:focus:border-white dark:bg-mist-800";

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
        className={`mt-3 flex w-full items-center justify-center gap-2 self-center rounded-md border-none bg-mist-900 px-4 py-2.25 text-sm font-medium text-white shadow-xs transition-colors hover:bg-mist-700 active:translate-y-[0.5px] active:scale-[0.995] dark:bg-white dark:text-mist-900 dark:hover:bg-mist-200 ${isSubmitting ? "pointer-events-none opacity-85" : "cursor-pointer"}`}
      >
        {isSubmitting ? (
          <LoadingSpinner aria-hidden="true" />
        ) : (
          <FaRegPaperPlane className="size-3.25" aria-hidden="true" />
        )}
        Send message
      </button>
    </form>
  );
};
