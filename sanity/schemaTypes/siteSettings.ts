import { defineArrayMember, defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";
import { defaultHours, days, siteConfig } from "../../config/site";
import { photoField } from "./shared";
const timeField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "string",
    description: "24-hour time, e.g. 07:00 or 20:00.",
    validation: (rule) =>
      rule
        .required()
        .regex(/^([01]\d|2[0-3]):[0-5]\d$/, { name: "24-hour time" }),
  });
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Business information",
  type: "document",
  icon: CogIcon,
  groups: [
    { name: "visit", title: "Contact & hours", default: true },
    { name: "photos", title: "Photos" },
    { name: "social", title: "Social & reviews" },
  ],
  initialValue: {
    phone: siteConfig.phone,
    address: siteConfig.address,
    hours: defaultHours,
    facebookUrl: siteConfig.facebookUrl,
    instagramUrl: siteConfig.instagramUrl,
    reviewsUrl: siteConfig.reviewsUrl,
  },
  fields: [
    defineField({
      name: "phone",
      title: "Phone number",
      type: "string",
      group: "visit",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "address",
      title: "Street address",
      type: "object",
      group: "visit",
      fields: [
        defineField({
          name: "street",
          title: "Street",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "city",
          title: "City",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "state",
          title: "State",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "zip",
          title: "ZIP code",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "hours",
      title: "Weekly hours",
      type: "array",
      group: "visit",
      description:
        "Add one entry per day. For split hours, add both time periods. Leave unconfirmed days as 'Call to confirm'.",
      validation: (rule) =>
        rule.custom((value) => {
          const rows = value as { day?: string }[] | undefined;
          return !rows ||
            new Set(rows.map((row) => row.day)).size === rows.length
            ? true
            : "Use only one entry per day.";
        }),
      of: [
        defineArrayMember({
          name: "hoursDay",
          title: "Day",
          type: "object",
          fields: [
            defineField({
              name: "day",
              title: "Day",
              type: "string",
              options: { list: [...days] },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "status",
              title: "Opening status",
              type: "string",
              initialValue: "unconfirmed",
              options: {
                list: [
                  { title: "Open", value: "open" },
                  { title: "Closed", value: "closed" },
                  { title: "Call to confirm", value: "unconfirmed" },
                ],
                layout: "radio",
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "periods",
              title: "Opening times",
              type: "array",
              hidden: ({ parent }) => parent?.status !== "open",
              validation: (rule) =>
                rule.custom((value, context) => {
                  const parent = context.parent as { status?: string };
                  if (parent?.status !== "open") return true;
                  const periods = value as
                    { opens?: string; closes?: string }[] | undefined;
                  if (!periods?.length)
                    return "Add at least one opening period.";
                  const sorted = [...periods].sort((a, b) =>
                    (a.opens || "").localeCompare(b.opens || ""),
                  );
                  return (
                    sorted.every(
                      (p, i) =>
                        p.opens &&
                        p.closes &&
                        p.opens < p.closes &&
                        (!i || sorted[i - 1].closes! <= p.opens),
                    ) ||
                    "Use non-overlapping periods with closing after opening."
                  );
                }),
              of: [
                defineArrayMember({
                  name: "hoursPeriod",
                  title: "Opening period",
                  type: "object",
                  fields: [
                    timeField("opens", "Opens"),
                    timeField("closes", "Closes"),
                  ],
                  preview: {
                    select: { opens: "opens", closes: "closes" },
                    prepare: ({ opens, closes }) => ({
                      title: `${opens || "?"} – ${closes || "?"}`,
                    }),
                  },
                }),
              ],
            }),
          ],
          preview: { select: { title: "day", subtitle: "status" } },
        }),
      ],
    }),
    defineField({
      name: "directionsUrl",
      title: "Directions link (optional)",
      type: "url",
      group: "visit",
      description: "Leave blank to generate directions from the address.",
      validation: (rule) => rule.uri({ scheme: ["https"] }),
    }),
    { ...photoField("heroImage", "Main food photo"), group: "photos" },
    {
      ...photoField("storyImage", "Restaurant or family photo"),
      group: "photos",
    },
    ...(["facebookUrl", "instagramUrl", "reviewsUrl"] as const).map((name) =>
      defineField({
        name,
        title:
          name === "facebookUrl"
            ? "Facebook link"
            : name === "instagramUrl"
              ? "Instagram link"
              : "Google reviews link",
        type: "url",
        group: "social",
        validation: (rule) => rule.uri({ scheme: ["https"] }),
      }),
    ),
    defineField({
      name: "googleRating",
      title: "Google rating (optional)",
      type: "number",
      group: "social",
      description:
        "Only enter a verified rating. Leave blank to hide the number.",
      validation: (rule) => rule.min(1).max(5),
    }),
    defineField({
      name: "googleReviewCount",
      title: "Google review count (optional)",
      type: "number",
      group: "social",
      validation: (rule) => rule.integer().min(1),
    }),
    defineField({
      name: "testimonials",
      title: "Real customer reviews (optional)",
      type: "array",
      group: "social",
      description: "Use exact, verified customer quotes with a source link.",
      of: [
        defineArrayMember({
          name: "testimonial",
          type: "object",
          fields: [
            defineField({
              name: "quote",
              title: "Exact quote",
              type: "text",
              rows: 3,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "author",
              title: "Public reviewer name",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "sourceUrl",
              title: "Original review link",
              type: "url",
              validation: (rule) => rule.required().uri({ scheme: ["https"] }),
            }),
          ],
          preview: { select: { title: "author", subtitle: "quote" } },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: "The Hangout Diner",
      subtitle: "Contact details, hours, photos & social links",
    }),
  },
});
