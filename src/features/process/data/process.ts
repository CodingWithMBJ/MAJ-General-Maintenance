export interface ProcessStep {
  id: number;
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    step: "01",
    title: "Tell Us What You Need",
    description:
      "Contact us and let us know what needs to be repaired, maintained, or improved at your property.",
  },
  {
    id: 2,
    step: "02",
    title: "Get an Estimate",
    description:
      "We review the work needed and provide clear information about the recommended service and expected cost.",
  },
  {
    id: 3,
    step: "03",
    title: "Schedule Your Service",
    description:
      "Choose a convenient time for us to complete the work at your home, rental property, or business.",
  },
  {
    id: 4,
    step: "04",
    title: "We Get It Done",
    description:
      "We complete the agreed work with attention to detail, quality, and respect for your property.",
  },
];

export const processContent = {
  eyebrow: "How It Works",
  title: "A Simple Process From Start to Finish",
  description:
    "Getting maintenance work done should not be complicated. We keep the process clear and straightforward from your first call to the completed job.",
};
