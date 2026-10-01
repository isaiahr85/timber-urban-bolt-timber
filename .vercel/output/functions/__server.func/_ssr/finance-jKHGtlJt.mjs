import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ExternalLink } from "../_libs/lucide-react.mjs";
import { t as PERSONAS } from "./personas-B3bcrcNM.mjs";
import { n as CopyButton } from "./copy-button-Bv9R-saz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/finance-jKHGtlJt.js
var import_jsx_runtime = require_jsx_runtime();
var RESOURCES = [
	{
		id: "hale",
		name: "Hale Kamaʻāina / Hula Mae Mortgage",
		personas: ["B"],
		amount: "Low down payment, fixed-rate, bond-backed",
		summary: "HHFDC single-family mortgage program for eligible Hawaiʻi homebuyers. Useful when a modest house is built on the lot — not for raw-land speculation.",
		how: [
			"Confirm the finished home (not vacant land) will be the primary residence.",
			"Work with a participating lender once plans and permits are in motion.",
			"Pair with county down-payment assistance if income-eligible."
		],
		href: "https://dbedt.hawaii.gov/hhfdc/",
		label: "HHFDC programs"
	},
	{
		id: "usda",
		name: "USDA Rural Development Section 502",
		personas: ["B"],
		amount: "Up to 100% financing in eligible rural areas",
		summary: "Guaranteed or direct rural loans for low- and moderate-income buyers. Puna is generally rural-eligible; lava zone and insurance still affect underwriting.",
		how: [
			"Check property eligibility on the USDA income/property maps.",
			"Expect questions on Lava Zone 2 and HPIA insurance.",
			"Construction-to-perm may be possible with a contractor and plans — vacant land alone is harder."
		],
		href: "https://eligibility.sc.egov.usda.gov/eligibility/welcomeAction.do",
		label: "USDA eligibility map"
	},
	{
		id: "kahiau",
		name: "Kahiau Rural Business Development Microloan",
		personas: ["C"],
		amount: "$2,000–$15,000 at 2% interest",
		summary: "Working capital for Native Hawaiian / kamaʻāina rural businesses — studio equipment, tiny-home furnishings, tools — not a mortgage on the land.",
		how: [
			"Frame the lot as the site of a rural enterprise (studio, craft, eco-retreat operations).",
			"Use funds for equipment and furnishings, not land closing costs.",
			"Confirm current administrator and eligibility before promising a buyer."
		],
		href: "https://www.councilfornativehawaiianadvancement.org/",
		label: "CNHA / rural lending"
	},
	{
		id: "hicap",
		name: "HTDC HI-CAP Grant (SSBCI)",
		personas: ["C", "D"],
		amount: "Regulatory / permitting cost support for small firms",
		summary: "U.S. Treasury SSBCI-backed help for licensing and regulatory costs — permitting, professional fees — for small businesses or rental operations.",
		how: [
			"Buyer operates as a small business or rental enterprise, not a purely personal homestead.",
			"Keep invoices for permits, engineers, and licenses.",
			"Check open application windows on HTDC."
		],
		href: "https://www.htdc.org/",
		label: "HTDC HI-CAP"
	},
	{
		id: "crowd",
		name: "Eco-cultural crowdfunding",
		personas: ["A", "C"],
		amount: "$5,000–$50,000 raises",
		summary: "Kickstarter, GoFundMe, Mainvest, and Honeycomb Credit for Pahoa eco-retreats or tiny-home startups — often revenue-share rather than a bank loan.",
		how: [
			"Story: catchment, salvage materials, long-term community housing — not a STR.",
			"Mainvest / Honeycomb fit revenue-share for a hosted retreat or product brand.",
			"GoFundMe suits personal homestead hardship; Kickstarter suits a designed product/build."
		],
		href: "https://www.honeycombcredit.com/",
		label: "Honeycomb Credit"
	},
	{
		id: "ahp",
		name: "Hawaiʻi County Affordable Housing Production",
		personas: ["B", "D"],
		amount: "County grants and deferred-payment tools (program-year specific)",
		summary: "OHCD AHP funds production, rehab, and some homeownership assistance. Useful context for local buyers; vacant land is not automatically eligible.",
		how: ["Watch hawaiicounty.gov/ahp for RFPs and homeowner products.", "A completed modest home is a better fit than a raw lot."],
		href: "https://www.hawaiicounty.gov/grants-funding/affordable-housing-production-program-ahp",
		label: "County AHP"
	}
];
var CROWD_PLATFORMS = [
	{
		name: "Kickstarter",
		href: "https://www.kickstarter.com/"
	},
	{
		name: "GoFundMe",
		href: "https://www.gofundme.com/"
	},
	{
		name: "Mainvest",
		href: "https://mainvest.com/"
	},
	{
		name: "Honeycomb Credit",
		href: "https://www.honeycombcredit.com/"
	}
];
function FinancePage() {
	const packet = RESOURCES.map((r) => {
		const who = r.personas.map((id) => `${id} ${PERSONAS[id].name}`).join(", ");
		return `${r.name}\nFor: ${who}\n${r.amount}\n${r.summary}\n${r.how.map((h) => `• ${h}`).join("\n")}\n${r.href}`;
	}).join("\n\n---\n\n");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.2em] text-muted",
						children: "Buyer resource packets"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-3xl",
						children: "Capital & grants"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-muted",
						children: "Attach the right sheet to the right persona. These are research pointers, not a promise that any buyer will qualify."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, {
					text: packet,
					label: "Copy full packet"
				})]
			}),
			RESOURCES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-lg bg-surface p-6 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-widest text-primary",
								children: r.personas.map((id) => `Persona ${id}`).join(" · ")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-2xl",
								children: r.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-leaf",
								children: r.amount
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: r.href,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex min-h-11 items-center gap-2 text-sm text-fg",
							children: [r.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: r.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: r.how.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-sm text-fg",
							children: h
						}, h))
					})
				]
			}, r.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-md bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl",
						children: "Crowdfunding rails"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "For eco-retreat and tiny-home startup stories — $5k–$50k typical ask."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-wrap gap-3",
						children: CROWD_PLATFORMS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: p.href,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex min-h-11 items-center rounded-full bg-raised px-4 text-sm",
							children: p.name
						}) }, p.name))
					})
				]
			})
		]
	});
}
//#endregion
export { FinancePage as component };
