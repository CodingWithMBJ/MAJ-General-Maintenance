export interface FooterLink {
  id: number;
  name: string;
  section: string;
}

export const footerNavigation: FooterLink[] = [
  {
    id: 1,
    name: "Home",
    section: "#hero",
  },
  {
    id: 2,
    name: "Services",
    section: "#services",
  },
  {
    id: 3,
    name: "Why MAJ",
    section: "#benefits",
  },
  {
    id: 4,
    name: "Our Work",
    section: "#projects",
  },
  {
    id: 5,
    name: "Testimonials",
    section: "#testimonials",
  },
  {
    id: 6,
    name: "FAQ",
    section: "#faq",
  },
  {
    id: 7,
    name: "Contact",
    section: "#contact",
  },
];

export const footerServices = [
  "Electrical Repairs",
  "Plumbing Services",
  "Painting & Drywall",
  "Carpentry",
  "Property Maintenance",
  "Emergency Repairs",
];
