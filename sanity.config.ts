"use client";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";
export default defineConfig({
  name: "hangout-diner",
  title: "The Hangout Diner",
  basePath: "/studio",
  projectId: projectId || "unconfigured",
  dataset: dataset || "production",
  schema: {
    ...schema,
    templates: (templates) =>
      templates.filter((template) => template.schemaType !== "siteSettings"),
  },
  document: {
    actions: (actions, context) =>
      context.schemaType === "siteSettings"
        ? actions.filter(
            (action) =>
              !["delete", "duplicate", "unpublish"].includes(
                action.action || "",
              ),
          )
        : actions,
  },
  plugins: [structureTool({ structure })],
});
