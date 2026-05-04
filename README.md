# Edmundo`s TCG BID

A polished static GitHub Pages MVP/prototype for a Macau Pokémon card auction and marketplace website.

## Included pages

- `index.html` — homepage / positioning / featured auction / payment overview
- `auctions.html` — auction listing mockup with live/upcoming/closed filters
- `auction-detail.html` — sample lot detail page
- `marketplace.html` — buy-now marketplace/search mockup
- `consign.html` — consign/sell onboarding page
- `faq.html` — FAQ and how-it-works page

## Stack

- Plain HTML
- Plain CSS
- Small vanilla JS for countdowns, mobile nav, and auction filters

No backend or build step required.

## Local preview

Open `index.html` directly in a browser, or serve the folder locally.

Example with Python:

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080/edmundo-tcg-bid/
```

## GitHub Pages deployment

### Option A — publish from the root of a dedicated repo

1. Create a new GitHub repo.
2. Upload the contents of this folder to the repo root.
3. In GitHub: **Settings → Pages**.
4. Set **Source** to deploy from the `main` (or `master`) branch `/ (root)`.
5. Save. Your site will publish automatically.

### Option B — publish from this folder inside an existing repo

GitHub Pages does not directly publish an arbitrary subfolder from the repo root unless you use a workflow.

This workspace now includes:

- `.github/workflows/deploy-edmundo-tcg-bid.yml`

That workflow deploys `edmundo-tcg-bid/` directly as the Pages artifact whenever changes are pushed to `main` or `master`, or when manually triggered from GitHub Actions.

## MVP business/ops notes captured in UI

- Macau/HK-friendly bank transfer payment flow
- Manual payment confirmation placeholder before release/shipping
- Seller verification and high-value lot review cues
- Local pickup and insured shipping language
- Admin-oriented trust and moderation notes

## Folder structure

```text
edmundo-tcg-bid/
  assets/
    css/styles.css
    js/app.js
  index.html
  auctions.html
  auction-detail.html
  marketplace.html
  consign.html
  faq.html
  README.md
```
