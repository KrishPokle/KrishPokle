/* ==========================================================
   content.js
   Everything about YOU lives in this file. Edit it and every
   page on the site updates: home, resume, blog list and links.

   Anything that still says "your ..." or "example.com" is a
   placeholder. Replace it before you publish.
   ========================================================== */

const SITE = {
  name: "Krish Pokle",

  // One sentence under your name on the home page.
  tagline: "I build things for the web and write about what I learn.",

  location: "Your city, Country",
  email: "you@example.com",

  // Path to a photo of you, e.g. "assets/me.jpg". Leave it empty
  // ("") to show your initials in a circle instead.
  photo: "",

  // Shown on the home page, resume and links page.
  // Set a url to "" to hide that link everywhere.
  socials: [
    { label: "GitHub", url: "https://github.com/KrishPokle", handle: "github.com/KrishPokle" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/your-handle", handle: "linkedin.com/in/your-handle" },
  ],

  // A few short paragraphs for the About section.
  // You can use simple HTML here, like <a href="...">links</a>.
  about: [
    "Hi, I'm Krish. Replace this with a few sentences about who you are: what you work on, what you're curious about, and what you're looking for right now.",
    "Use a second paragraph for life outside the screen: hobbies, what you're reading, or a project you can't stop thinking about.",
  ],

  // The line above the email button in the Contact section.
  contactNote: "Email is the best way to reach me. I'm always happy to talk about projects, ideas or opportunities.",

  // Your projects, shown on the home page in this order.
  // "url" makes the title a link; "links" adds extra links below.
  projects: [
    {
      title: "This website",
      year: 2026,
      description: "My personal site, written by hand in HTML, CSS and JavaScript. It has three themes you can switch between and no build step.",
      tags: ["HTML", "CSS", "JavaScript"],
      url: "",
      links: [{ label: "Source code", url: "https://github.com/KrishPokle/KrishPokle" }],
    },
    {
      title: "Your next project",
      year: 2026,
      description: "One or two sentences on what it does, who it's for, and what you learned building it.",
      tags: ["Tag", "Another tag"],
      url: "",
      links: [],
    },
    {
      title: "Something you're proud of",
      year: 2025,
      description: "It doesn't have to be code. A club you ran, a design, a competition entry: anything that shows how you think.",
      tags: ["Tag"],
      url: "",
      links: [],
    },
  ],

  // ---------- Resume ----------

  experience: [
    {
      role: "Your most recent role",
      org: "Company, club or team",
      start: "2025",
      end: "Present",
      points: [
        "What you did, ideally with a result or a number.",
        "Another thing you did or shipped.",
      ],
    },
    {
      role: "An earlier role",
      org: "Company, club or team",
      start: "2024",
      end: "2025",
      points: ["What you did there."],
    },
  ],

  education: [
    {
      degree: "What you studied",
      school: "Your school or university",
      start: "2022",
      end: "2026",
      note: "",
    },
  ],

  skills: [
    { group: "Languages", items: ["JavaScript", "HTML", "CSS"] },
    { group: "Tools", items: ["Git", "GitHub"] },
    { group: "Other", items: ["Add your own"] },
  ],

  // ---------- Blog ----------
  // Every post needs an entry here AND a file at blog/<slug>.html.
  // To write a new post, copy blog/_post-template.html.
  posts: [
    {
      slug: "hello-world",
      title: "Hello, world",
      date: "2026-10-29", // year-month-day
      summary: "Why I built this site from scratch, and how it works.",
    },
  ],
};
