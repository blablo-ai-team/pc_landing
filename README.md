# Blablo Landing Page

A modern, production-ready landing page built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS v4 with custom theme
- **Animation**: Framer Motion for smooth interactions
- **Icons**: Heroicons and React Icons
- **Testing**: Jest + Testing Library
- **Code Quality**: ESLint + Prettier
- **i18n**: Multi-language support (EN/VI)
- **SEO**: Optimized metadata and performance

## 🎨 Color System

```typescript
const colors = {
  primary: '#001541',
  accent: '#EE33DF',
  'accent-light': '#FDD4FA',
  blue: '#2249D1',
  'blue-light': '#ACBBF2',
  green: '#60FFC3',
  'green-light': '#E4FFF5',
  orange: '#FFAD2A',
  'yellow-light': '#FFF3CF',
  navy: '#00196F',
  'gray-light': '#EAE9E6',
  violet: '#5B4BE9',
  'violet-light': '#A6A1FA',
  red: '#D90E48',
}
```

## 📁 Project Structure

```
/app                    # App Router pages and layouts
  ├── layout.tsx        # Root layout with SEO
  ├── page.tsx          # Landing page
  └── globals.css       # Global styles with custom theme
/components
  ├── common/           # Reusable UI components
  │   ├── Button.tsx    # Button with variants
  │   ├── Card.tsx      # Card with hover effects
  │   └── IconWrapper.tsx
  └── sections/         # Landing page sections
/locales
  ├── en/              # English translations
  └── vi/              # Vietnamese translations
/public
  ├── images/          # Optimized images
  └── icons/           # Local SVG icons
/utils
  ├── helpers.ts       # Utility functions & animations
  └── i18n.ts          # Internationalization helpers
/tests                 # Unit tests
```

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage

## 🎯 Development Guidelines

1. **Components**: Use functional components with TypeScript
2. **Styling**: Follow mobile-first responsive design
3. **Accessibility**: Use semantic HTML and ARIA labels
4. **Images**: Always use next/image for optimization
5. **Testing**: Write tests for all components
6. **i18n**: Use translation keys for all text content

## 🚀 Deployment

The app is ready for deployment on platforms like:
- Vercel (recommended)
- Netlify
- AWS Amplify

## 📝 License

© 2025 Blablo. All rights reserved.
