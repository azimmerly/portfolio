import { ContactForm } from "./ContactForm";

const Contact = () => (
  <div className="my-12 flex flex-col items-center gap-6 text-center lg:my-20">
    <div>
      <h1 className="text-3xl font-semibold lg:text-4xl">Get in touch.</h1>
      <p className="mt-3 text-mist-500 dark:text-mist-400">
        Open to new opportunities and collaborations.
      </p>
    </div>
    <ContactForm />
  </div>
);

export default Contact;
