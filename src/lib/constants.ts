export const BRAND = {
  name: "Stay Starving",
  legalName: "Stay Starving Holdings LLC",
  state: "Wyoming",
  tagline: "Stay Starving",
  mission: "Engineer Freedom Through Systems",
  description:
    "A diversified holding company building financial freedom through real estate, media, AI automation, education, and strategic investments.",
  founder: "Charles 'Trey' Cooper III",
  founderTitle: "Founder & CEO",
  memberTitle: "Executive",
} as const;

export const SKOOL_URL = "https://www.skool.com/charless-group-9799";

export const DIVISIONS = [
  {
    name: "C6 Properties",
    slug: "c6-properties",
    tagline: "Real estate. Airbnb. Asset-backed income.",
    description:
      "Short-term rental operations and real estate portfolio management. Building wealth through strategic property acquisitions, Airbnb optimization, and scalable property systems.",
    longDescription:
      "C6 Properties is the real estate arm of Stay Starving Holdings. We operate a portfolio of short-term rental properties optimized for maximum cash flow through dynamic pricing, automated guest communication, and smart home technology. Our approach combines traditional real estate fundamentals with modern automation, from AI-powered pricing algorithms to fully automated guest experiences. Every property is a system, not just an asset.",
    category: "real_estate",
    icon: "Building2",
    externalUrl: "https://airbnb.com/h/melbournebeachstay",
    features: [
      "Short-term rental portfolio management",
      "Dynamic pricing optimization",
      "Automated guest communication",
      "Smart home IoT integration",
      "Property acquisition & analysis",
    ],
  },
  {
    name: "Stay Starving Media",
    slug: "stay-starving-media",
    tagline: "YouTube. Content. Distribution.",
    description:
      "Multi-platform content distribution engine. YouTube long-form, Shorts, LinkedIn, email.building an audience that converts into every monetization layer.",
    longDescription:
      "Stay Starving Media is the distribution engine of the entire ecosystem. Through YouTube long-form content, Shorts, LinkedIn thought leadership, and email newsletters, we build attention and convert it into revenue across every division. Our content pipeline is powered by AI automation, from transcription and caption generation to B-roll sourcing and video rendering. Content is the flywheel that drives everything.",
    category: "media",
    icon: "Play",
    features: [
      "YouTube long-form & Shorts production",
      "AI-powered video editing pipeline",
      "Multi-platform content distribution",
      "Email newsletter & audience building",
      "Brand storytelling & thought leadership",
    ],
  },
  {
    name: "Luxcor AI",
    slug: "luxcor-ai",
    tagline: "AI automation. SaaS. The intelligence layer.",
    description:
      "Custom AI automation solutions for businesses. Voice agents, workflow automation, and intelligent systems that replace manual work with scalable infrastructure.",
    longDescription:
      "Luxcor AI is where engineering meets entrepreneurship. We build and deploy custom AI automation solutions, from voice agents that qualify leads 24/7 to workflow automation that eliminates hours of manual work. Using our proprietary WAT Framework (Workflows, Agents, Tools), we architect systems where AI handles reasoning and deterministic code handles execution. The result: reliable automation that actually works in production.",
    category: "technology",
    icon: "Bot",
    externalUrl: "https://luxcorai.vercel.app/",
    features: [
      "Custom AI agent development",
      "Voice agent setup & deployment",
      "Workflow automation (n8n, Python)",
      "Business process optimization",
      "Monthly retainer support & monitoring",
    ],
  },
  {
    name: "The Boardroom",
    slug: "the-boardroom",
    tagline: "Courses. Community. C-Suite School.",
    description:
      "Premium membership community for operators building wealth through AI, real estate, and investing. Three tracks, one mission: engineer freedom.",
    longDescription:
      "The Boardroom is where executives are made. Our premium membership gives you access to three comprehensive course tracks: AI Systems, Real Estate, and Stock Market & Options, plus the Wealth Operating System bonus curriculum. Members earn corporate titles from Associate to C-Suite through engagement and results. This isn't a community of dreamers. It's a room full of operators building real wealth through real systems.",
    category: "education",
    icon: "GraduationCap",
    features: [
      "3 course tracks (AI, Real Estate, Investing)",
      "Wealth Operating System bonus lessons",
      "Private community of operators",
      "Gamification: Associate → C-Suite progression",
      "Monthly AMAs & strategy sessions",
    ],
  },
  {
    name: "KayphoriaX",
    slug: "kayphoriax",
    tagline: "High fashion. Body positivity. Creative self-expression.",
    description:
      "KayphoriaX is a high fashion lingerie couture brand specializing in diversity-focused swimwear, apparel, accessories, and high fashion lingerie. Founded by Kayci (KAYPHORIA), a Tuskegee University graduate, the brand inspires confidence and creative self-expression.",
    longDescription:
      "KayphoriaX is a high fashion lingerie couture brand built on the pillars of body positivity, creative self-expression, and empowerment. Founded by Kayci, known as KAYPHORIA, a Tuskegee University graduate in Pre-Vet and Animal Science who transitioned from content creation to building a fashion empire. The brand's mission is to inspire people around the world to have confidence in their bodies and themselves. KXSS, the collaboration between KayphoriaX and Stay Starving, merges bold couture design with relentless identity. Collections include HEART ABLAZE, GOOD VS. EVIL, DREAMLAND, and GARDEN.",
    category: "apparel",
    icon: "Shirt",
    externalUrl: "https://kayphoriax.com",
    features: [
      "KXSS: KayphoriaX x Stay Starving collaboration",
      "High fashion lingerie couture",
      "Diversity-focused swimwear & apparel",
      "Limited edition collection drops",
      "Body positivity & empowerment brand",
    ],
  },
  {
    name: "Opulent Sky Solutions",
    slug: "opulent-sky-solutions",
    tagline: "Aerial photography. Drone services. Sky-high perspective.",
    description:
      "Professional drone services for real estate listings, commercial properties, events, and anything that needs a view from above.",
    longDescription:
      "Opulent Sky Solutions provides professional aerial photography and drone services, specializing in real estate. From stunning listing photos that sell homes faster to commercial property surveys and event coverage, we deliver sky-high perspectives that ground-level cameras can't match. Fully licensed and insured, Opulent Sky bridges the gap between real estate and technology, giving every property the premium visual treatment it deserves.",
    category: "real_estate",
    icon: "Camera",
    instagramUrl: "https://www.instagram.com/opulentskysolutions",
    features: [
      "Aerial real estate photography",
      "Commercial property surveys",
      "Event & venue coverage",
      "4K video flyovers",
      "Licensed & insured drone operations",
    ],
  },
  {
    name: "Stay Starving Ventures",
    slug: "stay-starving-ventures",
    tagline: "Investment arm. Strategic capital.",
    description:
      "Strategic investments in creators, automation startups, and emerging opportunities aligned with the Stay Starving ecosystem.",
    longDescription:
      "Stay Starving Ventures is the investment arm of the holding company. We deploy strategic capital into creators, automation-focused startups, and emerging opportunities that align with our ecosystem. Every investment strengthens the flywheel, whether it's backing a content creator who amplifies the brand, funding an AI startup that becomes a portfolio company, or seeding a real estate deal that adds to our property portfolio.",
    category: "investments",
    icon: "TrendingUp",
    features: [
      "Creator funding & partnerships",
      "Automation startup investments",
      "Real estate deal syndication",
      "Strategic portfolio building",
      "Ecosystem-aligned capital deployment",
    ],
  },
  {
    name: "Stay Starving Foundation",
    slug: "stay-starving-foundation",
    tagline: "Youth mentorship. Giving back.",
    description:
      "Nonprofit arm focused on youth mentorship, financial literacy, and automation education for underserved communities.",
    longDescription:
      "The Stay Starving Foundation is how we give back. Through youth mentorship programs, financial literacy workshops, and automation education initiatives, we equip the next generation with the tools and mindset to build their own freedom. Every executive in The Boardroom is encouraged to mentor, and a portion of holding company profits funds the foundation's programs.",
    category: "nonprofit",
    icon: "Heart",
    features: [
      "Youth mentorship programs",
      "Financial literacy workshops",
      "Automation education initiatives",
      "Community outreach",
      "Scholarship programs",
    ],
  },
  {
    name: "Trey Cooper Realty",
    slug: "trey-cooper-realty",
    tagline: "Florida Realtor. Deal flow. Market access.",
    description:
      "Licensed Florida Realtor specializing in multifamily and commercial real estate. Systems-first approach with AI-powered lead qualification, market analysis, and deal flow for buyers and investors.",
    longDescription:
      "Trey Cooper Realty provides licensed real estate agent services powered by technology. I specialize in multifamily and commercial. From AI-driven lead qualification to data-backed market analysis, we bring a systems-first approach to every transaction. Whether you're buying your first home, acquiring an investment property, or selling a portfolio asset, you get an agent who thinks like an investor and operates like an engineer.",
    category: "services",
    icon: "Home",
    instagramUrl: "https://www.instagram.com/stayinvestedre",
    brokerUrl: "https://www.itgrealty.com/trey-cooper/",
    calendlyUrl: "https://calendly.com/treycooper333/onboarding-meeting",
    features: [
      "Multifamily & commercial specialization",
      "Buyer & seller representation",
      "Investment property acquisition",
      "AI-powered lead qualification",
      "Market analysis & deal sourcing",
    ],
  },
] as const;

export const CATEGORIES = [
  { value: "all", label: "All Divisions" },
  { value: "real_estate", label: "Real Estate" },
  { value: "media", label: "Media" },
  { value: "technology", label: "Technology" },
  { value: "education", label: "Education" },
  { value: "apparel", label: "Apparel" },
  { value: "investments", label: "Investments" },
  { value: "nonprofit", label: "Nonprofit" },
  { value: "services", label: "Services" },
] as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "The Boardroom", href: "/boardroom" },
  { label: "Services", href: "/services" },
  { label: "Media", href: "/media" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
] as const;

export const COURSE_TRACKS = [
  {
    name: "AI Systems",
    tagline: "Build systems that work without you.",
    description:
      "Build, deploy, and sell AI automations.from your first bot to your first paying client.",
    icon: "Bot",
    modules: [
      "AI Automation Foundations",
      "Build Your First AI Agent",
      "Monetize Your Automations",
    ],
  },
  {
    name: "Real Estate",
    tagline: "Own assets. Build equity. Automate operations.",
    description:
      "Build wealth through property.Airbnb, house hacking, rehabs, and agent strategies.",
    icon: "Building2",
    modules: [
      "Real Estate as a System",
      "Airbnb & STR Operations",
      "Advanced Strategies (BRRRR, Rehabs, Entity Structuring)",
    ],
  },
  {
    name: "Stock Market & Options",
    tagline: "Make your money work. Then make it work harder.",
    description:
      "Learn to invest, trade options, and build a portfolio that compounds.",
    icon: "TrendingUp",
    modules: [
      "Market Foundations",
      "Options Trading",
      "Advanced Options & Risk Management",
    ],
  },
] as const;

export const GAMIFICATION_LEVELS = [
  { level: 1, name: "Associate", points: 0, unlock: "Community access, Module 1 of all tracks" },
  { level: 2, name: "Manager", points: 50, unlock: "Profile badge" },
  { level: 3, name: "Director", points: 150, unlock: "Bonus resources & templates" },
  { level: 4, name: "VP", points: 300, unlock: "Monthly AMA recordings" },
  { level: 5, name: "Executive", points: 500, unlock: "1:1 strategy session (15 min)" },
  { level: 6, name: "C-Suite", points: 1000, unlock: "Inner circle.direct access to Trey" },
] as const;

export const MEMBERSHIP_PRICING = {
  monthly: { price: 29, interval: "month" as const, label: "$29/month" },
  annual: { price: 249, interval: "year" as const, label: "$249/year", savings: 99 },
  founding: { price: 19, interval: "month" as const, label: "$19/month", note: "First 20 members.locked in for life" },
} as const;

export const STATS = [
  { value: 9, label: "Divisions", suffix: "", prefix: "" },
  { value: 3, label: "Course Tracks", suffix: "", prefix: "" },
  { value: 50, label: "Target", suffix: "M", prefix: "$" },
  { value: 6, label: "Gamification Levels", suffix: "", prefix: "" },
] as const;

export const SOCIAL_LINKS = {
  youtube: "https://www.youtube.com/@TreyCooper.",
  instagram: "https://www.instagram.com/staystarvingofficial/",
  twitter: "https://x.com/treythesavage3",
  discord: "https://discord.gg/684VAZaZ",
} as const;

export const MILESTONES = [
  { year: "2018", title: "Started Investing", description: "Began investing in stocks and crypto at 18 years old" },
  { year: "2022", title: "Florida Realtor", description: "Licensed as a Florida Realtor at 22" },
  { year: "2024", title: "First Property", description: "Purchased first investment property at 25. C6 Properties founded" },
  { year: "2025", title: "Holdings LLC", description: "Stay Starving Holdings LLC established in Wyoming" },
  { year: "2025", title: "Luxcor AI", description: "Built the WAT Framework.Luxcor AI automation division launched" },
  { year: "2026", title: "The Boardroom", description: "C-Suite School launched.education arm goes live" },
  { year: "2030", title: "$50M Vision", description: "Target: $50M+ diversified holdings with 100+ global team" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is The Boardroom?",
    answer:
      "The Boardroom is a premium membership community for operators building wealth through AI automation, real estate, and investing. You get access to 3 comprehensive course tracks, the Wealth Operating System bonus curriculum, and a private community of builders and executives.",
  },
  {
    question: "Who is this for?",
    answer:
      "Entrepreneurs, engineers, creators, and anyone ready to build real wealth through systems. If you're tired of trading time for money and want to learn how to build automated income streams, this is your room.",
  },
  {
    question: "What do I get as an Executive?",
    answer:
      "Immediate access to Module 1 of all 3 tracks, the Wealth Operating System, and the private community. Modules 2 and 3 drip at 7 and 14 days. You also earn corporate titles from Associate to C-Suite through engagement.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. No contracts, no commitments. Cancel anytime through your account settings. You'll retain access through the end of your billing period.",
  },
  {
    question: "Is this just another course?",
    answer:
      "No. Courses are part of it, but The Boardroom is an operating community. Members share real numbers, real deals, and real builds. The leaderboard rewards action, not watching videos. Bring receipts or don't post.",
  },
] as const;
