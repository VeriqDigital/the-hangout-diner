# The Hangout Diner

A restaurant website concept for The Hangout Diner, 1014 2nd St, Perry, IA 50220. Built with Next.js 16 App Router, React 19, TypeScript, and an embedded Sanity Studio.

## Run locally

```sh
npm install
npm run dev
```

On Windows with restricted PowerShell scripts, use `npm.cmd`. The public site works without environment variables. Copy `.env.example` to `.env.local` when connecting Sanity.

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

## Pages and architecture

- `/`: food-first hero, active announcements, menu preview, local reviews, family-owned introduction, and hours/location.
- `/menu`: ordered categories and readable menu rows, optional prices/photos, and unpublished/unavailable items excluded.
- `/about`: a short, factual introduction.
- `/contact`: hours, phone, directions, Google map, and social links.
- `/studio`: Sanity Studio, isolated from the public header/footer. Displays setup instructions when unconfigured.

The public shell lives in `app/(site)`. Server components read published content through `sanity/lib/content.ts`. Only mobile navigation needs client-side application state. Native dialogs support keyboard focus containment, Escape, scroll locking, and focus restoration. Phone/menu/directions remain accessible in the mobile action bar.

The visual system uses locally hosted Fraunces and Manrope, cream backgrounds, deep plum accents, and restrained diner typography. CSS is in `app/globals.css`; font licenses are in `app/fonts`. No external font requests or animation libraries are needed.

## Sanity setup

Set:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION` (optional; defaults to `2026-09-02`)

Use a publicly readable dataset. No browser/server read token is required by this implementation. Add localhost and the final preview/production origin as credential-enabled CORS origins in Sanity Manage for Studio sign-in. Give Christina an appropriate editor account in that Sanity project. Restart/rebuild after changing environment variables.

Studio navigation:

| Area                     | Content                                                                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Menu → Categories        | Name, generated menu link, description, display order                                                                                      |
| Menu → Menu items        | Dish name, description, optional display price, category reference, photo/alt text, homepage feature toggle, availability, display order   |
| Specials & Announcements | Headline, details, optional image, enabled toggle, start/end date-times, optional action link                                              |
| Business Information     | Singleton contact details, weekly split hours, social/directions links, main photos, optional verified Google rating and real testimonials |

Publish categories first, then their items. Only items with **Available to order** enabled appear. Empty categories disappear. Price accepts text such as a dollar amount or variable pricing and is never mandatory. Featured available items appear below the homepage menu preview.

Announcements show only when enabled, on/after their start instant and before their end instant. Blank boundaries are allowed. Invalid dates fail closed. Studio validates that the end follows the start. Date comparisons use UTC instants, so the editor's displayed timezone offset is respected. For a Perry daily special, check the Studio date picker's timezone and use the intended America/Chicago time. Set an end time for temporary closures/specials.

Opening hours allow separate morning and evening periods. Duplicate weekdays, overlapping periods, and closing-before-opening are rejected. Missing days are unconfirmed, never inferred closed or open.

Public pages render per request and fetch fresh published Sanity data; React cache deduplicates shell/page reads in the same request. No persistent cache keeps a scheduled announcement visible past its end. This deliberately favors current restaurant information over static generation. There is no unpublished-content preview or live client subscription.

## Content boundaries and fallbacks

`config/site.ts` holds the business facts supplied in the brief. Hours use the brief's Monday/Wednesday–Saturday 7am–2pm and 4pm–8pm, Tuesday closed, and Sunday **Call to confirm**. The existing B12 site's hours conflict with this schedule, so confirm the full week before launch.

Without Sanity, `data/menu-preview.ts` contains only three dish names from the existing menu: Biscuits & Gravy, Classic Burger, and Pork Tenderloin Sandwich. It is clearly labeled a preview and contains no invented prices, recipes, or availability promises. Once Sanity is configured, this fallback is not used—even for an empty dataset or a failed request. Empty/error states offer a real phone action.

Business settings and the two sourced images keep the site useful if the CMS is unavailable. A configured CMS outage logs a concise server error, hides specials, and shows a menu-unavailable message. If business details change, update the source defaults too so outage fallback information stays accurate.

Approximate review figures in the unconfigured concept come from the supplied project brief (around 4.7 stars and 40+ Google reviews), with a link to current Google reviews. Once business settings exist, numeric ratings display only when entered there. No fabricated quotations or aggregate-rating structured data are included. Real reviews can be added with a required original source URL.

## Photography and source notes

Reviewed 2026-09-19:

- Existing website: https://the-hangout-diner.b12sites.com/
- Existing menu and verified dish names: https://the-hangout-diner.b12sites.com/menu
- `public/images/tenderloin.jpg`: existing site's photo labeled Pork Tenderloin Sandwich, https://cdn.b12.io/client_media/SfxV7dqP/1bd2722e-e699-11ef-b3b8-0242ac110002-jpg-regular_image.jpeg
- `public/images/storefront.jpg`: existing site's storefront photo, https://cdn.b12.io/client_media/SfxV7dqP/fc462654-e6a1-11ef-8e94-0242ac110002-jpg-hero_image.jpeg
- Facebook and Instagram links were taken from the existing menu page.

No generated food images or unrelated stock photos are used. Replace the primary food and story images in Business Information; item/special images are edited on their respective documents. Alt descriptions and focal points are supported. The two existing photos are reused in this private concept; obtain Christina's preferred originals and confirm production use before launch.

## Search and sharing

The concept defaults to noindex/nofollow metadata, a disallow-all robots file, and X-Robots-Tag headers. Studio remains noindex in either mode.

Set `NEXT_PUBLIC_SITE_URL` to the actual hosted origin before sharing, so OpenGraph images resolve correctly. Canonicals are omitted until that origin is supplied; localhost is only the development metadata base. Set `SITE_INDEXABLE=true` and rebuild only when ready for the production website. This enables the sitemap and public crawling.

Restaurant JSON-LD includes the supplied business name, phone, address, social links, and known opening periods. Unconfirmed hours, fabricated price ranges, and ratings are omitted. The site has a new icon and generated OpenGraph share image.

## Verification and handoff

Six content tests exercise announcement boundaries/timezones, missing/split hours, edited schedules, link validation/directions, and the actual GROQ query's ordering/availability rules. Local browser artifacts and tools live under ignored `.qa/` and are not application dependencies.

Browser review covers home/menu/about/contact at 320, 390, and 768 pixels, plus desktop at 1440. Automated WCAG A/AA checks cover all four public pages, the Studio setup state, and the 404 page; mobile dialog and category-link interactions are checked too.

Before presenting/launching:

1. Review the concept with the supplied split hours; confirm Sunday and holiday hours with Christina.
2. Get the complete current menu, prices, any real specials, and dietary information she wants listed.
3. Replace repeated food photography with a small set of approved, high-resolution restaurant images.
4. Connect the intended Sanity project, publish content, and verify editor login/CORS and the real published-content workflow.
5. Verify current Google review figures and any exact testimonials before publishing them.
6. Set the real hosted URL for social previews. Keep indexing off while it is a sales concept.

No deployment, Sanity document mutation, customer messaging, ordering system, or contact-form backend is performed by this redesign.
