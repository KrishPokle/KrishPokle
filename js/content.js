/* ==========================================================
   content.js
   Everything about YOU lives in this file. Edit it and every
   page on the site updates: home, resume, blog list and links.
   ========================================================== */

const SITE = {
  name: "Krish Pokle",

  // One sentence under your name on the home page.
  // " " is a space that never breaks, so "Texas A&M" stays on one line.
  tagline: "Electrical engineering student at Texas A&M. I build things with circuits and code.",

  location: "Plano, Texas",
  email: "krishpokle@gmail.com",

  // Your Pokédex entry, shown above your name in the Pokémon theme.
  // Types can be any of the 18: Normal, Fire, Water, Electric, Grass,
  // Ice, Fighting, Poison, Ground, Flying, Psychic, Bug, Rock, Ghost,
  // Dragon, Dark, Steel, Fairy.
  pokedex: {
    number: "001",
    category: "Engineer Pokémon",
    types: ["Electric", "Steel"],
  },

  // Path to a photo of you, e.g. "assets/me.jpg". Leave it empty
  // ("") to show your initials in a circle instead.
  photo: "",

  // Shown on the home page, resume and links page.
  // Set a url to "" to hide that link everywhere.
  socials: [
    { label: "GitHub", url: "https://github.com/KrishPokle", handle: "github.com/KrishPokle" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/kpokle/", handle: "linkedin.com/in/kpokle" },
  ],

  // A few short paragraphs for the About section.
  // You can use simple HTML here, like <a href="...">links</a>.
  about: [
    "Hi, I'm Krish. I'm studying electrical engineering at Texas A&M University with a minor in mathematics, as part of the Craig and Brown Honors program in the College of Engineering.",
    "I like building on both sides of the line between hardware and software. That means designing PCBs in KiCad and 3D-printing parts, like the solar-powered RC car below, and shipping full-stack web apps, like <a href=\"https://clampus.com\">Clampus</a>, a platform that helps Texas A&M students find clubs and opportunities.",
    "Outside of class, I'm a member of IEEE, and I've been a USTA tennis official since 2022, refereeing more than 50 tournaments.",
  ],

  // The line above the email button in the Contact section.
  contactNote: "Email is the best way to reach me. I'm always happy to talk about projects, ideas or opportunities.",

  // Your projects, shown on the home page in this order.
  //   url         makes the title a link
  //   links       extra links shown below the description
  //   role, dates and points are for the resume page; projects
  //   without points only appear on the home page.
  projects: [
    {
      title: "Clampus",
      year: 2026,
      description: "A full-stack club and opportunity discovery platform for Texas A&M's 1,300+ student organizations, with AI features built on the Claude API and subscription billing through Stripe.",
      tags: ["Next.js", "TypeScript", "Supabase", "Stripe", "Claude API"],
      url: "https://clampus.com",
      links: [{ label: "clampus.com", url: "https://clampus.com" }],
      role: "Founder",
      dates: "May 2026 – Present",
      points: [
        "Built and deployed Clampus, a full-stack club and opportunity discovery platform for Texas A&M's 1,300+ student organizations, using Next.js, Supabase and TypeScript, deployed on Vercel.",
        "Integrated the Anthropic (Claude) API to ship AI features including a personalized club matcher, resume-boosting recommendations, essay assistance and automated research-outreach email drafting.",
        "Implemented subscription billing with Stripe, including checkout sessions, webhook-driven entitlement syncing, and tiered feature gating for both individual and organization-level plans.",
      ],
    },
    {
      title: "Solar-powered RC car",
      year: "",
      description: "An RC car that charges itself from a solar panel. I designed the charging and motor-control electronics on a custom two-layer PCB, and modeled and 3D-printed a Porsche-style chassis.",
      tags: ["KiCad", "PCB design", "Fusion 360", "3D printing"],
      url: "",
      links: [],
      role: "",
      dates: "",
      points: [
        "Designed and assembled a solar-powered RC car integrating a photovoltaic charging circuit, LiPo battery management via TP4056, and dual DC motor control using an L9110S H-bridge driver.",
        "Designed a custom 2-layer PCB in KiCad including schematic capture, component footprint assignment, net routing, and Gerber file generation for JLCPCB fabrication.",
        "Modeled a Porsche-style RC car chassis in Autodesk Fusion 360 and prepared optimized STL files for FDM 3D printing on a Creality Ender 3 Pro using PLA filament.",
      ],
    },
    {
      title: "This website",
      year: 2026,
      description: "My personal site, written by hand in HTML, CSS and JavaScript. It has five themes you can switch between and no build step.",
      tags: ["HTML", "CSS", "JavaScript"],
      url: "",
      links: [{ label: "Source code", url: "https://github.com/KrishPokle/KrishPokle" }],
    },
  ],

  // ---------- Resume ----------

  education: [
    {
      degree: "B.S. Electrical Engineering, Minor in Mathematics",
      school: "Texas A&M University, College Station",
      dates: "Expected May 2028",
      note: "College of Engineering, Craig and Brown Honors. Cumulative GPA: 3.5",
    },
  ],

  leadership: [
    {
      role: "Service Committee",
      org: "PREP (Progressively Reaching Excellence in Professionalism)",
      dates: "Sep 2025 – May 2026",
      points: [
        "Coordinated with 10+ local organizations to plan and execute community service opportunities for members.",
        "Led a team of 50 members in organizing and completing service projects, managing logistics and volunteer scheduling.",
      ],
    },
    {
      role: "Member",
      org: "IEEE",
      dates: "Aug 2025 – Present",
      points: [
        "Participated in hands-on workshops on circuit design and embedded systems, attended a semiconductor industry summit, and collaborated with peers on technical design challenges.",
      ],
    },
  ],

  experience: [
    {
      role: "Official (contractor)",
      org: "USTA",
      dates: "Sep 2022 – Present",
      points: [
        "Supervised all aspects of play, ensuring all USTA regulations and ITA guidelines are met.",
        "Refereed over 50 tournaments, working an average of 20 hours per tournament.",
      ],
    },
  ],

  skills: [
    { group: "Languages", items: ["C", "Python", "C++", "Java", "TypeScript"] },
    { group: "Hardware", items: ["KiCad", "Fusion 360", "Soldering", "3D printing"] },
    { group: "Software & tools", items: ["Next.js", "Supabase", "Stripe", "Vercel", "Git"] },
  ],

  // Classes you've taken, shown on the home page and resume.
  //   code   optional course number, e.g. "ECEN 214"
  //   note   optional one-liner: a lab, a project, what you learned
  coursework: [
    { name: "Circuits", code: "", note: "" },
    { name: "Signals & Systems", code: "", note: "" },
    { name: "Electronics", code: "", note: "" },
    { name: "Digital System Design", code: "", note: "" },
    { name: "Microcontrollers", code: "", note: "" },
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
