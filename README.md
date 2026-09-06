# The Haunted Law Firm — Author Landing Page

A single-page landing site for **Robert Arrington's** *The Haunted Law Firm*
novel series: five books following a law firm whose clients happen to be
ghosts, vampires, and werewolves.

## What's here

- `index.html` — the full page, self-contained (styles, script, and all
  cover art / author photo embedded as data URIs — no external assets
  besides the Google Fonts stylesheet).

## The series

1. *The Ethics of Magic*
2. *The Heredity of Magic*
3. *A Cascade of Magic: Tales of the Haunted Law Firm*
4. *A Snowstorm of Magic*
5. *The Pathways of Magic*

## Viewing locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying

This is a static site with no build step — any static host (Render,
GitHub Pages, Netlify, Vercel) can serve `index.html` directly with an
empty build command and `.` as the publish path.
