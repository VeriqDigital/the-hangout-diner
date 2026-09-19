import assert from "node:assert/strict";
import test from "node:test";
import { evaluate, parse } from "groq-js";
import {
  isActiveAnnouncement,
  normalizeSettings,
  RESTAURANT_QUERY,
} from "../sanity/lib/content";
import { safeUrl, defaultHours } from "../config/site";
import type { Announcement, MenuCategory } from "../sanity/lib/types";

const now = Date.parse("2026-09-19T17:00:00Z");
const announcement: Announcement = {
  _id: "special",
  title: "Lunch special",
  enabled: true,
};
test("announcements respect start-inclusive/end-exclusive schedule boundaries", () => {
  assert.equal(isActiveAnnouncement(announcement, now), true);
  assert.equal(
    isActiveAnnouncement({ ...announcement, enabled: false }, now),
    false,
  );
  assert.equal(
    isActiveAnnouncement(
      { ...announcement, startDate: "2026-09-19T17:00:00Z" },
      now,
    ),
    true,
  );
  assert.equal(
    isActiveAnnouncement(
      { ...announcement, startDate: "2026-09-19T17:01:00Z" },
      now,
    ),
    false,
  );
  assert.equal(
    isActiveAnnouncement(
      { ...announcement, endDate: "2026-09-19T17:00:00Z" },
      now,
    ),
    false,
  );
  assert.equal(
    isActiveAnnouncement({ ...announcement, endDate: "invalid" }, now),
    false,
  );
  assert.equal(
    isActiveAnnouncement({ ...announcement, startDate: "invalid" }, now),
    false,
  );
});
test("announcement offsets are compared as instants, including daylight-saving offsets", () => {
  assert.equal(
    isActiveAnnouncement(
      { ...announcement, startDate: "2026-09-19T12:00:00-05:00" },
      now,
    ),
    true,
  );
  assert.equal(
    isActiveAnnouncement(
      { ...announcement, endDate: "2026-09-19T12:00:00-05:00" },
      now,
    ),
    false,
  );
});
test("missing Sunday hours stay unconfirmed and split hours are preserved", () => {
  const settings = normalizeSettings(null);
  assert.equal(
    settings.hours.find((row) => row.day === "Sunday")?.status,
    "unconfirmed",
  );
  assert.equal(
    settings.hours.find((row) => row.day === "Tuesday")?.status,
    "closed",
  );
  assert.equal(
    settings.hours.find((row) => row.day === "Monday")?.periods?.length,
    2,
  );
});
test("a deliberately edited CMS schedule never restores removed opening hours", () => {
  const settings = normalizeSettings({ hours: [defaultHours[1]] });
  assert.equal(
    settings.hours.find((row) => row.day === "Monday")?.status,
    "unconfirmed",
  );
  assert.equal(
    settings.hours.find((row) => row.day === "Tuesday")?.status,
    "closed",
  );
  assert.ok(
    normalizeSettings({ hours: [] }).hours.every(
      (row) => row.status === "unconfirmed",
    ),
  );
});
test("directions follow an edited street address and malformed links are rejected", () => {
  const settings = normalizeSettings({
    address: { street: "20 Test St", city: "Perry", state: "IA", zip: "50220" },
    directionsUrl: "javascript:alert(1)",
  });
  assert.ok(settings.directionsUrl?.includes("20%20Test%20St"));
  for (const url of [
    "javascript:alert(1)",
    "data:text/html,x",
    "//example.com",
  ])
    assert.equal(safeUrl(url), undefined);
  assert.equal(safeUrl("/menu"), "/menu");
  assert.equal(safeUrl("tel:5159793385"), "tel:5159793385");
});
test("the real GROQ menu query sorts categories/items and hides unavailable dishes", async () => {
  const dataset = [
    {
      _id: "dinner",
      _type: "menuCategory",
      name: "Dinner",
      slug: { current: "dinner" },
      sortOrder: 20,
    },
    {
      _id: "breakfast",
      _type: "menuCategory",
      name: "Breakfast",
      slug: { current: "breakfast" },
      sortOrder: 10,
    },
    {
      _id: "b",
      _type: "menuItem",
      name: "Second item",
      category: { _ref: "breakfast" },
      available: true,
      sortOrder: 20,
    },
    {
      _id: "a",
      _type: "menuItem",
      name: "First item",
      category: { _ref: "breakfast" },
      available: true,
      sortOrder: 10,
      price: "$9.50",
    },
    {
      _id: "hidden",
      _type: "menuItem",
      name: "Unavailable",
      category: { _ref: "breakfast" },
      available: false,
      featured: true,
    },
    {
      _id: "unspecified",
      _type: "menuItem",
      name: "Not explicitly available",
      category: { _ref: "breakfast" },
    },
    {
      _id: "enabled",
      _type: "announcement",
      title: "Scheduled notice",
      enabled: true,
    },
    {
      _id: "disabled",
      _type: "announcement",
      title: "Hidden notice",
      enabled: false,
    },
  ];
  const result = await (
    await evaluate(parse(RESTAURANT_QUERY), { dataset })
  ).get();
  assert.deepEqual(
    result.categories.map((category: MenuCategory) => category._id),
    ["breakfast", "dinner"],
  );
  assert.deepEqual(
    result.categories[0].items.map((item: { _id: string }) => item._id),
    ["a", "b"],
  );
  assert.equal(result.categories[0].items[0].price, "$9.50");
  assert.equal(result.categories[0].items[1].price, null);
  assert.deepEqual(
    result.announcements.map((item: Announcement) => item._id),
    ["enabled"],
  );
});
