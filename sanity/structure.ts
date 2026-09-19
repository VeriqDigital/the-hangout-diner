import type { StructureResolver } from "sanity/structure";
import { BookIcon, BellIcon, CogIcon } from "@sanity/icons";
export const structure: StructureResolver = (S) =>
  S.list()
    .title("The Hangout Diner")
    .items([
      S.listItem()
        .title("Menu")
        .icon(BookIcon)
        .child(
          S.list()
            .title("Menu")
            .items([
              S.documentTypeListItem("menuItem").title("Menu items"),
              S.documentTypeListItem("menuCategory").title("Categories"),
            ]),
        ),
      S.documentTypeListItem("announcement")
        .title("Specials & Announcements")
        .icon(BellIcon),
      S.listItem()
        .title("Business Information")
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Business Information"),
        ),
    ]);
