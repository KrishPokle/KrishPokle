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
    types: ["Dragon", "Steel"],
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

  // Your classes, grouped by school year and then by semester. On the
  // home page each year is a stage; in the Pokémon theme it "evolves"
  // as you scroll to it.
  //   stage     evolution name shown in the Pokémon theme
  //   art       which drawing: "egg", "small", "medium" or "large".
  //             An "egg" stage cracks as you scroll and hatches instead
  //             of evolving.
  //   image     optional picture to use instead of the drawing, e.g.
  //             "assets/evolution/charmander.png". Use a PNG with a
  //             transparent background so the silhouette effect works.
  //   upcoming  true for a year you haven't started yet (shown as a
  //             silhouette until you add its terms and remove this)
  //   terms     semesters. "status" is optional, e.g. "In progress".
  //   courses   code and name. Add resume: true to also list a course
  //             in the Coursework section of the resume page.
  coursework: [
    {
      year: "Freshman year",
      stage: "Egg",
      art: "egg",
      image: "assets/evolution/egg.png",
      terms: [
        {
          term: "Transfer credit",
          courses: [
            { code: "MATH 151", name: "Engineering Math I" },
            { code: "MATH 152", name: "Engineering Math II" },
            { code: "CSCE 110", name: "Programming I" },
            { code: "ECON 203", name: "Principles of Economics" },
            { code: "ENGL 104", name: "Composition & Rhetoric" },
            { code: "ENGL 203", name: "Writing About Literature" },
            { code: "ENGL 241", name: "Advanced Composition" },
            { code: "GEOG 201", name: "Intro to Human Geography" },
            { code: "HIST 104", name: "World History Since 1500" },
            { code: "HIST 105", name: "History of the U.S." },
            { code: "HIST 106", name: "History of the U.S." },
            { code: "PHYS 202", name: "College Physics" },
            { code: "PHYS 205", name: "Concepts of Physics" },
            { code: "PHYS 207", name: "Electricity & Magnetism for Engineers & Scientists" },
            { code: "PHYS 227", name: "Electricity & Magnetism Lab" },
            { code: "POLS 206", name: "American National Government" },
          ],
        },
        {
          term: "Fall 2025",
          courses: [
            { code: "CHEM 107", name: "General Chemistry for Engineers" },
            { code: "CHEM 117", name: "General Chemistry for Engineers Lab" },
            { code: "ENGR 102", name: "Engineering Lab I: Computation (Honors)" },
            { code: "FYEX 101", name: "Hullabaloo U" },
            { code: "MATH 251", name: "Engineering Math III" },
            { code: "POLS 207", name: "State & Local Government" },
            { code: "ENGR 181", name: "Engineering Honors Seminar I" },
          ],
        },
        {
          term: "Spring 2026",
          courses: [
            { code: "CSCE 120", name: "Program Design & Concepts", resume: true },
            { code: "ENGR 216", name: "Experimental Physics & Engineering Lab II: Mechanics (Honors)" },
            { code: "FILM 215", name: "Global Cinema" },
            { code: "MATH 308", name: "Differential Equations", resume: true },
            { code: "PHYS 206", name: "Newtonian Mechanics for Engineers & Scientists" },
          ],
        },
      ],
    },
    {
      year: "Sophomore year",
      stage: "Charmander",
      art: "small",
      image: "",
      terms: [
        {
          term: "Fall 2026",
          status: "In progress",
          courses: [
            { code: "ECEN 248", name: "Intro to Digital System Design", resume: true },
            { code: "ECEN 250", name: "Machine Learning", resume: true },
            { code: "ENGR 217", name: "Experimental Physics & Engineering Lab III: Electricity & Magnetism (Honors)" },
            { code: "MATH 311", name: "Topics in Applied Math I", resume: true },
            { code: "PHYS 222", name: "Modern Physics for Engineers" },
          ],
        },
        {
          term: "Spring 2027",
          status: "Registered",
          courses: [
            { code: "ECEN 214", name: "Electrical Circuit Theory", resume: true },
            { code: "ECEN 303", name: "Random Signals & Systems", resume: true },
            { code: "ECEN 350", name: "Computer Architecture & Design", resume: true },
            { code: "MATH 401", name: "Advanced Engineering Math", resume: true },
          ],
        },
      ],
    },
    {
      year: "Junior year",
      stage: "Charmeleon",
      art: "medium",
      image: "",
      upcoming: true,
      terms: [],
    },
    {
      year: "Senior year",
      stage: "Charizard",
      art: "large",
      image: "",
      upcoming: true,
      terms: [],
    },
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
