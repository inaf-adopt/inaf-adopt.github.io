# Member profiles: GitHub editing and review

This site uses GitHub accounts and GitHub Pages. There is no separate user database, password store, Supabase project or shared `admin/admin` account.

## Members

1. Open `member-login.html`, choose your own profile and edit the form.
2. Select **Prepare update**, then **Copy update**.
3. Select **Open GitHub editor**. Sign in to your own GitHub account there. GitHub may ask you to fork the repository.
4. Replace the entire profile JSON file with the copied text. Choose **Propose changes** and create a pull request. Describe your changes and identify yourself if this is your first contribution.
5. A repository maintainer checks your identity and the changed profile, then merges the update. GitHub Pages publishes the approved content.

The form is a public draft preparer, not an authenticated account session. It does not publish or grant permissions. Anyone can propose changes to a public GitHub repository, including a different person's profile; only maintainers can accept them. Do not give ordinary members repository write permission if administrator review is required. GitHub does not offer file-specific repository write permissions.

## Administrators

Use your existing GitHub account and the repository's Pull requests page. The configured profile code owner is `@kalyanradhakrishnan`. CODEOWNERS requests review; it does not itself require approval. Repository owners can additionally configure a branch ruleset requiring pull requests, code-owner approval and the **Check member profiles** check. Those repository settings have not been changed by this update.

Verify first-time contributors through a known institutional channel. Confirm they are editing their own profile, review the diff and validation result, then merge. Do not accept a change to account/access instructions as proof of identity. To appoint another administrator, the repository owner uses GitHub's access settings and updates CODEOWNERS. No privileged GitHub token is stored on this site.

## Data and publication

`members/<member-id>.json` is the editable source for role, research area, biography, ORCiD, links and project associations. Names, portraits and source references remain in `people-data.js`. Public pages load approved profile JSON from the same website; the People directory and site search use it too. They retain a static fallback for network failures or JavaScript-disabled visitors.

After changing data, maintainers should run:

```
node scripts/validate-members.cjs --self-test
node scripts/build-people.cjs
python build_search_index.py
```

Commit the regenerated HTML and search index to refresh static fallbacks and search-engine previews. Approved JSON changes appear for JavaScript-enabled visitors as soon as the normal Pages deployment finishes, even before these snapshots are regenerated. The validator checks data shape and safe links; administrator review is still responsible for identity and scientific accuracy.

Publications are maintained separately in the central catalogue. Editing a profile's ORCiD does not automatically import new publications.
