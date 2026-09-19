import { defineField } from "sanity";
export const photoField = (name = "image", title = "Photo") =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    description:
      "Use a real restaurant photo. Choose the focal point, then describe what is shown.",
    fields: [
      defineField({
        name: "alt",
        title: "Image description",
        type: "string",
        validation: (rule) => rule.required(),
      }),
    ],
  });
export const sortOrderField = defineField({
  name: "sortOrder",
  title: "Display order",
  type: "number",
  initialValue: 10,
  description: "Lower numbers appear first.",
  validation: (rule) => rule.integer().min(0),
});
