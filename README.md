# Project PITA – Development Progress Log

This document provides a comprehensive overview of the development process, milestones, and technical decisions for the Pita Restaurant web application. The project transitioned from a static HTML/CSS site to a dynamic React-based application, with a focus on improved user experience and maintainability.

---

## Project Overview

**Project Name:** PITA Restaurant Web Application  
**Location:** Dubai, UAE  
**Cuisine:** Filipino and Seafood  
**Objective:** Develop a modern, responsive, and maintainable website for Pita Restaurant, transitioning from a static HTML/CSS site to a React-powered web application.

---

## Development Timeline & Milestones

### Week 1: Initial Static Site
- Designed and developed a static, responsive website using HTML and CSS.
- Ensured basic mobile responsiveness and cross-browser compatibility.

### Week 2: React Conversion Kickoff
- Initiated the migration to React for improved scalability and maintainability.
- Set up project structure using `create-next-app` with TypeScript.
- Installed Tailwind CSS for utility-first styling.

### Week 3: Core Features Implementation
- Rebuilt navigation bar with mobile menu toggle using Headless UI.
- Developed automated image slider with 4s transitions.
- Implemented dynamic product display with horizontal scrolling.
- Created interactive cart system with quantity adjustments and local state management.

### Week 4: Advanced Features & Polish
- Added order tracking interface with status updates.
- Integrated category-based menu filtering.
- Implemented user authentication flows (login, order history).
- Conducted UI/UX refinements and bug fixes.

### Week 5: Testing & Deployment
- Performed end-to-end testing across devices and browsers.
- Deployed application to Render for public access.
- Prepared documentation and handover materials.

---

## Technical Stack

- **Framework:** React 18, Next.js 13 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Component Libraries:** Shadcn
- **State Management:** React Context API

---

## Key Features

- Responsive navigation bar with mobile menu toggle
- Automated image slider (4s transitions)
- Dynamic product display with horizontal scrolling
- Interactive cart system with quantity controls
- Order tracking interface (status updates)
- Category-based menu filtering
- User authentication (login, order history)
- Fully responsive design

---

## Project Structure

/src
├── app
│ ├── (auth)
│ ├── cart
│ ├── menu
│ │ └── [category]
│ ├── orders
│ └── products
│ └── [id]
├── components
│ ├── CartIcon.tsx
│ ├── CategoryList.tsx
│ └── ProductCard.tsx
├── public
│ ├── images/
│ └── temp/
└── styles
└── globals.css

---

## Installation & Setup

1. **Clone the repository:**
git clone <repo-url>
cd project-pita-restaurant

2. **Install dependencies:**
npm install

3. **Run the development server:**
npm run dev

4. **Build for production:**
npm run build



## Deployment

- The app is currently deployed on Render.
- Can be deployed to Vercel or Netlify with minimal configuration changes.

---

## Lessons Learned & Next Steps

- Migrating from static HTML/CSS to React/Next.js significantly improved maintainability and scalability.
- Tailwind CSS accelerated responsive design and UI consistency.
- Future enhancements may include backend integration for real-time order management and improved authentication.

---

## Credits

- **Development Team:** Eana Tagana, Nathan Bartolo, Hnannah Soliao, Kenlee Babordo, Princess Navarette
- **Client:** Pita Restaurant, Dubai

---

*This log serves as both a technical README and a historical record of the project’s development process, decisions, and outcomes.*
