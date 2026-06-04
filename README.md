# Zhimeng Li Academic Website

This repository contains the first-draft personal academic website for **Zhimeng Li**, a PhD Candidate in Psychology at Yale University. The site is built with the existing **Astro Academia** project in this repository and remains an Astro/Tailwind/React static site.

The current content is intentionally placeholder-based. It should not be treated as a complete CV, publication list, or biography until Zhimeng replaces the TODO sections with confirmed public information.

## Tech stack

- [Astro](https://astro.build/) static site generator
- Tailwind CSS and DaisyUI for styling
- React support through the existing Astro integration
- GitHub Pages deployment through GitHub Actions

This repository does **not** use Jekyll, Ruby, Bundler, Hyde, Hydejack, al-folio, Academic Pages, or Minimal Mistakes.

## Run the site locally

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Astro will print the local preview URL, usually `http://localhost:4321`.

## Build the site

Create a production build:

```bash
npm run build
```

The generated static site is written to `dist/`.

## Where to edit content

- Homepage text and homepage sections: `src/pages/index.astro`
- Research page: `src/pages/research.astro`
- Publications page: `src/pages/publications.astro`
- Teaching page: `src/pages/teaching.astro`
- CV page: `src/pages/cv.astro`
- Placeholder CV data used by the CV and publications pages: `src/data/cv.ts`
- Profile settings, email, site URL, base path, SEO defaults, and future social links: `src/settings.ts`
- Sidebar navigation and subtle contact area: `src/components/ui/Navbar.astro`
- Footer contact text: `src/components/ui/Footer.astro`

## Profile settings

Edit `src/settings.ts` to update:

- Name
- Academic title
- Institution
- Email address
- Site URL
- Research area cards
- Future social/profile links

Social links are currently blank except for email. Add real public URLs only when they are ready to share.

## CV PDF

The CV page includes a “Download CV” button pointing to:

```text
/Zhimeng_Li_CV.pdf
```

When the real CV is ready, place it here:

```text
public/Zhimeng_Li_CV.pdf
```

Do not add a fake or placeholder PDF.

## GitHub Pages deployment

The deployment workflow lives in `.github/workflows/deploy.yml`. It builds the Astro site with GitHub Actions and deploys the static output to GitHub Pages.

For this user GitHub Pages site, the deployed URL is:

```text
https://zhimeng-li.github.io
```

The Astro `base` setting is intentionally an empty string in `src/settings.ts` because this is a root user site, not a project subdirectory.

## GitHub Pages settings

In the GitHub repository settings, go to **Settings → Pages** and set the source to:

```text
GitHub Actions
```

<<<<<<< ours
## Deploy
The template provides a workflow to deploy the website on Github pages as a static website.

<!-- Trigger Astro Pages workflow -->
=======
After the pull request is merged into the deployment branch configured by `.github/workflows/deploy.yml`, GitHub Actions will build and deploy the site.
>>>>>>> theirs
