Vercel: https://vercel.com/jldelakwaa-4772s-projects/portfolio
Domain: portfolio-taupe-eight-38.vercel.app
# 🚀 Personal Portfolio

A modern, responsive portfolio website built with Next.js, showcasing my projects, skills, experience, and educational background. Features a clean design with smooth animations and an intuitive user interface.

## ✨ Features

- **🏠 Home Page**: Dynamic hero section with animated avatar and introduction
- **👨‍💻 About Page**: Comprehensive information including:
  - Professional bio
  - Work experience timeline
  - Educational background
  - Technical skills showcase
  - Certificates and certifications
- **💼 Projects Page**: Interactive project gallery with detailed descriptions
  - Academic projects and capstone work
  - Cybersecurity labs and simulations
  - Network engineering activities
  - GitHub integration for source code access
- **📧 Contact Page**: Easy-to-use contact form with personal information
- **📱 Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **🎨 Modern UI**: Built with Mantine UI components and Tailwind CSS
- **⚡ Performance**: Leveraging Next.js 15 with Turbopack for blazing-fast development

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [Mantine UI](https://mantine.dev/) v8
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Icons**: [Tabler Icons](https://tabler.io/icons)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Linting**: [ESLint](https://eslint.org/)

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jldelakwaa/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   └── app/
│       ├── _components/      # Reusable React components
│       │   ├── about/        # About page components
│       │   ├── contact/      # Contact page components
│       │   ├── home/         # Home page components
│       │   ├── projects/     # Projects page components
│       │   └── _common/      # Shared components
│       ├── _data/            # Static data (projects, skills, etc.)
│       ├── (home)/           # Home route group
│       ├── (nav)/            # Navigation route group
│       │   ├── about/
│       │   ├── contact/
│       │   └── projects/
│       ├── layout.tsx        # Root layout
│       └── globals.css       # Global styles
├── public/                   # Static assets
│   ├── certificates/         # Certificate images
│   ├── projects/            # Project images and previews
│   └── school/              # School-related assets
└── ...config files
```

## 🎯 Key Sections

### Projects

The portfolio showcases various projects including:
- **Online Test Paper Checker**: Capstone project using Google Cloud Vision API for automated grading
- **Packet Tracer Labs**: Network topology design and simulation exercises
- **Cybersecurity Labs**: Security frameworks, threat analysis, and incident response activities

### Skills

Highlighting expertise in:
- Web Development (React, Next.js, TypeScript)
- Network Engineering (Cisco, Routing, Switching)
- Cybersecurity (SIEM, Threat Detection, Risk Management)
- Database Management (MySQL, SQL)
- Cloud Services (Google Cloud Vision API)

## 🔧 Development

### Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build production bundle with Turbopack
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Adding New Projects

Edit `src/app/_data/projectData.ts` to add new projects to your portfolio.

### Customization

- **Colors & Theme**: Modify Tailwind configuration in `postcss.config.mjs`
- **Fonts**: Update font imports in `app/layout.tsx`
- **Content**: Update data files in `src/app/_data/`

## 📄 License

This project is open source and available for personal use.

## 📞 Contact

Feel free to reach out through the contact form on the portfolio or connect with me on [GitHub](https://github.com/jldelakwaa).

---

Built with ❤️ using Next.js and modern web technologies
