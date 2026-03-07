# Thai Recipes App — Project Instructions

> Project-specific CLAUDE.md for the Thai recipe web application.
> Inherits rules from workspace root `d:\claude\CLAUDE.md`.

---

## Project Overview

**Name**: Thai Recipes App (המטבח התאילנדי)
**Type**: Mobile-first Hebrew RTL recipe web application
**Cuisine**: Thai (תאילנדי)
**Tech Stack**: Vanilla HTML/JS/CSS, Tailwind CSS v4 CDN, Font Awesome 6
**Deployment**: GitHub Pages
**Repository**: `thai-recipes-app`

---

## Design Tokens

### Color Palette (Thai-inspired)
```css
--th-primary: #E63946          /* Thai chili red */
--th-primary-light: #FFB703    /* Golden yellow (turmeric/mango) */
--th-primary-dark: #A4161A     /* Deep red */
--th-cream: #FAFAFA
--th-charcoal: #1A1A1A
--th-navy: #0A1628
--th-warm-gray: #F5F0EB
--th-text-secondary: #6B7280
--th-border: #E5E1DC
```

### Typography
- **Primary**: Heebo (Hebrew)
- **Accent**: Playfair Display (headers, original recipe names)

### Categories & Icons
| Category | Hebrew | Icon |
|----------|--------|------|
| Curries | קארי | `fa-fire-flame-curved` |
| Stir-fries | מוקפץ | `fa-utensils` |
| Soups | מרקים | `fa-bowl-food` |
| Street Food | אוכל רחוב | `fa-cart-shopping` |
| Desserts | קינוחים | `fa-ice-cream` |

### Hero Icon
`fa-pepper-hot` (Thai chili pepper)

---

## File Structure

```
thai-recipes-app/
├── index.html              # Main SPA (hash routing)
├── css/
│   └── style.css          # Custom styles + CSS variables
├── js/
│   ├── data.js            # Data layer (fetch, filter, search)
│   ├── ui.js              # UI rendering
│   └── app.js             # Router, init, orchestration
├── data/
│   └── recipes.json       # 50 Thai recipes (10 per category)
├── images/                # User adds 51 images (1 hero + 50 recipes)
├── .gitignore
├── CLAUDE.md              # This file
├── PRODUCT_REQUIREMENTS.md
└── RECIPES_LIST.md        # Image generation reference
```

---

## Development Rules

### Editing Recipe Data
When modifying `data/recipes.json`:
- **MUST** maintain Hebrew for: title, description, ingredients, instructions, tags
- **MUST** include `originalName` in Thai/English
- **MUST** use kebab-case for `id`
- **MUST** follow image naming: `images/Original_Name_With_Underscores.jpg`
- **MUST** distribute difficulty: ~50% קל, ~30% בינוני, ~20% מאתגר
- **MUST** ensure authentic Thai recipes (no fusion dishes unless specified)

### Styling Edits
- All color references **MUST** use CSS variables with `--th-` prefix
- RTL layout **MUST** be preserved (`dir="rtl"`, `lang="he"`)
- Glassmorphism effects **MUST** maintain `.glass` and `.glass-search` classes
- Card hover effects **MUST** use `.card-lift` class

### Adding Features
Before adding new features (e.g., favorites, print mode, nutrition info):
- **MUST** enter Plan Mode first
- **MUST** maintain zero-build-step architecture (no npm, no bundler)
- **MAY** add CDN libraries only (no npm install)
- **MUST NOT** break mobile-first responsiveness

---

## Image Requirements

The app expects 51 images in the `images/` directory:

1. **Hero background**: `Thai_Cuisine_Hero_Background.jpg` (1920×1080px or higher)
2. **50 recipe images**: Named exactly as specified in `RECIPES_LIST.md`

After adding images, update `css/style.css` line 244:
```css
/* Replace this: */
background: linear-gradient(135deg, #0A1628 0%, #1a2744 50%, #0A1628 100%);

/* With this: */
background: url('../images/Thai_Cuisine_Hero_Background.jpg') center / cover no-repeat;
```

---

## Deployment

### Pre-Deployment Checklist
- [ ] All 51 images added to `images/` directory
- [ ] Hero image path updated in `css/style.css`
- [ ] Test locally: `python -m http.server 8000`
- [ ] Verify all recipe images load correctly
- [ ] Test search and category filters
- [ ] Test WhatsApp share functionality
- [ ] Test on mobile viewport (Chrome DevTools)

### Deploy to GitHub Pages
```bash
# Use the gh-pages-deploy skill
/gh-pages-deploy
```

---

## Common Tasks

### Add New Recipe
1. Edit `data/recipes.json`
2. Add recipe object following schema
3. Generate recipe image (AI tool)
4. Save image as `images/[Original_Name].jpg`
5. Test locally
6. Commit with message: `feat: add [Recipe Name] to [Category]`

### Update Color Palette
1. Edit CSS variables in `css/style.css` (lines 194-204)
2. Update Tailwind config in `index.html` (lines 49-62)
3. Update `--th-` prefixed classes throughout `index.html`
4. Test all views (home, recipe detail, filters)

### Fix Broken Image
1. Verify image exists in `images/` directory
2. Check filename matches `recipes.json` exactly (case-sensitive, underscores)
3. If missing, generate image with AI tool
4. Test with browser DevTools Network tab

---

## WhatsApp Share Feature

The app generates shopping list messages in this format:
```
*רשימת קניות עבור: [Recipe Title]*

▢ [Quantity] [Unit] [Ingredient]
▢ [Quantity] [Unit] [Ingredient]
...

למתכון המלא: [Recipe URL]
```

**MUST NOT** modify the `buildWhatsAppUrl()` function in `js/ui.js` without testing on actual mobile device.

---

## Known Limitations

1. **No backend** — all data is client-side JSON
2. **No user accounts** — no favorites, no saved lists (can be added with localStorage)
3. **No image optimization** — user must provide optimized images
4. **No PWA** — can be added later with service worker
5. **Hash routing only** — no server-side routing (GitHub Pages limitation)

---

## Maintenance

### When to Update Recipes
- User reports incorrect recipe
- Better translation available
- Authentic Thai recipe discovered
- Image quality poor

### When to Refactor
- Performance issues (>50 recipes may need pagination)
- Mobile UX feedback
- Accessibility issues
- SEO requirements (would need SSG/SSR)

---

## Security

**NEVER** commit:
- API keys (if adding external APIs)
- Analytics tokens
- User data (if adding localStorage features)

All sensitive data **MUST** be in `.gitignore`.

---

## Success Metrics

- All 50 recipes load within 2 seconds
- Search returns results within 200ms
- Mobile-first design works on iPhone 6+ / Android 5+
- WhatsApp share works on iOS Safari and Android Chrome
- Lighthouse score: >90 Performance, >95 Accessibility

---

## Support

For framework questions, see workspace root `CLAUDE.md`.
For Thai cuisine authenticity, consult Thai cooking resources or culinary experts.
