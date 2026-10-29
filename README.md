# Thuba Rush Kota Joint – Website (WEDE5020 POE Part 3)

**Student:** Kamogelo Mabiletsa
**Student number:** ST10479701
**Module:** Web Development (Introduction) – WEDE5020
**Repository:** https://github.com/mabiletsakamogelo84-code/Mabiletsa-St10479701-POE
**Live site:** [ADD YOUR GITHUB PAGES LINK HERE]

---

## 1. Project Overview

This website promotes **Thuba Rush Kota Joint**, a Pretoria street-food business that sells kotas, wings, chips and more. The site was built in three parts:

- **Part 1:** HTML structure and content for all pages.
- **Part 2:** CSS styling, responsive layout and form pages.
- **Part 3:** JavaScript interactivity, interactive map, SEO, form processing and deployment (this submission).

### Pages

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Introduction, hero section and calls to action |
| About | `about.html` | Business story and FAQ accordion |
| Products | `products.html` | Dynamic menu with search, filter and sort |
| Gallery | `gallery.html` | Responsive image gallery with lightbox |
| Enquiry | `enquiry.html` | Validated enquiry form with instant response |
| Contact | `contact.html` | Contact form and interactive Leaflet map |

### Folder structure

```
/
├── index.html
├── about.html
├── products.html
├── gallery.html
├── enquiry.html
├── contact.html
├── css/style.css
├── js/script.js
├── images/
├── robots.txt
├── sitemap.xml
└── README.md
```

---

## 2. Part 3 Features

### 2.1 JavaScript enhancements
- **Interactive element:** FAQ accordion on `about.html` (expand/collapse answers).
- **Gallery lightbox:** clicking a gallery image opens it in an enlarged overlay that can be closed.
- **Interactive map:** Leaflet map on `contact.html` with two location pins and popups containing a "Get directions" link (Leaflet, 2023).
- **Dynamic content:** the menu on `products.html` is generated from a JavaScript array and rendered into the page (MDN Web Docs, n.d.a).
- **Search, filter and sort:** visitors can search the menu by name, filter by category and sort the results.
- **Mobile navigation:** the menu button toggles an `is-open` class so the navigation works on small screens.
- **Animations and transitions:** CSS transitions on buttons, links and cards; JavaScript-driven class changes for the accordion and lightbox.
- **DOM manipulation:** the footer year, menu cards, form error messages and form responses are created and updated using JavaScript.

### 2.2 Forms
- **Enquiry form (`enquiry.html`):** HTML5 controls (text, email, select, radio/checkbox, textarea), JavaScript validation with clear error messages, and a generated response that gives an estimated cost and availability based on the visitor's choices.
- **Contact form (`contact.html`):** name, email, phone, message type dropdown and full message. Input is validated on the client side, then compiled into an email addressed to the recipient set in the code (`mailto:` fallback, with optional AJAX submission through Formspree) (Formspree, n.d.).

### 2.3 SEO
- **On-page:** unique `<title>` and meta description on every page, meta keywords, a single `<h1>` per page followed by logical `<h2>`/`<h3>` headings, descriptive image file names, meaningful `alt` text, clean file names and internal links between all pages, and a mobile-friendly viewport (Google, n.d.a).
- **Off-page:** recommended strategy is described in section 4.
- **Technical:** `robots.txt` and `sitemap.xml` added to the root folder (Sitemaps.org, n.d.; Google, n.d.b), images resized and given `srcset` versions for faster loading, and no inline scripts from untrusted sources.

### 2.4 Responsive design
- Media queries for tablet, mobile and small-phone breakpoints in `css/style.css`.
- Images use `<picture>`, `srcset` and `sizes` so smaller files load on smaller screens (MDN Web Docs, n.d.b).
- Navigation collapses into a toggle menu on small screens.

---

## 3. Changelog

### 3.1 Part 2 feedback corrections

| Feedback received | Change made |
|-------------------|-------------|
| Media queries and breakpoints – "not responsive" | Added media queries for tablet, mobile and small-phone widths in `css/style.css`; adjusted layout, typography, spacing and grids at each breakpoint. |
| Responsive images | Converted gallery images to `<picture>` with `srcset` and `sizes`, and created smaller image versions (e.g. 480px width). |
| Navigation menu adjustment | Added a mobile menu toggle that opens and closes the navigation on small screens. |
| References incomplete or incorrectly formatted | Rebuilt the reference list in the Harvard style with in-text citations (section 9). |
| Pseudo-classes | Added more `:hover`, `:focus`, `:active`, `:nth-child` and form-validation pseudo-class styling. |
| Part 1 feedback and changelog could be improved | Expanded this changelog with specific descriptions of what was changed, where and why. |
| README (4/5) | Added project overview, folder structure, features, testing evidence, deployment details and references. |

### 3.2 Part 3 development log

| Date | Change |
|------|--------|
| 2026-10-21 | Started Part 3; reviewed brief and rubric. |
| 2026-10-26 | Linked `js/script.js` on all pages. Added footer year script. |
| 2026-10-27 | Built mobile nav toggle, gallery lightbox and FAQ accordion; renamed image files with dashes; built dynamic menu with search, filter and sort on `products.html`; added media queries. |
| 2026-10-27 | Removed duplicate page content and Google iframes from `contact.html`; added Leaflet map with two pins and Esri tiles. |
| 2026-10-27 | Rebuilt and tested `enquiry.html` form; added contact form with message type dropdown and validation. |
| 2026-10-28 | First Part 3 push to GitHub; confirmed GitHub Pages deployment exists. |
| 2026-10-28 | Added SEO: titles, meta descriptions, meta keywords, `robots.txt`, `sitemap.xml`, alt text. |
| 2026-10-29 | Added "Get directions" links to map popups; finished responsive and clickable images for all gallery cards. |
| 2026-10-29 | Updated README with changelog, testing evidence and Harvard references. |

---

## 4. Off-Page SEO Strategy

- **Backlinks:** ask local Pretoria food bloggers, community pages and nearby businesses to link to the website.
- **Social media:** promote menu items, specials and photos on Facebook, Instagram and WhatsApp Status, with the website link in every profile.
- **Local SEO:** register the business on Google Business Profile with accurate address, hours and photos, and encourage customers to leave reviews (Google, n.d.c).

---

## 5. Testing

The site was tested at desktop, tablet and mobile widths using browser developer tools.

| Test | Result |
|------|--------|
| All pages load without console errors | [Pass / note issues] |
| Navigation links work on every page | [Pass] |
| Mobile menu toggle | [Pass] |
| Gallery lightbox opens and closes | [Pass] |
| Accordion expands and collapses | [Pass] |
| Product search, filter and sort | [Pass] |
| Enquiry form validation and response | [Pass] |
| Contact form validation and email | [Pass] |
| Leaflet map and pin popups | [Pass] |
| Live site loads on GitHub Pages | [Pass] |

### Screenshot evidence
Add your screenshots to an `images/screenshots/` folder and link them here:

- Desktop: `![Desktop view](images/screenshots/desktop.png)`
- Tablet: `![Tablet view](images/screenshots/tablet.png)`
- Mobile: `![Mobile view](images/screenshots/mobile.png)`

---

## 6. Deployment

The website is deployed using **GitHub Pages** from the `main` branch of this repository (GitHub, n.d.). Live link: [ADD LINK]. All six pages were opened on the live site to confirm images, the map, the forms and the scripts load correctly.

---

## 7. GitHub Commit History

The repository includes regular commits with descriptive messages for each major change (responsive images, SEO files, forms, README updates).

---

## 8. How to Run Locally

1. Download or clone the repository.
2. Open `index.html` in a browser. For the map tiles to load reliably, use a local server (e.g. the Live Server extension in VS Code) or view the deployed site.

---

## 9. References

Formspree (n.d.) *Formspree documentation*. Available at: https://formspree.io/ (Accessed: 29 October 2026).

GitHub (n.d.) *GitHub Pages documentation*. Available at: https://docs.github.com/en/pages (Accessed: 29 October 2026).

Google (n.d.a) *SEO starter guide*. Google Search Central. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 29 October 2026).

Google (n.d.b) *Introduction to robots.txt*. Google Search Central. Available at: https://developers.google.com/search/docs/crawling-indexing/robots/intro (Accessed: 29 October 2026).

Google (n.d.c) *Google Business Profile Help*. Available at: https://support.google.com/business (Accessed: 29 October 2026).

Leaflet (2023) *Leaflet: an open-source JavaScript library for interactive maps* (Version 1.9.4). Available at: https://leafletjs.com/ (Accessed: 29 October 2026).

MDN Web Docs (n.d.a) *Document Object Model (DOM)*. Mozilla. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model (Accessed: 29 October 2026).

MDN Web Docs (n.d.b) *Responsive images*. Mozilla. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images#responsive_images (Accessed: 29 October 2026).

Sitemaps.org (n.d.) *Sitemaps XML format*. Available at: https://www.sitemaps.org/protocol.html (Accessed: 29 October 2026).

> Add any other sources you used (image sources, fonts, icons, tutorials, lecturer notes) in the same format.
