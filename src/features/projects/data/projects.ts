import showcase1 from "../../../assets/showcase1.jpeg";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Property Maintenance Project",
    category: "General Maintenance",
    description:
      "Maintenance and repair work completed to improve the condition, functionality, and appearance of the property.",
    image: showcase1,
  },
];

export const projectsContent = {
  eyebrow: "Our Work",
  title: "Quality You Can See",
  description:
    "Take a look at some of the repair, maintenance, and improvement work completed by MAJ General Maintenance.",
};
