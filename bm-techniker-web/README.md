# B.M Techniker website

Next.js App Router site for [bmtechniker.com.au](https://bmtechniker.com.au/).

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4 (`tailwind.config.mjs` + `src/app/globals.css` `@theme`)
- Framer Motion, Lucide React
- Shadcn-style UI (`components/ui/button`, Radix Slot, CVA)
- Radix Dialog (mobile navigation)

## Routes

| Path | Purpose |
|------|---------|
| `/` | Home: hero, trust, services preview, contact teaser |
| `/services` | Service detail sections with anchors (`#logbook`, `#oem-parts`, `#diagnostics`, `#repairs`) |
| `/contact` | Booking form (`#booking`), hours, map placeholders |
| `/privacy-policy` | Privacy copy linked from the form and footer |

Replace labelled `ImagePlaceholder` blocks with assets under `public/images/` when ready.

## Brand colours (logo-accurate)

- Red: `#D33A3B` (`brand-red`)
- Yellow: `#FEC00A` (`brand-yellow`)

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

Open [http://localhost:3000](http://localhost:3000).

## Project location

The app lives in this folder because `create-next-app` cannot use the parent directory name (`B.M techniker`) as an npm package name.
