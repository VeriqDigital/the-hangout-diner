# Sparkle & Shine Cleaning Co.

A fictional residential cleaning company website concept created by [Veriq](https://www.veriqdigital.com/). Built on the existing Next.js 16 App Router, React 19, and Tailwind 4 foundation.

## Development

```sh
npm install
npm run dev
```

On Windows with PowerShell script execution restricted, use `npm.cmd` for the same commands.

```sh
npm run lint
npm run build
npm start
```

## Public website

- `/`: editorial hero, featured services, keyboard-accessible room checklist, company standards, lifestyle imagery, process, service area, and FAQ.
- `/about`: company philosophy and practical cleaning standards.
- `/services`: six services with example scope, best-for guidance, and service-specific quote entry points.
- `/contact`: introduction to the three-step quote experience and fictional contact details.

Public services come only from `data/services.ts`; FAQ content is in `data/faq.ts`. Brand, contact, and service-area values live in `config/site.ts`. Shared design tokens and responsive styles are in `app/globals.css`.

`LeadProvider`, `QuoteButton`, and `LeadModal` provide one shared quote flow. Native dialogs plus explicit focus containment support keyboard navigation, Escape, focus restoration, and background scroll locking. Steps validate the visible fields and preserve entries when going back. Finishing the demo clears the form. There are no API requests, email delivery, analytics, database writes, or browser storage for form data.

## Concept boundaries

Sparkle & Shine is not an operating company. The phone number is fictional. All marketing pages inherit noindex/nofollow metadata; `robots.txt` disallows crawling, and the existing `X-Robots-Tag` response header remains in place. No LocalBusiness JSON-LD is emitted.

Sanity configuration, schemas, client utilities, and `/studio` remain available. Public marketing pages neither fetch Sanity services nor mount `SanityLive`. Reconnecting content later should use an adapter to the `DemoService` presentation shape and restore live updates deliberately. The Studio still uses the existing Sanity environment configuration.

## Assets

Existing local home photos serve as concept imagery, not customer results or team biographies. Replace the image paths and descriptive alt text in the local data/components when commissioned photography is available. No additional remote image hosts were added.

Manrope and Plus Jakarta Sans are bundled as Latin variable WOFF2 files through `next/font/local`, so builds and visitors do not need Google Fonts requests. Their SIL Open Font Licenses are in `app/fonts/`.

## Verification

The implementation is checked with lint and a production build. Local browser-review artifacts are ignored under `.qa/`; they are not application dependencies. The responsive review covers 320, 375, 390, 430, 768, 1024, 1280, 1440, and 1920 pixels, with interaction checks for quote steps, validation, service preselection, focus, menu navigation, FAQ, and checklist tabs.

Real business content, commissioned photography, CMS reconnection, and actual booking/delivery are future work. Form delivery must remain disabled for this fictional portfolio concept.
