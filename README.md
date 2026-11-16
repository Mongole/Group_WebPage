# SC-TECH of Puerto Rico — University Website (`Group_WebPage`)

A responsive, accessible multi-page university website built as a collaborative group project for a **UX & UI Design** course. Designed for **SC-TECH of Puerto Rico**, a fictional computer science and technology university, the project puts core HTML/CSS/JavaScript architecture and **Jakob Nielsen's 10 Usability Heuristics** into practice.

🌐 **Live Demo:** [https://mongole.github.io/Group_WebPage/](https://mongole.github.io/Group_WebPage/)

---

## 📋 Overview & Purpose

The goal of this project is to apply classroom UX/UI principles—visual consistency, system status visibility, user control, error prevention, and accessibility—across a unified multi-page web experience. A central landing page (`index.html`) interconnects four specialized pages, each styled and scripted modularly while sharing a cohesive design system.

---

## ✨ Key Features

* **Four Interconnected Pages:**
  * **Home (`index.html`):** Hero showcase, interactive photo slideshow with keyboard/screen-reader support, quick-access feature cards, and university overview.
  * **Academic Offerings (`pages/ofertas-academicas.html`):** Expandable accordion catalog covering 12 Computer Science majors, specializations, and associate programs.
  * **Interactive 3D Campus Map (`pages/Campus_Map.html`):** Performance-optimized click-to-load 3D campus tour (`mapa-virtual.html`) featuring orbit and first-person walk modes, building guides, and control instructions.
  * **About Us (`pages/about-us.html`):** Institutional mission and vision, sample contact directory, interactive contact form with instant visual feedback, and a smooth scroll-to-top control.
* **Built-In Accessibility Suite (`Accessibility.css` & `accessibility.js`):**
  * **Dark Mode:** Full cross-page dark color scheme persisted via `localStorage`.
  * **High Visibility Mode:** Removes translucent surfaces and strengthens element borders for sharper contrast.
  * **Large Text Mode:** Scales typography site-wide with mobile overflow containment.
  * **Full Keyboard Navigation:** Skip-to-content links (`Ir al contenido` / `Skip to content`), high-contrast `:focus-visible` outlines, and `Escape`/`Tab` dropdown management.
* **Bilingual Support (`i18n.js`):** Instant Spanish (`ES`) ↔ English (`EN`) toggling across all pages, form placeholders, dynamic status messages, and page titles.
* **Mobile-First Responsiveness:** Compact 2-row mobile header and adaptive grid layouts tested across desktop and mobile viewports.

---

## 🗂️ Project Structure

```text
Group_WebPage/
├── index.html                  # Main landing page
├── pages/
│   ├── ofertas-academicas.html # Academic programs & specializations
│   ├── Campus_Map.html         # 3D campus map wrapper & facility guides
│   ├── mapa-virtual.html       # Embedded 3D virtual campus environment
│   └── about-us.html           # Mission, vision & demo contact form
└── assets/
    ├── css/                    # Modular & shared stylesheets (Accessibility.css, home.css, etc.)
    ├── js/                     # Interactive scripts (i18n.js, accessibility.js, slideshow.js, etc.)
    └── images/                 # Brand assets, campus renders & illustrative photography

Here is a clean, polished English `README.md` ready to copy and paste directly into your GitHub repository:

```markdown
# SC-TECH of Puerto Rico — University Website (`Group_WebPage`)

A responsive, accessible multi-page university website built as a collaborative group project for a **UX & UI Design** course. Designed for **SC-TECH of Puerto Rico**, a fictional computer science and technology university, the project puts core HTML/CSS/JavaScript architecture and **Jakob Nielsen's 10 Usability Heuristics** into practice.

🌐 **Live Demo:** [https://mongole.github.io/Group_WebPage/](https://mongole.github.io/Group_WebPage/)

---

## 📋 Overview & Purpose

The goal of this project is to apply classroom UX/UI principles—visual consistency, system status visibility, user control, error prevention, and accessibility—across a unified multi-page web experience. A central landing page (`index.html`) interconnects four specialized pages, each styled and scripted modularly while sharing a cohesive design system.

---

## ✨ Key Features

* **Four Interconnected Pages:**
  * **Home (`index.html`):** Hero showcase, interactive photo slideshow with keyboard/screen-reader support, quick-access feature cards, and university overview.
  * **Academic Offerings (`pages/ofertas-academicas.html`):** Expandable accordion catalog covering 12 Computer Science majors, specializations, and associate programs.
  * **Interactive 3D Campus Map (`pages/Campus_Map.html`):** Performance-optimized click-to-load 3D campus tour (`mapa-virtual.html`) featuring orbit and first-person walk modes, building guides, and control instructions.
  * **About Us (`pages/about-us.html`):** Institutional mission and vision, sample contact directory, interactive contact form with instant visual feedback, and a smooth scroll-to-top control.
* **Built-In Accessibility Suite (`Accessibility.css` & `accessibility.js`):**
  * **Dark Mode:** Full cross-page dark color scheme persisted via `localStorage`.
  * **High Visibility Mode:** Removes translucent surfaces and strengthens element borders for sharper contrast.
  * **Large Text Mode:** Scales typography site-wide with mobile overflow containment.
  * **Full Keyboard Navigation:** Skip-to-content links (`Ir al contenido` / `Skip to content`), high-contrast `:focus-visible` outlines, and `Escape`/`Tab` dropdown management.
* **Bilingual Support (`i18n.js`):** Instant Spanish (`ES`) ↔ English (`EN`) toggling across all pages, form placeholders, dynamic status messages, and page titles.
* **Mobile-First Responsiveness:** Compact 2-row mobile header and adaptive grid layouts tested across desktop and mobile viewports.

---

## 🗂️ Project Structure

```text
Group_WebPage/
├── index.html                  # Main landing page
├── pages/
│   ├── ofertas-academicas.html # Academic programs & specializations
│   ├── Campus_Map.html         # 3D campus map wrapper & facility guides
│   ├── mapa-virtual.html       # Embedded 3D virtual campus environment
│   └── about-us.html           # Mission, vision & demo contact form
└── assets/
    ├── css/                    # Modular & shared stylesheets (Accessibility.css, home.css, etc.)
    ├── js/                     # Interactive scripts (i18n.js, accessibility.js, slideshow.js, etc.)
    └── images/                 # Brand assets, campus renders & illustrative photography

```

---

## 👥 Project Team

| Page / Section | Team Members |
| --- | --- |
| **Home (`index.html`)** | Eli Samuel (Twinzz-git), Antonio, Jayden, Jorge |
| **Academic Offerings (`ofertas-academicas.html`)** | Anjuan (Bright-AJ), Reynaldo, Yadiel |
| **Campus Map (`Campus_Map.html`)** | Josean (Mongole), Alexander, Alexander, Christian |
| **About Us (`about-us.html`)** | Julio, Ihan, Ricardo |

---

## 🖼️ Image Credits

* **Home Slideshow Photography:** Illustrative photos sourced from [Unsplash](https://unsplash.com/license) (do not represent real SC-TECH students or facilities).
* **Campus Preview & Program Illustrations:** Conceptual renders generated with Google Gemini for academic demonstration purposes.
