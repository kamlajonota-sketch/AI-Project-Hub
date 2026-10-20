# AI Project Hub

A responsive, static dashboard for organizing AI assistants, GitHub projects, developer tools, design resources, and useful websites. Built to work for the public with no login, backend, API key, or installation required.

## Live demo

After GitHub Pages is enabled, the site will be available at:

https://kamlajonota-sketch.github.io/AI-Project-Hub/

It may take a few minutes after the first deployment.

## Features

- Search tools by name, category, description, or URL.
- Browse built-in categories and create custom categories.
- Add, edit, favorite, and delete shortcuts.
- Sort by name or favorites.
- Export and import a JSON backup.
- Responsive layout for desktop, tablet, and mobile.
- Dark and light appearance toggle.
- Opens external services in a new tab.
- No account or API key required.

## Run it

**Option 1 — Online:** Open the GitHub Pages URL above once Pages deployment is complete.

**Option 2 — On your computer:** Download this repository as a ZIP, extract it, and open `index.html` in a modern browser. No build step is needed.

## Your data and privacy

This is a static client-side application. Your custom tools, favorites, categories, and appearance are stored in the browser's local storage on that device/browser. They are not uploaded to this repository or shared automatically with other visitors. Use **Backup** to export your settings and **Import** to restore them on another browser. Do not import JSON files you do not trust.

A public repository makes the source code public; it does not make each visitor's local browser data public. Each visitor starts with the same built-in examples and then maintains their own setup.

## Deploy on GitHub Pages

1. Open this repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** if it is not already selected.
3. The workflow in `.github/workflows/pages.yml` deploys the static site when changes are pushed to `main`.
4. Wait for the workflow to finish, then visit the Pages URL above.

The workflow can publish the site, but GitHub Pages may still need to be enabled once in repository settings.

## Add a tool

Click **Add tool**, fill in the name, category, and full website URL (starting with `https://`), and save. You can edit or delete your shortcuts from each card.

## Limitations

This hub is a launchpad, not a single unified AI chat. It opens services on their own websites; it does not bypass their sign-in, paid plans, or usage limits. Custom entries are saved locally in your browser, not synchronized across users/devices. No private access token or secret key is embedded in the site.

## License

MIT — see [LICENSE](LICENSE).
