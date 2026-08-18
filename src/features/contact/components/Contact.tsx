import { type FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "../styles/Contact.css";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) return;

    try {
      setStatus("sending");

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus("success");

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus("error");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <header className="contact__header">
          <p className="contact__eyebrow">Get In Touch</p>

          <h2 className="contact__title">Tell Us What You Need Help With</h2>

          <p className="contact__description">
            Send us a message about your maintenance or repair needs and we’ll
            get back to you as soon as possible.
          </p>
        </header>

        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__group">
            <label htmlFor="name">Name</label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="contact-form__group">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="contact-form__group">
            <label htmlFor="phone">Phone</label>

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your phone number"
            />
          </div>

          <div className="contact-form__group">
            <label htmlFor="service">Service Needed</label>

            <select id="service" name="service" required>
              <option value="">Select a service</option>
              <option value="Electrical Repairs">Electrical Repairs</option>
              <option value="Plumbing Services">Plumbing Services</option>
              <option value="Painting & Drywall">Painting & Drywall</option>
              <option value="Carpentry">Carpentry</option>
              <option value="Property Maintenance">Property Maintenance</option>
              <option value="Emergency Repairs">Emergency Repairs</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="contact-form__group contact-form__group--full">
            <label htmlFor="message">Project Details</label>

            <textarea
              id="message"
              name="message"
              placeholder="Tell us about the work you need completed..."
              rows={6}
              required
            />
          </div>

          <button
            type="submit"
            className="contact-form__submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Request a Quote"}
          </button>

          {status === "success" && (
            <p className="contact-form__success">
              Thank you. Your message has been sent successfully.
            </p>
          )}

          {status === "error" && (
            <p className="contact-form__error">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
