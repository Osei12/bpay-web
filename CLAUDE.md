# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **BPay Mobile Web** project - a Next.js-based landing page for the BPay mobile financial management application. BPay is a comprehensive mobile financial platform designed specifically for students, featuring SEVIS fee payments, loan applications, document management, and other student-focused financial services.

## Technology Stack

- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **React**: 19.1.0
- **Build Tool**: Next.js with Turbopack (development and production)

## Development Commands

```bash
# Start development server with Turbopack
pnpm dev

# Build for production with Turbopack
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm run lint
```

## Project Structure

This is a standard Next.js 15 App Router project:

```
bpay-mobile-web/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page component
│   ├── globals.css        # Global styles
│   └── favicon.ico        # App favicon
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── eslint.config.mjs      # ESLint configuration
├── postcss.config.mjs     # PostCSS configuration
├── package.json           # Dependencies and scripts
└── BPAY_*.txt            # Project documentation files
```

## Architecture Notes

### Brand Identity
- **Primary Color**: #8B5CF6 (Purple-500)
- **Secondary Color**: #26102C (Dark purple)
- **Theme**: Dark theme with purple gradient accents
- **Typography**: Geist font family (included via Next.js fonts)

### Target Features for Landing Page
Based on the project documentation, the landing page should showcase:

1. **SEVIS Fee Payments** - Primary feature for international students
2. **Digital Wallet Management** - Multi-currency support (GHS, USD)
3. **Student Loan Applications** - Streamlined loan processes
4. **Document Management** - KYC verification and secure storage
5. **Interview Booking** - Visa appointment scheduling
6. **Educational Resources** - Scholarships and financial literacy

### Design Requirements
- Mobile-first responsive design
- Modern financial-tech aesthetic
- Professional yet approachable for students
- Clean minimalist layout with purple gradients
- Glassmorphism effects and subtle animations

## Configuration Details

### TypeScript Configuration
- Strict mode enabled
- Path aliases: `@/*` maps to project root
- Next.js plugin integration

### ESLint Configuration
- Extends Next.js core web vitals and TypeScript configs
- Ignores build directories and generated files

### Next.js Configuration
- Turbopack enabled for both development and production builds
- Default configuration with minimal customization

## Development Guidelines

When working on this project:

1. **Follow the brand guidelines** outlined in `BPAY_LANDING_PAGE_PROMPT.txt`
2. **Use TypeScript strictly** - all components should be properly typed
3. **Implement responsive design** - mobile-first approach
4. **Maintain performance** - optimize for Core Web Vitals
5. **Follow accessibility standards** - WCAG 2.1 AA compliance
6. **Use Tailwind CSS** for styling with the established color scheme

## Key Project Files

- `BPAY_PROJECT_DOCUMENTATION.txt` - Comprehensive mobile app documentation
- `BPAY_LANDING_PAGE_PROMPT.txt` - Detailed landing page requirements and design specifications
- `app/page.tsx` - Main landing page component (currently default Next.js starter)
- `app/layout.tsx` - Root layout with metadata and font configuration

## Important Notes

- This is the **web landing page** for the BPay mobile app, not the mobile app itself
- The mobile app is built with React Native/Expo (documented separately)
- Focus should be on conversion optimization and showcasing mobile app features
- All financial service features are handled by the mobile app, not this web interface