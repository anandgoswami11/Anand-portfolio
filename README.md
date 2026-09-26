# 🚀 Anand Giri Goswami - Full-Stack React Developer Portfolio

A modern, high-performance **React 18 + Vite** developer portfolio built for **Anand Giri Goswami**. Crafted with a sleek **Dark Glassmorphism aesthetic**, interactive particle constellation canvas, dynamic typing effect, filterable projects showcase with modals, 3D tilt card animations, toast alerts, and responsive navigation.

---

## 🛠️ Tech Stack

- **Frontend Library:** React 18
- **Build Tool:** Vite 6 (Lightning-fast HMR & production bundle)
- **Styling:** Modular Vanilla CSS & Glassmorphism Design System
- **Icons:** Font Awesome 6
- **Typography:** Plus Jakarta Sans & Fira Code (Google Fonts)
- **Animations:** Custom CSS3 keyframes, 3D perspective tilt, canvas particles & canvas-confetti

---

## 📂 React Project Structure

```text
Anand portfolio/
│
├── 📁 public/
│   └── 📁 assets/
│       └── 📁 images/                 # Profile photos, illustrations & SVG project mockups
│
├── 📁 src/
│   ├── 📁 components/                 # Reusable React components
│   │   ├── Navbar.jsx                 # Glassmorphic header with scrollspy & mobile menu
│   │   ├── Hero.jsx                   # Typewriter role animation, status dot, 3D tilt portrait
│   │   ├── About.jsx                  # Profile card, B.Tech badge, copy buttons, stats counters
│   │   ├── Skills.jsx                 # Categorized technical skills cards & pills
│   │   ├── Experience.jsx             # Vertical interactive timeline with progress glow
│   │   ├── Projects.jsx               # Dynamic project cards with category filtering
│   │   ├── ProjectModal.jsx           # Accessible project details modal popup
│   │   ├── Certifications.jsx         # Professional credential cards
│   │   ├── Contact.jsx                # Interactive contact form, WhatsApp chat & copy buttons
│   │   ├── Footer.jsx                 # Footer branding and dynamic copyright
│   │   ├── ParticlesBackground.jsx    # Interactive mouse constellation canvas
│   │   └── ScrollToTop.jsx            # Floating smooth scroll-to-top button
│   │
│   ├── 📁 context/
│   │   └── ToastContext.jsx           # Global toast notifications context & hook (`useToast`)
│   │
│   ├── 📁 hooks/
│   │   ├── useScrollSpy.js            # Active section detector for navigation
│   │   └── useTilt.js                 # 3D interactive card tilt with parallax
│   │
│   ├── 📁 data/
│   │   └── portfolioData.js           # Structured JSON-like data for all portfolio content
│   │
│   ├── 📁 styles/
│   │   ├── index.css                  # Color variables, typography, ambient background glows
│   │   ├── components.css             # Glass cards, buttons, badges, timeline, forms, modal
│   │   └── animations.css             # Floating badges, cyber brackets, keyframes, reveals
│   │
│   ├── App.jsx                        # Main application container with scroll reveal
│   └── main.jsx                       # React DOM root entry point
│
├── 📄 index.html                      # HTML entry with metadata, SEO & font imports
├── 📄 vite.config.js                  # Vite configuration with @vitejs/plugin-react
├── 📄 package.json                    # Project dependencies and npm scripts
└── 📖 README.md                       # Project documentation
```

---

## ⚡ How to Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000/`.

3. **Build for Production:**
   ```bash
   npm run build
   ```
   Creates an optimized production bundle in the `dist/` folder.

4. **Preview Production Build:**
   ```bash
   npm run preview
   ```

---

## ✨ Key Features & Component Breakdown

1. **⚡ Typewriter Hero Section (`Hero.jsx`)**:
   Cycles seamlessly through Anand's roles with custom cursor blink and live availability status indicator.

2. **🪐 Interactive 3D Avatar Stage**:
   Cyber tech HUD corner brackets, glowing gradient squircle frame, holographic light sheen sweep, and mouse-reactive 3D tilt.

3. **🎯 Filterable Projects Grid (`Projects.jsx` & `ProjectModal.jsx`)**:
   Instant filtering by category (MERN Stack, Live Production, PHP & MySQL) with live count tags, live demo links, and modal popups.

4. **📋 One-Click Copy & Toast Alerts (`ToastContext.jsx`)**:
   Allows recruiters to copy email or phone number in 1 click with toast notifications.

5. **📬 Contact Form with WhatsApp Integration (`Contact.jsx`)**:
   Controlled form inputs with validation, mailto fallback, confetti celebration, and direct WhatsApp chat.

---

© 2026 Anand Giri Goswami. All rights reserved.
