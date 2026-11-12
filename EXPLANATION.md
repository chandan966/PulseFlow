# Design Choices & Challenges Solved

For **PulseFlow**, I chose a clean, high-contrast SaaS visual system using an indigo-and-cyan palette on a crisp white and slate background so the product value and call-to-action buttons stand out immediately.
Instead of relying on external stock images that could break or slow down loading, I built a custom HTML/CSS dashboard preview in the hero section and inline SVG icons for all feature cards.
To keep the page practical and interactive, I added a monthly/annual billing toggle on the pricing cards and wired each plan button to pre-fill the demo request form and scroll smoothly to it.
One key challenge was ensuring the 3-column grids (features, pricing, and dashboard metrics) adapted cleanly to narrow mobile screens without horizontal overflow, which I solved using CSS Grid breakpoints and a collapsible mobile navigation menu.
Finally, I implemented client-side form validation with clear inline error messages and a dynamic confirmation state so users get immediate feedback without needing a backend.
