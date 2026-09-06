# The Haunted Law Firm — Author Landing Page

A single-page, dependency-free landing page for **Robert L. Arrington's**
*The Haunted Law Firm* book series, built to sell the books straight to
Amazon in the reader's own country.

## What's here

- `index.html` — the page (hero, the five books, author bio, buy CTA).
- `assets/style.css` — the gothic/legal-thriller visual theme.
- `assets/script.js` — the country picker that rewrites every "Buy on
  Amazon" link to the visitor's chosen Amazon storefront.

## The series

1. *The Ethics of Magic*
2. *The Heredity of Magic*
3. *A Cascade of Magic: Tales of the Haunted Law Firm*
4. *A Snowstorm of Magic*
5. *The Pathways of Magic*

## How the multi-country buy links work

Amazon has a separate storefront per country (`amazon.com`, `amazon.co.uk`,
`amazon.de`, ...), each with its own local product listing. Rather than
hardcode possibly-wrong ASIN links, every "Buy on Amazon" button links to
an Amazon search for the exact book title + author on the storefront the
visitor selects (defaulting to a guess from their browser language, and
remembered via `localStorage`). This always lands the reader on the
correct local listing for that title.

## Viewing locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
