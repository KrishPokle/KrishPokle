/* ==========================================================
   main.js
   Builds the parts every page shares (header and footer) and
   fills in each page with the info from content.js.

   How it works: the HTML pages contain empty "slots" like
       <ul data-render="projects"></ul>
   This file finds every slot and fills it with HTML built from
   SITE (defined in content.js). You shouldn't need to edit this
   file to change your info. Edit content.js instead.
   ========================================================== */

(() => {
  const html = document.documentElement;
  const body = document.body;
  const page = body.dataset.page || ""; // which nav link to highlight
  const root = body.dataset.root || ""; // "../" on pages inside /blog

  /* ---------- Helpers ---------- */

  // Make text safe to put inside HTML, so a "<" shows up as a
  // character instead of starting a tag.
  const esc = (value) =>
    String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");

  // Paths in content.js are written from the site's top folder.
  // This adds "../" when we're on a page one folder down.
  // Full URLs ("https://...", "mailto:...") are left alone.
  const url = (path) => (/^([a-z]+:|#|\/)/i.test(path) ? path : root + path);

  // "2026-10-29" -> "29 Oct 2026"
  const formatDate = (iso) =>
    new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  // Newest posts first.
  const sortedPosts = () => [...SITE.posts].sort((a, b) => b.date.localeCompare(a.date));

  // Your social links plus email, skipping any left blank.
  const contactLinks = () => {
    const links = SITE.socials.filter((link) => link.url);
    if (SITE.email) {
      links.push({ label: "Email", url: `mailto:${SITE.email}`, handle: SITE.email });
    }
    return links;
  };

  // One entry on the resume: dates on the left, details on the right.
  const timelineItem = ({ dates, title, subtitle, note, points = [] }) => `
    <li class="timeline-item">
      <p class="timeline-when">${esc(dates)}</p>
      <div>
        <h3>${esc(title)}</h3>
        ${subtitle ? `<p class="timeline-org">${esc(subtitle)}</p>` : ""}
        ${note ? `<p class="timeline-note">${esc(note)}</p>` : ""}
        ${points.length ? `<ul>${points.map((point) => `<li>${esc(point)}</li>`).join("")}</ul>` : ""}
      </div>
    </li>`;

  // Jobs and leadership roles share the same shape.
  const roles = (list = []) =>
    list
      .map((role) => timelineItem({ dates: role.dates, title: role.role, subtitle: role.org, points: role.points }))
      .join("");

  // One <li> per course. "heading" is h3 or h4, depending on the page.
  const courseItems = (courses, heading) =>
    courses
      .map(
        (course) => `
          <li class="course">
            ${course.code ? `<p class="course-code">${esc(course.code)}</p>` : ""}
            <${heading}>${esc(course.name)}</${heading}>
            ${course.note ? `<p class="course-note">${esc(course.note)}</p>` : ""}
          </li>`
      )
      .join("");

  // Drawings for the coursework stages (Pokémon theme). They're
  // original SVG shapes in a 100×100 box: an egg, then a flame that
  // grows each year and finally gets wings.
  const OUTLINE = 'stroke="#1D2333" stroke-width="3" stroke-linejoin="round" vector-effect="non-scaling-stroke"';
  const FLAME_OUTER = "M50 6 C61 25 79 40 77 62 C75 81 63 93 50 93 C36 93 23 82 23 63 C23 47 32 40 38 27 C42 38 46 41 50 6 Z";
  const FLAME_INNER = "M50 40 C57 52 65 60 64 72 C63 83 57 89 50 89 C42 89 36 83 36 73 C36 63 45 57 50 40 Z";
  const flame = (x, y, size) => `
    <g transform="translate(${x} ${y}) scale(${size}) translate(-50 -50)">
      <path d="${FLAME_OUTER}" fill="#F0702C" ${OUTLINE}/>
      <path d="${FLAME_INNER}" fill="#FFD23F"/>
    </g>`;
  const halo = (x, y, size) => `
    <g transform="translate(${x} ${y}) scale(${size}) translate(-50 -50)">
      <path d="${FLAME_OUTER}" fill="#D8342C" ${OUTLINE}/>
    </g>`;
  const WING = `
    <path d="M42 58 C31 35 16 24 3 26 C9 34 10 43 7 51 C14 50 20 54 21 62 C27 57 34 58 40 64 Z" fill="#F0702C" ${OUTLINE}/>
    <path d="M37 57 C29 41 19 33 11 32 C15 38 15 45 13 49 C19 49 23 53 24 58 C28 55 32 56 36 59 Z" fill="#2E9C9A"/>`;

  const EVOLUTION_ART = {
    egg: `
      <path d="M50 8 C71 8 84 42 84 61 C84 81 69 93 50 93 C31 93 16 81 16 61 C16 42 29 8 50 8 Z" fill="#FFF4DA" ${OUTLINE}/>
      <ellipse cx="37" cy="40" rx="7" ry="9" fill="#F0702C"/>
      <ellipse cx="63" cy="58" rx="9" ry="7" fill="#F0702C"/>
      <ellipse cx="40" cy="75" rx="5" ry="4" fill="#F0702C"/>`,
    small: flame(50, 56, 0.62),
    medium: halo(50, 52, 0.86) + flame(50, 60, 0.6),
    large: WING + `<g transform="matrix(-1 0 0 1 100 0)">${WING}</g>` + halo(50, 52, 0.78) + flame(50, 60, 0.54),
  };

  const initials = () =>
    SITE.name
      .split(/\s+/)
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  /* ---------- What goes in each slot ----------
     Each key matches a data-render="..." value in the HTML. */

  const render = {
    name: () => esc(SITE.name),
    tagline: () => esc(SITE.tagline),

    // "No. 001 Engineer Pokémon ELECTRIC STEEL" for the Pokémon theme.
    // Each type gets a CSS class like "type-electric" for its color.
    dex: () => {
      const dex = SITE.pokedex;
      if (!dex) return "";
      const types = (dex.types || [])
        .map((type) => `<span class="type type-${esc(type.toLowerCase())}">${esc(type)}</span>`)
        .join("");
      return `<span class="dex-number">No. ${esc(dex.number)}</span> <span>${esc(dex.category)}</span> ${types}`;
    },

    // "krish@web" for the Terminal theme's prompt line.
    "prompt-user": () => esc(SITE.name.split(" ")[0].toLowerCase()) + "@web",

    pills: () =>
      contactLinks()
        .map((link) => `<li><a class="pill" href="${esc(url(link.url))}">${esc(link.label)}</a></li>`)
        .join(""),

    // About paragraphs may contain HTML on purpose (links, bold),
    // so they are not escaped.
    about: () => SITE.about.map((paragraph) => `<p>${paragraph}</p>`).join(""),

    projects: () =>
      SITE.projects
        .map((project) => {
          const title = project.url
            ? `<a href="${esc(url(project.url))}">${esc(project.title)}</a>`
            : esc(project.title);
          const tags = (project.tags || []).map((tag) => `<li class="tag">${esc(tag)}</li>`).join("");
          const links = (project.links || [])
            .map((link) => `<a href="${esc(url(link.url))}">${esc(link.label)}</a>`)
            .join("");
          return `
            <li class="project">
              <p class="project-year">${esc(project.year)}</p>
              <div>
                <h3>${title}</h3>
                <p class="project-desc">${esc(project.description)}</p>
                ${tags ? `<ul class="tags" aria-label="Built with">${tags}</ul>` : ""}
                ${links ? `<p class="project-links">${links}</p>` : ""}
              </div>
            </li>`;
        })
        .join(""),

    // <ul data-render="posts" data-limit="3"> shows the 3 newest.
    posts: (slot) => {
      const limit = Number(slot.dataset.limit) || Infinity;
      const heading = slot.dataset.heading || "h3";
      const posts = sortedPosts().slice(0, limit);
      if (!posts.length) return `<li class="empty">No posts yet. Check back soon.</li>`;
      return posts
        .map(
          (post) => `
            <li class="post-item">
              <time datetime="${esc(post.date)}">${formatDate(post.date)}</time>
              <div>
                <${heading}><a href="${esc(url(`blog/${post.slug}.html`))}">${esc(post.title)}</a></${heading}>
                <p>${esc(post.summary)}</p>
              </div>
            </li>`
        )
        .join("");
    },

    "contact-note": () => esc(SITE.contactNote),

    "email-button": () =>
      SITE.email ? `<a class="button" href="mailto:${esc(SITE.email)}">Email ${esc(SITE.email)}</a>` : "",

    // The contact line at the top of the resume.
    "contact-list": () => {
      const items = SITE.location ? [`<li>${esc(SITE.location)}</li>`] : [];
      contactLinks().forEach((link) => {
        items.push(`<li><a href="${esc(url(link.url))}">${esc(link.handle || link.label)}</a></li>`);
      });
      return items.join("");
    },

    experience: () => roles(SITE.experience),
    leadership: () => roles(SITE.leadership),

    education: () =>
      SITE.education
        .map((school) =>
          timelineItem({ dates: school.dates, title: school.degree, subtitle: school.school, note: school.note })
        )
        .join(""),

    // Projects on the resume: only the ones with bullet points.
    "resume-projects": () =>
      SITE.projects
        .filter((project) => project.points?.length)
        .map((project) =>
          timelineItem({
            dates: project.dates || project.year,
            title: project.title,
            subtitle: project.role,
            points: project.points,
          })
        )
        .join(""),

    skills: () =>
      SITE.skills
        .map(
          (group) => `
            <div class="skill-group">
              <h3>${esc(group.group)}</h3>
              <ul class="tags">${group.items.map((skill) => `<li class="tag">${esc(skill)}</li>`).join("")}</ul>
            </div>`
        )
        .join(""),

    // Resume: every course from every year in one list.
    coursework: () => courseItems((SITE.coursework || []).flatMap((stage) => stage.courses || []), "h3"),

    // Home: one stage per year. The art and stage name only show in
    // the Pokémon theme; other themes show a plain list by year.
    evolution: () =>
      (SITE.coursework || [])
        .map((stage) => {
          const courses = stage.courses || [];
          const list = courses.length
            ? `<ul class="courses">${courseItems(courses, "h4")}</ul>`
            : stage.upcoming
              ? `<p class="course-upcoming">Courses to come.</p>`
              : "";
          return `
            <li class="evo-stage${stage.upcoming ? " is-upcoming" : ""}">
              <div class="evo-art" aria-hidden="true">
                <svg viewBox="0 0 100 100">${EVOLUTION_ART[stage.art] || ""}</svg>
              </div>
              <div class="evo-head">
                <h3 class="evo-year">${esc(stage.year)}</h3>
                <p class="evo-name">${esc(stage.stage)}</p>
              </div>
              ${list}
            </li>`;
        })
        .join(""),

    avatar: () => (SITE.photo ? `<img src="${esc(url(SITE.photo))}" alt="">` : esc(initials())),

    // The big buttons on links.html: your contact links, then
    // shortcuts to the rest of the site.
    "link-buttons": () => {
      const latest = sortedPosts()[0];
      const links = [
        ...contactLinks(),
        { label: "Projects", url: "index.html#projects", handle: "Things I've built" },
        { label: "Resume", url: "resume.html", handle: "Experience and skills" },
        { label: "Blog", url: "blog/index.html", handle: latest ? `Latest: ${latest.title}` : "" },
      ];
      return links
        .map(
          (link) => `
            <li>
              <a class="link-button" href="${esc(url(link.url))}">
                <span class="link-label">${esc(link.label)}</span>
                <span class="handle">${esc(link.handle || "")}</span>
              </a>
            </li>`
        )
        .join("");
    },
  };

  /* ---------- Header and footer ---------- */

  const NAV = [
    { id: "projects", label: "Projects", path: "index.html#projects" },
    { id: "resume", label: "Resume", path: "resume.html" },
    { id: "blog", label: "Blog", path: "blog/index.html" },
    { id: "links", label: "Links", path: "links.html" },
  ];

  const THEME_NAMES = {
    pokemon: "Pokémon",
    lavender: "Lavender",
    paper: "Paper",
    terminal: "Terminal",
    pop: "Pop",
  };

  const current = (id) => (id === page ? ' aria-current="page"' : "");

  const header = document.getElementById("site-header");
  if (header) {
    const navLinks = NAV.map(
      (item) => `<li><a href="${url(item.path)}"${current(item.id)}>${item.label}</a></li>`
    ).join("");

    const themeButtons = window.THEMES.map(
      (name) => `
        <button type="button" data-theme-choice="${name}" aria-pressed="false" title="${THEME_NAMES[name]}">
          <span class="swatch swatch-${name}" aria-hidden="true"></span>
          <span class="theme-name">${THEME_NAMES[name]}</span>
        </button>`
    ).join("");

    header.innerHTML = `
      <div class="container header-inner">
        <a class="brand" href="${url("index.html")}"${current("home")}>${esc(SITE.name)}</a>
        <nav class="site-nav" aria-label="Main"><ul>${navLinks}</ul></nav>
        <div class="theme-switch" role="group" aria-label="Theme">${themeButtons}</div>
      </div>`;
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `
      <div class="container footer-inner">
        <p>© ${new Date().getFullYear()} ${esc(SITE.name)}</p>
        <p>Made by hand with HTML, CSS and JavaScript.</p>
        <p class="theme-credit">Pokémon is a trademark of Nintendo, Creatures and Game Freak. This fan theme isn't affiliated with them.</p>
      </div>`;
  }

  /* ---------- Fill every slot on the page ---------- */

  document.querySelectorAll("[data-render]").forEach((slot) => {
    const fill = render[slot.dataset.render];
    if (fill) slot.innerHTML = fill(slot);
  });

  /* ---------- Evolve on scroll (Pokémon theme) ----------
     Each coursework stage evolves the first time it scrolls into
     view: adding .is-evolved makes the CSS play the animation once.
     Upcoming years stay as silhouettes. */

  const stages = document.querySelectorAll(".evo-stage:not(.is-upcoming)");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    stages.forEach((stage) => stage.classList.add("is-evolved"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-evolved");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.6 }
    );
    stages.forEach((stage) => observer.observe(stage));
  }

  // <body data-title="Resume"> becomes "Resume | Krish Pokle".
  document.title = body.dataset.title ? `${body.dataset.title} | ${SITE.name}` : SITE.name;

  /* ---------- Theme switcher ---------- */

  const syncThemeButtons = () => {
    document.querySelectorAll("[data-theme-choice]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.themeChoice === html.dataset.theme));
    });
  };
  syncThemeButtons();

  document.addEventListener("click", (event) => {
    const choice = event.target.closest("[data-theme-choice]");
    if (choice) {
      window.setTheme(choice.dataset.themeChoice);
      syncThemeButtons();
    }
    if (event.target.closest('[data-action="print"]')) window.print();
  });

  // Always print in the Paper theme (black text on white reads
  // best on paper), then switch back afterwards.
  let themeBeforePrint;
  window.addEventListener("beforeprint", () => {
    themeBeforePrint = html.dataset.theme;
    html.dataset.theme = "paper";
  });
  window.addEventListener("afterprint", () => {
    html.dataset.theme = themeBeforePrint;
  });
})();
