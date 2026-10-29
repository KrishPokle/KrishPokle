# Your website: how it works

A personal site in plain HTML, CSS and JavaScript. There are no frameworks and no build step, so every file is something a browser reads directly.

It has a home page (about, projects, writing, contact), a printable resume, a blog and a link-in-bio page, with four themes visitors can switch between: **Lavender** (the default), **Paper**, **Terminal** and **Pop**.

## See it on your computer

The simplest way is to double-click `index.html` and it opens in your browser.

To see it the way it'll work online, run a tiny local server from this folder:

```bash
python3 -m http.server
```

Then open http://localhost:8000. Refresh the page after each change you make.

## What's where

```
index.html            Home page
resume.html           Resume (has a "Save as PDF" button)
links.html            Link-in-bio page for Instagram, TikTok, etc.
blog/
  index.html          List of all posts
  hello-world.html    Your first post
  _post-template.html Copy this to write a new post
css/style.css         All the styling, including the four themes
js/content.js         ← YOUR INFO. Edit this one.
js/main.js            Fills the pages in using content.js
js/theme.js           Remembers which theme a visitor picked
assets/               Images (favicon, your photo)
```

## Change your info

Open `js/content.js`. Your name, bio, links, projects, resume and blog list are all in there, and every page updates from it.

Anything that says "your ..." or `example.com` is a placeholder. Replace those before you publish:

- [ ] `tagline`, `location` and `email`
- [ ] Your LinkedIn link (or set its `url` to `""` to hide it)
- [ ] The `about` paragraphs
- [ ] `projects`, `experience`, `education` and `skills`

**Adding a photo:** put it in `assets/` (e.g. `assets/me.jpg`), then set `photo: "assets/me.jpg"` in `content.js`. It replaces the initials circle on the links page.

## Write a blog post

1. Copy `blog/_post-template.html` and rename it, e.g. `blog/my-first-project.html`.
2. In the new file, change the title, description, date and heading (marked `CHANGE`).
3. Write your post inside `<div class="prose">`.
4. Add it to `posts` in `js/content.js` with the same slug:

   ```js
   { slug: "my-first-project", title: "My first project", date: "2026-11-05", summary: "One line about it." },
   ```

It'll then show up on the home page and the blog list.

## Change the look

The top of `css/style.css` has one block per theme. Each block is a list of variables like `--bg` (background), `--ink` (text) and `--accent`. Change a color there and the whole theme updates.

New visitors start on Lavender. To change the default, reorder the list at the top of `js/theme.js`: the first theme is the default. To remove a theme, delete it from that list.

## How the pieces fit together

If you want to understand the code, read the files in this order:

1. **`js/theme.js`** runs first, before anything is drawn. It sets `<html data-theme="lavender">` (or `paper`/`terminal`/`pop`).
2. **`css/style.css`** has a block for each `[data-theme="..."]` that sets the colors and fonts. Changing that one attribute restyles the whole site.
3. **`js/content.js`** defines one object, `SITE`, holding all your info.
4. **`js/main.js`** finds every element with a `data-render="..."` attribute (like `<ul data-render="projects">`) and fills it with HTML built from `SITE`. It also builds the header, footer and theme buttons.

Pages inside `blog/` have `data-root="../"` on their `<body>` so links still point to the right place from one folder down.

## Put it online (free, with GitHub Pages)

1. Merge this branch into `main` (or whichever branch you want to publish).
2. On GitHub, go to the repo's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then click **Save**.
4. After a minute or two it's live at `https://krishpokle.github.io/KrishPokle/`.

If you'd rather have the shorter `https://krishpokle.github.io`, put these files in a repo named exactly `KrishPokle.github.io` instead.

> **Heads up:** this repo is named the same as your GitHub username, so GitHub shows its `README.md` on your profile page. That's why this guide is `GUIDE.md`. Add a `README.md` only if you want it on your profile.
