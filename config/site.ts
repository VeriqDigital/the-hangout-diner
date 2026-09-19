export const siteConfig = {
  name: "Sparkle & Shine Cleaning Co.",
  shortName: "Sparkle & Shine",
  tagline: "A cleaner home. A lighter week.",
  description:
    "A residential cleaning website concept for the Des Moines metro, created by Veriq. Sparkle & Shine is a fictional business.",
  locale: "en_US",
  location: {
    businessCity: "West Des Moines",
    businessState: "Iowa",
    serviceAreaLabel: "Serving the Des Moines metro",
    communities: [
      "West Des Moines",
      "Des Moines",
      "Waukee",
      "Clive",
      "Urbandale",
      "Johnston",
      "Ankeny",
    ],
  },
  contact: {
    phone: "515-555-0147",
    phoneHref: "tel:+15155550147",
    smsHref: "sms:+15155550147",
  },
} as const;

export const navigation = [
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/about" },
  { label: "How It Works", href: "/#process" },
  { label: "Service Area", href: "/#service-area" },
  { label: "FAQ", href: "/#faq" },
] as const;
