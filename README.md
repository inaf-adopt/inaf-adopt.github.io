# ADOPT research group — website

**Site:** https://inaf-adopt.github.io/  
**Projects:** https://inaf-adopt.github.io/projects.html  
**Repository:** https://github.com/inaf-adopt/inaf-adopt.github.io

The website is a lightweight, accessible static site built with HTML, CSS and plain JavaScript. It is an editable public-facing research-group **prototype**; descriptions of instruments and missions are based on linked public technical references, but the team's precise role and institutional branding still require approval.

## Project directory

The main directory contains 19 projects and the Past Projects archive contains 4 entries. Each has a dynamic detail page at `project.html?id=PROJECT_ID`, including: plain-language overview, scientific goals, technical background, verified design specifications where available, ADOPT-related context and external project/documentation links.

**Science editorial status:** Technical performance and mission timelines refer to design documents available by October 2026. Project-specific contributions by ADOPT should be checked with relevant project leads. The entries for TRACE-AO and OSCAR have no unambiguous verified public page; NIRVANA-VIS and Space Debris have only partial public documentation; TDT is tentatively linked to the Time Domain Telescope concept; HAYDIN may refer to HAYDN and requires confirmation. No unverified association is presented as certain. See `PROJECT_SOURCES.md`.

## Site features

- Full-text client-side site search: `search.html` and `search-index.js`, including all project content, specifications and references.
- English as the authoritative language, with a third-party GTranslate language selector. Scientific names and staff identities are protected by `protected-names.json`, `protected-names.js` and `notranslate` markers.
- Responsive layout, readable fonts, accessible focus indicators and colour contrast; designed for phones, tablets, laptops and desktop screens.
- Project descriptions stored in `site-data.js`, so content updates do not require manually modifying 23 pages.

## Maintenance

- Edit `site-data.js` for project data. Keep each project's existing `id` stable so links remain valid.
- Each record has a `description`, `science` list, `technical` text, `specs` pairs, `contribution` note and `refs` list of `[label, URL]` pairs. For unverifiable identifiers keep `pending: true`; for partial matches mark `partial: true` and explain uncertainty in the visible text.
- Adjust `script.js` for dynamic project sections or site search, `styles.css` for design. Update `protected-names.json` and regenerate `protected-names.js` when adding protected names.
- Run `python3 build_search_index.py` (requires BeautifulSoup) only after changing static HTML; project metadata is indexed directly at runtime.
- `build_pages.py` is a legacy HTML authoring script. Running it can overwrite hand-edited static pages; review generated diffs before committing. It does not generate the curated `site-data.js` database.
- Test changes locally with `python3 -m http.server 8000`, then open http://localhost:8000/.

## Publishing and rights

GitHub Pages deploys the `main` branch from `/ (root)` to https://inaf-adopt.github.io/. No framework build is necessary.

The new organization repository does not add a license while institutional rights are reviewed. The precursor personal repository published material with a CC0 dedication; absence of a new license does not revoke previously granted rights. Project names, external webpages, official logos, photographs and institutional material may carry their own usage requirements. Original illustrative SVGs are in `assets/`.

## Selected publications on project pages

Each project detail page now has selected scientific literature, loaded from `project-papers.js`: up to three recent research papers and two defining papers, with separately labelled conference posters, presentations and abstracts where applicable. Bibliographies are curated snapshots (30 October 2026), not automated exhaustive or always-current feeds. Incomplete/ambiguous projects explicitly show unavailable bibliography notices. To update publications, edit the entry keyed by project ID in `project-papers.js`; new URLs must be trusted HTTPS publisher, DOI or research archive links.