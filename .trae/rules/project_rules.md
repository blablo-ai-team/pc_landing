# 🧠 Trae Project Rules for Blablo Landing Page

## 📦 Project Overview

* Framework: **Next.js 15 (App Router)**
* Language: **TypeScript**
* Styling: **Tailwind CSS v4**
* Animation: **Framer Motion**
* i18n: **Multi-language (EN/VI)**
* SEO: Optimized metadata and performance
* 📌 **Target**: Desktop only (no mobile responsiveness required)

---

## 📁 Folder Structure Rules

* Reusable UI: `components/common/`
* Section blocks: `components/sections/`
* Layout: `/app/layout.tsx`
* Translation files: `/locales/en`, `/locales/vi`
* Utility helpers: `utils/`

---

## 🎨 Styling Rules

* Use Tailwind color tokens:

  * `text-primary` → `#001541`
  * `bg-accent` → `#EE33DF`
  * `text-blue` → `#2249D1`
  * `bg-green-light` → `#E4FFF5`
* Use Tailwind only (no inline style or CSS modules)
* ❌ Do **not** use responsive/mobile styles
* All layouts, paddings, spacings are designed for desktop breakpoints only (≥1024px)

---

## 🧩 Component Guidelines

* Only use **functional components**
* Type-safe with **TypeScript**
* Use `next/image` for all images
* Use `Heroicons` or `React Icons`
* Follow **atomic design** when applicable

---

## 🌐 i18n Rules

* All text must use translation keys
* Example: `t('landing.header.title')` instead of raw strings
* Fallback language: English

---

## 🧪 Testing & Code Quality

* Test with **Jest + React Testing Library**
* Place tests in `/tests`
* Run `npm run test` or `test:coverage`
* Use ESLint (`npm run lint`) and Prettier (`npm run format`)

---

## 🚀 Deployment

* Preferred: **Vercel**
* Alternatives: Netlify, AWS Amplify

---

## 🧠 AI Behavior Preferences (Trae)

* Output code in TypeScript using Tailwind CSS classes
* Automatically wrap components with i18n when using text
* Prefer `next/image`, `use client` when required
* Avoid class components and styled-components
* Do **not** suggest mobile responsiveness or media queries
