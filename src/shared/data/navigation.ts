export interface NavProps {
  id: number;
  name: string;
  section: string;
}

export const navigation: NavProps[] = [
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
    name: "FAQ",
    section: "#faq",
  },
  {
    id: 6,
    name: "Contact",
    section: "#contact",
  },
];
