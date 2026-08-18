export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What types of maintenance services do you provide?",
    answer:
      "MAJ General Maintenance provides a range of property maintenance and repair services including electrical repairs, plumbing, painting and drywall, carpentry, general property maintenance, and other repair needs.",
  },
  {
    id: 2,
    question: "Do you work with residential and commercial properties?",
    answer:
      "Yes. We provide maintenance solutions for homeowners, rental properties, property managers, offices, and other commercial properties.",
  },
  {
    id: 3,
    question: "How do I request an estimate?",
    answer:
      "Contact us and tell us about the work you need completed. We can review your project and discuss the next steps for receiving an estimate.",
  },
  {
    id: 4,
    question: "Can you handle multiple repairs during one visit?",
    answer:
      "Yes. If your property has several maintenance or repair needs, let us know when you contact us so we can review the complete scope of work.",
  },
  {
    id: 5,
    question: "Do you provide ongoing property maintenance?",
    answer:
      "Ongoing maintenance may be available depending on the property and services required. Contact us to discuss your maintenance needs.",
  },
  {
    id: 6,
    question: "What areas do you serve?",
    answer:
      "Contact MAJ General Maintenance with your property location and we can confirm whether service is available in your area.",
  },
];

export const faqContent = {
  eyebrow: "Frequently Asked Questions",
  title: "Questions? We Have Answers.",
  description:
    "Find answers to some of the most common questions about working with MAJ General Maintenance.",
};
