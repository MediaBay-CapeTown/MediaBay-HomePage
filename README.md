# MediaBay - Customized Web Interfaces

A stunning, high-performance, fully responsive business website for MediaBay, a web design agency based in Cape Town, South Africa.

## 🌟 Features

### Core Functionality
- **Animated Loading Screen** - Smooth branded loading experience
- **Mobile-First Design** - Optimized for all devices and screen sizes
- **Progressive Web App (PWA)** - Installable with offline capabilities
- **Advanced Animations** - Smooth scroll-triggered and hover animations
- **Interactive Chatbot** - AI assistant with voice recognition support
- **Dynamic Quote Estimator** - Real-time pricing calculator in ZAR
- **Contact Form Integration** - Email integration with validation
- **Industry Template Selector** - Interactive filtering system
- **Testimonial Slider** - Swipeable case studies and reviews

### Technical Features
- **Service Worker** - Offline functionality and caching
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **SEO Optimized** - Meta tags, sitemap, and structured data
- **Accessibility** - WCAG compliant with keyboard navigation
- **Performance** - Optimized loading and smooth animations
- **Security** - Honeypot protection and input sanitization

## 🎨 Design System

### Color Scheme
- **Primary Color**: `#132541` (Dark Blue)
- **Accent Color**: `#E87A64` (Desert Sand)
- **Supporting Colors**: White, Light Gray, Medium Gray

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Layout
- **Container Max Width**: 1200px
- **Grid System**: CSS Grid and Flexbox
- **Spacing Scale**: 0.25rem to 4rem increments
- **Border Radius**: 0.25rem to 1rem scale

## 📱 Sections Overview

### 1. Loading Screen
- Animated MediaBay logo
- Progress indicator
- Smooth transition to main content

### 2. Hero Section
- Animated word reveals
- Floating visual elements
- Call-to-action buttons
- Parallax effects

### 3. Services Section
- Grid layout with 6 service cards
- Hover animations
- Service icons and descriptions
- Interactive elements

### 4. Portfolio Section
- Team photo showcase
- Company statistics
- Project filters by industry
- About MediaBay content

### 5. About Section
- Timeline of company journey
- Mission and vision statements
- Animated timeline items
- Company milestones

### 6. Testimonials & Case Studies
- Swipeable testimonial slider
- Client photos and quotes
- Expandable case study cards
- Navigation controls

### 7. Industry Selector
- Interactive template filtering
- Industry categories
- Template previews
- Pricing information

### 8. Quote Estimator
- Dynamic pricing calculator
- Page count selection
- Feature checkboxes
- Real-time price updates in ZAR

### 9. Contact Section
- Comprehensive contact form
- Form validation
- Email integration
- Contact information display

### 10. Footer
- Company information
- Social media links
- Newsletter subscription
- Legal links and copyright

## 🤖 Chatbot Features

### Capabilities
- **Voice Recognition** - Speech-to-text input
- **Natural Language Processing** - Understands user queries
- **Quick Actions** - Predefined response buttons
- **Service Information** - Detailed service explanations
- **Pricing Assistance** - Pricing information and quotes
- **Meeting Scheduling** - Contact form integration
- **Location Information** - Cape Town office details

### Supported Queries
- Pricing and quotes
- Service information
- Company location
- Meeting scheduling
- Portfolio inquiries
- Technology questions
- Support requests

## 🛠️ Technical Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Modern JavaScript features
- **Service Worker** - PWA functionality
- **Web APIs** - Speech Recognition, Intersection Observer

### Performance Optimizations
- **Lazy Loading** - Images and content
- **Code Splitting** - Modular JavaScript
- **Caching Strategy** - Service worker caching
- **Image Optimization** - WebP format support
- **Font Loading** - Optimized web font loading

### SEO & Accessibility
- **Meta Tags** - Open Graph and Twitter Cards
- **Structured Data** - Schema.org markup
- **Semantic HTML** - Proper heading hierarchy
- **ARIA Labels** - Screen reader support
- **Keyboard Navigation** - Full keyboard accessibility
- **Focus Management** - Proper focus indicators

## 📁 File Structure

```
mediabay-website/
├── index.html                 # Main HTML file
├── manifest.json             # PWA manifest
├── sw.js                     # Service worker
├── robots.txt                # SEO robots file
├── sitemap.xml               # XML sitemap
├── browserconfig.xml         # Windows tile config
├── offline.html              # Offline page
├── README.md                 # Documentation
├── assets/
│   ├── css/
│   │   ├── main.css          # Main styles
│   │   ├── animations.css    # Animation styles
│   │   └── responsive.css    # Responsive styles
│   ├── js/
│   │   ├── main.js           # Main JavaScript
│   │   ├── animations.js     # Animation logic
│   │   ├── chatbot.js        # Chatbot functionality
│   │   └── form-handler.js   # Form processing
│   ├── icons/                # App icons and favicons
│   └── images/               # Image assets
└── components/               # Reusable components
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Web server (for local development)
- Internet connection (for external resources)

### Installation
1. Clone or download the project files
2. Serve the files using a local web server
3. Open `index.html` in your browser

### Local Development
```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx http-server

# Using PHP (if installed)
php -S localhost:8000
```

### Deployment
1. Upload all files to your web server
2. Ensure HTTPS is enabled for PWA functionality
3. Update manifest.json with your domain
4. Configure email integration in form-handler.js
5. Set up analytics tracking (optional)

## 🔧 Customization

### Colors
Update CSS custom properties in `assets/css/main.css`:
```css
:root {
    --primary-color: #132541;
    --accent-color: #E87A64;
    /* Add your colors here */
}
```

### Content
- Update company information in `index.html`
- Modify service descriptions and pricing
- Replace placeholder images with actual content
- Update contact information and social links

### Functionality
- Configure email integration in `form-handler.js`
- Customize chatbot responses in `chatbot.js`
- Adjust animation timings in `animations.css`
- Modify PWA settings in `manifest.json`

## 📊 Performance Metrics

### Lighthouse Scores (Target)
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100
- **PWA**: 100

### Key Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🌍 Browser Support

### Modern Browsers
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### Mobile Browsers
- Chrome Mobile 80+
- Safari iOS 13+
- Samsung Internet 12+

### PWA Support
- Chrome (Android/Desktop)
- Edge (Windows/Android)
- Safari (iOS 14.3+)

## 📞 Contact & Support

### MediaBay Contact Information
- **Email**: mediabay3@gmail.com
- **Location**: Cape Town, South Africa
- **Business Hours**: Mon-Fri 9AM-6PM, Sat 10AM-2PM

### Technical Support
For technical issues or customization requests, please contact the development team.

## 📄 License

This project is proprietary to MediaBay. All rights reserved.

## 🙏 Acknowledgments

- **Unsplash** - Stock photography
- **Google Fonts** - Poppins font family
- **Font Awesome** - Icon library
- **Modern Web APIs** - Browser functionality

---

**Built with ❤️ for MediaBay - Web Interfaces That Work**

*© 2025 MediaBay. All rights reserved. Cape Town, South Africa.*
