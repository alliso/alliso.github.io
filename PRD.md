## 📋 Complete Implementation Plan

### 🎯 **Template Recommendation: `midudev/minimalist-portfolio-json`**

**Why this is perfect for you:**
- ✅ JSON-based content management (ideal for backend developers)
- ✅ Minimal, modern design aesthetic
- ✅ Recent i18n implementation (perfect for bilingual needs)
- ✅ Strong community support (925+ stars)
- ✅ TypeScript support (appeals to backend developers)

---

### 🚀 **Phase 1: Repository Setup & Migration**

#### 1.1 Clean Current Repository
```bash
# Remove Jekyll files
rm -rf _config.yml _site .jekyll-cache
rm en.md
```

#### 1.2 Setup Astro Template
```bash
# Clone the template
git clone https://github.com/midudev/minimalist-portfolio-json.git .
rm -rf .git
git init
git remote add origin https://github.com/alliso/alliso.github.io.git
```

#### 1.3 Configure for GitHub Pages
- Update `astro.config.mjs` for static output
- Set up GitHub Actions workflow
- Configure repository settings for Pages deployment

---

### 🌍 **Phase 2: Bilingual Content Structure**

#### 2.1 Language Setup (Spanish Primary)
```javascript
// astro.config.mjs
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    fallback: { en: 'es' }
  }
});
```

#### 2.2 Content Structure
```
src/
├── i18n/
│   ├── ui.ts              # Language configuration
│   ├── utils.ts           # Helper functions
│   └── translations/
│       ├── es.json        # UI translations
│       └── en.json
├── data/
│   ├── cv.json           # Spanish resume data (primary)
│   └── cv_en.json        # English resume data
└── components/
    └── LanguageSwitcher.astro
```

---

### 📊 **Phase 3: Content Migration**

#### 3.1 Personal Information Structure
```json
{
  "basics": {
    "name": "Alejandro Lliso Cosin",
    "label": "Desarrollador Full Stack | Backend Specialist",
    "summary": "Desarrollador con amplia experiencia en programación y mantenimiento de sistemas...",
    "location": {
      "city": "Valencia",
      "countryCode": "ES"
    },
    "profiles": [
      {
        "network": "LinkedIn",
        "url": "https://linkedin.com/in/allico"
      },
      {
        "network": "GitHub", 
        "url": "https://github.com/alliso"
      }
    ]
  }
}
```

#### 3.2 Experience Timeline
- **Cognizant** (Mar 2025 - Present) - Back-End Developer
- **CTT Express** (Feb 2023 - Mar 2025) - Full Stack Developer  
- **IRTIC** (Jun 2022 - Feb 2023) - Full Stack Developer
- **Dialapplet** (Jan 2020 - Jun 2022) - Full Stack Developer
- **F1-Connecting** (Oct 2019 - Jan 2020) - IT Support
- **WA works** (Sep 2018 - Dec 2018) - Frontend Developer

#### 3.3 Backend-Focused Skills Categories
```json
"skills": [
  {
    "name": "Backend Development",
    "keywords": ["Java", "Spring Boot", "Node.js", "Microservicios"]
  },
  {
    "name": "Frontend Development", 
    "keywords": ["JavaScript", "TypeScript", "Vue.js", "Angular", "React"]
  },
  {
    "name": "DevOps & Infrastructure",
    "keywords": ["Docker", "Git", "CI/CD", "Kafka"]
  },
  {
    "name": "Databases",
    "keywords": ["PostgreSQL", "OracleSQL", "MySQL", "Redis"]
  },
  {
    "name": "Methodologies",
    "keywords": ["TDD", "Scrum", "DDD", "Agile"]
  }
]
```

---

### 🎨 **Phase 4: Design & Customization**

#### 4.1 Minimal Design Elements
- Clean typography with system fonts
- Subtle color scheme (dark/light mode support)
- Simple grid layouts
- Focus on content readability
- Smooth animations for interactions

#### 4.2 Key Sections
1. **Hero**: Name, title, brief intro, contact links
2. **About**: Professional summary and education
3. **Experience**: Timeline with company logos and tech stacks
4. **Skills**: Interactive skill cards
5. **Contact**: Professional links and contact form

---

### 🔧 **Phase 5: Technical Implementation**

#### 5.1 Language Switcher Component
```astro
<nav class="language-switcher">
  <a href="/es" class={currentLang === 'es' ? 'active' : ''}>Español</a>
  <a href="/en" class={currentLang === 'en' ? 'active' : ''}>English</a>
</nav>
```

#### 5.2 Dynamic Content Loading
```javascript
// Load appropriate JSON based on language
const cv = await import(`../data/cv_${Astro.locals.lang || 'es'}.json`);
```

#### 5.3 SEO Optimization
- Proper meta tags for both languages
- Structured data for search engines
- Sitemap generation for multilingual content

---

### 🚀 **Phase 6: Deployment & Optimization**

#### 6.1 GitHub Actions Workflow
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: withastro/action@v1
    - uses: actions/deploy-pages@v4
```

#### 6.2 Performance Optimizations
- Image optimization with Astro's built-in processing
- Preloading critical CSS
- Minimal JavaScript bundle
- CDN-ready static assets

---

### 📱 **Phase 7: Final Polish**

#### 7.1 Responsive Design
- Mobile-first approach
- Touch-friendly navigation
- Optimized reading experience on all devices

#### 7.2 Accessibility
- Semantic HTML5 structure
- Keyboard navigation support
- Proper ARIA labels
- High contrast mode support

#### 7.3 Analytics & Monitoring
- Google Analytics setup
- Performance monitoring
- Error tracking

---

## 🎯 **Timeline Estimate**

- **Phase 1-2**: Setup & Configuration (2-3 hours)
- **Phase 3**: Content Migration (3-4 hours)  
- **Phase 4-5**: Design & Implementation (4-5 hours)
- **Phase 6-7**: Deployment & Polish (2-3 hours)

**Total Estimated Time**: 11-15 hours

---

## 🚦 **Ready to Proceed?**

This plan gives you:
✅ Minimal/modern aesthetic
✅ Spanish primary, English secondary with switcher
✅ GitHub Pages deployment
✅ Backend developer-focused content structure
✅ Easy maintenance through JSON files

Would you like me to proceed with implementing this plan? I can start with Phase 1 (repository setup) and work through each phase systematically, or would you prefer to focus on any specific area first?
