# Product Requirements Document (PRD)
## Thai Recipes App — המטבח התאילנדי

**Version**: 1.0
**Last Updated**: 2026-03-07
**Status**: Ready for Implementation

---

## Executive Summary

A mobile-first, Hebrew RTL web application featuring 50 authentic Thai recipes. The app targets Israeli food enthusiasts who want to cook authentic Thai cuisine at home. Zero build step, deploys to GitHub Pages, works offline-first (after initial load).

---

## Product Vision

**Mission**: Make authentic Thai cooking accessible to Hebrew speakers with clear, step-by-step recipes and beautiful visuals.

**Target Audience**:
- Israeli home cooks (ages 25-45)
- Food bloggers and content creators
- Restaurant owners researching Thai cuisine
- Hebrew speakers interested in Asian cooking

**Success Criteria**:
- 50 authentic Thai recipes with Hebrew translations
- Sub-2-second load time on mobile 4G
- 200ms search response time
- WhatsApp integration for shopping lists
- Mobile-first responsive design

---

## Core Features

### 1. Recipe Catalog (50 Recipes)

**Categories** (10 recipes each):
- **קארי** (Curries) — Thai curry dishes (green, red, massaman, etc.)
- **מוקפץ** (Stir-fries) — Wok-fried dishes (pad thai, pad krapow, etc.)
- **מרקים** (Soups) — Thai soups (tom yum, tom kha, etc.)
- **אוכל רחוב** (Street Food) — Popular street dishes (som tam, satay, etc.)
- **קינוחים** (Desserts) — Thai sweets (mango sticky rice, etc.)

**Recipe Data Structure**:
```json
{
  "id": "kebab-case-id",
  "title": "Hebrew recipe name",
  "originalName": "Authentic Thai/English name",
  "description": "Hebrew description (1-2 sentences)",
  "category": "One of 5 categories",
  "image": "images/Recipe_Image.jpg",
  "prepTime": 15,
  "cookTime": 30,
  "servings": 4,
  "difficulty": "קל|בינוני|מאתגר",
  "ingredients": [{"name": "Hebrew", "quantity": "2", "unit": "כפות"}],
  "instructions": ["Step 1", "Step 2"],
  "tags": ["Tag1", "Tag2"]
}
```

**Difficulty Distribution**:
- **קל** (Easy): ~25 recipes (50%)
- **בינוני** (Medium): ~15 recipes (30%)
- **מאתגר** (Challenging): ~10 recipes (20%)

---

### 2. Home Page

**Hero Section**:
- Full-width hero image (Thai cuisine background)
- App title: "המטבח התאילנדי"
- Subtitle: "מתכונים אותנטיים מהלב של בנגקוק"
- Integrated search bar with glassmorphism effect
- Chili pepper icon (fa-pepper-hot)

**Category Filters**:
- Sticky horizontal pill navigation
- Icon + Hebrew label for each category
- "הכל" (All) filter shows all 50 recipes
- Active state with primary color background
- Result count display

**Recipe Grid**:
- Responsive grid (1 col mobile → 3 col desktop)
- Card design with hover lift effect
- Recipe image (16:9 aspect ratio)
- Hebrew title + original Thai/English name
- Quick info: total time, servings, difficulty badge
- Lazy-loaded images with placeholder

**Search & Filter**:
- Real-time search (200ms debounce)
- Searches: title, description, ingredients, tags
- Combines with category filter
- Empty state with "clear filters" button
- Result count indicator

---

### 3. Recipe Detail Page

**Hero Section**:
- Full-width recipe image background
- Dark gradient overlay
- Recipe title (Hebrew) + original name
- Category badge with icon
- Description

**Recipe Metadata**:
- Glassmorphism info card:
  - Prep time
  - Cook time
  - Servings
  - Difficulty level

**Ingredients Section**:
- Glassmorphism card with gold right border (RTL)
- Checkmark icon for each ingredient
- Quantity + unit + name (bold quantity)
- Ingredient count display

**WhatsApp Share Button**:
- Green WhatsApp-branded button
- Pre-formatted shopping list message
- Includes recipe URL for sharing
- Opens WhatsApp with message ready to send

**Instructions Section**:
- Numbered step circles (primary color background)
- Clear, linear step-by-step format
- Hebrew instructions

**Tags Section**:
- Pill-shaped tags
- Hashtag icon prefix
- Warm gray background

**Back Button**:
- Fixed header button
- "חזרה למתכונים" (Back to recipes)
- Navigates to home view

---

### 4. Navigation & Routing

**Hash-based Routing**:
- `#/` — Home view (recipe grid)
- `#/recipe/:id` — Recipe detail view

**URL Structure**:
- Clean kebab-case IDs
- Shareable recipe URLs
- Browser back/forward support
- Direct URL access to recipes

**Header Behavior**:
- Transparent on scroll top
- Glassmorphism background after 50px scroll
- Logo always visible (links to home)
- Conditional back button (detail view only)

---

## Technical Architecture

### Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Structure** | HTML5 | Semantic markup, RTL support |
| **Styling** | Tailwind CSS v4 CDN | Utility-first CSS, no build step |
| **Custom CSS** | CSS Variables + Custom Styles | Theme colors, glassmorphism, animations |
| **Icons** | Font Awesome 6 | Category icons, UI icons |
| **Fonts** | Google Fonts (Heebo, Playfair Display) | Hebrew + English typography |
| **Logic** | Vanilla JavaScript | Data fetching, routing, rendering |
| **Data** | JSON (static file) | Recipe database |
| **Deployment** | GitHub Pages | Free hosting, HTTPS, CDN |

### File Architecture

```
/
├── index.html              # SPA shell, Tailwind config
├── css/
│   └── style.css          # CSS variables, glassmorphism, animations
├── js/
│   ├── data.js            # Data layer (fetch, search, filter)
│   ├── ui.js              # UI rendering (pure functions)
│   └── app.js             # Router, init, event handlers
├── data/
│   └── recipes.json       # 50 recipes (client-side database)
└── images/                # 51 images (1 hero + 50 recipes)
```

### Design Patterns

- **Module Pattern**: `RecipeData`, `UI` are IIFEs returning public API
- **Separation of Concerns**: Data layer ↔ UI layer ↔ App orchestration
- **Pure Rendering**: UI functions are stateless, receive data as params
- **Hash Routing**: URL-driven view switching (no framework)
- **Debounced Search**: 200ms debounce on input events
- **Lazy Loading**: Images load on scroll with `loading="lazy"`

---

## Design System

### Color Palette

**Thai-Inspired Colors**:
- **Primary**: `#E63946` (Thai chili red) — CTAs, active states, accents
- **Primary Light**: `#FFB703` (Golden yellow) — Turmeric/mango accent
- **Primary Dark**: `#A4161A` (Deep red) — Hover states
- **Cream**: `#FAFAFA` — Page background
- **Charcoal**: `#1A1A1A` — Primary text
- **Navy**: `#0A1628` — Hero/footer backgrounds
- **Warm Gray**: `#F5F0EB` — Card backgrounds, tags
- **Text Secondary**: `#6B7280` — Secondary text
- **Border**: `#E5E1DC` — Borders, dividers

**Difficulty Badges**:
- **קל** (Easy): Green `#dcfce7` / `#16a34a`
- **בינוני** (Medium): Yellow `#fef3c7` / `#d97706`
- **מאתגר** (Hard): Red `#fee2e2` / `#dc2626`

### Typography

**Fonts**:
- **Heebo** (300, 400, 500, 700): Primary Hebrew text
- **Playfair Display** (600, 700): Headers, original recipe names

**Font Weights**:
- Light (300): Hero subtitle
- Regular (400): Body text
- Medium (500): Category pills
- Bold (700): Headers, numbers, emphasis

**Sizes** (mobile → desktop):
- H1 Hero: 2.25rem → 3.75rem
- H1 Recipe: 1.875rem → 3rem
- H2 Section: 1.25rem
- Body: 1rem
- Small: 0.875rem
- Tiny: 0.8125rem

### Effects

**Glassmorphism**:
- `.glass`: Recipe detail cards, metadata
- `.glass-search`: Hero search bar
- Backdrop blur: 12-16px
- Semi-transparent backgrounds
- Subtle borders

**Card Lift**:
- Hover: -6px translateY
- Shadow: 0 20px 40px rgba(0,0,0,0.08)
- Cubic-bezier easing: (0.22, 1, 0.36, 1)

**Image Transitions**:
- Opacity fade-in on load
- Scale 1.05 on card hover
- Smooth 0.6s ease-out

**View Transitions**:
- Fade-in + translateY(8px) on route change

---

## User Flows

### Flow 1: Browse Recipes
1. User lands on home page
2. Hero loads with search bar
3. Recipe grid displays (50 recipes)
4. User scrolls, images lazy-load
5. User clicks category filter
6. Grid filters to category (e.g., 10 recipes)

### Flow 2: Search Recipe
1. User types in search bar (e.g., "pad thai")
2. After 200ms debounce, search executes
3. Grid filters to matching recipes
4. Result count updates
5. Clear "X" button appears
6. User clears search, all recipes return

### Flow 3: View Recipe Detail
1. User clicks recipe card
2. URL changes to `#/recipe/pad-thai`
3. Recipe detail view renders
4. Back button appears in header
5. User scrolls to read instructions
6. User clicks WhatsApp button
7. WhatsApp opens with shopping list

### Flow 4: Share Shopping List
1. User on recipe detail page
2. User clicks "שלח רשימת מצרכים ל-WhatsApp"
3. WhatsApp opens (desktop: web.whatsapp.com, mobile: app)
4. Message pre-filled with ingredients
5. User selects contact or group
6. User sends message

---

## Success Metrics (KPIs)

### Performance
- **Initial Load**: < 2 seconds on mobile 4G
- **Search Response**: < 200ms
- **Image Load**: Lazy-loaded, < 1s per image
- **Lighthouse Score**:
  - Performance: >90
  - Accessibility: >95
  - Best Practices: >95
  - SEO: >90

### Engagement
- **Bounce Rate**: < 40%
- **Avg. Session Duration**: > 3 minutes
- **Pages per Session**: > 2.5
- **WhatsApp Share CTR**: > 15%

### Quality
- **Recipe Accuracy**: 100% authentic Thai recipes
- **Translation Quality**: Native Hebrew speaker review
- **Image Quality**: All 51 images HD (>1200px wide)
- **Mobile Usability**: 100% responsive, no horizontal scroll

---

## Release Plan

### Phase 1: MVP (Current)
- ✅ 50 authentic Thai recipes
- ✅ Hebrew RTL interface
- ✅ Category filters (5 categories)
- ✅ Real-time search
- ✅ Recipe detail view
- ✅ WhatsApp sharing
- ✅ Responsive design
- ⏳ Image generation (user task)
- ⏳ GitHub Pages deployment

### Phase 2: Enhancements (Future)
- [ ] Favorites (localStorage)
- [ ] Print recipe view
- [ ] Ingredient scaling (adjust servings)
- [ ] Related recipes suggestions
- [ ] Recipe notes (localStorage)

### Phase 3: Advanced (Future)
- [ ] PWA (offline support)
- [ ] Dark mode
- [ ] Recipe video integration
- [ ] Nutrition information
- [ ] Shopping list builder
- [ ] Multi-language support (English, Thai)

---

## Risks & Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| **Poor image quality** | Low user engagement | Provide detailed image generation guide |
| **Recipe inaccuracy** | Loss of credibility | Review by Thai cuisine expert |
| **Slow load on mobile** | High bounce rate | CDN images, lazy loading, minimal JS |
| **Browser compatibility** | Broken UX | Test on Chrome, Safari, Firefox mobile |
| **WhatsApp share not working** | Feature unused | Test on iOS/Android, provide fallback |

---

## Out of Scope (V1)

- ❌ User authentication
- ❌ Recipe submissions
- ❌ Comments/ratings
- ❌ Backend API
- ❌ Database (using static JSON)
- ❌ Admin panel
- ❌ A/B testing
- ❌ Analytics (can add Google Analytics later)
- ❌ Email newsletter
- ❌ Social media integration (beyond WhatsApp)

---

## Deployment Checklist

Before deploying to GitHub Pages:

- [ ] All 51 images added to `images/` directory
- [ ] Hero image path updated in CSS
- [ ] Recipes.json validated (valid JSON)
- [ ] Test all 50 recipes load correctly
- [ ] Test search with Hebrew characters
- [ ] Test category filters
- [ ] Test WhatsApp share on mobile device
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Lighthouse audit passing
- [ ] No console errors
- [ ] Git repository initialized
- [ ] .gitignore configured
- [ ] README.md created (deployment instructions)

---

## Post-Launch Tasks

1. **Monitor Performance**: Check Lighthouse scores weekly
2. **Gather Feedback**: User testing with 5-10 Israeli home cooks
3. **Fix Bugs**: Address any reported issues
4. **Improve Recipes**: Update based on feedback
5. **Add Analytics**: Track most viewed recipes, search terms
6. **Iterate**: Plan Phase 2 features based on usage data

---

## Appendix

### Recipe Image Specifications
- **Format**: JPEG (optimized for web)
- **Dimensions**: 1200×675px minimum (16:9 aspect ratio)
- **File Size**: < 200KB per image (optimized)
- **Naming**: `Original_Thai_Name_With_Underscores.jpg`
- **Content**: Professional food photography, overhead or 45° angle

### Hero Image Specifications
- **Format**: JPEG
- **Dimensions**: 1920×1080px minimum
- **File Size**: < 500KB (optimized)
- **Content**: Thai cuisine scene, Bangkok market, Thai ingredients
- **Style**: Dark enough for white text overlay

---

**Document Owner**: Claude Code
**Stakeholders**: Project Lead, UI/UX Designer, Developer
**Review Cycle**: After Phase 1 launch
