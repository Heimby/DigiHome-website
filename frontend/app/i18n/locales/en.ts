const enLocale = {
  navigation: {
    about: "About",
    properties: "Properties",
  },

  home: {
    heroTitle: "Rental on Autopilot",
    heroSubtitle:
      "DigiHome makes property management easier, more profitable, and completely seamless.",
    heroButton: "Get started",

    howItWorks: {
      title: "How it Works",
      delivery: "Dynamic Rental",
      deliveryDescription:
        "We combine short and long-term rentals to maximize income and continuously adjust the strategy based on demand and season.",
      preparation: "Dynamic Pricing",
      preparationDescription:
        "Our analysts continuously monitor the market and adjust prices so you always get the best possible return without long, rigid contracts.",
      sale: "Automated Operations",
      saleDescription:
        "We handle all the practical aspects: key management, cleaning, communication, and follow-up. You don't need to be involved in the daily operations.",
      payout: "Tenant Portal",
      payoutDescription:
        "Your tenants get one user-friendly platform for payment, contact, and inquiries. This means fewer disruptions for you and a better experience for them.",
    },

    whyRentThroughDigiHome: {
      title: "New standard for rental driven by technology",
      smartRenting: "More profitable. Less work.",
      smartRentingDescription:
        "With DigiHome, you get a smarter way to own and operate property. We ensure higher income and less hassle.",
      neverWithoutProperty: "Smart Property Management",
      neverWithoutPropertyDescription:
        "DigiHome is a new type of property manager developed for property owners who expect more. We combine human insight with automated operations and data-driven rental to make management easier, smarter, and far more profitable.",
      weHandleEverything: "Always Optimized",
      weHandleEverythingDescription:
        "With us, rental is not static. We continuously adjust between short and long-term rentals based on what provides the best income. Our analysts continuously monitor the market and adapt prices according to season, demand, and competition so you always get maximum return, without long commitments or cumbersome processes.",
    },

    whyNotPrivateOrTrade: {
      title: "Why homeowners choose us",
      statistic: "No startup fees or hidden costs",
      statisticDescription:
        "It costs nothing to get started. We only take a commission from the income – you pay only when rental income is in your account.",
      competitiveCommission:
        "Better earnings than traditional long-term rental",
      competitiveCommissionDescription:
        "We use market monitoring and our own analysts to set and continuously adjust prices. You get access to reports and income overview.",
    },

    experienceAndInsight: {
      weKnowMarket: "Full overview and reporting",
      weKnowMarketDescription:
        "We attract both short and long-term tenants through professional marketing and careful screening.",
    },

    finalCta: {
      title: "Want to know what income your property can generate?",
      description:
        "Fill out the form or contact our team directly. We'll give you a free and non-binding assessment and show you how DigiHome can increase profitability from day one.",
      contactUs: "Contact us",
    },

    aboutProduct: {
      title: "About DigiHome",
      mission:
        "We don't believe in 'that's how it's always been done'. We believe in technology, flexibility, and execution capability. With DigiHome, you get rental on autopilot and a management model that actually works for you. DigiHome is part of DigiSale, a Norwegian technology consortium building tomorrow's industry leaders.",
      experience: "Experience",
      experienceDescription:
        "Our team has extensive expertise from the fields of IT, law, real estate, and rental. The experience background and breadth of competence help create the best and safest solution for property owners.",
      smarterAlternative: "Smarter Alternative",
      smarterAlternativeDescription:
        "We don't believe in 'that's how it's always been done'. We believe in technology, flexibility, and execution capability.",
      stayMobile: "Scalable Solution",
      stayMobileDescription:
        "From one unit to entire portfolios, our solution grows with your needs and ensures professional follow-up from our team throughout the journey.",
    },
  },

  digisale: {
    partOfDigisale: {
      title: "Part of DigiSale",
      description:
        "DigiHome is proudly part of DigiSale, a technology group consisting of a competent team with broad experience background dedicated to creating industry leaders using AI-driven micro-teams. Our mission is to revolutionize traditional industries through innovative technology.",
    },
    vision: {
      title: "DigiSale Vision",
      description:
        "We believe in the power of small, highly qualified teams enhanced by artificial intelligence to outperform traditional large organizations. Our micro-team approach enables rapid innovation, precise execution, and industry-disrupting solutions.",
      features: {
        microteams: "AI-driven micro-teams for maximum efficiency",
        disruption: "Industry-disrupting technology innovation",
        agile: "Agile development and rapid market adaptation",
        datadriven: "Data-driven decisions at all levels",
      },
    },
    products: {
      title: "DigiSale Products",
      DigiHome: {
        name: "DigiHome",
        description:
          "AI-driven property management platform that revolutionizes short and long-term rentals",
      },
      digicar: {
        name: "DigiCar",
        description:
          "Intelligent car solutions that transform commission-based car sales",
      },
      more: {
        name: "Digi...",
        description:
          "Additional industry-leading solutions currently being developed under the DigiSale umbrella",
      },
    },
    exploreDigisale: "Explore DigiSale",
  },

  footer: {
    contactUs: "Get in Touch",
  },

  leadForm: {
    title: "Get a property assessment",
    address: "Property Address",
    name: "Name",
    namePlaceholder: "Your full name",
    phone: "Phone",
    phonePlaceholder: "+47 123 45 678",
    email: "Email",
    emailPlaceholder: "your.email@example.com",
    note: "Message",
    notePlaceholder: "Additional information?",
    getStarted: "Get Started",
    successMessage: "Thank you {{name}}! We will contact you shortly.",
    submitError:
      "Error submitting form: {{error}}. Please email us at post@digihome.no",
    fillAllFields: "Please fill in all required fields",
  },
};

export type LocaleJson = typeof enLocale;

export default enLocale;
