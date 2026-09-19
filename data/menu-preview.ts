import type { MenuCategory } from "@/sanity/lib/types";
// Minimal reference content, NOT a full menu or an import seed.
// Dish names only: https://the-hangout-diner.b12sites.com/menu (reviewed 2026-09-19).
// Never used when Sanity is configured, including when its menu is empty.
export const menuPreview: MenuCategory[] = [
  {
    _id: "preview-breakfast",
    name: "Breakfast",
    slug: "breakfast",
    items: [
      {
        _id: "preview-biscuits",
        name: "Biscuits & Gravy",
        available: true,
        featured: false,
      },
    ],
  },
  {
    _id: "preview-sandwiches",
    name: "Burgers & Sandwiches",
    slug: "burgers-sandwiches",
    items: [
      {
        _id: "preview-burger",
        name: "Classic Burger",
        available: true,
        featured: false,
      },
      {
        _id: "preview-tenderloin",
        name: "Pork Tenderloin Sandwich",
        available: true,
        featured: false,
      },
    ],
  },
];
