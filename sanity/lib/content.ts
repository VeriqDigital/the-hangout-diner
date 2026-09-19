import { cache } from "react";
import { defineQuery } from "next-sanity";
import {
  defaultHours,
  days,
  directionsUrl,
  safeUrl,
  siteConfig,
} from "@/config/site";
import { menuPreview } from "@/data/menu-preview";
import { client } from "./client";
import type {
  Announcement,
  BusinessInfo,
  MenuCategory,
  RestaurantData,
} from "./types";
export const RESTAURANT_QUERY = defineQuery(`{
  "settings": *[_type == "siteSettings" && _id == "siteSettings"][0]{
    phone, address, hours[]{_key, day, status, periods[]{_key, opens, closes}},
    facebookUrl, instagramUrl, directionsUrl, heroImage, storyImage,
    reviewsUrl, googleRating, googleReviewCount,
    testimonials[]{_key, quote, author, sourceUrl}
  },
  "categories": *[_type == "menuCategory" && defined(name) && defined(slug.current)]
    | order(coalesce(sortOrder, 999) asc, name asc) {
    _id, name, "slug": slug.current, description,
    "items": *[_type == "menuItem" && category._ref == ^._id && available == true && defined(name)]
      | order(coalesce(sortOrder, 999) asc, name asc) {
      _id, name, description, price, image, available, featured
    }
  },
  "announcements": *[_type == "announcement" && enabled == true && defined(title)]
    | order(startDate desc, _createdAt desc) {
    _id, title, description, image, enabled, startDate, endDate, ctaText, ctaUrl
  }
}`);
export function isActiveAnnouncement(item: Announcement, now = Date.now()) {
  const start = item.startDate ? Date.parse(item.startDate) : -Infinity;
  const end = item.endDate ? Date.parse(item.endDate) : Infinity;
  return item.enabled === true && start <= now && now < end;
}
const defaults: BusinessInfo = {
  phone: siteConfig.phone,
  address: siteConfig.address,
  hours: defaultHours,
  facebookUrl: siteConfig.facebookUrl,
  instagramUrl: siteConfig.instagramUrl,
  reviewsUrl: siteConfig.reviewsUrl,
  googleRating: 4.7,
  googleReviewCount: 40,
  ratingIsApproximate: true,
};
export function normalizeSettings(
  input?: Partial<BusinessInfo> | null,
): BusinessInfo {
  if (!input) return defaults;
  const address = { ...defaults.address };
  for (const key of Object.keys(address) as (keyof typeof address)[]) {
    if (input.address?.[key]?.trim()) address[key] = input.address[key].trim();
  }
  return {
    ...input,
    address,
    phone: input.phone?.trim() || defaults.phone,
    // An existing, deliberately edited hours array never revives missing default hours.
    hours: days.map((day) =>
      input.hours
        ? input.hours.find((row) => row.day === day) || {
            _key: day.toLowerCase(),
            day,
            status: "unconfirmed" as const,
          }
        : defaultHours.find((row) => row.day === day)!,
    ),
    facebookUrl: safeUrl(input.facebookUrl),
    instagramUrl: safeUrl(input.instagramUrl),
    reviewsUrl: safeUrl(input.reviewsUrl) || defaults.reviewsUrl,
    directionsUrl: safeUrl(input.directionsUrl) || directionsUrl(address),
  };
}
export const getRestaurantData = cache(async (): Promise<RestaurantData> => {
  if (!client)
    return {
      settings: defaults,
      categories: menuPreview,
      announcements: [],
      menuState: "preview",
    };
  try {
    // Request-time reads ensure scheduled closures expire without a publish event.
    // React cache deduplicates shell/page reads; no public tokens or client-side CMS JS.
    const data = await client.fetch<{
      settings: Partial<BusinessInfo> | null;
      categories: MenuCategory[];
      announcements: Announcement[];
    }>(RESTAURANT_QUERY, {}, { cache: "no-store" });
    return {
      settings: normalizeSettings(data.settings),
      categories: (data.categories || [])
        .map((category) => ({
          ...category,
          items: (category.items || []).filter(
            (item) => item.available === true,
          ),
        }))
        .filter((category) => category.items.length > 0),
      announcements: (data.announcements || []).filter((item) =>
        isActiveAnnouncement(item),
      ),
      menuState: "published",
    };
  } catch {
    console.error(
      "Unable to load restaurant content from Sanity. Check project, dataset, and public read access.",
    );
    return {
      settings: defaults,
      categories: [],
      announcements: [],
      menuState: "unavailable",
    };
  }
});
