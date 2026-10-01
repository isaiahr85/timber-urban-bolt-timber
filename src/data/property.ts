export const PROPERTY = {
  name: "Lehua Lot",
  address: "14-3555 Lehua Rd",
  city: "Pahoa",
  state: "HI",
  zip: "96778",
  district: "Puna District, Hawaiʻi Island",
  subdivision: "Nanawale Estates",
  tmkShort: "140300260000",
  tmkSearch: "1-4-003-026",
  tmkHint: "Bureau of Conveyances search: TMK 1-4-003-026 or 140300260000 (confirm plat/parcel on the county tax map).",
  lotAcres: 0.1846,
  lotSqft: 8040,
  asIs: 17800,
  zoning: "Residential / Nanawale Estates (verify A-1A or RS with Hawaiʻi County Planning)",
  lavaZone: "2",
  water: "Catchment (no municipal water)",
  sewer: "Septic present",
  power: "Overhead electric available in subdivision (buyer to confirm at lot)",
  hoa: "Nanawale Community Association — mandatory membership",
  hoaDues: "Approx. $119–$130 / year + $300 transfer fee",
  hoaSite: "https://www.nanawale.com/",
  improvements: [
    "Permitted 144 sq ft utility shed",
    "Two lean-to structures totaling 960 sq ft",
    "Septic system present",
    "Building permit history on file",
    "Cleared residential parcel",
  ],
  valueAdd: [
    { label: "Tiny home build", range: "$150,000–$180,000 resale" },
    { label: "Modest 2 bed / 1 bath", range: "$250,000–$300,000 resale" },
    { label: "Up to 3 ADUs (Bill 123)", range: "Long-term rental density on a qualifying lot" },
  ],
} as const;

export const POLICY_ALERTS = [
  {
    id: "adu",
    title: "ADU density — Bill 123",
    body: "Hawaiʻi County allows up to three accessory dwelling units on qualifying lots. ADUs are for long-term occupancy, not short-term stays.",
  },
  {
    id: "stvr",
    title: "TVR registration live",
    body: "Hosted and unhosted rentals under 180 days must register with the County (Ordinance 25-50). Draft Bill 147 tightens unhosted bedroom operations.",
  },
  {
    id: "lava",
    title: "Lava Zone 2 insurance",
    body: "Private carriers largely exit Zones 1–2. HPIA is the residual market. Cash and portfolio lenders are more realistic than FHA/conventional.",
  },
  {
    id: "tax",
    title: "Ag-to-homeowner tax cap",
    body: "County tax relief (through 2029) applies to qualifying primary residences of longtime ag landowners — not vacant land.",
  },
] as const;
