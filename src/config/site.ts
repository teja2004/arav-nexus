export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface BusinessItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'Building2' | 'Code2' | 'ReceiptText' | 'Leaf' | 'TrendingUp';
  image: string;
  tags: string[];
  details: {
    overview: string;
    keyHighlights: string[];
    marketFocus: string;
  };
}

export interface InvestmentStep {
  step: string;
  title: string;
  description: string;
  tagline: string;
}

export interface InvestmentFocusItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Building2' | 'Code2' | 'CreditCard' | 'Leaf' | 'Globe' | 'Sparkles';
  badge: string;
}

export interface ImpactCard {
  title: string;
  description: string;
  iconName: 'TrendingUp' | 'Cpu' | 'SunMedium';
  metrics: string;
}

export interface CareerTrack {
  id: string;
  title: string;
  roleCount: string;
  description: string;
  skills: string[];
}

export const siteConfig = {
  name: "ARAV NEXUS",
  legalName: "ARAV NEXUS Group",
  tagline: "Invest. Build. Grow Together.",
  description:
    "ARAV NEXUS is a diversified investment and business company building opportunities across real estate, technology, billing solutions, renewable energy and emerging ventures.",
  foundedYear: "2023",
  currentYear: "2026",

  contact: {
    location: "Hyderabad, India",
    address: "HITEC City & Financial District, Hyderabad, Telangana 500081, India",
    email: "hello@aravnexus.com",
    phone: "+91 984 901 2345",
    businessHours: "Mon – Fri: 9:00 AM – 6:30 PM IST",
    socialLinks: {
      linkedin: "https://linkedin.com/company/aravnexus",
      twitter: "https://twitter.com/aravnexus",
    },
  },

  images: {
    hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
    about: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    realEstate: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    technology: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    billing: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    renewableEnergy: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    emergingVentures: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    partnership: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80",
  },

  navigation: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Businesses", href: "#businesses" },
    { label: "Investments", href: "#investments" },
    { label: "Impact", href: "#impact" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ],

  businesses: [
    {
      id: "real-estate",
      title: "Real Estate",
      subtitle: "Capital & Infrastructure",
      description: "Developing and investing in residential, commercial and mixed-use properties.",
      iconName: "Building2",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      tags: ["Commercial", "Residential", "Mixed-Use", "Asset Management"],
      details: {
        overview: "Strategic deployment into premium urban spaces, mixed-use commercial developments, and grade-A logistics hubs built to appreciate through demographic and regional expansion.",
        keyHighlights: [
          "Curated portfolio of prime commercial and residential acquisitions",
          "Focus on sustainable, transit-oriented development hubs",
          "Institutional asset stewardship and risk-hedged growth",
        ],
        marketFocus: "Tier-1 metropolitan corridors & rapid-growth commercial zones.",
      },
    },
    {
      id: "technology",
      title: "IT & Technology",
      subtitle: "Enterprise & Platforms",
      description: "Building innovative technology solutions, digital products and software businesses.",
      iconName: "Code2",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      tags: ["Cloud Architecture", "AI Solutions", "Enterprise SaaS", "Digital Products"],
      details: {
        overview: "Incubating and funding engineering-led technology ventures that solve mission-critical enterprise bottlenecks with intelligent software and scalable cloud architecture.",
        keyHighlights: [
          "Proprietary SaaS product engineering and incubation",
          "AI-accelerated automation frameworks for modern operations",
          "Full product life-cycle backing from prototyping to scale",
        ],
        marketFocus: "Global B2B software ecosystems and mission-critical enterprise workflows.",
      },
    },
    {
      id: "billing-solutions",
      title: "Billing Solutions",
      subtitle: "Fintech & Automation",
      description: "Smart billing, invoicing and business solutions designed for modern enterprises.",
      iconName: "ReceiptText",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
      tags: ["Recurring Billing", "GST Compliant", "Multi-Currency", "Ledger Analytics"],
      details: {
        overview: "Next-generation transactional software engineered for high-frequency billing, compliant ledger handling, and automated receivables management.",
        keyHighlights: [
          "Zero-friction billing pipelines with high concurrency",
          "Unified multi-channel payment reconciliation engine",
          "Deep ERP and bookkeeping automation hooks",
        ],
        marketFocus: "Mid-market businesses, subscription SaaS, and distributed retail chains.",
      },
    },
    {
      id: "renewable-energy",
      title: "Renewable Energy",
      subtitle: "Clean Infrastructure",
      description: "Exploring sustainable energy opportunities and supporting a cleaner future.",
      iconName: "Leaf",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
      tags: ["Solar Power", "Clean Grid", "Decarbonization", "Green Assets"],
      details: {
        overview: "Deploying catalytic capital into clean energy generation, decentralized solar infrastructure, and green power systems that yield dependable long-term yields while lowering industrial carbon footprints.",
        keyHighlights: [
          "Rooftop and distributed commercial solar project financing",
          "Long-term power purchase agreements (PPAs)",
          "Integration with ESG governance and carbon credit validation",
        ],
        marketFocus: "Industrial manufacturing parks and clean grid utilities.",
      },
    },
    {
      id: "emerging-ventures",
      title: "Emerging Ventures",
      subtitle: "Next-Generation Horizons",
      description: "Exploring emerging opportunities across industries with strong potential for long-term growth.",
      iconName: "TrendingUp",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      tags: ["Venture Capital", "Cross-Border", "Deep Tech", "Strategic Equity"],
      details: {
        overview: "Agile opportunistic allocations into transformative founders and niche industries poised for inflection points in the next decade.",
        keyHighlights: [
          "Selective seed and series-A minority equity participation",
          "Founder-friendly terms paired with operational mentorship",
          "Cross-pollination across the ARAV NEXUS operating portfolio",
        ],
        marketFocus: "High-growth technological and consumer shifts.",
      },
    },
  ] as BusinessItem[],

  stats: [
    { value: 5, suffix: "+", label: "Industries", subtext: "Diversified portfolio" },
    { value: 10, suffix: "+", label: "Business Relationships", subtext: "Partners & ventures" },
    { value: 100, suffix: "%", label: "Growth Focus", subtext: "Long-term commitment" },
    { value: null, display: "Global", suffix: "", label: "Opportunities", subtext: "Future horizons" },
  ],

  investmentApproach: [
    {
      step: "01",
      title: "IDENTIFY",
      tagline: "Discovery & Due Diligence",
      description: "We identify promising businesses, markets and opportunities.",
    },
    {
      step: "02",
      title: "INVEST",
      tagline: "Capital & Capability",
      description: "We provide capital, technology and strategic resources.",
    },
    {
      step: "03",
      title: "BUILD",
      tagline: "Operational Excellence",
      description: "We work with partners to build scalable and sustainable businesses.",
    },
    {
      step: "04",
      title: "GROW",
      tagline: "Value Compounding",
      description: "We focus on long-term value creation and responsible growth.",
    },
  ] as InvestmentStep[],

  investmentFocus: [
    {
      id: "focus-real-estate",
      title: "REAL ESTATE",
      description: "Property and infrastructure opportunities.",
      iconName: "Building2",
      badge: "Real Assets",
    },
    {
      id: "focus-tech",
      title: "TECHNOLOGY",
      description: "Software, IT services and digital products.",
      iconName: "Code2",
      badge: "Digital Core",
    },
    {
      id: "focus-fintech",
      title: "FINTECH & BILLING",
      description: "Billing, payments and financial technology.",
      iconName: "CreditCard",
      badge: "Financial Tech",
    },
    {
      id: "focus-energy",
      title: "RENEWABLE ENERGY",
      description: "Sustainable energy opportunities.",
      iconName: "Leaf",
      badge: "Clean Tech",
    },
    {
      id: "focus-digital",
      title: "DIGITAL BUSINESSES",
      description: "Scalable digital-first businesses.",
      iconName: "Globe",
      badge: "Scale Platforms",
    },
    {
      id: "focus-emerging",
      title: "EMERGING VENTURES",
      description: "New markets and high-potential opportunities.",
      iconName: "Sparkles",
      badge: "Future Value",
    },
  ] as InvestmentFocusItem[],

  whyChooseUs: [
    {
      title: "LONG-TERM VISION",
      description: "We focus on sustainable opportunities rather than short-term trends.",
      icon: "Compass",
    },
    {
      title: "INNOVATION",
      description: "We believe technology and new ideas can transform businesses.",
      icon: "Lightbulb",
    },
    {
      title: "PARTNERSHIP",
      description: "We build strong relationships with founders, businesses and strategic partners.",
      icon: "Users",
    },
    {
      title: "RESPONSIBILITY",
      description: "We aim to create meaningful economic and business value.",
      icon: "ShieldCheck",
    },
  ],

  impact: [
    {
      title: "BUSINESS GROWTH",
      description: "Supporting businesses and entrepreneurs.",
      iconName: "TrendingUp",
      metrics: "Sustainable Scalability",
    },
    {
      title: "TECHNOLOGY",
      description: "Enabling digital transformation and innovation.",
      iconName: "Cpu",
      metrics: "Digital Transformation",
    },
    {
      title: "SUSTAINABILITY",
      description: "Exploring responsible and sustainable opportunities.",
      iconName: "SunMedium",
      metrics: "Responsible Stewardship",
    },
  ] as ImpactCard[],

  journeyMilestones: [
    {
      year: "2023",
      title: "The Genesis",
      description: "ARAV NEXUS begins with a vision to build diversified business opportunities.",
    },
    {
      year: "2024",
      title: "Digital Expansion",
      description: "Expansion into technology and digital business initiatives.",
    },
    {
      year: "2025",
      title: "Commercial Platforms",
      description: "Growth into billing and business solutions.",
    },
    {
      year: "2026",
      title: "Multi-Sector Acceleration",
      description: "Expanding investment opportunities across multiple industries.",
    },
    {
      year: "FUTURE",
      title: "Integrated Ecosystem",
      description: "Building a broader ecosystem of businesses and strategic partnerships.",
    },
  ] as Milestone[],

  careers: [
    {
      id: "tech",
      title: "Technology",
      roleCount: "Multiple Roles",
      description: "Build next-generation enterprise software, scalable APIs, and intelligent data systems.",
      skills: ["Full Stack Engineering", "Cloud Infrastructure", "Product Architecture"],
    },
    {
      id: "bizdev",
      title: "Business Development",
      roleCount: "Strategic Partnerships",
      description: "Originate investment pipelines, develop commercial alliances, and lead deal execution.",
      skills: ["Deal Sourcing", "Strategic Partnerships", "Market Analysis"],
    },
    {
      id: "operations",
      title: "Operations",
      roleCount: "Portfolio Governance",
      description: "Partner with portfolio company leadership to scale systems, finance, and operating rhythm.",
      skills: ["Operational Strategy", "Financial Modeling", "Program Management"],
    },
  ] as CareerTrack[],
};
