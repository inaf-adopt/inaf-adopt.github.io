# ADOPT — INAF Padova research-group website (concept v1)

A responsive, static research-group website concept designed for GitHub Pages, Cloudflare Pages or INAF-managed static hosting.

**Editorial status:** Preview only. This site is **not an official INAF website** until the group reviews and approves it. Branding, people, roles, the bibliography and group contact address must be verified before launch.

## Contents

- `index.html`: homepage
- `research.html`: thematic overview with interactive optical correction explainer
- `projects.html`: filterable directory of six research/instrumentation projects
- `project.html?id=mavis`: reusable project-detail template; IDs are `mavis`, `morfeo`, `soxs`, `ingot`, `nirvana`, `shark`
- `people.html`: team overview and clearly labelled roster placeholder
- `publications.html`: verified search destinations, not an invented bibliography
- `contact.html`: INAF Padova institutional contact details
- `credits.html`: copyright and source notices
- `site-data.js`: edit projects (names, summaries, reference links) in one file
- `styles.css`: layout, colour, typography, mobile responsiveness
- `script.js`: navigation, project rendering and filtering, reveal effects and comparison slider
- `assets/`: original vector artwork and non-institutional illustrative logo

## Preview locally

Option 1: open `index.html` in a browser; all pages should work.

Option 2: for local web-server routing: from this folder run:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000/.

## Publish on GitHub Pages (simplest route)

1. Create a GitHub repository named `adopt-website` (preferably under an INAF/team organisation).
2. Upload the **contents of this directory** to the repository root.
3. In repository **Settings → Pages**, choose **Deploy from a branch**, `main`, `/ (root)` and save.
4. The expected public URL follows `https://USERNAME.github.io/adopt-website/` (replace USERNAME with the actual organisation/user).
5. Optionally, arrange a group-approved INAF subdomain. Configure DNS and GitHub Pages custom domain using the official GitHub instructions. Do **not** publish an institutional domain without INAF IT approval.

All internal site links are relative, so project paths work within a GitHub Pages repository subdirectory.

## Alternative: Cloudflare Pages

Connect the same GitHub repository through Cloudflare Pages → **Connect to Git**. Use a static/no-framework project with no build command and output folder `.` (repository root). Each push to the main branch updates production; pull requests can receive preview URLs.

## Editorial checklist before public release

- [ ] Confirm what ADOPT stands for (if an official expansion is used).
- [ ] Confirm the complete project selection and group-specific contributions; current descriptions are high-level and non-exclusive.
- [ ] Replace or approve the concept logo; use official INAF logos only with permission.
- [ ] Obtain approved names, biographies, headshots, institutional affiliations and ORCIDs.
- [ ] Replace NASA ADS search links with actual bibliography and DOI/ADS links.
- [ ] Add group-approved email address and official research-group contact.
- [ ] Review institutional website and privacy policies and IT/security requirements.
- [ ] Review scientific copy and instrument status changes before release.
- [ ] If news is added later, use dated real news only.
- [ ] Set up a custom domain only after approval; then add canonical/OG URLs and sitemap.

## External sources and image notices

Project reference websites are linked from individual project pages and `credits.html`. Graphics in this archive are original generated SVG artwork (not photos and not official institutional logos). The interactive AO comparison is illustrative, not a quantitative simulation.

## Maintenance

- To update project cards and details, edit `site-data.js`.
- To adjust branding/colours, edit CSS custom properties at the top of `styles.css`.
- To add/change a page, edit the standalone `.html` file (the `build_pages.py` file was included as a reproducible authoring aid; rerunning it overwrites the HTML pages, so edit the script as well if using it later).

No dependencies, package manager, framework build pipeline, data collection, web services or external fonts are needed.

## Site search and translation (October 2026)

- **Search:** The magnifying-glass icon opens `search.html`. Search happens entirely in the visitor’s browser and covers the original English content of the static pages and all project descriptions. The search index is generated with `python build_search_index.py` (requires `beautifulsoup4`); rerun the indexer after changing HTML pages. Project metadata is sourced directly from `site-data.js` and does not need manual indexing. Shareable URLs work as `search.html?q=wavefront`. Keyboard shortcuts: `/` or Ctrl/Cmd+K.
- **Translation:** The language chooser in the header uses the third-party **GTranslate** free widget (`cdn.gtranslate.net/widgets/latest/dropdown.js`) with English as the original and a broad selection of supported languages. It is not a locally hosted translation engine. An external fallback opens Google Translate if the widget cannot load. Machine translations may contain errors, especially in technical terms, and the English original is authoritative.
- **Third-party and eligibility notice:** GTranslate’s free tier is intended for qualifying non-commercial sites; verify the institute’s eligibility, provider terms, privacy practices and approvals before adopting it as an official institutional service. External translations require internet access and may be blocked by privacy protections. There are no automatic translation requests without the widget loading; the site itself does not receive search queries or run server-side search.
- **Regeneration:** Run `python build_pages.py && python build_search_index.py` when changing original page content. `script.js`, `styles.css` and `site-data.js` can be edited directly. Keep the `search-index.js` and the vendor script tags in the generated HTML.


## Protecting proper names from automatic translation

The site retains English as its original language. GTranslate translates prose and navigation, **not** instrument, programme, institutional or personal names. The `notranslate` CSS class is supported by the translation provider (the free widget), so the site uses both `class="notranslate"` and `translate="no"` on protected inline spans. This allows the surrounding sentence to translate normally.

- **New project names, acronyms and institutional names:** Add the official spelling to `protected-names.json`, then run `python build_pages.py` and `python build_search_index.py`. The build wraps matching names on static pages and regenerates `protected-names.js` for dynamically created content. Commit the updated JSON, JavaScript and HTML files together.
- **Team members:** Add the full person name to `protected-names.json` when it appears in running prose, and regenerate the site. Any future profile-name element should also use `class="person-name notranslate" translate="no" lang="en"` or `data-person-name` (which is protected by `script.js`). If a directory is generated from `window.ADOPT_PEOPLE`, each entry’s `name` is also protected dynamically.
- **Search and project filters:** `script.js` re-applies name protection to newly rendered cards, project details and search excerpts, without blocking translation of nearby prose.
- **Translation service:** This is a client-side skip marker, not a paid glossary. Automatic translation quality and third-party services cannot be guaranteed; check sample pages after changing the translator or adding new people/project data. English remains authoritative.

## Accessibility and device support

The website has a responsive layout for phones, tablets, and desktop screens. The
stylesheet uses at least 16px for normal body copy, >=14px for secondary labels,
stronger text contrast, visible keyboard focus, 44px-or-larger touch controls,
and alternatives to colour-only status indicators. It respects reduced-motion,
forced-colour and increased-contrast user preferences. The mobile navigation can
be closed with Escape. This is WCAG AA-oriented design, not a formal WCAG audit;
real-device and assistive-technology checks are recommended before institutional launch.