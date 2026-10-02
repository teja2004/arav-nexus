# ARAV NEXUS — Corporate Website

> **"Invest. Build. Grow Together."**

A modern, responsive, corporate website for **ARAV NEXUS** — a diversified investment and business company building opportunities across real estate, technology, billing solutions, renewable energy, and emerging ventures.

---

## 🏛️ Brand Identity & Design System

- **Palette**:
  - Primary Navy: `#0B1F33`
  - Dark Navy: `#061522`
  - Deep Surface Navy: `#030B12` / `#0E243B`
  - Gold Accents: `#D6A84F`, `#E6C36A`, `#B88A35`
  - Off-White: `#F7F8FA`
  - Text Silver: `#CBD5E1`
- **Typography**:
  - Headings: `Playfair Display` (High-end editorial serif)
  - Body: `Inter` (Modern clean sans-serif)
- **Visuals**:
  - Interlocking geometric **AN** monogram logo
  - Curated high-resolution sector photography
  - Glassmorphic panels with subtle gold-accented borders and glow effects

---

## 📁 Architecture & File Structure

```text
arav-nexus/
├── public/
│   ├── favicon.svg          # Interlocking AN monogram favicon
│   └── robots.txt           # Search crawler directives
├── src/
│   ├── assets/
│   │   ├── logo.svg         # Full corporate logo with wordmark
│   │   └── logo-mark.svg    # Isolated geometric AN monogram
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky responsive nav with mobile drawer
│   │   ├── Hero.tsx         # Modern skyline hero with value pillars
│   │   ├── Businesses.tsx   # 5 core business sectors grid
│   │   ├── BusinessCard.tsx # Zoom-hover business sector card
│   │   ├── BusinessModal.tsx# Sector deep-dive modal
│   │   ├── About.tsx        # Strategic overview + animated statistics
│   │   ├── InvestmentApproach.tsx # 4-step horizontal & vertical timeline
│   │   ├── InvestmentFocus.tsx    # 6 capital deployment areas
│   │   ├── WhyAravNexus.tsx # 4 guiding principles with gold accents
│   │   ├── Impact.tsx       # 3 purpose-driven impact cards
│   │   ├── Journey.tsx      # Corporate milestones timeline (2023-Future)
│   │   ├── PartnershipCTA.tsx # Premium full-width partnership callout
│   │   ├── Careers.tsx      # 3 high-impact talent tracks
│   │   ├── Contact.tsx      # Validated inquiry form + direct contact info
│   │   ├── Footer.tsx       # Dark navy corporate footer with quick links
│   │   └── LegalModal.tsx   # Interactive Privacy Policy & Terms modal
│   ├── config/
│   │   └── site.ts          # Centralized configuration (contact, images, data)
│   ├── App.tsx              # Root component connecting sections & state
│   ├── main.tsx             # React DOM root entry
│   └── index.css            # Tailwind directives, custom glass & scrollbar styles
├── index.html               # Head metadata, Open Graph, SEO, and Google Fonts
├── package.json             # React 18, Vite 6, Tailwind CSS, Lucide React
├── tailwind.config.js       # Custom colors, fonts, shadows, and animations
├── tsconfig.json            # Strict TypeScript configuration
└── vite.config.ts           # Vite bundler config (port 3000)
```

---

## 🚀 Running the Website

### Development Mode
```bash
npm install
npm run dev
```
The website will start at: [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm run preview
```

---

## ⚙️ Configuration & Customization

All copy, contact information, milestones, business sectors, and image links can be updated in a single place:
[`src/config/site.ts`](file:///C:/Users/kunuk/.gemini/antigravity/scratch/arav-nexus/src/config/site.ts)
