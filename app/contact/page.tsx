import { twMerge } from "tailwind-merge";

import { ContactForm } from "@/app/components";
import { nunitoFont } from "@/app/fonts";

const Contact = () => (
  <div className="my-16 flex flex-col items-center gap-6">
    <h1 className={twMerge("text-4xl font-bold", nunitoFont.className)}>
      Contact me
    </h1>
    <ContactForm />
  </div>
);

export default Contact;
