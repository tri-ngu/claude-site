# Portfolio Site

A personal portfolio website showcasing three projects: Gravity Flip (game), Grocery Planning Agent (AI app), and AI Agent Visualizer (educational tool).

## Tech Stack
- **Framework**: Next.js 16 with TypeScript and Tailwind CSS
- **Deployment**: Vercel (ready for custom domain)
- **Static Assets**: HTML projects served from public folder

## Project Structure
```
site/
├── app/
│   ├── page.tsx              # Home page with project cards
│   ├── layout.tsx            # Root layout with metadata
│   └── projects/             # Project detail pages
│       ├── gravity-flip/page.tsx
│       ├── grocery-planner/page.tsx
│       └── diagram/page.tsx
├── public/
│   ├── gravity-flip.html     # Copied from ../Test/index.html
│   └── diagram.html          # Copied from ../diagram/index.html
└── package.json
```

## Projects Included

### 1. Gravity Flip (`/projects/gravity-flip`)
- Browser game with gravity flipping mechanic
- Embedded via iframe from `public/gravity-flip.html`
- Tech: HTML5 Canvas, vanilla JavaScript

### 2. Grocery Planning Agent (`/projects/grocery-planner`)
- AI-powered meal planner with Walmart integration
- Links to live deployment: https://agent-two-iota.vercel.app
- Tech: Node.js, Express, Claude AI, Anthropic SDK

### 3. AI Agent Visualizer (`/projects/diagram`)
- Interactive educational tool showing how AI agents work
- Embedded via iframe from `public/diagram.html`
- Tech: SVG, vanilla JavaScript, 6 interactive stages

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Then open http://localhost:3000

## Building for Production

```bash
# Build static export
npm run build

# Start production server
npm start
```

## Deploying to Vercel

### Option 1: CLI
```bash
npm i -g vercel
vercel --prod
```

### Option 2: GitHub Integration (Recommended)
1. Create a GitHub repository
2. Push this code to your repo
3. Go to vercel.com and connect your GitHub
4. Select the site repo and deploy

### Option 3: Direct Upload
Go to vercel.com/new and drag/drop the site folder.

## Custom Domain Setup

Once deployed on Vercel:
1. Buy your domain
2. Go to Vercel project → Settings → Domains
3. Add your custom domain
4. Update DNS records at your domain registrar (follow Vercel's instructions)

## Updating Projects

### HTML Projects (Gravity Flip, Diagram)
If you update originals in `../Test/` or `../diagram/`:
```bash
cp ../Test/index.html public/gravity-flip.html
cp ../diagram/index.html public/diagram.html
```

### Grocery Planner
Already deployed separately - no changes needed.

## Notes
- Next.js App Router for modern file-based routing
- Tailwind CSS with dark mode support
- Project cards link to detail pages with embedded iframes
- Static HTML projects are self-contained
