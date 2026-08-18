import {
  Brush,
  Drill,
  House,
  PlugZap,
  Siren,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Electrical Repairs",
    shortDescription: "Reliable solutions for everyday electrical issues.",
    description:
      "From troubleshooting electrical problems to replacing fixtures, switches, outlets, and other components, we help keep your property functioning safely and efficiently.",
    icon: PlugZap,
  },
  {
    id: 2,
    title: "Plumbing Services",
    shortDescription: "Practical plumbing repairs and maintenance.",
    description:
      "We handle common plumbing problems including leaks, fixture replacements, minor repairs, and general plumbing maintenance for residential and commercial properties.",
    icon: Wrench,
  },
  {
    id: 3,
    title: "Painting & Drywall",
    shortDescription: "Clean finishes that refresh your space.",
    description:
      "Whether you need drywall repairs, patchwork, touch-ups, or a fresh coat of paint, we help restore and improve the appearance of your property.",
    icon: Brush,
  },
  {
    id: 4,
    title: "Carpentry",
    shortDescription: "Quality repairs and custom finishing work.",
    description:
      "From doors and trim to shelving, fixtures, and general wood repairs, we provide practical carpentry solutions for your home or business.",
    icon: Drill,
  },
  {
    id: 5,
    title: "Property Maintenance",
    shortDescription: "Routine care to keep your property in shape.",
    description:
      "Stay ahead of repairs with dependable property maintenance services designed to keep your home, rental, or commercial property clean, functional, and well maintained.",
    icon: House,
  },
  {
    id: 6,
    title: "Emergency Repairs",
    shortDescription: "Help when unexpected property problems arise.",
    description:
      "When an urgent maintenance problem occurs, MAJ General Maintenance can help assess the issue and provide a practical repair solution as quickly as possible.",
    icon: Siren,
  },
];

export const servicesContent = {
  eyebrow: "Our Services",
  title: "Everything Your Property Needs",
  description:
    "From everyday repairs to ongoing property maintenance, MAJ General Maintenance provides practical solutions for homes, rental properties, and businesses.",
};
