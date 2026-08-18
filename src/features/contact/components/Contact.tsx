import { Mail, MapPin, Phone } from "lucide-react";
import { contactContent, contactDetails } from "../data/contact";

import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <p className="contact-eyebrow">{contactContent.eyebrow}</p>

          <h2 className="contact-title">{contactContent.title}</h2>

          <p className="contact-description">{contactContent.description}</p>

          <div className="contact-details">
            {contactDetails.phone && (
              <a
                className="contact-detail"
                href={`tel:${contactDetails.phone}`}
              >
                <Phone aria-hidden="true" />

                <span>{contactDetails.phoneDisplay}</span>
              </a>
            )}

            {contactDetails.email && (
              <a
                className="contact-detail"
                href={`mailto:${contactDetails.email}`}
              >
                <Mail aria-hidden="true" />

                <span>{contactDetails.email}</span>
              </a>
            )}

            {contactDetails.serviceArea && (
              <div className="contact-detail">
                <MapPin aria-hidden="true" />

                <span>{contactDetails.serviceArea}</span>
              </div>
            )}
          </div>
        </div>

        <form className="contact-form">
          <div className="contact-form__row">
            <div className="contact-form__group">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div className="contact-form__group">
              <label htmlFor="phone">Phone</label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your phone number"
              />
            </div>
          </div>

          <div className="contact-form__group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              required
            />
          </div>

          <div className="contact-form__group">
            <label htmlFor="service">Service Needed</label>

            <select id="service" name="service">
              <option value="">Select a service</option>
              <option value="electrical">Electrical Repairs</option>
              <option value="plumbing">Plumbing Services</option>
              <option value="painting">Painting & Drywall</option>
              <option value="carpentry">Carpentry</option>
              <option value="maintenance">Property Maintenance</option>
              <option value="emergency">Emergency Repairs</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="contact-form__group">
            <label htmlFor="message">Tell Us About Your Project</label>

            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Describe the work you need completed..."
              required
            />
          </div>

          <button className="contact-form__button" type="submit">
            Request a Quote
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
