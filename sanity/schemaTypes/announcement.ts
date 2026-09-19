import { defineField, defineType } from "sanity";
import { BellIcon } from "@sanity/icons";
import { photoField } from "./shared";
export const announcement = defineType({
  name: "announcement",
  title: "Special or announcement",
  type: "document",
  icon: BellIcon,
  fields: [
    defineField({
      name: "title",
      title: "Headline",
      type: "string",
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: "description",
      title: "Details",
      type: "text",
      rows: 3,
      validation: (rule) => rule.max(500),
    }),
    photoField(),
    defineField({
      name: "enabled",
      title: "Show on the website",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "startDate",
      title: "Show from (optional)",
      type: "datetime",
      description:
        "Times use the timezone shown in the date picker. Leave blank to start immediately.",
    }),
    defineField({
      name: "endDate",
      title: "Hide after (optional)",
      type: "datetime",
      description:
        "Set an end time for daily specials, closures, and holiday hours.",
      validation: (rule) =>
        rule.custom((value, context) => {
          const start = context.document?.startDate;
          return value &&
            typeof start === "string" &&
            Date.parse(value) <= Date.parse(start)
            ? "End time must be after the start time."
            : true;
        }),
    }),
    defineField({
      name: "ctaText",
      title: "Button label (optional)",
      type: "string",
    }),
    defineField({
      name: "ctaUrl",
      title: "Button link (optional)",
      type: "url",
      validation: (rule) =>
        rule.uri({ allowRelative: true, scheme: ["http", "https", "tel"] }),
    }),
  ],
  preview: {
    select: { title: "title", enabled: "enabled", media: "image" },
    prepare({ title, enabled, media }) {
      return {
        title,
        subtitle: enabled ? "Enabled · check scheduled dates" : "Hidden",
        media,
      };
    },
  },
});
