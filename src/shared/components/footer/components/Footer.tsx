import {
  // Facebook,
  // Instagram,
  // Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Logo from "../../logo/Logo";

import "../styles/Footer.css";
import { business } from "../../../data/business";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-accent footer-accent--one" />
      <div className="footer-accent footer-accent--two" />

      <div className="footer-container">
        <div className="footer-top">
          <section className="footer-brand">
            <Logo />

            <p className="footer-description">
              Reliable maintenance and repair solutions for homes, rental
              properties, and businesses. We take pride in quality work and
              dependable service.
            </p>

            <div className="footer-contact">
              <a href="tel:" className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Phone />
                </span>

                <span>{business.phone}</span>
              </a>

              <a href="mailto:" className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Mail />
                </span>

                <span>{business.email}</span>
              </a>

              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <MapPin />
                </span>

                <div>
                  <p>{business.serviceArea}</p>
                  {/* <span>Add service area</span> */}
                </div>
              </div>
            </div>
          </section>

          <nav className="footer-column" aria-label="Services">
            <h3>Services</h3>

            <ul>
              <li>
                <a href="#services">Electrical Repairs</a>
              </li>

              <li>
                <a href="#services">Plumbing Services</a>
              </li>

              <li>
                <a href="#services">Painting & Drywall</a>
              </li>

              <li>
                <a href="#services">Carpentry</a>
              </li>

              <li>
                <a href="#services">Property Maintenance</a>
              </li>

              <li>
                <a href="#services">Emergency Repairs</a>
              </li>
            </ul>
          </nav>

          <nav className="footer-column" aria-label="Company">
            <h3>Company</h3>

            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>

              <li>
                <a href="#benefits">Why MAJ</a>
              </li>

              <li>
                <a href="#projects">Our Work</a>
              </li>

              <li>
                <a href="#testimonials">Testimonials</a>
              </li>

              <li>
                <a href="#faq">FAQ</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <section className="footer-social">
            <h3>Follow Us</h3>

            <div className="footer-social-icons">
              {/* <a href="#" aria-label="Facebook">
                <Facebook />
              </a>

              <a href="#" aria-label="Instagram">
                <Instagram />
              </a> */}
            </div>
          </section>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom-grid">
          <section className="footer-bottom-column">
            <h4>MAJ General Maintenance</h4>

            <div className="footer-lines">
              <span />
              <span />
              <span />
              <span />
            </div>
          </section>

          <nav className="footer-bottom-column" aria-label="Legal">
            <h4>Legal</h4>

            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </nav>

          <nav className="footer-bottom-column" aria-label="Menu">
            <h4>Menu</h4>

            <ul>
              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <a href="#projects">Projects</a>
              </li>

              <li>
                <a href="#contact">Request a Quote</a>
              </li>
            </ul>
          </nav>

          <section className="footer-bottom-column">
            <h4>Social Media</h4>

            <div className="footer-bottom-social">
              {/* <a href="#" aria-label="Facebook">
                <Facebook />
              </a>

              <a href="#" aria-label="Instagram">
                <Instagram />
              </a>

              <a href="#" aria-label="LinkedIn">
                <Linkedin />
              </a> */}
            </div>
          </section>
        </div>

        <div className="footer-copyright">
          <p>
            © {new Date().getFullYear()} MAJ General Maintenance. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
