# Ambassador Azshael Series — Author Landing Page

A single-page landing site for **A. D. Landor's** *Ambassador Azshael*
trilogy: a noir fantasy series following Azshael and Lytta through a war
fought between falling and rising.

## What's here

- `index.html` — the full page, self-contained (styles, script, and all
  cover art / author photo embedded as data URIs — no external assets
  besides the Google Fonts stylesheet).
- `og-image.png` — the social preview card shown when the link is posted
  (Slack, iMessage, X, Discord, etc.).

## The trilogy

1. *Angel Falling*
2. *Angel Rising*
3. *Angel of the Final Hours*

## Buy links

Every "Buy on Amazon" button links to an Amazon search for the exact
title + author on the storefront the visitor selects via the country
picker (US, UK, Canada, Australia, Germany, France, India, Japan),
defaulting from browser language and remembered via `localStorage`.

## Viewing locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Deploying

Static site, no build step — publish path `.`, empty build command.
