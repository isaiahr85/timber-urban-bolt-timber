import type { PersonaId } from "./personas";

export type Resource = {
  id: string;
  name: string;
  personas: PersonaId[];
  amount: string;
  summary: string;
  how: string[];
  href: string;
  label: string;
};

export const RESOURCES: Resource[] = [
  {
    id: "hale",
    name: "Hale Kamaʻāina / Hula Mae Mortgage",
    personas: ["B"],
    amount: "Low down payment, fixed-rate, bond-backed",
    summary:
      "HHFDC single-family mortgage program for eligible Hawaiʻi homebuyers. Useful when a modest house is built on the lot — not for raw-land speculation.",
    how: [
      "Confirm the finished home (not vacant land) will be the primary residence.",
      "Work with a participating lender once plans and permits are in motion.",
      "Pair with county down-payment assistance if income-eligible.",
    ],
    href: "https://dbedt.hawaii.gov/hhfdc/",
    label: "HHFDC programs",
  },
  {
    id: "usda",
    name: "USDA Rural Development Section 502",
    personas: ["B"],
    amount: "Up to 100% financing in eligible rural areas",
    summary:
      "Guaranteed or direct rural loans for low- and moderate-income buyers. Puna is generally rural-eligible; lava zone and insurance still affect underwriting.",
    how: [
      "Check property eligibility on the USDA income/property maps.",
      "Expect questions on Lava Zone 2 and HPIA insurance.",
      "Construction-to-perm may be possible with a contractor and plans — vacant land alone is harder.",
    ],
    href: "https://eligibility.sc.egov.usda.gov/eligibility/welcomeAction.do",
    label: "USDA eligibility map",
  },
  {
    id: "kahiau",
    name: "Kahiau Rural Business Development Microloan",
    personas: ["C"],
    amount: "$2,000–$15,000 at 2% interest",
    summary:
      "Working capital for Native Hawaiian / kamaʻāina rural businesses — studio equipment, tiny-home furnishings, tools — not a mortgage on the land.",
    how: [
      "Frame the lot as the site of a rural enterprise (studio, craft, eco-retreat operations).",
      "Use funds for equipment and furnishings, not land closing costs.",
      "Confirm current administrator and eligibility before promising a buyer.",
    ],
    href: "https://www.councilfornativehawaiianadvancement.org/",
    label: "CNHA / rural lending",
  },
  {
    id: "hicap",
    name: "HTDC HI-CAP Grant (SSBCI)",
    personas: ["C", "D"],
    amount: "Regulatory / permitting cost support for small firms",
    summary:
      "U.S. Treasury SSBCI-backed help for licensing and regulatory costs — permitting, professional fees — for small businesses or rental operations.",
    how: [
      "Buyer operates as a small business or rental enterprise, not a purely personal homestead.",
      "Keep invoices for permits, engineers, and licenses.",
      "Check open application windows on HTDC.",
    ],
    href: "https://www.htdc.org/",
    label: "HTDC HI-CAP",
  },
  {
    id: "crowd",
    name: "Eco-cultural crowdfunding",
    personas: ["A", "C"],
    amount: "$5,000–$50,000 raises",
    summary:
      "Kickstarter, GoFundMe, Mainvest, and Honeycomb Credit for Pahoa eco-retreats or tiny-home startups — often revenue-share rather than a bank loan.",
    how: [
      "Story: catchment, salvage materials, long-term community housing — not a STR.",
      "Mainvest / Honeycomb fit revenue-share for a hosted retreat or product brand.",
      "GoFundMe suits personal homestead hardship; Kickstarter suits a designed product/build.",
    ],
    href: "https://www.honeycombcredit.com/",
    label: "Honeycomb Credit",
  },
  {
    id: "ahp",
    name: "Hawaiʻi County Affordable Housing Production",
    personas: ["B", "D"],
    amount: "County grants and deferred-payment tools (program-year specific)",
    summary:
      "OHCD AHP funds production, rehab, and some homeownership assistance. Useful context for local buyers; vacant land is not automatically eligible.",
    how: [
      "Watch hawaiicounty.gov/ahp for RFPs and homeowner products.",
      "A completed modest home is a better fit than a raw lot.",
    ],
    href: "https://www.hawaiicounty.gov/grants-funding/affordable-housing-production-program-ahp",
    label: "County AHP",
  },
];

export const CROWD_PLATFORMS = [
  { name: "Kickstarter", href: "https://www.kickstarter.com/" },
  { name: "GoFundMe", href: "https://www.gofundme.com/" },
  { name: "Mainvest", href: "https://mainvest.com/" },
  { name: "Honeycomb Credit", href: "https://www.honeycombcredit.com/" },
];
