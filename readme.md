# Aether — Premium Product Showcase

Aether is a premium, original multi-product landing page built from the ground up using **React**, **Vite**, and **Tailwind CSS v4**. 

This project follows an entirely independent design system (the Aether Ecosystem), utilizing elegant dark/light theme tokens, bold typography, geometric device abstractions, and restrained motion constraints.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18 or higher is recommended).

### 2. Installation
Clone or download this repository, navigate to the project directory, and install dependencies:
```bash
npm install
```

### 3. Verify Specifications (Crucial Step)
To ensure copy accuracy and prevent guessing, some product specifications and pricing are temporarily flagged with `[VERIFY: ...]` placeholders. 
Before building the application, open [src/App.jsx](file:///e:/Assessment/src/App.jsx) and replace the placeholders in the `MAC_PRODUCTS` and `IPHONE_PRODUCTS` arrays with your finalized specs.

### 4. Running the Development Server
Start the local development server:
```bash
npm run dev
```
Open your browser and navigate to the address shown in your terminal (usually `http://localhost:5173`).

### 5. Compiling for Production
Build the optimized production assets:
```bash
npm run build
```
The output files will be created in the `dist/` directory, ready to be hosted.

---

## 📂 Project Structure

```text
├── index.html          # HTML entry point, imports Google Fonts (Sora & Inter)
├── package.json        # Project packages and execution scripts
├── vite.config.js      # Vite compilation configuration with Tailwind CSS v4 support
└── src/
    ├── main.jsx        # Mounting entry point for the React application
    ├── App.jsx         # Controls product datasets, dark mode, switcher state, and layout
    ├── index.css       # Core stylesheet (CSS variables for dark/light themes)
    └── components/     # Reusable UI component files
        ├── Hero.jsx              # Brand tagline, value proposition, and clean mesh background
        ├── CategorySwitcher.jsx  # Static tab switches for iPhone vs Mac views
        ├── ProductGrid.jsx       # Flexible CSS Grid responding to device size
        ├── ProductCard.jsx       # SVG device silhouettes, specs badges, and hover lift effects
        └── Footer.jsx            # Disclaimer footnotes, sitemaps, and primary CTA
```

---

## 🎨 Design System & Highlights

### 1. Typography Pairing
*   **Display / Headings**: **Sora** (Bold, structural sans-serif for striking headers)
*   **Body Text**: **Inter** (Highly legible, clean font for lists and descriptions)

### 2. Premium Color Palettes (CSS Variables)
Colors are managed via custom CSS variables inside [src/index.css](file:///e:/Assessment/src/index.css) and mapped to Tailwind utilities:
*   **Light Theme**: Clean, light gray layouts with dark charcoal text.
*   **Dark Theme**: Rich, deep obsidian navy background (`#0B0F19`) with light gray text.
*   **Accent Color**: High-contrast blue (`#3B82F6` light / `#60A5FA` dark) to emphasize highlights.

### 3. Restrained Motion Constraint
To keep the branding premium and fluid, only **one** animation effect exists in the entire build:
*   **Card Hover-Lift**: Product cards lift slightly and acquire a soft shadow on hover (`hover:-translate-y-2 hover:shadow-lg`).
*   All other elements (such as tab switching and header loads) remain static to keep page performance lightning fast.

### 4. Accessibility (A11y)
*   **WCAG AA Compliant Contrast**: Highly readable color ratios in both dark and light modes.
*   **Focus Rings**: All interactive controls (buttons, links, tab switches, and cards) feature visible ring boundaries when navigated via keyboard.
*   **SVG Title Tags**: Geometric silhouettes are fully labelled internally using `role="img"` and descriptive `<title>` tags for screen readers.
