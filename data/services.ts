// Local portfolio content: a future CMS adapter can return this presentation shape.
export type DemoService = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  bestFor: string;
  scope: string[];
  note: string;
  image: string;
  imageAlt: string;
};

export const services: DemoService[] = [
  {
    slug: "recurring-home-cleaning",
    title: "Recurring Home Cleaning",
    shortTitle: "A clean home, on repeat.",
    description:
      "Keep the everyday buildup in check with a dependable cleaning rhythm. We take care of the regular tasks so your weekends stay yours.",
    bestFor:
      "Busy households ready to take cleaning off the weekly to-do list.",
    scope: [
      "Kitchen surfaces, sink, and appliance exteriors",
      "Bathrooms, mirrors, and fixtures",
      "Dusting reachable surfaces",
      "Vacuuming and mopping",
    ],
    note: "Weekly, every two weeks, or monthly. We confirm the right starting clean and schedule with your quote.",
    image: "/house-cleaning.png",
    imageAlt:
      "Sunlit kitchen with clear counters and neatly arranged cleaning supplies",
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    shortTitle: "A little more attention.",
    description:
      "A more detailed clean for the areas that regular upkeep can miss. Give built-up dust, bathroom residue, and kitchen grime some focused attention.",
    bestFor:
      "Seasonal refreshes, a first visit, or a home that needs extra time.",
    scope: [
      "Extra attention to kitchen and bathroom buildup",
      "Reachable baseboards and trim",
      "Detailed dusting of accessible surfaces",
      "Edges and corners during floor care",
    ],
    note: "Appliance interiors and other extras are discussed separately. Access and surface suitability matter.",
    image: "/home-care.png",
    imageAlt: "Cleaner wiping a kitchen counter with a blue microfiber cloth",
  },
  {
    slug: "move-in-move-out-cleaning",
    title: "Move-In / Move-Out Cleaning",
    shortTitle: "A fresh start, sorted.",
    description:
      "One less thing to coordinate during a move. We focus on an empty home's surfaces and the details that are easier to reach before the boxes arrive.",
    bestFor:
      "Homeowners and renters preparing for a handover or a new beginning.",
    scope: [
      "Kitchen and bathroom cleaning",
      "Empty cabinet and drawer wipe-downs, as agreed",
      "Reachable trim and surfaces",
      "Vacuuming and mopping accessible floors",
    ],
    note: "The home should be empty with utilities available. Confirm appliance interiors and any handover requirements in your quote.",
    image: "/apartment-cleaning.png",
    imageAlt: "Bright apartment with wood floors and an open kitchen",
  },
  {
    slug: "apartment-condo-cleaning",
    title: "Apartment & Condo Cleaning",
    shortTitle: "Small space. Big exhale.",
    description:
      "Thoughtful cleaning for compact homes, open layouts, and spaces that do double duty. Make every room feel ready for the rest of your day.",
    bestFor:
      "Apartment and condo households wanting regular help or a one-time clean.",
    scope: [
      "Kitchen counters and appliance exteriors",
      "Bathroom surfaces and fixtures",
      "Dusting accessible living and sleeping areas",
      "Floor care throughout agreed rooms",
    ],
    note: "Share parking, building access, and elevator details so the visit can be planned properly.",
    image: "/apartment-cleaning.png",
    imageAlt:
      "Comfortable apartment living area with cream upholstery and navy cushions",
  },
  {
    slug: "one-time-home-reset",
    title: "One-Time Home Reset",
    shortTitle: "Catch up. Breathe out.",
    description:
      "Some weeks need a helping hand. A single visit brings the everyday cleaning back under control without committing to a recurring schedule.",
    bestFor:
      "Before guests arrive, after a busy stretch, or whenever the chores get ahead.",
    scope: [
      "Priority rooms agreed with your quote",
      "Kitchen and bathroom surface cleaning",
      "Dusting reachable areas",
      "Vacuuming, mopping, and a light tidy",
    ],
    note: "This is a routine cleaning reset. Heavy buildup may need a deep clean; organizing and hauling are outside the standard scope.",
    image: "/house-cleaning.png",
    imageAlt: "Inviting kitchen and dining area with warm wood details",
  },
  {
    slug: "short-term-rental-turnovers",
    title: "Short-Term Rental Turnovers",
    shortTitle: "Ready for the next arrival.",
    description:
      "A clear turnover checklist helps hosts prepare between stays. We coordinate the cleaning details around your agreed checkout and check-in windows.",
    bestFor:
      "Local hosts who want a repeatable cleaning routine between guests.",
    scope: [
      "Kitchen and bathroom cleaning",
      "Reachable surfaces and floor care",
      "Bed reset with host-provided fresh linens, as agreed",
      "A visual check against the turnover checklist",
    ],
    note: "Timing, linen handling, supplies, and any restocking are confirmed in advance. Availability is reviewed for each schedule.",
    image: "/apartment-cleaning.png",
    imageAlt:
      "Neatly arranged sitting room with fresh cushions and a folded throw",
  },
];
