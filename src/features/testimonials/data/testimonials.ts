export interface Testimonial {
  id: number;
  name: string;
  location?: string;
  service?: string;
  quote: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Customer Name",
    location: "City, State",
    service: "Property Maintenance",
    quote:
      "MAJ General Maintenance was professional, dependable, and easy to work with. The work was completed with great attention to detail.",
    rating: 5,
  },
  {
    id: 2,
    name: "Customer Name",
    location: "City, State",
    service: "Property Maintenance",
    quote:
      "MAJ General Maintenance was professional, dependable, and easy to work with. The work was completed with great attention to detail.",
    rating: 5,
  },
  {
    id: 3,
    name: "Customer Name",
    location: "City, State",
    service: "Property Maintenance",
    quote:
      "MAJ General Maintenance was professional, dependable, and easy to work with. The work was completed with great attention to detail.",
    rating: 5,
  },
  {
    id: 3,
    name: "Customer Name",
    location: "City, State",
    service: "Property Maintenance",
    quote:
      "MAJ General Maintenance was professional, dependable, and easy to work with. The work was completed with great attention to detail.",
    rating: 5,
  },
];

export const testimonialsContent = {
  eyebrow: "Testimonials",
  title: "What Our Clients Say",
  description:
    "Real feedback from customers who trusted MAJ General Maintenance with their property.",
};
