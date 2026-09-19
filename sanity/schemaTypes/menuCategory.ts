import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";
import { sortOrderField } from "./shared";
export const menuCategory = defineType({
  name: "menuCategory",
  title: "Menu category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "name",
      title: "Category name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Menu link",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short introduction (optional)",
      type: "text",
      rows: 2,
    }),
    sortOrderField,
  ],
  orderings: [
    {
      title: "Menu order",
      name: "menuOrder",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
});
