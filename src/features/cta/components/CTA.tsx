import React from "react";
import { ctaContent } from "../data/cta";

const CTA = () => {
  return (
    <section className="cta-section">
      <a
        href={`${ctaContent.primaryAction.href}`}
        className="cta-primary cta-btn"
      >
        {ctaContent.primaryAction.label}
      </a>
      <a
        href={`${ctaContent.secondaryAction.href}`}
        className="cta-secondary cta-btn"
      >
        {ctaContent.secondaryAction.label}
      </a>
    </section>
  );
};

export default CTA;
