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


## Observational science papers from commissioned instruments

A separate **Science with the instrument** section appears only for projects with confirmed peer-reviewed astrophysical publications that analyse data actually collected by that named instrument. The list is curated in `instrument-science-papers.js`; do not populate it with commissioning, AIV, simulations or science-case papers. The section is hidden entirely for projects not represented in the data object, including commissioned instruments whose observational science papers have not yet been verified.

As of 31 October 2026, the first verified science-paper sections are SHARK-NIR and CHEOPS. Studies combining multiple instruments are labelled so that nondetections and combined-method discoveries are described accurately. See `INSTRUMENT_SCIENCE_PUBLICATIONS.md` for detailed references and inclusion criteria.

## Research-group people directory

The People page lists 27 group members supplied by the research group in `people-data.js`. Each card gives a short source-linked research summary and project links, with a search filter and responsive photo/initials portrait. Source checks and photographic attribution are documented in `PEOPLE_SOURCES.md`. Names are protected from automatic translation via `protected-names.json`. Specific titles and group membership should be reviewed by the relevant people.

**Build note:** `build_pages.py` intentionally preserves the enriched Projects, Project Details, People, Search, and Credits pages when they already exist, rather than replacing them with older generator templates. These pages can be edited directly.

## People profiles — 31 October 2026 update

The People page provides 27 short biographies and expandable, source-based longer profiles, with links to research, instruments and institutional sources. The portrait of Kalyan Kumar Radhakrishnan Santhakumari was supplied by the member and stored locally at `assets/people/kalyan-radhakrishnan.jpg` to avoid third-party image dependencies. Other publicly labelled consortium portraits remain external with attribution and initials fallback. This does not grant new rights to third-party images. Membership, roles and text are subject to member review.