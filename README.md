# ARIANBOARD — Result Portal

Premium blue-and-white, bilingual (Bangla/English), mobile-friendly result-search frontend.

## Deploy free with GitHub Pages (Android-friendly)

1. Create a GitHub repository named `arianboard` (or any name).
2. Upload **all three files** from this folder: `index.html`, `styles.css`, `app.js`.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. Wait for the published URL shown on the Pages settings screen.

If the repository is named `YOURNAME.github.io`, the site usually publishes at `https://YOURNAME.github.io/`. For another repository, it usually publishes at `https://YOURNAME.github.io/arianboard/`.

## Important: live results are not included

GitHub Pages serves static files; it does not run a private backend. This project does **not** scrape government websites, bypass CAPTCHA, or invent official results. The current search form explains that live official data is not connected and links to official result portals.

To add real results:
- Obtain an authorized API/data agreement or a trustworthy dataset whose use is permitted.
- Add a server-side backend/API. Keep API keys and credentials on the server, never in `app.js`.
- Validate exam, year, board, roll and registration server-side; rate-limit requests and avoid logging personal student data unnecessarily.
- For archived years, import only legally obtained data and display its source/year coverage.
- Use `renderVerifiedResult(data)` in `app.js` only after the backend returns verified data. Adjust field mapping to the actual source schema.
- Keep the `CHECK BY ARIANBOARD` branding, but also show source and retrieval date. Do not imply government affiliation.

## Current features

- Responsive mobile-first layout
- Bangla / English toggle
- Examination, year (1990-current), board, roll, registration and result type fields
- Links to official Bangladesh result portals
- Result print / save PDF hook for future verified result integration
- No fake student data and no fake official result
