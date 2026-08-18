import { Star } from "lucide-react";
import type { Testimonial } from "../data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card__avatar" aria-hidden="true">
        {testimonial.name.charAt(0)}
      </div>

      <div className="testimonial-card__content">
        {testimonial.rating && (
          <div
            className="testimonial-card__rating"
            aria-label={`${testimonial.rating} out of 5 stars`}
          >
            {Array.from({ length: testimonial.rating }).map((_, index) => (
              <Star key={index} />
            ))}
          </div>
        )}

        <blockquote className="testimonial-card__quote">
          “{testimonial.quote}”
        </blockquote>

        <div className="testimonial-card__author">
          <strong>{testimonial.name}</strong>

          {testimonial.location && (
            <>
              <span className="testimonial-card__divider">|</span>
              <span>{testimonial.location}</span>
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
