# PulseFlow — SaaS Workflow & Sprint Analytics Landing Page

[![Live Demo](https://img.shields.io/badge/Live%20Demo-pluseflow.vercel.app-4F46E5?style=for-the-badge)](https://pluseflow.vercel.app/)

A clean, responsive SaaS landing page for **PulseFlow**, built for the **Sankar Group Front-End Development Internship Assignment**.

**Live Website:** [https://pluseflow.vercel.app/](https://pluseflow.vercel.app/)

---

## Overview

PulseFlow is a fictional SaaS platform that connects team tasks, pull requests, and daily async check-ins into a single real-time workspace—helping product and engineering teams spot blockers early without repetitive status meetings.

### Key Sections Implemented
- **Navigation Bar:** Sticky header with custom SVG logo, smooth section links, mobile hamburger menu, and **Get Started** CTA.
- **Hero Section:** Product headline, value proposition, dual CTAs, trust badge, and a custom HTML/CSS live sprint dashboard preview.
- **Features:** 6 feature cards with inline SVG icons covering async check-ins, sprint analytics, blocker detection, integrations, role-based views, and security.
- **How It Works / About:** 3-step onboarding breakdown plus a key metrics banner.
- **Pricing:** 3-tier pricing (`Starter`, `Pro`, `Enterprise`) with an interactive **Monthly / Annual (20% off)** billing toggle and plan buttons that pre-fill the demo form.
- **Contact / Demo Form & Footer:** Client-side validated demo request form with inline error messages, confirmation state, contact details, and responsive footer.

---

## Technologies Used

- **HTML5:** Semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`) and ARIA accessibility attributes.
- **CSS3:** Custom properties (design tokens), CSS Grid & Flexbox, responsive breakpoints (`960px` tablet, `680px` mobile), and smooth transitions.
- **Vanilla JavaScript (ES6+):** Mobile menu toggle, billing cycle switcher, plan-to-form prefill, input sanitization, and form validation.
- **Security Hardening:** Content Security Policy (CSP), `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `maxlength` constraints, honeypot bot protection, and safe `textContent` rendering.

---

## Project Structure

```text
├── index.html       # Semantic landing page markup & security meta headers
├── styles.css       # Responsive design system & component styles
├── script.js        # Interactive UI behaviors & form validation
├── favicon.svg      # Custom SVG favicon matching the PulseFlow logo
├── README.md        # Project documentation & setup instructions
└── EXPLANATION.md   # Short summary of design choices & challenges solved
```

---

## Run Locally

No build tools or package installations are required.

1. Clone the repository:
   ```bash
   git clone https://github.com/chandan966/PulseFlow.git
   cd PulseFlow
   ```
2. Open `index.html` directly in any modern browser (or use VS Code **Live Server** / `npx serve .`).

---

## Design Choices & Challenges

See [EXPLANATION.md](./EXPLANATION.md) for a concise summary of the design decisions and responsive layout challenges solved in this project.
