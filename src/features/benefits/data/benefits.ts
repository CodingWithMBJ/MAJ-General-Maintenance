import {
  BadgeCheck,
  Building2,
  CircleCheckBig,
  MessageCircle,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const benefits: Benefit[] = [
  {
    id: 1,
    title: "Dependable Service",
    description:
      "We take every job seriously and work to provide consistent, dependable maintenance solutions.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Quality Workmanship",
    description:
      "Attention to detail and proper workmanship are at the center of every project we take on.",
    icon: BadgeCheck,
  },
  {
    id: 3,
    title: "Clear Communication",
    description:
      "We keep you informed about the work being completed so you know what to expect.",
    icon: MessageCircle,
  },
  {
    id: 4,
    title: "Multiple Services",
    description:
      "Get help with several property maintenance needs without having to coordinate with multiple providers.",
    icon: Wrench,
  },
  {
    id: 5,
    title: "Residential & Commercial",
    description:
      "Flexible maintenance solutions for homes, rental properties, offices, and other commercial spaces.",
    icon: Building2,
  },
  {
    id: 6,
    title: "Solutions That Last",
    description:
      "Our goal is not simply to cover up a problem, but to provide practical solutions that address the underlying issue.",
    icon: CircleCheckBig,
  },
];
