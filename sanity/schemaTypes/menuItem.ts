import { defineField, defineType } from "sanity";
import { ComposeIcon } from "@sanity/icons";
import { photoField, sortOrderField } from "./shared";
export const menuItem = defineType({
  name: "menuItem",
  title: "Menu item",
  type: "document",
  icon: ComposeIcon,
  fields: [
    defineField({
      name: "name",
      title: "Dish name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "price",
      title: "Price (optional)",
      type: "string",
      description:
        'Enter exactly as it should appear, for example "$9.50" or "Market price". Leave blank if needed.',
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "menuCategory" }],
      validation: (rule) => rule.required(),
    }),
    photoField(),
    defineField({
      name: "featured",
      title: "Feature on the homepage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "available",
      title: "Available to order",
      type: "boolean",
      initialValue: true,
      description: "Turn off to hide this item everywhere on the website.",
      validation: (rule) => rule.required(),
    }),
    sortOrderField,
  ],
  preview: {
    select: {
      title: "name",
      category: "category.name",
      available: "available",
      media: "image",
    },
    prepare({ title, category, available, media }) {
      return {
        title,
        subtitle: `${category || "Choose a category"}${available ? "" : " · Hidden"}`,
        media,
      };
    },
  },
});
