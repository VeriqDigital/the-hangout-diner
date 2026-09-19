export const siteConfig = {
  name: "The Hangout Diner",
  description:
    "Family-owned comfort food in Perry, Iowa. Stop by The Hangout Diner for breakfast, burgers, sandwiches, and a seat at the table.",
  phone: "(515) 979-3385",
  address: { street: "1014 2nd St", city: "Perry", state: "IA", zip: "50220" },
  facebookUrl: "https://www.facebook.com/profile.php?id=61568496936798",
  instagramUrl: "https://www.instagram.com/thehangoutdiner/",
  reviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=The+Hangout+Diner+1014+2nd+St+Perry+IA",
};
export const navigation = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Our story", href: "/about" },
  { label: "Visit us", href: "/contact" },
];
export const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;
export type Day = (typeof days)[number];
export type HoursDay = {
  _key: string;
  day: Day;
  status: "open" | "closed" | "unconfirmed";
  periods?: { _key: string; opens: string; closes: string }[];
};
export const defaultHours: HoursDay[] = days.map((day) => ({
  _key: day.toLowerCase(),
  day,
  status:
    day === "Tuesday" ? "closed" : day === "Sunday" ? "unconfirmed" : "open",
  periods:
    day === "Tuesday" || day === "Sunday"
      ? []
      : [
          { _key: "morning", opens: "07:00", closes: "14:00" },
          { _key: "evening", opens: "16:00", closes: "20:00" },
        ],
}));
export function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}
export function addressText(address: typeof siteConfig.address) {
  return `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
}
export function directionsUrl(address: typeof siteConfig.address) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressText(address))}`;
}
export function safeUrl(url?: string | null): string | undefined {
  if (!url) return undefined;
  if (/^\/(?!\/)/.test(url) || /^#[\w-]+$/.test(url)) return url;
  try {
    const parsed = new URL(url);
    return ["https:", "http:", "tel:"].includes(parsed.protocol)
      ? url
      : undefined;
  } catch {
    return undefined;
  }
}
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
export const isPublicSite =
  process.env.SITE_INDEXABLE === "true" && Boolean(siteUrl);
