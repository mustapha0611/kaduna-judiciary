# Kaduna State Judiciary – Staff Bio Data Capture

A single-page landing site for Kaduna State Judiciary staff ID card registration. It shows staff what to prepare, previews the staff ID card in a short hero video, and links to the official Google Form where the biodata is collected.

## Features

- **Hero** with a serif headline, key points, and a looping card preview video (muted, inline on phones, with a pause/play button; starts paused for visitors who prefer reduced motion).
- **Before You Begin** checklist for photo and document preparation.
- **Biodata form section** with a data-privacy notice (Nigeria Data Protection Act 2023) and a button that opens the Google Form in a new tab.
- **Footer** with help desk contacts, privacy policy link, and the Kaduna State and Judiciary emblems.
- Responsive 4 / 8 / 12-column grid (mobile / tablet / desktop), visible keyboard focus, skip-to-content link.

## Tech stack

Plain static site – no build step, no dependencies.

- HTML5, CSS3 (custom properties for design tokens), vanilla JavaScript
- Fonts: [Inter](https://fonts.google.com/specimen/Inter) and [Merriweather](https://fonts.google.com/specimen/Merriweather) via Google Fonts
- Biodata collection: Google Forms

## Project structure

```
index.html                  Page markup
css/styles.css              Design tokens, layout grid, components
js/main.js                  Form link config, hero video controls, footer year
assets/images/              Kaduna State crest, Judiciary emblem, video poster frame
assets/videos/hero-video.mp4  Hero card preview video (H.264, muted)
```

## Run locally

Serve the folder over HTTP (opening `index.html` directly also works, but a server matches production):

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Configuration

| What | Where |
|---|---|
| Google Form URL | `FORM_URL` in `js/main.js` and the `href` of `#form-link` in `index.html` |
| Help desk phone / email, privacy policy link | Footer in `index.html` (marked `TODO`) |
| Colours and fonts | `:root` tokens at the top of `css/styles.css` |

### Design tokens

| Token | Hex | Use |
|---|---|---|
| Nigerian National Green | `#008751` | Buttons, hero headline |
| Deep Kaduna Forest Green | `#004D2C` | Header, footer, section titles |
| Kaduna Royal Gold | `#D4AF37` | Borders and accents only (not text) |
| Kaduna Sky Blue | `#1B6CA8` | Callouts, focus outline |
| Off-White Neutral | `#F4F7F5` | Section and card backgrounds |
| Dark Slate | `#111827` | Body text |

## Deployment

Any static host works (GitHub Pages, Netlify, Vercel, or the Judiciary's own server). Serve over HTTPS.

**GitHub Pages:** repository **Settings → Pages → Deploy from a branch → `main` / root**.

## Pre-launch checklist

- [ ] Footer help desk contacts and privacy policy link filled in
- [ ] Google Form is accepting responses and opens when signed out of Google
- [ ] Tested on Chrome, Firefox, Edge and Safari (desktop and iOS)
- [ ] Page load tested with slow 3G throttling in browser dev tools
- [ ] Permission confirmed to use the emblems and the person shown in the hero video
