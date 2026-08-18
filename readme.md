# Apple.com — Product Showcase Lineup

A premium replica of **Apple.com's** product showcase and storefront UI built using **React**, **Vite**, and **Tailwind CSS v4**.

This landing page adapts Apple's exact typography hierarchies, navigation structure, color values, and content disclaimers.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18 or higher is recommended).

### 2. Installation
Clone or download this repository, navigate to the project directory, and install dependencies:
```bash
npm install
```

### 3. Verify Specifications (Placeholder Pass)
Some upcoming product specs are temporarily marked with `[VERIFY: ...]` placeholders. 
Before deployment, open [src/App.jsx](file:///e:/Assessment/src/App.jsx) and replace the placeholders in the `MAC_PRODUCTS` and `IPHONE_PRODUCTS` arrays with finalized figures.

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
├── index.html          # HTML entry point, imports SF Pro system fallbacks
├── package.json        # Project packages and execution scripts
├── vite.config.js      # Vite compilation configuration with Tailwind CSS v4 support
└── src/
    ├── main.jsx        # Mounting entry point for the React application
    ├── App.jsx         # Controls product datasets, dark mode, switcher state, and layout (user comments preserved)
    ├── index.css       # Core stylesheet (CSS variables for dark/light Apple themes)
    └── components/     # Reusable UI component files
        ├── Hero.jsx              # Centered typography, caption, and link CTAs
        ├── CategorySwitcher.jsx  # Apple-style subnavigation switching
        ├── ProductGrid.jsx       # Responsive column CSS Grid
        ├── ProductCard.jsx       # SVG silhouettes with notches, Apple buy pills, and hover lift effects
        └── Footer.jsx            # Detailed Apple legal footnotes, columns, and copyright
```

---

## 🎨 Design System & Highlights

### 1. Apple Typography Stack
*   **Fonts**: Uses Apple's system font list (`-apple-system`, `BlinkMacSystemFont`, `"SF Pro"`, `"Helvetica Neue"`, `Arial`, `sans-serif`) for headers and body copy, giving the page an authentic, native OS look.

### 2. Apple.com Color Palette (CSS Variables)
Colors are managed via custom CSS variables inside [src/index.css](file:///e:/Assessment/src/index.css) and mapped to Tailwind utilities:
*   **Light Theme**: White background (`#FFFFFF`), dark charcoal text (`#1D1D1F`), cool gray sections (`#F5F5F7`), light gray border lines (`#D2D2D7`), and Apple's bright blue link accent (`#0066CC`).
*   **Dark Theme**: Pure black background (`#000000`), white text (`#F5F5F7`), slate-gray borders (`#424245`), card bg (`#1D1D1F`), and Apple Blue (`#2997FF`).

### 3. Restrained Motion Constraint
*   **Card Hover-Lift**: Product cards lift slightly and acquire a soft shadow on hover (`hover:-translate-y-1 hover:shadow-md`).
*   All other elements (such as tab switching and header loads) remain static to keep page performance lightning fast.

### 4. Accessibility (A11y)
*   **WCAG AA Compliant Contrast**: Highly readable color ratios in both dark and light modes.
*   **Focus Rings**: All interactive controls (buttons, links, tab switches, and cards) feature visible ring boundaries when navigated via keyboard.
*   **SVG Title Tags**: Geometric silhouettes are fully labelled internally using `role="img"` and descriptive `<title>` tags for screen readers.
