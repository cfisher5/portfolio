# Cole Fisher Portfolio

A polished one-page personal portfolio site designed to deploy cleanly on GitHub Pages and later connect to a custom domain.

## Files

- `index.html` - Single-page site markup
- `styles.css` - Layout, typography, color system, and responsive styling
- `script.js` - Mobile navigation, reveal-on-scroll, and footer year
- `images/` - Headshot, working photos, and supporting logos
- `Fisher Resume.pdf` - Resume linked from the hero section

## Preview Locally

Because this is a static site, you can preview it with any lightweight local server.

### Option 1: Python

From the project folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Option 2: Open Directly

You can also open `index.html` directly in a browser, but using a local server is the better habit for testing.

## Deploy To GitHub Pages

1. Create a GitHub repository and upload the contents of this folder to the repository root.
2. In GitHub, open `Settings > Pages`.
3. Under `Build and deployment`, choose:
   - `Source: Deploy from a branch`
   - `Branch: main` (or `master`, depending on your repo)
   - `Folder: / (root)`
4. Save the settings.
5. GitHub Pages will publish the site to your default Pages URL, typically:

```text
https://your-username.github.io/repository-name/
```

If you want the portfolio to live at `https://your-username.github.io/`, use a repository named:

```text
your-username.github.io
```

## Connect A Custom Domain Later

When you're ready to use a custom domain:

1. In your GitHub repository, go to `Settings > Pages`.
2. Enter your custom domain in the `Custom domain` field.
3. Create a `CNAME` DNS record through your domain provider pointing to your GitHub Pages domain.
4. If you are using an apex domain (for example, `colefisher.com`), GitHub may instead require `A` records.
5. Once DNS propagates, enable `Enforce HTTPS` in GitHub Pages settings.

GitHub will create or expect a `CNAME` file in the repository when the custom domain is configured.

## Personal Info To Update

A few links intentionally use placeholders so you can replace them later:

- `https://www.linkedin.com/in/your-linkedin`
- `https://github.com/your-github`

Search for these strings in `index.html` and replace them with your real profile URLs.

## Notes

- The site is fully static and GitHub Pages-friendly.
- Image and resume paths are relative, so they should work as long as the current folder structure stays intact.
- The design is mobile-responsive and optimized for a clean single-page presentation.
