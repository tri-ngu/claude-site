# Portfolio Site

A personal portfolio website showcasing three projects: Gravity Flip (game), Grocery Planning Agent (AI app), and AI Agent Visualizer (educational tool).

**Live at:** https://tringu.site

## Tech Stack
- **Framework**: Next.js 16 with TypeScript and Tailwind CSS
- **Deployment**: Vercel with custom domain (tringu.site)
- **Static Assets**: HTML projects served from public folder
- **Repository**: https://github.com/tri-ngu/claude-site

## Project Structure
```
site/
├── app/
│   ├── page.tsx                           # Home page with project cards
│   ├── layout.tsx                         # Root layout with metadata
│   └── projects/
│       ├── gravity-flip/
│       │   ├── page.tsx                   # Project detail page (thumbnail + button)
│       │   └── game/page.tsx              # Fullscreen game page
│       ├── grocery-planner/page.tsx       # Links to external deployment
│       └── diagram/
│           ├── page.tsx                   # Project detail page (thumbnail + button)
│           └── fullscreen/page.tsx        # Fullscreen diagram page
├── public/
│   ├── gravity-flip.html                  # Game HTML
│   ├── gravity-flip-thumbnail.png         # Game thumbnail
│   ├── diagram.html                       # Diagram HTML
│   ├── diagram-thumbnail.png              # Diagram thumbnail
│   └── [other assets]
└── package.json
```

## Projects Included

### 1. Gravity Flip (`/projects/gravity-flip`)
- **Type**: Interactive browser game
- **URL**: https://tringu.site/projects/gravity-flip
- **Game Page**: https://tringu.site/projects/gravity-flip/game
- **Pattern**: Thumbnail with "Open Game in New Tab" button → dedicated fullscreen page
- **Description**: Navigate obstacles while flipping gravity. Progressive difficulty with 15+ obstacle types
- **Tech**: HTML5 Canvas, vanilla JavaScript
- **Features**: 
  - Parallax city background
  - Real-time score tracking with multipliers
  - Responsive canvas scaling

### 2. Grocery Planning Agent (`/projects/grocery-planner`)
- **URL**: https://tringu.site/projects/grocery-planner
- **External Link**: https://agent-two-iota.vercel.app
- **Pattern**: External link to deployed application
- **Description**: AI-powered meal planner that generates 14-day meal plans and Walmart shopping lists
- **Tech**: Node.js, Express, Claude AI, Anthropic SDK, Upstash Redis
- **Features**:
  - Food preference survey with visual card picker
  - Personalized meal plans based on constraints
  - Consolidated shopping lists with price estimates
  - Walmart store locator

### 3. AI Agent Visualizer (`/projects/diagram`)
- **Type**: Interactive educational visualization
- **URL**: https://tringu.site/projects/diagram
- **Fullscreen Page**: https://tringu.site/projects/diagram/fullscreen
- **Pattern**: Thumbnail with "Open Full Screen" button → dedicated fullscreen page
- **Description**: Learn how AI agents work through 6 progressive interactive stages
- **Tech**: SVG, vanilla JavaScript, HTML5
- **Learning Stages**:
  1. Basic LLM Request
  2. Tool Calling
  3. ReAct Loop
  4. Memory & Context
  5. Multi-Agent Orchestration
  6. Failure & Recovery

## Running Locally

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Current Setup
- **Host**: Vercel
- **Domain**: tringu.site (registered at Porkbun)
- **DNS**: A record pointing to 76.76.21.21
- **GitHub**: Auto-deploys on push to master branch

### Deploying Updates
```bash
git add .
git commit -m "Description of changes"
git push
# Automatically deploys to production
```

Or manually deploy:
```bash
vercel --prod
```

## Updating Embedded Projects

### Gravity Flip
If you update the game in `../Test/index.html`:
```bash
cp ../Test/index.html public/gravity-flip.html
```

### Diagram
If you update the diagram in `../diagram/index.html`:
```bash
cp ../diagram/index.html public/diagram.html
```

Note: Remember to update thumbnail images if project visuals change significantly.

### Grocery Planner
Already deployed separately at https://agent-two-iota.vercel.app - no local changes needed.

## Key Features

- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **Dark Mode Support**: Tailwind CSS dark mode enabled
- **Thumbnail + Fullscreen Pattern**: Lightweight project pages with dedicated fullscreen views for embedded content
- **Client Components**: Uses `'use client'` for interactive elements (buttons, links)
- **Static Generation**: All pages pre-rendered at build time for fast loading

## Notes
- Next.js App Router for modern file-based routing
- Custom domain (tringu.site) configured via Vercel DNS and Porkbun A record
- All deployed code available on GitHub (tri-ngu/claude-site)
- Production URL: https://tringu.site
