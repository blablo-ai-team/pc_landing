# BlaBlo Landing Page

A modern, production-ready landing page for BlaBlo - an innovative English speaking practice app built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features & Technologies

- **Framework**: Next.js 15 with App Router & React 19
- **Language**: TypeScript for complete type safety
- **Styling**: Tailwind CSS v4 with responsive design system
- **Animation**: Framer Motion for smooth micro-interactions
- **Charts**: Recharts for data visualization (speaking progress)
- **Icons**: Heroicons, React Icons, and custom SVGs
- **Testing**: Jest + Testing Library + Playwright (visual testing)
- **Code Quality**: ESLint + Prettier with Next.js config
- **Performance**: Optimized images, lazy loading, static export ready

## 🎨 Design System

### Color Palette
```css
:root {
  --primary: #001541;          /* Navy blue */
  --accent: #EE33DF;           /* Pink/Magenta */
  --accent-light: #FDD4FA;     /* Light pink */
  --blue: #2249D1;             /* Bright blue */
  --blue-light: #ACBBF2;       /* Light blue */
  --green: #60FFC3;            /* Mint green */
  --green-light: #E4FFF5;      /* Light mint */
  --orange: #FFAD2A;           /* Orange */
  --yellow-light: #FFF3CF;     /* Light yellow */
  --navy: #00196F;             /* Deep navy */
  --gray-light: #EAE9E6;       /* Light gray */
  --violet: #5B4BE9;           /* Purple */
  --violet-light: #A6A1FA;     /* Light purple */
  --red: #D90E48;              /* Red */
}
```

### Typography
- **Primary**: Bricolage Grotesque (headings, display text)
- **Secondary**: Inter (body text, UI elements)

### Responsive Background System
```css
/* Mobile-first approach */
--section-bg: #EEEFF7;        /* Light gray on mobile */

@media (min-width: 768px) {
  --section-bg: #FFFFFF;       /* White on desktop */
}
```

## 📁 Project Architecture

```
/app                    # Next.js App Router
  ├── layout.tsx        # Root layout with fonts & SEO
  ├── page.tsx          # Main landing page with all sections
  └── globals.css       # Global styles & CSS variables

/components
  ├── common/           # Reusable UI components
  │   ├── AppDownload.tsx         # App store download buttons & QR codes
  │   ├── AppDownloadModal.tsx    # Modal for app download
  │   ├── Button.tsx              # Styled button components
  │   ├── Card.tsx               # Card with hover effects
  │   ├── Header.tsx             # Sticky navigation header
  │   ├── SocalButton.tsx        # Social media buttons
  │   └── SpeakingChart.tsx      # Speaking progress chart (Recharts)
  └── sections/         # Landing page sections
      ├── HeroSection.tsx             # Hero with headline & app download
      ├── BlabloForYouSection.tsx     # Chat interface demo & job marquee
      ├── SpeakingProgressSection.tsx # Speaking progress analytics
      ├── FeaturesSection.tsx         # 4 main features with time tags
      ├── KazienSection.tsx           # Kaizen methodology explanation
      ├── TestimonialsSection.tsx     # User testimonials carousel
      ├── FreeAppSection.tsx          # Free app promotion
      ├── GameModeSection.tsx         # Coming features preview
      └── FooterSection.tsx           # Footer with social links

/data                   # Content data & interfaces
  ├── hero.ts          # Hero section content & image data
  ├── features.ts      # Features cards configuration
  ├── blabloForYou.ts  # Chat messages & job titles
  ├── category.ts      # Category/classification data
  └── flashcard.ts     # Flashcard content data

/public                 # Static assets
  ├── images/          # Optimized images (WebP preferred)
  │   ├── herosection/   # Hero section images
  │   ├── features/      # Feature illustrations
  │   ├── speaking/      # Speaking progress visuals
  │   ├── learning/      # Learning interface screenshots
  │   └── kaizen/        # Kaizen section graphics
  └── icons/           # SVG icons & decorative elements

/tests                  # Testing suites
  ├── visual/          # Playwright visual regression tests
  └── *.test.tsx       # Jest unit tests for components

/utils                  # Utility functions
  └── cn.ts           # Tailwind class merger utility
```

## 🎯 Landing Page Sections

### 1. **Hero Section** (`HeroSection.tsx`)
- Headline with gradient text and decorative stars
- Responsive hero images with staggered animations
- App download buttons and call-to-action
- Mobile-first responsive design

### 2. **BlaBlo For You** (`BlabloForYouSection.tsx`)
- Left panel: Chat conversation with character "Hiro"
- Right panel: AI assistant chat interface with phone screenshots
- Bottom: Animated job titles marquee (4 rows, alternating directions)
- Demonstrates personalized learning approach

### 3. **Speaking Progress** (`SpeakingProgressSection.tsx`)
- Analytics showcase: "1 hour 48 minutes in first week"
- Interactive chart with Recharts library
- Left card: Character introduction with Hiro
- Right card: Speaking progress visualization

### 4. **Features Section** (`FeaturesSection.tsx`)
- 4 main features in responsive grid (1-2-4 columns)
- Time-based tags (Morning, Mid-day, Before bedtime, Later)
- Status indicators (Available/Launching soon)
- 3D tilt hover effects with Framer Motion

### 5. **Kaizen Section** (`KazienSection.tsx`)
- Japanese philosophy explanation with 3-step process
- Interactive timeline chart with growing trees visualization
- Left: Methodology explanation with connected dots
- Right: Progress chart with custom SVG elements

### 6. **Testimonials** (`TestimonialsSection.tsx`)
- Mobile: Touch-swipeable carousel with dots indicator
- Desktop: 2-row grid layout (4 + 3 testimonials)
- Real user testimonials with profile images
- Smooth animations and hover effects

### 7. **Free App Section** (`FreeAppSection.tsx`)
- Large gradient "Free" text with decorative stars
- App download component with QR codes
- Call-to-action for free trial

### 8. **Game Mode Preview** (`GameModeSection.tsx`)
- Coming features showcase with animated cards
- Feature roadmap: Role play, Flashcards, Speed challenge
- Social media follow buttons

### 9. **Footer Section** (`FooterSection.tsx`)
- Brand banner with logo and tagline
- Social media links with custom styling
- Final app download section
- Copyright information

## 🛠️ Installation & Setup

1. **Clone and install dependencies:**
```bash
git clone <repository-url>
cd blablo_landing
npm install
```

2. **Development server:**
```bash
npm run dev
# Opens at http://localhost:3000
```

3. **Build for production:**
```bash
npm run build
npm run start
```

4. **Static export (for Nginx deployment):**
```bash
# Add to next.config.ts:
# output: 'export'
npm run build
# Deploy /out folder to your server
```

## 📜 Available Scripts

### Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - TypeScript type checking

### Testing
- `npm run test` - Run Jest unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:visual` - Run Playwright visual regression tests
- `npm run test:visual:ui` - Run visual tests with UI
- `npm run test:visual:update` - Update visual test snapshots

## 🎯 Key Features & Implementations

### Responsive Design System
- **Mobile-first approach** with breakpoint-specific optimizations
- **Dynamic background colors**: Light gray on mobile, white on desktop
- **Responsive typography** with container queries (@container)
- **Touch-optimized interactions** for mobile devices

### Performance Optimizations
- **Next.js Image component** with lazy loading and WebP support
- **Framer Motion animations** with viewport triggers and reduced motion
- **Code splitting** with dynamic imports where appropriate
- **Static export support** for CDN deployment

### Advanced Features
- **3D tilt effects** on feature cards with perspective transforms
- **Interactive charts** with Recharts for data visualization
- **Smooth marquee animations** with CSS keyframes
- **Modal system** for app download with backdrop blur
- **Sticky header** with iOS Safari compatibility

### Accessibility & UX
- **Semantic HTML** structure with proper heading hierarchy
- **ARIA labels** for interactive elements
- **Keyboard navigation** support
- **Focus indicators** for all interactive elements
- **Screen reader optimized** content structure

## 🧪 Testing Strategy

### Unit Testing (Jest + Testing Library)
- Component rendering tests
- User interaction testing
- Accessibility testing
- Props and state validation

### Visual Regression Testing (Playwright)
- Cross-browser compatibility (Chrome, Firefox, Safari, WebKit)
- Multi-device testing (Mobile, Tablet, Desktop, Large Desktop)
- Responsive behavior validation
- Animation and interaction testing

### Test Coverage Areas
- Header sticky behavior across devices
- Background color switching (mobile vs desktop)
- Component responsiveness at all breakpoints
- Interactive elements functionality

## 🎯 Development Guidelines

### Component Development
1. **Use functional components** with TypeScript interfaces
2. **Mobile-first responsive design** with Tailwind breakpoints
3. **Semantic HTML elements** (`<main>`, `<section>`, `<article>`, `<nav>`)
4. **Proper ARIA labels** for accessibility compliance
5. **Next.js Image component** for all images with optimization

### Styling Standards
1. **Tailwind CSS utility classes** with consistent naming
2. **CSS custom properties** for theming and responsive values
3. **Container queries** for component-level responsive design
4. **Framer Motion** for animations with performance considerations

### Data Management
1. **Centralized data files** in `/data` directory
2. **TypeScript interfaces** for all data structures
3. **Reusable content objects** for easy maintenance
4. **Separation of content and presentation logic

### Performance Best Practices
1. **Image optimization** with Next.js Image component
2. **Lazy loading** for off-screen content
3. **Animation performance** with transform properties
4. **Code splitting** for large components

## 🚀 Deployment

### Static Export (Recommended for Nginx)
```bash
# 1. Configure next.config.ts
const nextConfig = {
  output: 'export'
}

# 2. Build static files
npm run build

# 3. Deploy /out folder to your server
# Point Nginx to serve from /out directory
```

### Platform Deployment
The app is ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify** (with build optimizations)
- **AWS Amplify** (with custom build settings)
- **Custom servers** via static export

### Build Optimizations
- **Image formats**: WebP with fallbacks
- **Bundle analysis**: Built-in Next.js analyzer
- **Static generation**: Pre-rendered HTML for SEO
- **Asset optimization**: Automatic compression and minification

## 📊 Analytics & Metrics

### Core Web Vitals Optimizations
- **Largest Contentful Paint (LCP)**: Optimized with image preloading
- **First Input Delay (FID)**: Minimized with efficient event handlers
- **Cumulative Layout Shift (CLS)**: Prevented with proper image dimensions

### SEO Optimizations
- **Meta tags**: Comprehensive Open Graph and Twitter Card support
- **Structured data**: JSON-LD for better search engine understanding
- **Sitemap generation**: Automatic with Next.js
- **Robots.txt**: Configured for search engine crawling

## 🔧 Configuration Files

### Key Configuration
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS customization
- `tsconfig.json` - TypeScript configuration
- `jest.config.js` - Jest testing configuration
- `playwright.config.ts` - Playwright visual testing setup
- `eslint.config.mjs` - ESLint configuration

### Environment Setup
- **Node.js**: Version 18+ required
- **Package Manager**: npm or yarn
- **Browser Support**: Modern browsers (ES2020+)
- **Mobile Support**: iOS Safari 12+, Android Chrome 80+

## 🤝 Contributing

### Development Workflow
1. **Feature branches** from main
2. **TypeScript strict mode** compliance
3. **Testing requirements** for new components
4. **Visual regression tests** for UI changes
5. **Performance benchmarks** for animations

### Code Review Checklist
- [ ] TypeScript interfaces defined
- [ ] Responsive design tested
- [ ] Accessibility compliance verified
- [ ] Performance impact assessed
- [ ] Visual tests updated
- [ ] Documentation updated

## 📝 License & Credits

**© 2025 BlaBlo, Inc. All rights reserved**

### Built With
- [Next.js 15](https://nextjs.org/) - React framework
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Recharts](https://recharts.org/) - Chart library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Playwright](https://playwright.dev/) - E2E testing
- [Jest](https://jestjs.io/) - Unit testing

### Design System
- **Fonts**: Bricolage Grotesque, Inter
- **Icons**: Heroicons, React Icons, Custom SVGs
- **Images**: Optimized WebP format with Next.js Image
- **Animations**: Hardware-accelerated transforms
