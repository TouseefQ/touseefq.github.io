# Touseef Qamar - Portfolio & Resume

A modern, responsive portfolio website showcasing my work as a Full-Stack Developer, built with Jekyll 4.x and deployed on GitHub Pages.

🔗 **Live Site:** [touseefq.github.io](https://touseefq.github.io)

## ✨ Features

- **🌓 Dark/Light Theme Toggle** - Seamless theme switching with localStorage persistence
- **📱 Fully Responsive** - Mobile-first design optimized for all devices (320px+)
- **♿ Accessible** - WCAG 2.1 AA compliant with keyboard navigation and focus indicators
- **📧 Working Contact Form** - Integrated with Formspree for email submissions
- **🎨 Smooth Animations** - Scroll-triggered animations using Intersection Observer API
- **🚀 SEO Optimized** - Open Graph tags, Twitter Cards, and sitemap for better discoverability
- **⚡ Fast Performance** - Static site generation with Jekyll for optimal loading speed
- **📄 Resume Download** - Direct PDF download functionality

## 🛠 Technology Stack

### Core
- **Jekyll 4.3** - Static site generator
- **Ruby 3.3** - Runtime environment
- **SCSS/CSS3** - Styling with CSS variables for theming
- **Vanilla JavaScript** - No frameworks, pure JS for interactivity

### Frontend
- **HTML5** - Semantic markup
- **CSS Variables** - Dynamic theming system
- **Intersection Observer API** - Scroll animations
- **Formspree** - Contact form backend

### Build & Deployment
- **GitHub Pages** - Hosting platform
- **GitHub Actions** - CI/CD pipeline for automatic deployment
- **Git** - Version control

### Plugins
- `jekyll-seo-tag` - SEO meta tag generation
- `jekyll-sitemap` - Automatic sitemap creation

## 📁 Project Structure

```
GitProfile/
├── _data/              # Dynamic content (YAML)
│   ├── projects.yml    # Portfolio projects
│   ├── experience.yml  # Work experience & education
│   ├── skills.yml      # Technical skills
│   └── social.yml      # Social media links
├── _includes/          # Reusable HTML components
│   ├── header.html     # Navigation bar
│   ├── hero.html       # Hero section
│   ├── about.html      # About section
│   ├── skills.html     # Skills grid
│   ├── projects.html   # Projects showcase
│   ├── experience.html # Timeline
│   ├── contact.html    # Contact form
│   └── footer.html     # Footer
├── _layouts/           # Page templates
│   └── default.html    # Master layout
├── _sass/              # SCSS stylesheets
│   ├── main.scss       # Main entry point
│   ├── _variables.scss # Design tokens
│   ├── _theme.scss     # Theme variables
│   ├── _responsive.scss# Media queries
│   └── ...             # Component styles
├── assets/
│   ├── css/           # Compiled CSS
│   ├── js/            # JavaScript modules
│   └── images/        # Images & photos
├── _config.yml        # Jekyll configuration
├── index.html         # Homepage
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites

- Ruby 3.3 or higher
- Bundler gem
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TouseefQ/touseefq.github.io.git
cd touseefq.github.io
```

2. Install dependencies:
```bash
bundle install
```

3. Run the development server:
```bash
bundle exec jekyll serve
```

4. Open your browser and visit:
```
http://localhost:4000
```

### Building for Production

```bash
bundle exec jekyll build
```

The static site will be generated in the `_site/` directory.

## 📝 Customization

### Update Content

- **Projects**: Edit `_data/projects.yml`
- **Experience**: Edit `_data/experience.yml`
- **Skills**: Edit `_data/skills.yml`
- **Social Links**: Edit `_data/social.yml`
- **About Text**: Edit `_includes/about.html`

### Modify Styles

- **Theme Colors**: Edit `_sass/_theme.scss`
- **Design Tokens**: Edit `_sass/_variables.scss`
- **Component Styles**: Edit respective files in `_sass/`

### Update Images

Replace images in `assets/images/`:
- `profile.png` - Profile photo
- `workspace.jpg` - Workspace photo
- `favicon.ico` - Browser favicon

## 🌐 Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

### Manual Deployment

1. Commit your changes:
```bash
git add .
git commit -m "Your commit message"
```

2. Push to GitHub:
```bash
git push origin main
```

3. GitHub Actions will automatically build and deploy the site.

## 📊 Site Sections

1. **Hero** - Welcome section with profile image and call-to-action buttons
2. **About** - Professional biography and background
3. **Skills** - Technical skills organized by category
4. **Projects** - Portfolio of GitHub projects with descriptions
5. **Experience** - Work history and education timeline
6. **Contact** - Contact form and social media links

## 🎨 Features in Detail

### Dark/Light Theme
- Automatic detection of system preference
- Manual toggle with persistent localStorage
- Smooth transitions between themes
- No flash of unstyled content (FOUC)

### Responsive Design
- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px, 1440px
- Optimized layouts for all screen sizes
- Touch-friendly interactive elements

### Accessibility
- WCAG 2.1 AA compliant
- 17.4:1 contrast ratio
- Keyboard navigation support
- Focus indicators on all interactive elements
- Semantic HTML structure
- ARIA labels where needed

## 📄 License

This project is open source and available for personal and educational use.

## 📬 Contact

- **Email**: touseefqamar1@gmail.com
- **GitHub**: [@TouseefQ](https://github.com/TouseefQ)
- **LinkedIn**: [Touseef Qamar](https://linkedin.com/in/touseefqamar)
- **Twitter**: [@touseef_qamar](https://twitter.com/touseef_qamar)

---

Built with ❤️ using Jekyll | Deployed on GitHub Pages