const enLocale = {
  // Navigation
  navigation: {
    about: "About",
  },

  // Home page
  home: {
    heroTitle: "Rental on Autopilot",
    heroSubtitle:
      "DigiHome makes property management easier, more profitable and completely seamless. We combine short- and long-term rentals in one comprehensive solution – with dynamic pricing, automated operations and a digital tenant portal. You get higher revenues and less administration – without any startup fees.",
    heroButton: "Talk to us",

    // How it works section
    howItWorks: {
      title: "How it Works",
      delivery: "Dynamic Rental",
      deliveryDescription:
        "We combine short- and long-term rentals to maximize revenues – and adjust the strategy continuously based on demand and season.",
      preparation: "Dynamic Pricing",
      preparationDescription:
        "Our analysts monitor the market continuously and adjust prices so you always get the best possible return – without long, rigid contracts.",
      sale: "Automated Operations",
      saleDescription:
        "We handle all the practical aspects: key management, cleaning, communication and follow-up. You don't need to be involved in the daily operations.",
      payout: "Tenant Portal",
      payoutDescription:
        "Your tenants get one user-friendly platform for payments, contact and inquiries. This means fewer disruptions for you – and a better experience for them.",
    },

    // Why rent through Digihome section
    whyRentThroughDigihome: {
      title: "New Standard for Rental – Driven by Technology",
      smartRenting: "More Profitable. Less Work.",
      smartRentingDescription:
        "With DigiHome you get a smarter way to own and operate property. We ensure higher revenues and less headaches – every month.",
      neverWithoutProperty: "Smart Property Management",
      neverWithoutPropertyDescription:
        "DigiHome is a new type of property manager – developed for property owners who expect more. We combine human insight with automated operations and data-driven rental to make management easier, smarter and far more profitable.",
      weHandleEverything: "Always Optimized",
      weHandleEverythingDescription:
        "With us, rental is not static. We adjust between short- and long-term rentals continuously, based on what gives the best income. Our analysts monitor the market continuously and adapt prices according to season, demand and competition – so you always get maximum return, without long commitments or cumbersome processes.",
    },

    // Why not private or trade section
    whyNotPrivateOrTrade: {
      title: "Why Property Owners Choose Us",
      statistic: "No startup fees or hidden costs",
      statisticDescription:
        "It costs nothing to get started. We only take a commission from revenues – you pay only when you earn.",
      competitiveCommission: "Better income than traditional long-term rental",
      competitiveCommissionDescription:
        "We use market monitoring and our own analysts to set and adjust prices continuously. You get access to reports and income overview.",
    },

    // Experience and insight section
    experienceAndInsight: {
      weKnowMarket: "Full overview and reporting",
      weKnowMarketDescription:
        "We attract both short-term and long-term tenants through professional marketing and careful screening.",
    },

    // Final CTA section
    finalCta: {
      title: "Want to know what your property can earn?",
      description:
        "Fill out the form or contact our team directly. We give you a free and non-binding assessment – and show you how DigiHome can increase profitability from day one.",
      contactUs: "Contact Us",
    },

    // About Digihome section
    aboutDigihome: {
      title: "About DigiHome",
      mission:
        "We believe technology, flexibility and execution capability are the future of property management. With DigiHome you get rental on autopilot – and a management model that actually works for you. DigiHome is part of DigiSale – a Norwegian technology consortium building tomorrow's industry leaders.",
      experience: "Experience",
      experienceDescription:
        "Our team brings extensive experience from IT, real estate and rental industries to create the best solution for property owners.",
      smarterAlternative: "Smarter Alternative",
      smarterAlternativeDescription:
        "We don't believe in 'that's how it's always been done'. We believe in technology, flexibility and execution capability.",
      stayMobile: "Scalable Solution",
      stayMobileDescription:
        "From one unit to entire portfolios – our solution grows with your needs and ensures professional follow-up from our team.",
    },
  },

  // DigiSale information
  digisale: {
    partOfDigisale: {
      title: "Part of DigiSale",
      description: "DigiHome is proudly part of DigiSale, a tech group dedicated to creating industry leaders using microteams powered by AI. Our mission is to revolutionize traditional industries through innovative technology and agile development.",
    },
    vision: {
      title: "The DigiSale Vision",
      description: "We believe in the power of small, highly skilled teams enhanced by artificial intelligence to outperform traditional large organizations. Our microteam approach enables rapid innovation, precise execution, and industry-disrupting solutions.",
      features: {
        microteams: "AI-powered microteams for maximum efficiency",
        disruption: "Industry disruption through technology innovation",
        agile: "Agile development and rapid market adaptation",
        datadriven: "Data-driven decision making at every level",
      },
    },
    products: {
      title: "DigiSale Products",
      digihome: {
        name: "DigiHome",
        description: "AI-powered property management platform revolutionizing short and long-term rentals",
      },
      digicar: {
        name: "DigiCar",
        description: "Intelligent automotive solutions transforming vehicle management and logistics",
      },
      more: {
        name: "Digi...",
        description: "Additional industry-leading solutions currently in development under the DigiSale umbrella",
      },
    },
    exploreDigisale: "Explore DigiSale",
  },

  // Lead generation form
  leadForm: {
    title: "Get an Assessment",
    address: "Property Address",
    name: "Name",
    namePlaceholder: "Your full name",
    phone: "Phone",
    phonePlaceholder: "+47 123 45 678",
    emailPlaceholder: "your.email@example.com",
    getStarted: "Get Started",
    successMessage: "Thank you {{name}}! We will contact you shortly.",
    submitError: "Error submitting form: {{error}}",
    fillAllFields: "Please fill in all required fields",
  },

  // Auth
  auth: {
    email: "Email",
  },
};

export type LocaleJson = typeof enLocale;

export default enLocale;
