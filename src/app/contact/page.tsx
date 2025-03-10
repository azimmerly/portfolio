import { twMerge } from "tailwind-merge";

import { ContactForm } from "@/components/ContactForm";
import { nunitoFont } from "@/fonts";

const Contact = () => (
  <div className="my-12 flex flex-col items-center gap-6 lg:my-20">
    <h1 className={twMerge("text-4xl font-bold", nunitoFont.className)}>
      Contact me
    </h1>
    <ContactForm />
  </div>
);

export default Contact;
