# Portfolio Site - Work Log

**Session Start**: April 30, 2026
**Current Status**: ✅ Deployed and Live at https://tringu.site

## Summary of Work Completed

### 1. Project Structure & Setup
- Created project detail pages for all 3 showcase projects
- Implemented responsive grid layouts for project cards
- Added dark mode support throughout

### 2. Gravity Flip Project (`/projects/gravity-flip`)
**Changes Made:**
- Created project detail page with thumbnail preview
- Implemented "Open Game in New Tab" button pattern
- Created dedicated fullscreen game route at `/projects/gravity-flip/game`
- Added real thumbnail image (gravity-flip-thumbnail.png)
- Added `'use client'` directive for button interactivity

**Why This Pattern:**
- Keeps project pages lightweight (no running game on detail page)
- Game runs at full resolution on dedicated page
- Better UX: thumbnail shows what it is, dedicated page for full experience

**Files Changed:**
- `app/projects/gravity-flip/page.tsx` - Updated with thumbnail + button
- `app/projects/gravity-flip/game/page.tsx` - Created (fullscreen game)
- `public/gravity-flip-thumbnail.png` - Added thumbnail image

### 3. AI Agent Visualizer (`/projects/diagram`)
**Changes Made:**
- Applied same "thumbnail + fullscreen" pattern as Gravity Flip
- Created project detail page with thumbnail preview
- Implemented "Open Full Screen" button
- Created dedicated fullscreen route at `/projects/diagram/fullscreen`
- Added real thumbnail image (diagram-thumbnail.png)
- Added `'use client'` directive for button interactivity

**Files Changed:**
- `app/projects/diagram/page.tsx` - Updated with thumbnail + button
- `app/projects/diagram/fullscreen/page.tsx` - Created (fullscreen diagram)
- `public/diagram-thumbnail.png` - Added thumbnail image

### 4. Grocery Planning Agent (`/projects/grocery-planner`)
**Status:** ✅ Already complete
- Links to external deployment at https://agent-two-iota.vercel.app
- No changes needed

### 5. Home Page Refinements
**Changes Made:**
- Removed subheading "A collection of web projects built with modern technologies."
- Left just "Projects" as the header title
- Cleaner, more minimal aesthetic

**Files Changed:**
- `app/page.tsx` - Removed subtitle paragraph

### 6. GitHub & Deployment Setup
**Steps Taken:**
1. Created GitHub repository: https://github.com/tri-ngu/claude-site
2. Pushed all code to master branch
3. Linked project to Vercel CLI (`vercel link --yes`)
4. Connected GitHub repository to Vercel
5. Deployed to Vercel production environment

**Result:**
- Auto-deployment configured on push to master branch
- Vercel project: https://vercel.com/tri-ngus-projects/site

### 7. Custom Domain Setup (tringu.site)
**Steps Taken:**
1. Added domain to Vercel: `vercel domains add tringu.site`
2. Created A record at Porkbun:
   - Type: A
   - Host: @ (root domain)
   - Value: 76.76.21.21
   - TTL: 3600
3. Verified DNS resolution: ✅ tringu.site → 76.76.21.21
4. Verified HTTPS connectivity: ✅ 200 OK response

**Result:**
- Portfolio site now live at https://tringu.site
- All subpages accessible:
  - https://tringu.site/projects/gravity-flip
  - https://tringu.site/projects/gravity-flip/game
  - https://tringu.site/projects/diagram
  - https://tringu.site/projects/diagram/fullscreen
  - https://tringu.site/projects/grocery-planner

## Technical Decisions

### Thumbnail + Fullscreen Pattern
**Why chosen:**
- Keeps project detail pages lightweight
- Better user experience: preview on main page, full experience on dedicated page
- Allows game/diagram to run at maximum resolution without constraints
- Consistent pattern across both embedded projects (Gravity Flip and Diagram)

**How it works:**
1. Project detail page shows static thumbnail image
2. "Open in New Tab" / "Open Full Screen" button overlays the thumbnail
3. Button opens dedicated fullscreen route in new tab
4. Fullscreen page renders full iframe/game at full viewport size

### Client Components
**When used:**
- Project detail pages with interactive buttons use `'use client'` directive
- Required for `onClick` event handlers in Next.js 16 App Router

**Why:**
- Server components can't have event handlers
- Buttons need click handlers to open URLs in new tabs

## Git Commits Made

1. **49e7747** - Build portfolio site with project showcase and embedded games
   - Created project detail pages
   - Implemented thumbnail + fullscreen pattern
   - Added all HTML assets and thumbnails

2. **c629127** - Remove subheading from home page
   - Simplified header to just "Projects" title

## Files & Structure

### New Files Created
- `app/projects/gravity-flip/game/page.tsx` - Fullscreen game page
- `app/projects/diagram/fullscreen/page.tsx` - Fullscreen diagram page
- `public/gravity-flip-thumbnail.png` - Game thumbnail
- `public/diagram-thumbnail.png` - Diagram thumbnail

### Modified Files
- `CLAUDE.md` - Updated with current deployment info
- `app/page.tsx` - Removed subtitle
- `app/projects/gravity-flip/page.tsx` - Thumbnail + button implementation
- `app/projects/diagram/page.tsx` - Thumbnail + button implementation

## Performance Notes

- All pages prerendered at build time (static generation)
- Build time: ~20s
- Next.js 16.2.4 with Turbopack compiler
- Vercel Edge Network enabled for global caching
- Dark mode fully supported

## Future Considerations

### Potential Improvements
1. Add meta descriptions and OG tags for social sharing
2. Add 404 page with custom design
3. Implement analytics (Vercel Analytics)
4. Add animation/transition improvements
5. Create About page for portfolio
6. Add contact/email link in header

### Maintenance Tasks
- If gravity-flip.html is updated, remember to:
  - Copy new version: `cp ../Test/index.html public/gravity-flip.html`
  - Update thumbnail image if visuals change significantly
  - Redeploy: `git push` (auto-deploys via GitHub)

- If diagram.html is updated, remember to:
  - Copy new version: `cp ../diagram/index.html public/diagram.html`
  - Update thumbnail image if visuals change significantly
  - Redeploy: `git push` (auto-deploys via GitHub)

### DNS & Domain
- Custom domain configured: tringu.site
- DNS Provider: Porkbun (A record: 76.76.21.21)
- Hosting: Vercel
- Auto-deployment on push to master branch

## Deployment Instructions for Future Reference

### Making Changes
1. Make code changes locally
2. Test with `npm run dev`
3. Commit: `git commit -m "Description"`
4. Push: `git push` (auto-deploys to production)

### Manual Deployment
```bash
vercel --prod
```

### Viewing Logs
```bash
vercel logs https://tringu.site
```

### Checking Domain Status
```bash
vercel domains inspect tringu.site
```

## Testing Checklist ✅

- [x] Home page loads and displays project cards
- [x] All project links functional
- [x] Gravity Flip thumbnail displays correctly
- [x] Gravity Flip "Open Game in New Tab" button works
- [x] Game page loads at `/projects/gravity-flip/game`
- [x] Diagram thumbnail displays correctly
- [x] Diagram "Open Full Screen" button works
- [x] Fullscreen page loads at `/projects/diagram/fullscreen`
- [x] Grocery Planner link redirects to external app
- [x] Dark mode works across all pages
- [x] Responsive design works on mobile/tablet/desktop
- [x] Custom domain (tringu.site) resolves correctly
- [x] HTTPS working correctly
- [x] All pages accessible from live domain

## Session Summary

Successfully built, deployed, and configured a professional portfolio website showcasing three projects. The site demonstrates best practices for embedding content (games, visualizations) while keeping project pages lightweight and performant. All work is version-controlled on GitHub with auto-deployment to Vercel enabled. Custom domain is fully configured and the site is live at https://tringu.site.
