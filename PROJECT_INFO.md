# Criss Dev Portfolio Project - Documentation

**Project Name:** prueba-3-frontend  
**Status:** Active (Paused at v1.0 - Fully Functional)  
**Last Updated:** December 1, 2025

---

## 🎯 Project Overview

A modern, responsive React portfolio website that consumes the Rick and Morty API and showcases personal branding. The project serves as both a functional portfolio and a demonstration of React development skills.

**Key Features:**
- Rick and Morty API integration (3-page data fetch)
- Responsive design (desktop + mobile)
- Professional portfolio sections
- Social media integration
- Contact form with styled inputs
- Consistent cyan (#00d4ff) branding throughout

---

## 📁 Project Structure

```
prueba-3-frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Bootstrap navbar with scroll navigation
│   │   ├── Navbar.css          # Navbar styles (cyan theme)
│   │   ├── Footer.jsx          # Footer with legal links
│   │   ├── Footer.css          # Footer styles
│   │   ├── Buscador.jsx        # API filter component (status, A-Z sort)
│   │   ├── MiApi.jsx           # Rick and Morty API consumer
│   │   └── [Component CSS files...]
│   ├── img/
│   │   ├── criss.jpg           # Profile photo (200x200px circle)
│   │   ├── vs.png              # VS Code logo (350x210px)
│   │   ├── ableton.png         # Ableton Live logo (350x210px)
│   │   └── Rick_and_Morty.png  # Series logo (landing page)
│   ├── App.jsx                 # Main component (4 sections + API toggle)
│   ├── App.css                 # Main stylesheet (500+ lines)
│   ├── index.css               # Global styles
│   └── main.jsx                # React entry point
├── public/
│   └── img/                    # Static assets
├── index.html                  # HTML template (Font Awesome CDN)
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
└── eslint.config.js            # ESLint rules
```

---

## 🛠 Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.1.1 | UI framework |
| Vite | 7.1.7 | Build tool & dev server |
| React-Bootstrap | 2.x | Navbar component |
| Bootstrap CSS | 5.x | CSS framework (navbar only) |
| Font Awesome | 6.4.0 | Icons (CDN in index.html) |

**API:** Rick and Morty API (rickandmortyapi.com)

---

## 🎨 Design System

### Color Palette
```
Primary (Cyan):     #00d4ff    ← All headings, borders, interactive elements
Hover (Dark Cyan):  #00a8cc    ← Hover states for links/buttons
Navbar Background:  #1a1a1a    ← Dark gray for navbar & cards
Section BG:         #0d0d0d    ← Very dark gray for sections
Text Primary:       #ddd        ← Paragraph text (light gray)
Text Secondary:     #888        ← Secondary/muted text
```

### Responsive Breakpoints
- **Desktop:** 1024px and above
  - API grid: 4 columns
  - Images: 350x210px (tools), 200x200px (profile)
  - Typography: Full size
  
- **Mobile:** 768px and below
  - API grid: 2 columns
  - Images: 260x156px (tools), 150x150px (profile)
  - Typography: Reduced sizes

---

## 📄 Components Guide

### **App.jsx** (Main Component - 110 lines)
**Purpose:** Orchestrates landing page layout and API view toggle

**State:**
```javascript
const [mostrarApi, setMostrarApi] = useState(false);
```

**Sections:**
1. **Landing Page:** Hero section with Rick and Morty logo and CTA button
2. **Quién Soy:** Profile image (circular, cyan border), bio text, LinkedIn button
3. **Servicios y Productos:** Tool images (VS Code, Ableton), GitHub & YouTube buttons
4. **Contacto:** Contact form (nombre, email, teléfono, mensaje)

**Conditional Rendering:**
- `mostrarApi === false` → Show landing page + 4 sections
- `mostrarApi === true` → Show MiApi component (API results)

---

### **Navbar.jsx** (Navigation)
**Uses React-Bootstrap:** `Navbar`, `Nav`, `Container`

**Features:**
- Brand: "Criss Dev" (clickable, triggers scroll to top)
- Menu items: Inicio, Quién Soy, Servicios/Productos, Contacto
- Mobile hamburger menu with custom cyan color
- Smooth scroll behavior: `window.scrollTo({ top: 0, behavior: 'smooth' })`
- Section scrolling via element IDs: `#quienes-somos`, `#servicios`, `#contacto`

**CSS Custom Styling:**
- Navbar background: #1a1a1a with box-shadow
- Links color: #00d4ff (cyan) with hover effect
- Hamburger icon: Custom SVG with cyan strokes (data URI in CSS)

---

### **Buscador.jsx** (Filter Component)
**Purpose:** Filter API results and auto-sort alphabetically

**Filters Available:**
- Todos (All)
- Vivos (Alive)
- Muertos (Dead)
- Desconocidos (Unknown)

**Behavior:**
- Auto-sorts A-Z on every filter change
- Maintains sort order regardless of filter selection

---

### **MiApi.jsx** (API Consumer)
**Data Source:** Rick and Morty API (3 pages)

**Grid Layout:**
- Desktop: 4 columns (`grid-template-columns: repeat(4, 1fr)`)
- Mobile: 2 columns (`grid-template-columns: repeat(2, 1fr)`)

**Card Content:**
- Character image
- Character name
- Status (translated to Spanish)

---

### **Footer.jsx** (Simple Footer)
**Content:**
- Links: Avisos Legales, Política de Privacidad, Política de Cookies
- Copyright: "© 2025 Criss Dev. Todos los derechos reservados."

---

## 🎨 CSS Architecture

### **App.css** (Main Stylesheet - 500+ lines)

**Key Classes:**
```css
/* Landing Page */
.landing-page           /* min-height: 100vh, hero layout */
.header                 /* Contains Rick and Morty logo */
.cta-button             /* Call-to-action button styling */

/* Sections (Shared Structure) */
.quienes-somos          /* min-height: 60vh, centered flex */
.servicios
.contacto

/* Images */
.profile-image          /* 200x200px circle, cyan border, glow */
.servicio-img           /* 350x210px rectangle, cyan border */

/* Social Links */
.social-links           /* flex row, gap 25px, centered */
.social-icon            /* border 2px cyan, hover fill effect */

/* Contact Form */
.contacto-form          /* flex column layout */
.form-input             /* cyan borders, focus glow */
.btn-enviar             /* cyan background, scale hover */

/* Media Queries */
@media (max-width: 1024px)  /* Desktop adjustments */
@media (max-width: 768px)   /* Mobile adjustments */
```

### **Image Dimensions**
- **Profile Picture:** 200x200px (desktop), 150x150px (mobile) - circular
- **Tool Images:** 350x210px (desktop), 260x156px (mobile) - rectangular
- **All borders:** 2-3px cyan (#00d4ff)

---

## 🔗 Social Media & URLs

**User Profile Links:**
| Platform | URL |
|----------|-----|
| GitHub | https://github.com/Cristobalgonzalez |
| YouTube | https://www.youtube.com/@pufinwave8934 |
| LinkedIn | https://www.linkedin.com/in/cristobal-gonzalez-13345a335/ |

**Link Placement:**
- **Quién Soy section:** LinkedIn button
- **Servicios section:** GitHub button, YouTube button (in that order)
- All links open in new tabs (`target="_blank"`)

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

**Package Name (in npm output):** `prueba-3-frontend@0.0.0`

---

## 📊 Current Implementation Status

### ✅ Completed Features
- [x] React component structure (App, Navbar, Footer, Buscador, MiApi)
- [x] Rick and Morty API integration (3-page fetch)
- [x] Alphabetical sorting (A-Z auto-sort)
- [x] Status filtering (Vivo, Muerto, Desconocido, Todos)
- [x] Responsive design (desktop 1024px+, mobile 768px-)
- [x] Bootstrap integration (navbar only, non-invasive)
- [x] Landing page with 4 portfolio sections
- [x] Navigation with smooth scroll-to-sections
- [x] Profile image styling (circular, cyan border, box-shadow glow)
- [x] Contact form with styled inputs (visual only)
- [x] Social media links (LinkedIn, GitHub, YouTube)
- [x] Tool showcase images (VS Code, Ableton)
- [x] Hamburger menu customization (cyan color)
- [x] Footer with legal links
- [x] Consistent cyan (#00d4ff) branding throughout

### ❌ Pending/Optional Features
- [ ] Contact form backend processing (form is visual only)
- [ ] Avisos Legales / Política de Privacidad / Política de Cookies page content (links exist)
- [ ] Proyectos/Portfolio section (showcasing past work)
- [ ] Dark/Light mode toggle
- [ ] SEO optimization & meta tags
- [ ] Analytics integration
- [ ] Blog/Articles section
- [ ] Animation enhancements

---

## 🔧 Common Development Tasks

### Add a New Portfolio Section
1. Create new `<section id="new-section" className="new-section">` in App.jsx
2. Add CSS class in App.css with: `min-height: 60vh`, `display: flex`, centered layout
3. Add menu item in Navbar.jsx → Nav component
4. Update responsive styles in media queries

### Modify Color Scheme
1. Find all instances: `#00d4ff` (primary), `#00a8cc` (hover), `#1a1a1a` (nav bg), `#0d0d0d` (section bg)
2. Update in: App.css, Navbar.css, Footer.css
3. Test responsive behavior at 1024px & 768px breakpoints

### Update Social Links
1. Edit social-links div in appropriate section (App.jsx)
2. Update href URL
3. Update Font Awesome icon class (e.g., `fab fa-github`, `fab fa-linkedin`)
4. Keep consistent styling in App.css

### Adjust Image Sizes
1. Find `.profile-image` or `.servicio-img` in App.css
2. Modify main CSS class (desktop size)
3. Update corresponding `@media (max-width: 768px)` rules (mobile size)
4. Test both breakpoints

---

## 📝 Important Notes

### Bootstrap Integration
- **Only in Navbar:** Uses `react-bootstrap` (Navbar, Nav, Container)
- **Rest of project:** Custom CSS with cyan theme
- **No Bootstrap classes elsewhere:** Keeps styling predictable and lightweight

### Image Path Convention
- Use relative imports: `src/img/filename`
- Images located in: `/src/img/` folder
- Static images in `/public/img/` are NOT used

### Responsive Design Pattern
1. Write desktop-first CSS
2. Add media queries at bottom of each CSS file
3. Use breakpoints: 1024px (desktop) and 768px (mobile)
4. Test both breakpoints during development

### Font Awesome Icons
- Loaded via CDN in `index.html` head
- Use classes: `fab fa-github`, `fab fa-youtube`, `fab fa-linkedin`
- Styled with custom CSS (size, color, hover effects)

---

## 🐛 Known Issues & Solutions

| Issue | Solution |
|-------|----------|
| Images not loading | Use relative path `src/img/filename` not `/img/filename` |
| Hamburger menu icon wrong color | Custom SVG data URI in Navbar.css `.navbar-toggler-icon` |
| Sections feel cramped | Sections have `min-height: 60vh` and `display: flex` for centering |
| Contact form not sending | Backend not implemented (visual styling only) |

---

## 🔄 Future Enhancement Ideas

1. **Contact Form Backend:**
   - Integrate EmailJS or Node.js server
   - Add form validation (frontend + backend)
   - Success/error toast notifications

2. **API Improvements:**
   - Add pagination (currently fetches 3 pages only)
   - Add advanced filtering (species, origin, etc.)
   - Cache API responses for performance

3. **Portfolio Showcase:**
   - Create "Proyectos" section with thumbnail gallery
   - Link to live demos and GitHub repos
   - Add project descriptions and tech stack

4. **SEO & Performance:**
   - Add meta tags and OpenGraph support
   - Optimize images (WebP format, lazy loading)
   - Minify CSS/JS
   - Add sitemap.xml

5. **User Experience:**
   - Smooth scroll offset for fixed navbar
   - Dark/Light mode toggle
   - Loading skeleton in API grid
   - Back-to-top button (mobile)

---

## 📚 Development References

- **React Docs:** https://react.dev
- **Vite Docs:** https://vitejs.dev
- **React-Bootstrap:** https://react-bootstrap.github.io
- **Font Awesome:** https://fontawesome.com/icons
- **Rick and Morty API:** https://rickandmortyapi.com

---

## 👤 Project Owner

**Name:** Criss Dev  
**GitHub:** Cristobalgonzalez  
**YouTube:** @pufinwave8934  
**LinkedIn:** cristobal-gonzalez-13345a335

---

**Last Session Notes:**
- Finalized social link placement: LinkedIn in Quién Soy, GitHub/YouTube in Servicios
- Project paused at v1.0 (fully functional)
- All sections complete and responsive
- Ready for backend integration and additional features in future sessions
