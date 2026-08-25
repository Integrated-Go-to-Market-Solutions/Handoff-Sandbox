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

export const hero = {
  eyebrow: "Staffing and Recruiting",
  headline: ["The best of", "LATAM.", "AI trained. Here to stay."],
  body: "We help the best US companies hire Latin America's top 1% talent.",
  primary: { label: "See who we'd hire for you", href: site.seeTalent },
  secondary: { label: "Book a call", href: site.bookCall },
  note: "Full-time, dedicated teammates. Not a marketplace.",
};

/** The founder's situation, in his own terms. From the workshopped ICP. */
export const problem = {
  eyebrow: "Sound familiar",
  headline: "You are the bottleneck",
  body: "You are still doing the work you should have handed off two hires ago. You tried a cheap offshore hire and got someone who needed managing. What you actually need is a person who can run something, not another task list to supervise.",
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
  ],
};

/** Ordered as the business wants them sold: managed first, direct hire as the door opener. */
export const models = [
  {
    tag: "Most popular",
    name: "Managed Staffing",
    forWho: "Companies ready to scale a team",
    price: "Flat monthly",
    terms: "Month to month",
    copy: "We recruit, employ, train, and performance manage. You get the outcome and one point of accountability. We answer for how they perform.",
    points: [
      "Handoff owns recruiting, employment and management",
      "Ongoing check-ins and a single point of accountability",
      "Built for teams, not one-off seats",
    ],
    featured: true,
  },
  {
    tag: "Direct the work yourself",
    name: "Employer of Record",
    forWho: "Companies that want to manage day to day",
    price: "Monthly per employee",
    terms: "Rolling",
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
    name: "Direct-Hire Recruiting",
    forWho: "Smaller teams and one-off hires",
    price: "25% of first-year salary",
    terms: "One-time placement fee",
    copy: "We find and vet the person, you employ them directly. Includes a 90-day guarantee. Three of our last four new clients started here.",
    points: [
      "One-time fee, no ongoing commitment",
      "90-day guarantee on every placement",
      "You hold the employment relationship",
    ],
    featured: false,
  },
];

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

/** Pending confirmation from Nicole that these are all live clients. */
export const logos = [
  { slug: "best-western", name: "Best Western" },
  { slug: "dwellworks", name: "Dwellworks" },
  { slug: "fragomen", name: "Fragomen" },
  { slug: "quest-relocation", name: "Quest Relocation Group" },
  { slug: "united-corporate-housing", name: "United Corporate Housing" },
  { slug: "jacob-street", name: "Jacob Street" },
  { slug: "nyc-navigator", name: "NYC Navigator" },
  { slug: "elevate", name: "Elevate" },
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
      title: "Skills, English and fit",
      copy: "Video skills assessments and multiple interview rounds. We screen for communication and judgement, not just the technical checklist.",
    },
    {
      n: "04",
      title: "You choose, we employ",
      copy: "You meet a short list and decide. We handle contracts, compliant employment, payroll and the onboarding that gets them productive fast.",
    },
  ],
};

export const faqs = [
  {
    q: "How is this different from Upwork or a VA agency?",
    a: "Marketplaces sell you hours from someone juggling several clients. We place one dedicated, full-time person, employed on our own entity, recruited for your specific role. We are not a virtual assistant marketplace and we are not a staffing agency that disappears after the invoice clears.",
  },
  {
    q: "What does it cost?",
    a: "Direct-hire placement is a one-time fee of 25% of first-year salary and includes a 90-day guarantee. Employer of Record is billed monthly per employee. Managed Staffing is a flat monthly fee, month to month. We quote the exact number on the first call once we know the role.",
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
  attributionRole: "Client Manager, Handoff",
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
  primary: { label: "Book a call", href: site.bookCall },
  secondary: { label: "See who you could be hiring", href: site.seeTalent },
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

export const nav = [
  { label: "How it works", href: "/#process" },
  { label: "Talent", href: "/talent" },
  { label: "Pricing", href: "/#models" },
  { label: "About", href: "/about" },
];
