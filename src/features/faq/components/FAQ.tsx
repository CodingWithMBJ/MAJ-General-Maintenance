import { ChevronDown } from "lucide-react";
import { faqContent, faqs } from "../data/faq";

import "../styles/FAQ.css";

const FAQ = () => {
  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <header className="faq-header">
          <p className="faq-eyebrow">{faqContent.eyebrow}</p>

          <h2 className="faq-title">{faqContent.title}</h2>

          <p className="faq-description">{faqContent.description}</p>
        </header>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.id}>
              <summary className="faq-question">
                <span>{faq.question}</span>

                <ChevronDown className="faq-icon" aria-hidden="true" />
              </summary>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
