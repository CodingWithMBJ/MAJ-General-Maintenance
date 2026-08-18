import { ChevronLeft, ChevronRight } from "lucide-react";
import { type PointerEvent, useRef, useState } from "react";

import { testimonials, testimonialsContent } from "../data/testimonials";

import TestimonialCard from "./TestimonialCard";

import "../styles/Testimonials.css";

const SWIPE_THRESHOLD = 80;

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);

  if (!testimonials.length) {
    return null;
  }

  const previousIndex =
    (activeIndex - 1 + testimonials.length) % testimonials.length;

  const nextIndex = (activeIndex + 1) % testimonials.length;

  const goNext = () => {
    setActiveIndex(nextIndex);
    setDragX(0);
  };

  const goPrevious = () => {
    setActiveIndex(previousIndex);
    setDragX(0);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    startX.current = event.clientX;

    setIsDragging(true);

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) {
      return;
    }

    const distance = event.clientX - startX.current;

    setDragX(distance);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) {
      return;
    }

    event.currentTarget.releasePointerCapture(event.pointerId);

    setIsDragging(false);

    if (dragX <= -SWIPE_THRESHOLD) {
      goNext();
      return;
    }

    if (dragX >= SWIPE_THRESHOLD) {
      goPrevious();
      return;
    }

    setDragX(0);
  };

  const handlePointerCancel = () => {
    setIsDragging(false);
    setDragX(0);
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <header className="testimonials-header">
          <p className="testimonials-eyebrow">{testimonialsContent.eyebrow}</p>

          <h2 className="testimonials-title">{testimonialsContent.title}</h2>

          <div className="testimonials-heading-line">
            <span />
            <span />
            <span />
          </div>
        </header>

        <div className="testimonials-showcase">
          <button
            className="testimonial-arrow testimonial-arrow--left"
            type="button"
            aria-label="Previous testimonial"
            onClick={goPrevious}
          >
            <ChevronLeft />
          </button>

          <div
            className="testimonial-stack"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
          >
            {testimonials.length > 2 && (
              <div className="testimonial-layer testimonial-layer--third">
                <TestimonialCard
                  testimonial={
                    testimonials[(nextIndex + 1) % testimonials.length]
                  }
                />
              </div>
            )}

            {testimonials.length > 1 && (
              <div className="testimonial-layer testimonial-layer--next">
                <TestimonialCard testimonial={testimonials[nextIndex]} />
              </div>
            )}

            <div
              className={`testimonial-layer testimonial-layer--active ${
                isDragging ? "testimonial-layer--dragging" : ""
              }`}
              style={{
                transform: `
                  translateX(${dragX}px)
                  rotate(${dragX * 0.015}deg)
                `,
              }}
            >
              <TestimonialCard testimonial={testimonials[activeIndex]} />
            </div>
          </div>

          <button
            className="testimonial-arrow testimonial-arrow--right"
            type="button"
            aria-label="Next testimonial"
            onClick={goNext}
          >
            <ChevronRight />
          </button>

          <div className="testimonial-dots">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                className={`testimonial-dot ${
                  index === activeIndex ? "testimonial-dot--active" : ""
                }`}
                aria-label={`View testimonial ${index + 1}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
