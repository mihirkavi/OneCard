# README images

Images used by the root [README](../../README.md) of OneCard. They are presentation assets only; the app does not load them.

## Files

| File | What it is |
| --- | --- |
| `banner-light.png`, `banner-dark.png` | Title banner for light and dark GitHub themes, rendered from [`source/banner.html`](source/banner.html) with headless Chromium |
| `hero.jpg` | Framed desktop and phone screenshot used at the top of the README |
| `screenshots/recommend.jpg`, `cards.jpg`, `categories.jpg`, `dashboard.jpg` | Pages of the demo: a recommendation for a Whole Foods purchase, the card list, best cards by category and the dashboard. All card data is static demo data |

## Visual identity

OneCard's README follows the crisp look of consumer fintech: a **fanned wallet** of three cards, the front one tagged "Best pick", next to a "Shopping at → Best card" prompt that mirrors the recommendation form.

- **Fonts:** Poppins (bold, close to the geometric letters of the OC logo) for the headline and wordmark, Manrope for body text.
- **Colors:** navy `#1a1a2e` / `#16213e`, blue `#4a90d9` and purple `#8b5cf6` from `tailwind.config.js` and the live demo's gradient; the light banner uses `#f4f6fd` with navy ink.
- **Badges** use `8b5cf6`, `4a90d9`, `1a1a2e` and `9ca3af`. Emoji were dropped from section headers for a cleaner, product-like tone; the ✅ / 🧪 / 🔜 status markers stay because they carry meaning.
- The banner carries "Prototype · demo data · not financial advice" and shows no issuer names, card numbers or reward figures.
- **Re-render:** see [`source/README.md`](source/README.md).

## How they were made

Captured on 2026-10-26 from the live demo (https://mihirkavi.github.io/OneCard/) with headless Chromium at 1440 × 900 (desktop) and 390 × 844 (phone). The recommendation shot was taken after typing a merchant and amount into the form. Screenshots are framed in a browser window or phone outline by a small Playwright script, then saved as JPEG.

## Notes for agents

- Screenshots must show only public pages or demo data, never personal, financial or health information.
- Keep names lowercase with hyphens. When you replace an image, keep its file name so README links keep working, and update this table.
- Retake screenshots after visible interface changes so the README stays truthful.
