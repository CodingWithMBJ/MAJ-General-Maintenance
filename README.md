# MAJ General Maintenance

A responsive business website for **MAJ General Maintenance**, built with React and TypeScript to present the company's services, project work, customer benefits, and contact information through a modern, professional interface.

## Live Demo

**[View Live Website](https://maj-general-maintenance-three.vercel.app/)**

---

## Overview

MAJ General Maintenance is a frontend business website designed to provide potential customers with a clear overview of the company's services, previous projects, work process, customer benefits, and contact options.

The project focuses on creating a professional user experience while maintaining a scalable and organized frontend architecture.

Key development priorities included:

- Responsive design across screen sizes
- Reusable React components
- Feature-based project organization
- Data-driven content
- Maintainable TypeScript code
- Modular CSS
- Clear calls to action
- Business-focused UI/UX

---

## Features

- Responsive hero section
- Services showcase
- Target audience section
- Business benefits section
- Project gallery
- Work process section
- Customer testimonials
- Frequently asked questions
- Contact section
- Call-to-action sections
- Responsive navigation
- Shared header and footer
- Reusable card components
- Data-driven content sections

---

## Tech Stack

### Frontend

- React
- TypeScript
- CSS3
- Vite

### Development & Deployment

- ESLint
- Git
- GitHub
- Vercel

---

## Project Architecture

The application uses a **feature-based architecture** that groups related components, data, and styles together.

```text
src/
├── assets/
│   ├── svg/
│   └── images
│
├── features/
│   ├── audience/
│   │   ├── components/
│   │   ├── data/
│   │   └── styles/
│   │
│   ├── benefits/
│   │   ├── components/
│   │   ├── data/
│   │   └── styles/
│   │
│   ├── contact/
│   │   ├── components/
│   │   ├── data/
│   │   └── styles/
│   │
│   ├── cta/
│   │   ├── components/
│   │   └── data/
│   │
│   ├── faq/
│   │   ├── components/
│   │   ├── data/
│   │   └── styles/
│   │
│   ├── hero/
│   │   ├── components/
│   │   └── styles/
│   │
│   ├── process/
│   │   ├── components/
│   │   ├── data/
│   │   └── styles/
│   │
│   ├── projects/
│   │   ├── components/
│   │   ├── data/
│   │   └── styles/
│   │
│   ├── services/
│   │   ├── components/
│   │   ├── data/
│   │   └── styles/
│   │
│   └── testimonials/
│       ├── components/
│       ├── data/
│       └── styles/
│
├── shared/
│   ├── components/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── logo/
│   │   └── nav/
│   │
│   └── data/
│       ├── business.ts
│       ├── footer.ts
│       └── navigation.ts
│
├── styles/
│   ├── App.css
│   └── index.css
│
├── App.tsx
└── main.tsx
```

---

## Technical Highlights

### Feature-Based Architecture

Instead of placing every component in one global components directory, the application organizes functionality by feature.

For example:

```text
features/services/
├── components/
│   ├── ServiceCard.tsx
│   └── Services.tsx
├── data/
│   └── services.ts
└── styles/
    └── Services.css
```

This keeps related code together and makes individual sections easier to locate, maintain, and extend.

---

### Data-Driven Components

Content is separated from presentation throughout the application.

Dedicated data files are used for areas such as:

- Services
- Benefits
- Projects
- Testimonials
- Process steps
- FAQs
- Calls to action
- Navigation
- Business information

Instead of hardcoding all content directly inside components, components can consume structured data and focus primarily on rendering the interface.

---

### Reusable Components

The application contains reusable components including:

```text
ServiceCard
BenefitCard
ProjectCard
TestimonialCard
Header
Navigation
Footer
Logo
```

For example, individual service entries can be rendered through the same `ServiceCard` component rather than duplicating markup for every service.

This approach improves consistency and makes future updates easier to manage.

---

### Shared Application Data

Information used across multiple areas of the application is organized under:

```text
src/shared/data/
├── business.ts
├── footer.ts
└── navigation.ts
```

This provides a centralized location for shared business and navigation information rather than duplicating the same data throughout different components.

---

### Modular Styling

Feature-specific styles are stored alongside their corresponding features.

For example:

```text
features/hero/styles/Hero.css
features/services/styles/Services.css
features/projects/styles/Projects.css
features/contact/styles/Contact.css
```

Global application styles are maintained separately under:

```text
src/styles/
├── App.css
└── index.css
```

This helps separate global styling concerns from feature-specific presentation.

---

## Main Page Sections

The application is composed of several independent sections:

```text
Hero
Audience
Services
Benefits
Projects
Process
Testimonials
FAQ
Contact
CTA
```

These features are composed together to create the complete landing-page experience.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### Clone the Repository

```bash
git clone https://github.com/CodingWithMBJ/MAJ-General-Maintenance
```

### Navigate to the Project

```bash
cd maj-general-maintenance
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Vite will provide a local development URL that you can open in your browser.

---

## Production Build

Create an optimized production build with:

```bash
npm run build
```

The generated production files will be placed in the `dist` directory.

---

## Deployment

The application is deployed using **Vercel**.

**Live Website:**  
[https://maj-general-maintenance-three.vercel.app/](https://maj-general-maintenance-three.vercel.app/)

---

## What I Practiced

Building MAJ General Maintenance provided hands-on experience with:

- Building a business-focused React application
- Developing reusable React components with TypeScript
- Organizing a frontend application using feature-based architecture
- Separating content data from UI components
- Creating reusable card components
- Responsive web development
- Structuring shared application resources
- Maintaining modular CSS
- Organizing static assets
- Building business-focused user interfaces
- Deploying a Vite application with Vercel

---

## Future Improvements

Potential future improvements include:

- Backend-powered contact form submission
- Form validation and submission feedback
- Additional accessibility testing
- Automated component and integration testing
- Further image optimization
- Performance monitoring
- Analytics integration
- Expanded project gallery
- API or CMS-driven content management

---

## Author

### Mohamed Jalloh

**Software Engineer | Frontend Specialist**

[Portfolio](https://www.codingwithmbj.tech) • [LinkedIn](https://www.linkedin.com/in/abooabdillaahmbj/) • [GitHub](https://github.com/CodingWithMBJ)
