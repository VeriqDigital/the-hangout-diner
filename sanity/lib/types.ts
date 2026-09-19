import type { HoursDay, siteConfig } from "@/config/site";
import type { RestaurantImage } from "./image";
export type MenuItem = {
  _id: string;
  name: string;
  description?: string;
  price?: string;
  image?: RestaurantImage;
  available: boolean;
  featured: boolean;
};
export type MenuCategory = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  items: MenuItem[];
};
export type Announcement = {
  _id: string;
  title: string;
  description?: string;
  image?: RestaurantImage;
  enabled: boolean;
  startDate?: string;
  endDate?: string;
  ctaText?: string;
  ctaUrl?: string;
};
export type BusinessInfo = {
  phone: string;
  address: typeof siteConfig.address;
  hours: HoursDay[];
  facebookUrl?: string;
  instagramUrl?: string;
  directionsUrl?: string;
  heroImage?: RestaurantImage;
  storyImage?: RestaurantImage;
  reviewsUrl?: string;
  googleRating?: number;
  googleReviewCount?: number;
  ratingIsApproximate?: boolean;
  testimonials?: {
    _key: string;
    quote: string;
    author: string;
    sourceUrl?: string;
  }[];
};
export type RestaurantData = {
  settings: BusinessInfo;
  categories: MenuCategory[];
  announcements: Announcement[];
  menuState: "preview" | "published" | "unavailable";
};
