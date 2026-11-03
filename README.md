# ADOPT research group website

Public website: https://inaf-adopt.github.io/

A static HTML, CSS and JavaScript website for ADOPT at INAF Padova. GitHub Pages publishes `main` from the repository root; no framework build is needed.

## Editing

- Edit HTML pages directly. `build_pages.py` now only refreshes the search index, so running it cannot overwrite the hand-edited pages.
- `site-data.js` contains the 19 public project profiles (15 main entries and 4 previous-involvement entries). Keep project IDs stable.
- `PROJECT_DRAFTS.json` preserves TRACE-AO, OSCAR, TDT and HAYDIN for future completion. These entries are not loaded or indexed by the website. Restore an entry only when its identity and description are supported by project information. This file is in the public repository; it is not private storage.
- `people-data.js` contains 27 team members, short biographies, expanded profiles, project associations and source links. `PEOPLE_SOURCES.md` retains the research trail. Member roles should be kept current; the editorial revision does not certify appointments.
- `project-papers.js` contains instrument research and foundational references; `instrument-science-papers.js` contains observational science. The Publications page deduplicates papers by DOI or URL and supports text, project and topic filtering. It is a project bibliography, not a claim that every paper was authored by group members.
- `script.js` provides navigation, project pages, filters, search, names protected from translation and the conceptual optics comparison.
- `styles.css` contains the established navy/teal theme and responsive layouts.
- After changing HTML, run `python3 build_search_index.py`. It uses only the Python standard library. Dynamic project, people and publication records are indexed in the browser.
- Check JavaScript syntax with `node --check script.js` and data files as appropriate.

## Content and sources

Project pages separate the group's documented contributions from broader research context. For VSTPol, Einstein Telescope, LBCmos, CHEOPS and PLATO 2.0, the site avoids assigning unverified work packages; these sections are labelled **Research context**. Detailed assignments can be added when provided by the relevant members. Previous involvement describes the group's history, not whether a mission is still operating.

NIRVANA-VIS now uses the AO4ELT7 instrument reference already present in the project bibliography, alongside the LINC-NIRVANA parent-instrument reference. Original sources and bibliographic selection notes remain in `PROJECT_SOURCES.md`, `PROJECT_PUBLICATIONS.md`, `INSTRUMENT_SCIENCE_PUBLICATIONS.md` and `PEOPLE_SOURCES.md`.

Contact details are from https://www.oapd.inaf.it/info-e-contatti (checked 31 October 2026). The site identifies the general switchboard, public-events email and school-activities email separately. Research enquiries go through individual institutional profiles; no unconfirmed group mailbox is published.

English is the source language. Italian and other languages remain explicitly labelled automatic GTranslate translations, not member-reviewed translations. Personal and instrument names are protected using `protected-names.js` and inline markers. Human-reviewed Italian remains a future editorial task.

## Images and rights

The SOXS project cards and project page display the existing instrument photograph in `assets/photos/soxs.jpg` (credit and licence below). The previously supplied illustrated SOXS logo has been removed from the published site and its unused image files were removed from the active branch. The INAF mark was supplied as `INAF-logo.png` and appears as `assets/logos/inaf-logo.webp` in the shared footer, linking to the institute. This does not imply institutional endorsement of ADOPT's separate graphic mark.


The SOXS photograph in `assets/photos/soxs.jpg` is from https://www.eso.org/public/images/ann25011b/, credit **P. Schipani/INAF**, distributed under CC BY 4.0 according to ESO's image policy. It is displayed in its original proportions with a visible credit and licence link.

Kalyan Radhakrishnan's portrait was supplied by the member. Other existing portraits remain external links to the MAVIS consortium with attribution and initials fallback. Original source notes retain the photo-review history. This update does not grant new rights to third-party material or imply institutional endorsement of the graphic mark. The repository's previous licensing history is unchanged.

### Individual member pages

Every entry in `people-data.js` has a standalone `<member-id>.html` webpage. Edit that member's existing biography, projects, portrait and links in `people-data.js`, then run `node scripts/build-people.cjs` and commit the generated HTML and sitemap. The generator uses verified first/second-author metadata for selected publications; project associations alone are never treated as proof of authorship. No personal contact details are inferred. Keep member IDs stable so shared profile URLs continue to work.

## ORCID and member publications (October 2026)

Verified ORCID identifiers are stored in `people-data.js` as `orcid` values and displayed on individual profiles and in the directory. Missing identifiers are not guessed. Curated coauthored papers are in `member-publications.js` with supporting sources in `MEMBER_PUBLICATIONS_SOURCES.md`. The Publications page retains the group first/second-author highlight and adds a separate Member publications view, filterable by researcher. Entries are not automatically synchronized with ORCID. Run `node scripts/build-people.cjs` after updating either data source to regenerate individual pages (review new output before committing).

## People-page photo labels

Individual member pages and the People directory intentionally do not display a credit label directly on each portrait. Rights and original photo sources remain recorded on the Credits and sources page and in `people-data.js` / `PEOPLE_SOURCES.md`. Preserve that attribution and any applicable licence obligations when modifying photographs.

## Opportunities page

`opportunities.html` describes possible Master's theses, PhD research, internships, research visits and formal employment routes. `script.js` links it from desktop/mobile navigation and the footer; `index.html` provides a prominent homepage entry. The text is a guide to pathways and research areas, **not an advertisement for active or funded openings**. Do not add specific positions or deadlines without an authoritative announcement and owner approval. Institutional details and link checks are documented in `OPPORTUNITIES_SOURCES.md`. Rebuild `search-index.js` when editing the page.

The publication catalogue merges `orcid-publications.js` (public ORCID record associations), `member-publications.js` (checked bylines), and project literature through `publication-catalogue.js`. Identity and import scope are documented in `MEMBER_PUBLICATIONS_SOURCES.md`. The default view requires verified first/second-author order; all member publications stay in the central catalogue.


Facilities are described in `facilities.html`, with sources linked on the page. Members can prepare profile edits in `member-login.html` (a publicly accessible proposal form, not a login) and submit them through GitHub for administrator review. No external authentication/database service is required. See `MEMBER_EDITING.md`.

## Verified profile data and index maintenance (November 2026)

`members/*.json` is the authority for editable member fields. Run `node scripts/sync-member-data.cjs` to mirror approved JSON changes to `people-data.js`, followed by `node scripts/build-people.cjs`, `node scripts/build-project-pages.cjs` and `python3 build_search_index.py`. The site directory and project-team views then agree with member pages; `node scripts/check-site.cjs` detects inconsistencies. A member submitting only their JSON profile must not be asked to edit unrelated aggregate files; a maintainer performs the reconciliation after approval.

Every current and historical project has a standalone `project-<id>.html` page with unique meta description, canonical URL and indexed summary. The old `project.html?id=<id>` URLs still resolve, with canonical links inserted by the client. `scripts/build-project-pages.cjs --check` checks static page freshness. The search index contains only general static pages: person and project records are indexed from current data in the browser, avoiding duplicate results and old member snapshots. The website uses dated, editorially curated publications; missing author identifications are not guessed.


## Private website feedback (November 2026)

The public `feedback.html` page is linked from the main navigation, footer and Contact page. It accepts an optional name and reply email, a category, an optional page/section and a required message. It uses Formspree to process submissions over HTTPS; it does not create public GitHub Issues.

**One-time administrator activation (required):**

1. Sign up at https://formspree.io/ and verify your account. Create a form named **ADOPT Website Feedback**.
2. In Formspree's private dashboard, select and verify the admin inbox that should receive notification emails. Enable email notifications. **Never add the recipient email address to this public repository.**
3. Set Formspree's **Restrict to Domain** option to `inaf-adopt.github.io` and enable spam filtering / reCAPTCHA as appropriate.
4. Copy the form's public endpoint URL (`https://formspree.io/f/...`) into `feedback-config.js` as `window.ADOPT_FEEDBACK_ENDPOINT`. This is only a public form identifier, **not** an API key. Do not commit secrets.
5. Load https://inaf-adopt.github.io/feedback.html, submit a test message and confirm its arrival in the administrator inbox (and Formspree dashboard). Check spam folders if needed.

The form deliberately starts **disabled** until a valid endpoint is configured. It never claims to deliver a message before an HTTP successful response. A successful HTTP response means the service accepted the submission; actual inbox delivery must be separately tested.

The page discloses third-party handling, provides accessible input labels and status messages, checks required inputs, avoids posting to the website itself, and preserves the visitor's message when submission fails. A `_gotcha` field adds basic spam protection. Formspree processes and may retain submitted content, so avoid asking for sensitive personal information.
