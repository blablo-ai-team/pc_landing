# Copilot Instructions for Blablo Landing Page

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a modern Next.js 15 landing page project built with production-ready standards including:

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom theme
- **Animation**: Framer Motion
- **Icons**: Heroicons/React Icons
- **i18n**: Multi-language support (EN/VI)
- **Testing**: Jest + Testing Library
- **Code Quality**: ESLint + Prettier

## Code Standards
1. Use functional components with TypeScript
2. Follow mobile-first responsive design
3. Use semantic HTML elements (`<main>`, `<section>`, `<nav>`)
4. Implement proper ARIA labels for accessibility
5. Use Next.js Image component for optimized images
6. Components should be reusable and well-tested
7. Follow the established folder structure

## Folder Structure Guidelines
- `/app` - App Router pages and layouts
- `/components/common` - Reusable UI components  
- `/components/sections` - Landing page sections
- `/public/images` - Optimized images
- `/public/icons` - Local SVG icons
- `/locales` - Translation files
- `/utils` - Helper functions
- `/tests` - Unit tests

## Best Practices
- Use `next/image` for all images with lazy loading
- Implement proper SEO metadata
- Keep components small and focused
- Write tests for all components
- Use semantic HTML for better accessibility
- Follow Tailwind CSS naming conventions
