# Thuba Rush Kota Joint — Website (POE)

**Student:** Kamogelo Mabiletsa
**Student Number:** ST10479701
**Module:** WEDE5020 — Web Development (Introduction)
**Repository:** mabiletsakamogelo84-code/Mabiletsa-St10479701-POE

## Project Overview

This repository contains the Portfolio of Evidence (POE) website built for **Thuba Rush Kota Joint**, a Pretoria-based street food business. The site is built using HTML and CSS, with a pink pastel theme, responsive layout, and interactive elements handled through CSS pseudo-classes (no JavaScript navigation).

## Project Structure

```
├── index.html
├── about.html
├── services.html (or products/events — update to match your actual pages)
├── enquiry.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js   (kept intentionally empty — no JS interactivity)
├── images/
└── README.md
```

## Part 1 — Feedback Corrections

> List each item of feedback received on Part 1, and what was changed in response.

- [ ] Feedback item 1 — description of correction made
- [ ] Feedback item 2 — description of correction made
- [ ] Feedback item 3 — description of correction made

## Part 2 — Features Implemented

- External stylesheet (`css/style.css`) linked consistently across all HTML pages
- Base reset and default styling (font family, colours, margin/padding)
- Typography system (font sizing, weight, line-height, letter-spacing)
- Layout structure using CSS Grid/Flexbox for desktop view
- Pastel pink colour scheme applied site-wide
- Decorative styling and colour accents
- Pseudo-classes used for interactive states (`:hover`, `:focus`, `:nth-child`, etc.) and for CSS-only mobile navigation (no JavaScript)
- Responsive design with media queries (breakpoints for mobile/tablet/desktop)
- Responsive images (`srcset`/`sizes`/`picture` element)
- Search/filter/sort feature added to the services/products/events page
- `enquiry.html` — enquiry form (services, products, volunteering, sponsorship) with validation and a response section
- `contact.html` — contact form (contact details, message type, message body) with validation
- On-page SEO: title tags, meta descriptions, header hierarchy (H1–H3), image alt text, clean URLs, internal linking
- `robots.txt` and `sitemap.xml` added for search engine crawling
- Tested across multiple devices/browsers (see Testing Evidence below)

## Testing Evidence

> Insert screenshots here showing the site rendered on desktop, tablet, and mobile.

| Device  | Screenshot |
|---------|-----------|
| Desktop | *(insert image)* |
| Tablet  | *(insert image)* |
| Mobile  | *(insert image)* |

## Changelog

### Part 2
- `YYYY-MM-DD` — Added external stylesheet and base reset styles
- `YYYY-MM-DD` — Implemented pink pastel colour scheme site-wide
- `YYYY-MM-DD` — Added typography scale and layout grid/flexbox structure
- `YYYY-MM-DD` — Added pseudo-class-based mobile navigation (no JS)
- `YYYY-MM-DD` — Added media queries for responsive breakpoints
- `YYYY-MM-DD` — Built enquiry.html form with validation
- `YYYY-MM-DD` — Built contact.html form with message type field and validation
- `YYYY-MM-DD` — Added responsive images (srcset/sizes)
- `YYYY-MM-DD` — SEO improvements: meta tags, alt text, header structure
- `YYYY-MM-DD` — Updated README with Part 2 changelog and references

### Part 1 (carried over)
- `YYYY-MM-DD` — Initial HTML structure for all pages built

## How to Run Locally

1. Clone the repository:
   ```
   git clone https://github.com/mabiletsakamogelo84-code/Mabiletsa-St10479701-POE.git
   ```
2. Open the project folder in VS Code.
3. Open `index.html` in a browser (or use the "Live Server" extension in VS Code).

## References

> List all sources used (tutorials, documentation, images, icons, fonts) in a consistent citation style, e.g.:

- W3Schools. (2024). *CSS Media Queries*. Available at: https://www.w3schools.com/css/css_rwd_mediaqueries.asp
- MDN Web Docs. (2024). *Responsive images*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
