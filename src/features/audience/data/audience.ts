import {
  BriefcaseBusiness,
  Building,
  House,
  type LucideIcon,
} from "lucide-react";

export interface Audience {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const audience: Audience[] = [
  {
    id: 1,
    title: "Homeowners",
    description:
      "Reliable help with repairs, maintenance, improvements, and everyday projects around your home.",
    icon: House,
  },
  {
    id: 2,
    title: "Property Managers",
    description:
      "Dependable maintenance support for rental properties, turnovers, repairs, and ongoing property needs.",
    icon: Building,
  },
  {
    id: 3,
    title: "Businesses",
    description:
      "General maintenance and repair services designed to keep commercial spaces functional and presentable.",
    icon: BriefcaseBusiness,
  },
];

export const audienceContent = {
  eyebrow: "Who We Serve",
  title: "Maintenance Solutions for Every Property",
  description:
    "Whether you own a home, manage properties, or operate a business, MAJ General Maintenance is ready to help keep your property in excellent condition.",
};
