/**
 * Every word of site copy lives here so it can be reviewed and edited in one
 * place. Positioning is taken from the 8/13 messaging call (Mark's hero
 * statement), the 8/10 Karla call, and the workshopped ICP.
 *
 * Deliberately avoided: "hustler" (Jazmin, 8/6 - misreads badly in LATAM),
 * "cheap labor" (Karla, 8/10), and any hourly-rate framing.
 */

export const site = {
  name: "Handoff",
  tagline: "The team behind your team.",
  // Domain is not pointed yet. Keep links relative so the Vercel URL works.
  bookCall: "/contact",
  seeTalent: "/talent",
};

export const socialLinks = [
  {
    label: "YouTube",
    platform: "youtube",
    href: "https://www.youtube.com/@yourhandoff",
  },
  {
    label: "LinkedIn",
    platform: "linkedin",
    href: "https://www.linkedin.com/company/yourhandoff/",
  },
  {
    label: "Instagram",
    platform: "instagram",
    href: "https://www.instagram.com/talenthandoff/",
  },
] as const;

export const hero = {
  eyebrow: "Staffing and Recruiting",
  /**
   * Two accented phrases now, not one: "LATAM." in blue, "Here to stay." in
   * teal, so the retention claim gets the same visual weight as the talent
   * claim instead of reading as an afterthought.
   */
  headline: [
    { text: "The best of" },
    { text: "LATAM.", tone: "royal" },
    { text: "AI trained." },
    { text: "Here to stay.", tone: "cyan" },
  ] as { text: string; tone?: "royal" | "cyan" }[],
  body: "We help the best US companies hire Latin America's top 1% talent.",
  primary: { label: "Get Started Today", href: site.bookCall },
  secondary: { label: "Talk to Our Team", href: site.bookCall },
  note: "Full-time, dedicated teammates. Not a marketplace.",
  /**
   * Rewritten per feedback that "7 of us, all hired this way" read unclear.
   * The number stays; the caption now says what it is proof of.
   */
  teamStatLabel: "of our own team, hired through this exact process",
};

/** The founder's situation, in his own terms. From the workshopped ICP. */
export const problem = {
  eyebrow: "Sound familiar",
  headline: "You are the bottleneck",
  body: "You are still doing the work you should have handed off two hires ago. You tried a cheap offshore hire and got someone who needed managing. What you actually need is a person who can run something, not another task list to supervise.",
  /**
   * The same pressure as an ops leader or COO experiences it. They do not
   * think of themselves as the bottleneck, they think of themselves as
   * under-resourced, so the section has to speak both ways.
   */
  bodyDepartment:
    "And if you are running a department rather than the whole company, the version of this you know is different. The headcount is approved or it is not. The work does not wait either way, and the good people you already have are covering for a seat that has been open for two months.",
  /**
   * All four card backs say the same thing on purpose. This line sets that
   * up so it reads as the argument rather than as a mistake.
   */
  cardsLead: "Different problems. Same fix.",
  cardsActionDesktop: "Flip any of them.",
  cardsActionMobile: "Tap any of them.",
  cards: [
    {
      title: "The one who never says no",
      copy: "You absorb it. You work later. The business grows on your evenings and it is not sustainable, but handing it off has never felt safe.",
    },
    {
      title: "The one turning down growth",
      copy: "You are saying no to work you could take, because there is nobody to hand it to and hiring for it in the US does not pencil out.",
    },
    {
      title: "The one whose ops person just quit",
      copy: "Two weeks' notice, and the person who held the operation together is walking out with everything in their head.",
    },
    {
      title: "The one hiring abroad for the first time",
      copy: "You know the talent is out there. You do not know how to tell a great candidate from a good interview, or what happens after you say yes. So the search keeps getting pushed to next quarter.",
    },
  ],
};

/**
 * Ordered as the business wants them sold: managed first, direct hire as the
 * door opener. Figures and structure match the current sales deck
 * (2026-09-07): three models, each carrying the same one-time placement fee
 * on top of its own ongoing cost — not a separate no-fee tier.
 */
export const models = [
  {
    tag: "Most popular",
    name: "Managed Staffing",
    forWho: "Companies building a team, office-based",
    price: "~$3,500/month",
    terms: "Office-based, supervised team members",
    copy: "We recruit, employ, train, and performance manage, office-based with extra structure and accountability. You get the outcome and one point of accountability. Ideal for higher-risk functions.",
    points: [
      "Handoff owns recruiting, employment and management",
      "Office-based, supervised team members",
      "Extra structure and accountability",
    ],
    featured: true,
  },
  {
    tag: "Direct the work yourself",
    name: "Remote Employee of Record (EOR)",
    forWho: "Companies that want to manage day to day",
    price: "~$2,900/month",
    terms: "Compliant employment, benefits included",
    copy: "We legally employ your team and carry payroll, benefits and in-country compliance. You direct the work exactly as you would with any employee.",
    points: [
      "Handoff is the legal employer, on our own entity",
      "Payroll, benefits and compliance handled in country",
      "You run the day to day",
    ],
    featured: false,
  },
  {
    tag: "Fastest yes",
    name: "Recruitment & Placement",
    forWho: "Smaller teams and one-off hires",
    price: "~$1,600/month",
    terms: "Direct hire model",
    copy: "We find and vet the person, you employ them directly. Includes a 90-day guarantee. Three of our last four new clients started here.",
    points: [
      "Direct hire model",
      "Lowest ongoing cost of the three models",
      "Full ownership of the relationship",
    ],
    featured: false,
  },
];

/**
 * Shown once beneath the three cards, not repeated per-card: every model
 * carries the same one-time placement fee on top of its own figure above.
 */
export const modelsFootnote =
  "All models include a one-time placement fee of 25% of the candidate's first-year salary. The final amount varies by role, seniority and scope — typically $4,500 to $6,500.";

/**
 * Real Handoff team members, not stock and not placed talent. This is the
 * point Mark made on 8/13: "we don't talk about overseas talent, we are the
 * overseas talent."
 */
export const team = [
  { slug: "jazmin-esparza", name: "Jazmin Esparza", role: "Chief of Staff" },
  { slug: "jake-castro", name: "Jake Castro", role: "VP of Automation" },
  { slug: "karla-patron", name: "Karla Patrón", role: "Marketing Specialist" },
  { slug: "catalina-saldarriaga", name: "Catalina Saldarriaga", role: "Operations Manager" },
  { slug: "simon-quintero", name: "Simon Quintero", role: "Executive Assistant" },
  { slug: "leidy-quintero", name: "Leidy Quintero", role: "Project Manager" },
  { slug: "shaori-velueta", name: "Shaori Velueta", role: "Digital Marketer" },
];

export const proof = {
  eyebrow: "The proof",
  headline: "Everyone talks about hiring top talent.",
  headlineAccent: "Here's what happened when we did it.",
  body: "These are not stock photos and they are not client avatars. This is the Handoff team. Every one of them was hired through the same process we run for you, which is the only reason we are willing to put our own faces on it.",
};

/**
 * Confirmed against the real 36-company client roster (2026-09-07). The
 * four names that were not on the roster (Best Western, Jacob Street,
 * Elevate, and "Fragomen" alone) have been dropped rather than guessed at;
 * "Fragomen" is real as the joint "Fragomen WorkRight" account (same client
 * as the Robert Horsley / WorkRight testimonial in clientQuotes below).
 * More logos are pending real image assets from Anthony.
 */
export const logos = [
  { slug: "dwellworks", name: "Dwellworks" },
  { slug: "fragomen", name: "Fragomen WorkRight" },
  { slug: "quest-relocation", name: "Quest Relocation Group" },
  { slug: "united-corporate-housing", name: "United Corporate Housing" },
  { slug: "nyc-navigator", name: "NYC Navigator" },
  { slug: "good-carma", name: "Good Carma Consulting" },
  { slug: "utility-basics", name: "Utility Basics" },
];

export const process = {
  eyebrow: "How it works",
  headline: "We find the person. You keep moving.",
  body: "We do the hunting and the hard assessment. You make the call on fit. That is how the right person lands in the right seat and stays there.",
  steps: [
    {
      n: "01",
      title: "We scope the role",
      copy: "One call to define the work, the outcome and the model that fits. If we are not the right partner we will tell you on that call.",
    },
    {
      n: "02",
      title: "We hunt, not post",
      copy: "Our recruiters go after people who are not looking for a job. Roughly 300 candidates come under review for a single role.",
    },
    {
      n: "03",
      title: "Skills, English, AI and fit",
      copy: "Video skills assessments and multiple interview rounds. We screen for communication, judgement, and how well someone works with AI tools, not just the technical checklist.",
    },
    {
      n: "04",
      title: "You choose, we employ",
      copy: "You meet a short list and decide. We handle contracts, compliant employment, payroll and the onboarding that gets them productive fast.",
    },
  ],
};

/**
 * The hero says AI TRAINED and nothing else on the site backed it up. This
 * block does, immediately after the process, where the vetting claim lands.
 */
export const aiTrained = {
  headline: "What “AI trained” actually means",
  body: "Every person we place already works with AI tools daily and knows where to use them and where not to. That is a hiring standard for us, not a feature we added. It is also why they move faster on the same work. The judgement stays human. The busywork does not.",
};

export const faqs = [
  {
    q: "How is this different from Upwork or a VA agency?",
    a: "Marketplaces sell you hours from someone juggling several clients. We place one dedicated, full-time person, employed on our own entity, recruited for your specific role. We are not a virtual assistant marketplace and we are not a staffing agency that disappears after the invoice clears.",
  },
  {
    q: "What does it cost?",
    a: "Recruitment & Placement starts around $1,600/month, Remote Employer of Record around $2,900/month, and Managed Staffing around $3,500/month. Every model also carries a one-time placement fee of 25% of first-year salary, typically $4,500 to $6,500. We quote the exact number on the first call once we know the role.",
  },
  {
    q: "We are not ready to hire someone full time.",
    a: "Then we are honestly not your fit yet, and we will say so rather than sell you something that will not work. Handoff exists for companies committing to a real hire who can own an area of the business.",
  },
  {
    q: "What if the person does not work out?",
    a: "Direct-hire placements carry a 90-day guarantee. Under Managed Staffing we own performance management, so a problem is ours to fix, not another hiring cycle for you to run.",
  },
  {
    q: "Why Latin America?",
    a: "Same time zone as your team, genuinely client-ready English, and a professional culture that fits how US companies actually work. Our people join your standups, talk to your customers, and stay.",
  },
  {
    q: "Will they really be part of my team?",
    a: "That is the entire job. Placing someone is the easy half. We build the environment around them, which is why our people stay and why you stop paying to re-hire the same role.",
  },
];

/** Scrolling role ticker. Same roles as /talent, flattened. */
export const roleTicker = [
  "Chief of Staff",
  "Operations Manager",
  "Executive Assistant",
  "Reservations Manager",
  "Marketing Specialist",
  "Project Manager",
  "Bookkeeper",
  "Media Buyer",
  "Quality Assurance",
  "Account Manager",
  "Marketplace Manager",
  "Client Services Lead",
];

/**
 * Day-in-the-life video band. Mark, 8/13: "we don't talk about overseas
 * talent. We are the overseas talent. And that's the difference." Clips are
 * Handoff's own footage, transcoded by scripts/prep-video.mjs.
 */
export const vibes = {
  headline: "We don't talk about",
  headlineStrike: "overseas talent.",
  headlineAccent: "We are the overseas talent.",
  body: "Competitors film their founders describing how good the talent is. You never actually see the talent. This is ours, in their own words, shot where they work.",
  clips: [
    {
      slug: "vibes",
      name: "A day at Handoff",
      caption: "Medellín. Part working session, part the reason people stay.",
    },
    {
      slug: "jazmin",
      name: "Jazmin Esparza",
      caption: "Chief of Staff. Started as employee number two.",
    },
    {
      slug: "shaori",
      name: "Shaori Velueta",
      caption: "Digital Marketer, on what changed for her.",
    },
  ],
};

/**
 * "Alma" is the name of Handoff's managed-services platform. Anthony, 7/23:
 * "Alma, which is soul in Spanish." Tony, 8/6, on why competitor sites fail:
 * they are "missing a little bit of soul." Same word from both directions,
 * so the site says it out loud.
 */
export const soul = {
  headline: "Everyone else sends you",
  headlineAccent: "a talent pool.",
  body: "Our own client manager applied to our biggest competitor before he joined us. This is what that felt like from the other side.",
  quote:
    "I was just a number for them. They knew that I existed, but I was just part of the talent pool.",
  attribution: "Ever Jaimes",
  // Without the second clause this reads as a current employee describing
  // Handoff. She is describing the competitor she applied to before.
  attributionRole:
    "Client Manager at Handoff, on the agency she worked with before.",
  closer:
    "We named our platform Alma. It means soul. That is not branding, it is the entire argument: a person who is treated like a teammate stays, and a person who is treated like a line item leaves.",
  culture: {
    stat: "Several times a year",
    label:
      "the whole team flies to Medellín. Part working session, part the reason people do not leave.",
  },
};

export const cta = {
  headline: "Stop being the bottleneck.",
  body: "Bring the role you cannot get off your plate. One call is usually enough to scope it, pick the model and give you a real timeline.",
  primary: { label: "Get Started Today", href: site.bookCall },
  secondary: { label: "Talk to Our Team", href: site.bookCall },
};

/**
 * Role families we actually fill. Sourced from the 8/7 David Rojas call
 * (highest volume is corporate-housing ops; e-commerce and marketing are the
 * newer push) and the role cards in the brand templates.
 */
export const roleGroups = [
  {
    name: "Operations",
    blurb:
      "The highest-volume roles we fill, and the ones that came out of Anthony's own background in corporate housing.",
    roles: [
      "Operations Manager",
      "Reservations Manager",
      "Quality Assurance Specialist",
      "Project Manager",
    ],
  },
  {
    name: "Leadership & Admin",
    blurb:
      "The hires that take work off a founder's plate rather than adding someone else to manage.",
    roles: [
      "Chief of Staff",
      "Executive Assistant",
      "Bookkeeper",
      "Client Services Lead",
    ],
  },
  {
    name: "Marketing & E-commerce",
    blurb:
      "Where we have grown most recently, supporting brands that need execution as well as strategy.",
    roles: [
      "Marketing Specialist",
      "Marketplace Manager",
      "Media Buyer",
      "Social / TikTok Manager",
    ],
  },
  {
    name: "Revenue",
    blurb:
      "Client-facing roles where English fluency and judgement matter as much as process.",
    roles: [
      "Sales Development Rep",
      "Account Manager",
      "Customer Success Manager",
      "UI/UX Designer",
    ],
  },
];

export const talentPage = {
  eyebrow: "Who you could be hiring",
  headline: "Here's what the top 1%",
  headlineAccent: "actually looks like.",
  body: "Every person below works at Handoff and was hired through the same process we run for our clients. We are not showing you a stock library or a bench of avatars. We are showing you our own team, because that is the standard we are selling.",
  rolesHeadline: "Roles we fill",
  rolesBody:
    "If the role you need is not on this list, it is still worth a call. The list reflects where our recruiting is deepest, not the limit of what we do.",
};

export const contactPage = {
  eyebrow: "Book a call",
  headline: "Tell us the role you",
  headlineAccent: "cannot get off your plate.",
  body: "One call is usually enough to scope the role, pick the right model and give you a realistic timeline. If we are not the right fit, we will tell you on that call rather than sell you something that will not work.",
  expect: [
    "A working session, not a pitch deck",
    "A straight answer on which model fits and what it costs",
    "A realistic timeline based on how defined the role already is",
    "An honest no if we are not your fit",
  ],
  roleOptions: [
    "Operations",
    "Leadership & Admin",
    "Marketing & E-commerce",
    "Revenue / Sales",
    "Something else",
  ],
  modelOptions: [
    "Not sure yet, help me pick",
    "Managed Staffing",
    "Employer of Record",
    "Direct-Hire Recruiting",
  ],
};

/**
 * Industry pages sit underneath a deliberately general homepage, so nobody
 * leaves because they do not see their own industry, and each page still
 * speaks to one room at a time.
 *
 * Rule for adding to this list: only build a page for an industry where a
 * client will go on the record. Until then the industry is a dropdown line
 * that points at the homepage.
 */
export const industries = [
  {
    slug: "corporate-housing",
    navLabel: "Corporate housing",
    name: "Corporate housing and furnished rentals",
    subhead:
      "We help corporate housing and furnished rental operators hire Latin America's top 1% talent.",
    problemHeadline: "Your season does not wait for a hire",
    problemBody:
      "Occupancy climbs, the reservations inbox fills, and the person holding it together is doing three jobs. Hiring for it in the US does not pencil out at these margins, and the last remote assistant you tried needed a script for every guest message.",
    triggers: [
      "Peak season arrives and your reservations team is underwater.",
      "Your operations manager gives notice and takes the vendor relationships with them.",
      "You are turning down units because nobody can handle the coordination.",
      "You tried a VA for guest messaging and got someone who could not make a judgement call.",
    ],
    rolesHeadline: "The roles we fill most in corporate housing",
    roles: [
      "Reservations Manager",
      "Operations Manager",
      "Quality Assurance Specialist",
      "Guest Services Coordinator",
      "Bookkeeper",
    ],
    rolesCloser:
      "These are the roles Anthony hired for himself over ten years in this industry, which is why our recruiting is deepest here.",
  },
  {
    slug: "corporate-relocation",
    navLabel: "Corporate relocation",
    name: "Corporate relocation",
    subhead:
      "We help relocation management companies, movers, and immigration and tax providers hire Latin America's top 1% talent.",
    problemHeadline: "Assignment volume moves faster than hiring does",
    problemBody:
      "A client wins a contract and suddenly you are coordinating twice the assignments with the same team. Adding a US coordinator takes three months and costs more than the account can carry. The work lands on people who are already at capacity, and clients notice before you do.",
    triggers: [
      "Assignment volume spikes and coordination falls behind.",
      "Your client services lead leaves in the middle of assignment season.",
      "You are quoting work you are not sure you can staff.",
      "You tried offshore support and your clients could tell.",
    ],
    rolesHeadline: "The roles we fill most in relocation",
    roles: [
      "Operations Coordinator",
      "Account Manager",
      "Client Services Lead",
      "Quality Assurance Specialist",
      "Bookkeeper",
    ],
    rolesCloser:
      "Same time zone as your clients, client-ready English, and people who understand that a delayed assignment is somebody's family waiting in a hotel.",
  },
] as const;

/**
 * "Talent" read as a page for job seekers, so buyers skipped it and candidates
 * landed on it. It is a page about roles you can hire, so it is called Roles.
 */
export type NavItem = {
  label: string;
  href: string;
  /** Renders as a dropdown on desktop and an indented group on mobile. */
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "How it works", href: "/#process" },
  {
    label: "Industries",
    href: "/industries/corporate-housing",
    children: industries.map((industry) => ({
      label: industry.navLabel,
      href: `/industries/${industry.slug}`,
    })),
  },
  { label: "Roles", href: "/talent" },
  { label: "Results", href: "/results" },
  { label: "Pricing", href: "/#models" },
  { label: "About", href: "/about" },
];

/**
 * Client proof. The quotes are cleared for the site but not yet cleared with
 * the individual clients, so the module ships with the slots visible and the
 * copy obviously fake. Each live quote needs a real name, title, company and
 * a link to that person's actual LinkedIn profile.
 */
export const clientQuotes = {
  eyebrow: "In their words",
  headline: "What clients say when we are not on the call",
  slots: [
    {
      id: "quote-1",
      quote:
        "Handoff has brought us A-players across sales, ops, and marketing — talent with real smarts and grit. They own outcomes, not just check boxes.",
      name: "Robert Horsley",
      title: "CPO",
      company: "WorkRight",
      linkedin: "",
    },
    { id: "quote-2", quote: "[CLIENT QUOTE PENDING APPROVAL]", name: "[NAME PENDING]", title: "[TITLE PENDING]", company: "[COMPANY PENDING]", linkedin: "" },
    { id: "quote-3", quote: "[CLIENT QUOTE PENDING APPROVAL]", name: "[NAME PENDING]", title: "[TITLE PENDING]", company: "[COMPANY PENDING]", linkedin: "" },
  ],
};

/**
 * /results. Built empty on purpose: the case study, the retention figure and
 * the video testimonials are all real but still anonymised, so the structure
 * ships now and the copy drops in when the clients clear it.
 */
export const resultsPage = {
  eyebrow: "Results",
  headline: "What happens after the hire",
  headlineAccent: "is the whole point.",
  body: "Placing someone is the easy half. These are the numbers and the stories from companies that made the hire and kept the person.",
  numbers: [
    { value: "[PENDING]", label: "[RETENTION FIGURE PENDING CLIENT APPROVAL]" },
    { value: "[PENDING]", label: "[METRIC PENDING CLIENT APPROVAL]" },
    { value: "[PENDING]", label: "[METRIC PENDING CLIENT APPROVAL]" },
  ],
  caseStudy: {
    eyebrow: "Case study",
    company: "[COMPANY PENDING APPROVAL]",
    headline: "[CASE STUDY HEADLINE PENDING APPROVAL]",
    situation: "[SITUATION PENDING APPROVAL]",
    work: "[WHAT WE DID PENDING APPROVAL]",
    outcome: "[OUTCOME PENDING APPROVAL]",
  },
  videos: {
    headline: "Video testimonials",
    body: "Filmed with clients, on their own terms. Dropping in as each one clears.",
    slots: [
      { id: "video-1", label: "[VIDEO TESTIMONIAL PENDING APPROVAL]" },
      { id: "video-2", label: "[VIDEO TESTIMONIAL PENDING APPROVAL]" },
      { id: "video-3", label: "[VIDEO TESTIMONIAL PENDING APPROVAL]" },
    ],
  },
};
