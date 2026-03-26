import { ContactForm } from "@/components/ContactForm";

const Contact = () => (
  <div className="my-12 flex flex-col items-center gap-6 lg:my-20">
    <h1 className="text-3xl font-semibold lg:text-4xl">Contact me</h1>
    <ContactForm />
  </div>
);

export default Contact;
