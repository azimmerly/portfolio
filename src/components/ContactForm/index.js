import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { Form, Input, Textarea, Button } from "./style";

function ContactForm() {
  return (
    <Form
      method="POST"
      name="contact"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <Input type="text" name="name" placeholder="Your Name" required />
      <Input type="email" name="email" placeholder="Your Email" required />
      <Textarea
        name="message"
        placeholder="Your Message"
        rows="6"
        required
      ></Textarea>
      <Button type="submit">
        Send Message
        <FaRegPaperPlane />
      </Button>
    </Form>
  );
}

export default ContactForm;
