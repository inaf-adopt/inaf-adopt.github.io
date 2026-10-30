# ADOPT — INAF Padova research-group website (preview)

**Website:** https://inaf-adopt.github.io/

This is the organization-hosted copy of the static website originally developed at https://github.com/kalyanradhakrishnan/adopt-oapd. The website is built with HTML, CSS and JavaScript.

**Editorial status:** Prototype. Scientific content, group membership, affiliations, publications, institutional branding and contact details must be reviewed before the site is presented as officially endorsed by INAF.

## Features

- Home: `index.html`
- Research: `research.html`
- Projects: `projects.html` and `project.html?id=mavis` (project detail pages)
- People: `people.html`
- Publications: `publications.html`
- Search: `search.html` using `search-index.js`
- Contact: `contact.html`
- Language selector: third-party automatic translation, with English as the authoritative source and names protected by `protected-names.js` / `protected-names.json`.

## GitHub Pages

The repository `inaf-adopt/inaf-adopt.github.io` should publish from the `main` branch and `/ (root)` directory.

## Local preview

Run `python3 -m http.server 8000` in the repository root and visit http://localhost:8000/.

Project metadata is in `site-data.js`. Site features and styling are in `script.js` and `styles.css`. Generators are `build_pages.py` and `build_search_index.py`.

## Rights

No new LICENSE file has been added as requested when creating the organization repository. The original repository includes a CC0 1.0 Universal dedication; excluding its license file here does not revoke any rights already granted. External imagery, trademarks, institutional branding and research material may have separate restrictions. See `credits.html`.
