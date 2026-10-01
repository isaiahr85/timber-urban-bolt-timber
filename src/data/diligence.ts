export const DILIGENCE = [
  {
    id: "title",
    title: "Title & deed — Bureau of Conveyances",
    official: "State of Hawaiʻi Bureau of Conveyances",
    href: "https://boc.ehawaii.gov/",
    steps: [
      "Search by TMK 1-4-003-026 or 140300260000 — confirm the plat/parcel on the Hawaiʻi County real property tax record first.",
      "Also search Grantor / Grantee names on the current deed.",
      "Pull the chain of title, liens, and any recorded HOA or restriction documents.",
      "Do not rely on MLS remarks as a title opinion — use a licensed Hawaiʻi title company for closing.",
    ],
  },
  {
    id: "taxmap",
    title: "County tax map & assessed value",
    official: "Hawaiʻi County Real Property Tax",
    href: "https://www.hawaiipropertytax.com/",
    steps: [
      "Confirm TMK, lot size (~8,040 sq ft), assessed value, and tax class.",
      "Note that as-is market talk (~$17,800) can differ from assessed value.",
      "Check for delinquencies before writing an offer.",
    ],
  },
  {
    id: "hoa",
    title: "Nanawale Community Association",
    official: "NCA, Inc.",
    href: "https://www.nanawale.com/",
    steps: [
      "Membership is mandatory with the lot.",
      "Budget ~$119–$130 annual dues and a $300 transfer fee (confirm current schedule).",
      "Read CC&Rs: minimum dwelling size, no unpermitted camping structures, septic over cesspool.",
      "Ask the office about architectural review before advertising a tiny home size.",
    ],
  },
  {
    id: "dcca",
    title: "Contractor vetting — DCCA PVL",
    official: "Department of Commerce and Consumer Affairs",
    href: "https://pvl.ehawaii.gov/pvlsearch/app",
    steps: [
      "Search every builder, engineer, and septic installer by license number before a deposit.",
      "Confirm the license is active and the classification matches the work (C-37 plumbing/septic, contractor, engineer).",
      "Keep a screenshot of the license record in the buyer file.",
    ],
  },
  {
    id: "breg",
    title: "Investor entity — DCCA BREG",
    official: "Business Registration Division",
    href: "https://hbe.ehawaii.gov/",
    steps: [
      "Search the business name before forming an LLC to hold or flip the lot.",
      "Register the entity online with BREG; obtain a GET license if you will operate a rental or construction business.",
      "Title can vest in the LLC at closing if formed in time — coordinate with escrow.",
    ],
  },
  {
    id: "planning",
    title: "Permits, ADUs, TVRs",
    official: "Hawaiʻi County Planning Department",
    href: "https://www.planning.hawaiicounty.gov/",
    steps: [
      "Verify zoning and whether Bill 123’s three-ADU allowance applies to this lot.",
      "ADUs: long-term occupancy only; do not market as STVR.",
      "TVR registration (Ordinance 25-50) is required for stays under 180 days — hosted and unhosted.",
      "Confirm septic as-built / permit status with Environmental Management before adding bedrooms.",
    ],
  },
  {
    id: "insurance",
    title: "Lava Zone 2 insurance",
    official: "Hawaiʻi Property Insurance Association",
    href: "https://www.hpiainfo.com/",
    steps: [
      "Assume HPIA or surplus lines, not a standard mainland HO-3.",
      "Get a premium indication before the buyer books a flight.",
      "Standard policies typically exclude pure lava peril — disclose that in writing.",
    ],
  },
];

export const DISCLOSURE_SCRIPT = `PROPERTY DISCLOSURE SNAPSHOT — 14-3555 Lehua Rd, Pahoa, HI 96778
Subdivision: Nanawale Estates  |  District: Puna, Hawaiʻi Island
TMK keys to verify: 140300260000 and 1-4-003-026

LAND
• ±0.1846 acres (8,040 sq ft), reported cleared residential parcel
• Water: catchment typical for the subdivision — no municipal water
• Wastewater: septic reported present — buyer to verify permit/as-built
• Power: overhead electric in Nanawale — buyer to confirm service at lot
• Access: subdivision roads (mix of paved and cinder) maintained with HOA

IMPROVEMENTS (as represented)
• Permitted 144 sq ft utility shed
• Two lean-to structures totaling ±960 sq ft
• Building permit history — copies to be provided in escrow

RISK & RULES
• USGS Lava Flow Hazard Zone 2. Private insurers have largely withdrawn from Zones 1–2. HPIA is the residual market. Lava damage is not a normal HO-3 peril.
• Nanawale Community Association CC&Rs apply (dues, transfer fee, design/minimum dwelling rules, enforcement against unpermitted structures).
• Hawaiʻi County TVR registration is required for rentals under 180 days. Draft rules further limit unhosted bedroom operations. Do not underwrite this lot as an Airbnb conversion.
• Bill 123 may allow up to three ADUs on qualifying lots for long-term housing — confirm zoning and infrastructure with Planning before advertising density.

VALUE TALK (not an appraisal)
• As-is discussion value ± $17,800
• Tiny-home path: ± $150,000–$180,000 resale if legally built
• Modest 2 bed / 1 bath: ± $250,000–$300,000 resale if legally built
• High vacant-lot inventory in Nanawale — improvements (septic/shed) are the differentiator

BUYER HOMEWORK
1. Bureau of Conveyances title search
2. County real property tax record
3. NCA documents at nanawale.com
4. DCCA PVL for any contractor
5. Insurance indication (HPIA) before removing contingencies
`;
