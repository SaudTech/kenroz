# Design Document

## Overview

The Kenroz website enhancement will transform the existing Next.js application into a professional, SEO-optimized, and mobile-responsive corporate website. The design leverages the existing tech stack (Next.js 15, React 19, Tailwind CSS 4, Framer Motion) while implementing a cohesive brand identity using the company's color scheme of reddish (#e31b25), white, black, and light yellow (#fffde7).

The design focuses on creating a trustworthy, modern web presence that effectively communicates Kenroz's expertise in IT solutions while providing an optimal user experience across all devices.

## Architecture

### Technology Stack
- **Framework**: Next.js 15 with App Router
- **UI Library**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with custom CSS variables
- **Animations**: Framer Motion for smooth interactions
- **Components**: Radix UI primitives for accessibility
- **Icons**: Lucide React for consistent iconography
- **Font**: Noto Serif for professional typography

### Project Structure
```
src/
├── app/
│   ├── (pages)/
│   │   ├── about/
│   │   ├── services/
│   │   ├── products/
│   │   └── contact/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx (homepage)
├── components/
│   ├── ui/ (reusable UI components)
│   ├── sections/ (page sections)
│   └── layout/ (layout components)
└── lib/
    ├── utils.ts
    └── constants.ts
```

## Components and Interfaces

### Core Layout Components

#### 1. Enhanced Navigation Bar
- **Purpose**: Professional navigation with company branding
- **Features**: 
  - Responsive hamburger menu for mobile
  - Smooth scroll navigation
  - Active state indicators
  - Company logo integration
- **Props Interface**:
```typescript
interface NavbarProps {
  className?: string;
  transparent?: boolean;
}
```

#### 2. Hero Section
- **Purpose**: Compelling first impression with clear value proposition
- **Features**:
  - Animated text with Framer Motion
  - Call-to-action buttons
  - Background imagery from public folder
  - Responsive design
- **Props Interface**:
```typescript
interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}
```

#### 3. Services Grid
- **Purpose**: Showcase all six services with visual hierarchy
- **Features**:
  - Card-based layout
  - Hover animations
  - Icon integration
  - Expandable descriptions
- **Props Interface**:
```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
  image?: string;
}
```

#### 4. Products Showcase
- **Purpose**: Display five products with detailed information
- **Features**:
  - Image carousel/gallery
  - Tabbed interface for different products
  - Feature highlights
  - Integration with public folder images
- **Props Interface**:
```typescript
interface ProductShowcaseProps {
  products: Product[];
  defaultProduct?: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  category: string;
}
```

#### 5. Mobile-Optimized Content Cards
- **Purpose**: Implement "read more" functionality for mobile
- **Features**:
  - Text truncation after 3 lines
  - Smooth expand/collapse animation
  - Touch-friendly interactions
- **Props Interface**:
```typescript
interface ExpandableContentProps {
  content: string;
  maxLines?: number;
  className?: string;
}
```

### SEO Components

#### 1. Meta Tags Manager
- **Purpose**: Dynamic SEO optimization for all pages
- **Features**:
  - Page-specific meta descriptions
  - Open Graph tags
  - Twitter Card support
  - Structured data markup
- **Props Interface**:
```typescript
interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}
```

#### 2. Structured Data Component
- **Purpose**: Rich snippets for search engines
- **Features**:
  - Organization schema
  - Service schema
  - Local business markup
- **Props Interface**:
```typescript
interface StructuredDataProps {
  type: 'organization' | 'service' | 'product';
  data: Record<string, any>;
}
```

## Data Models

### Company Information Model
```typescript
interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  mission: string;
  values: string[];
  contact: ContactInfo;
  social: SocialLinks;
}

interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  hours: string;
}

interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
}
```

### Service Model
```typescript
interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  icon: string;
  image?: string;
  category: ServiceCategory;
}

enum ServiceCategory {
  DEVELOPMENT = 'development',
  CONSULTING = 'consulting',
  CLOUD = 'cloud',
  MARKETING = 'marketing'
}
```

### Product Model
```typescript
interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  benefits: string[];
  targetAudience: string[];
  images: string[];
  specifications?: Record<string, string>;
}

enum ProductCategory {
  HRMS = 'hrms',
  INSURANCE = 'insurance',
  LMS = 'lms',
  PAYROLL = 'payroll',
  TAXATION = 'taxation'
}
```

## Error Handling

### Client-Side Error Boundaries
- **Image Loading Errors**: Fallback to placeholder images
- **Animation Failures**: Graceful degradation without animations
- **Form Submission Errors**: User-friendly error messages
- **Network Errors**: Retry mechanisms and offline indicators

### Performance Optimization
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Dynamic imports for heavy components
- **Caching Strategy**: Static generation for content pages
- **Bundle Analysis**: Regular monitoring of bundle size

## Testing Strategy

### Unit Testing
- **Component Testing**: React Testing Library for UI components
- **Utility Functions**: Jest for business logic
- **Accessibility Testing**: Automated a11y checks

### Integration Testing
- **Page Rendering**: Full page component testing
- **Navigation Flow**: User journey testing
- **Form Functionality**: Contact form submission testing

### Performance Testing
- **Core Web Vitals**: Lighthouse CI integration
- **Mobile Performance**: Device-specific testing
- **SEO Validation**: Meta tag and structured data verification

### Cross-Browser Testing
- **Desktop Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Responsive Design**: Multiple viewport sizes

## Design System

### Color Palette
```css
:root {
  --primary-red: #e31b25;
  --secondary-red: #7e141c;
  --light-yellow: #fffde7;
  --pure-white: #ffffff;
  --pure-black: #000000;
  --gray-100: #f5f5f5;
  --gray-800: #1a1a1a;
}
```

### Typography Scale
- **Headings**: Noto Serif (existing)
- **Body Text**: System font stack for readability
- **Scale**: 1.25 ratio (16px, 20px, 25px, 31px, 39px, 49px)

### Spacing System
- **Base Unit**: 4px
- **Scale**: 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px

### Component Variants
- **Buttons**: Primary (red), Secondary (outlined), Ghost
- **Cards**: Elevated, Flat, Interactive
- **Inputs**: Standard, Error, Success states

## Mobile-First Responsive Design

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### Mobile Optimizations
- **Touch Targets**: Minimum 44px for interactive elements
- **Content Strategy**: Progressive disclosure with "read more"
- **Navigation**: Collapsible hamburger menu
- **Images**: Responsive with art direction
- **Performance**: Optimized for 3G networks

### Progressive Enhancement
- **Base Experience**: Functional without JavaScript
- **Enhanced Experience**: Animations and interactions with JS
- **Offline Support**: Service worker for basic caching

JUST 2 TASKS ONLY. DO everything in just 2 tasks