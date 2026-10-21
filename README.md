# Vhuthuhawe Sikhauli — Developer Portfolio

A restrained, responsive portfolio built with React 18, TypeScript, Vite and Three.js via React Three Fiber. Styling uses plain CSS and design tokens; there is no UI component library.

## Requirements

- Node.js 20.19+ (or a compatible current LTS release)
- npm 10+

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run typecheck
npm run build
npm run preview
```

The build runs TypeScript project checks before Vite bundles the app.

## Structure

```text
src/
├── components/
│   ├── Icons.tsx
│   ├── SectionHeading.tsx
│   ├── SiteHeader.tsx
│   └── ThreeHero.tsx
├── data/
│   ├── experience.ts
│   ├── projects.ts
│   └── skills.ts
├── hooks/
│   ├── useMediaQuery.ts
│   ├── useReducedMotion.ts
│   └── useScrollReveal.ts
├── sections/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── styles/
│   ├── components.css
│   ├── global.css
│   ├── layout.css
│   └── tokens.css
├── App.tsx
├── main.tsx
└── vite-env.d.ts
public/
└── robots.txt
```

## Add a project

1. Open `src/data/projects.ts`.
2. Add an object matching the `Project` interface:
   - `name`, `description`, `stack`, `featured`, `category`, `demoUrl`, and `sourceUrl`.
3. Mark only 2–3 projects as `featured` to keep the hierarchy intentional.
4. Use real project URLs. If a project is private or not deployed, replace the demo placeholder with a contact anchor or a clearly labelled case-study page.
5. Run `npm run typecheck` and `npm run build`.

Skills are maintained in `src/data/skills.ts`, and career history in `src/data/experience.ts`. The typed data layer keeps content independent from presentation.

## Personalise before publishing

- Add your CV PDF at `public/Vhuthuhawe-Sikhauli-CV.pdf`; the hero download expects this path.
- Replace the LinkedIn profile URL in `Hero.tsx` and `Contact.tsx` with the exact profile URL.
- Confirm the Mavco live URL and the HausPro / Delivery Request System demo and source links. These currently use known project URLs or safe placeholders where a verified public link was not available.
- Add a real `public/og-image.png` (1200×630) for social previews.
- If deploying under a custom domain, add a canonical URL and `og:url` metadata in `index.html`.
- Review the public CV and contact details before publishing.

## Design and performance notes

- **Visual system:** near-black surfaces, mint accent, restrained borders, Inter for UI copy and DM Mono for metadata. Layout uses a 1160px content width with responsive spacing.
- **3D:** one low-poly wireframe icosahedron, capped at DPR 1.5, no shadows or expensive post-processing. The Canvas is mounted only while in view and the document is visible; reduced-motion and WebGL-unavailable states use a CSS fallback.
- **Code splitting:** projects, experience and contact sections are lazy-loaded. The 3D component is isolated so it can be extracted to a dynamic import if further bundle reduction is needed.
- **Accessibility:** semantic sections and headings, skip link, keyboard-visible focus, labelled icon links, reduced-motion handling, and responsive mobile navigation.
- **SEO:** title, description, Open Graph basics and `robots.txt` are included. Replace the Open Graph image placeholder before launch.
- **Lighthouse:** the implementation is designed to keep the scene light, but a score above 90 cannot be guaranteed without measuring the production build on target devices and networks. Consider self-hosting subsetted WOFF2 fonts and analysing the bundle before launch.
