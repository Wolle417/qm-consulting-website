/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark Theme Base (PRESERVED from V1)
        'dark-navy': '#0A0E27',
        'dark-bg': '#0F1419',
        
        // QCore V2 Accent Colors (Navy Blue, NOT Electric Blue)
        'qcore-navy': '#1E3A5F',
        'qcore-blue': '#4A90E2',
        'qcore-slate': '#6B7F9E',
        
        // Text Colors for Dark Theme
        'text-light': '#E0E0E0',
        'text-muted': '#9E9E9E',
        'text-dim': '#6B6B6B',
        
        // Border Colors for Dark Theme
        'border-dark': 'rgba(255, 255, 255, 0.1)',
        'border-subtle': 'rgba(255, 255, 255, 0.05)',
        
        // REMOVED: Electric Blue & Cyan
        // 'electric-blue': '#00D4FF',
        // 'cyan-bright': '#00FFF5',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0A0E27 0%, #1E3A5F 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
