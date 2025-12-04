# Stefan Schönwälder - Quality Management Consulting Website

Modern, animated consulting website built with Next.js, Framer Motion, and Tailwind CSS.

## 🎨 Design Features

- Dark theme with blue/cyan gradient accents
- Smooth scroll animations (Framer Motion)
- Interactive hover effects
- Glassmorphism design elements
- Responsive mobile-first layout
- Typing animation in hero section
- Animated background elements

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open browser:**
```
http://localhost:3000
```

## 📝 Content Customization

### 1. Update Contact Information

Edit `components/Contact.jsx` and `components/Footer.jsx`:

```javascript
// Replace placeholders:
your.email@example.com → your real email
https://calendly.com/yourlink → your Calendly link
https://linkedin.com/in/yourprofile → your LinkedIn profile
```

### 2. Add Your Photo

1. Add your professional photo to `public/` folder
2. Name it `profile.jpg` or `profile.png`
3. Update Hero component if needed

### 3. Customize Colors (Optional)

Edit `tailwind.config.js`:

```javascript
colors: {
  'dark-navy': '#0A0E27',      // Background
  'electric-blue': '#00D4FF',  // Primary accent
  'cyan-bright': '#00FFF5',    // Secondary accent
}
```

### 4. Update Content

All content is in components:
- `Hero.jsx` - Main headline and CTA
- `ForWho.jsx` - Target audience
- `Services.jsx` - Your services
- `Expertise.jsx` - Your experience
- `CaseStudy.jsx` - Example project
- `About.jsx` - Working style
- `Contact.jsx` - Contact form

## 🚢 Deployment

### Deploy to Vercel (Recommended - Free)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Follow prompts to connect your project**

4. **Get your live URL** (e.g., `your-site.vercel.app`)

### Custom Domain

1. Buy domain (e.g., from Namecheap, Google Domains)
2. In Vercel dashboard: Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

## 📁 Project Structure

```
stefan-qm-consulting/
├── components/
│   ├── Hero.jsx              # Landing section
│   ├── ForWho.jsx            # Target clients
│   ├── Services.jsx          # Service offerings
│   ├── Expertise.jsx         # Experience timeline
│   ├── CaseStudy.jsx         # Example project
│   ├── About.jsx             # Working style
│   ├── Contact.jsx           # Contact section
│   ├── Navigation.jsx        # Sticky nav bar
│   └── Footer.jsx            # Footer
├── pages/
│   ├── index.js              # Main page
│   └── _app.js               # App wrapper
├── styles/
│   └── globals.css           # Global styles + animations
├── public/
│   └── (your images here)
├── package.json
├── tailwind.config.js        # Tailwind configuration
├── next.config.js            # Next.js configuration
└── README.md                 # This file
```

## 🎯 SEO Optimization

Add meta tags in `pages/index.js`:

```javascript
import Head from 'next/head';

<Head>
  <title>Stefan Schönwälder - Quality Management Consultant</title>
  <meta name="description" content="QM-Berater für hochregulierte Industrien" />
  <meta property="og:title" content="Stefan Schönwälder QM Consulting" />
</Head>
```

## 🔧 Troubleshooting

### Port already in use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Build errors

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run dev
```

## 📱 Mobile Optimization

The site is fully responsive. Test on:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

Use Chrome DevTools to test different screen sizes.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📊 Performance

Current build optimizations:
- ✅ Image optimization (Next.js)
- ✅ Code splitting (automatic)
- ✅ CSS purging (Tailwind)
- ✅ Lazy loading (Framer Motion)

Expected Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## 🔐 Environment Variables (Optional)

Create `.env.local` for sensitive data:

```
NEXT_PUBLIC_CALENDLY_URL=your_calendly_link
NEXT_PUBLIC_EMAIL=your_email
```

Then use in components:
```javascript
process.env.NEXT_PUBLIC_EMAIL
```

## 📄 License

Personal project - all rights reserved.

## 🤝 Support

For questions or issues:
- Email: your.email@example.com
- LinkedIn: Stefan Schönwälder

---

**Built with:**
- [Next.js 14](https://nextjs.org/)
- [Framer Motion 10](https://www.framer.com/motion/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [React 18](https://react.dev/)

**Deployed on:**
- [Vercel](https://vercel.com/)
