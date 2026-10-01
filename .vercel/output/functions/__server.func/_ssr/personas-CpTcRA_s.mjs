import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PERSONA_LIST } from "./personas-B3bcrcNM.mjs";
import { n as CopyButton } from "./copy-button-Bv9R-saz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/personas-CpTcRA_s.js
var import_jsx_runtime = require_jsx_runtime();
function PersonasPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.2em] text-muted",
				children: "Who to find"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-3xl",
				children: "Buyer personas"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-muted",
				children: "Four distinct buyers for this lot. Match ads, capital packets, and outreach tone to the persona — do not blast the same STR fantasy to everyone."
			})
		] }), PERSONA_LIST.map((p) => {
			const brief = [
				`PERSONA ${p.id} — ${p.name}`,
				p.short,
				`Origins: ${p.origins}`,
				`Offer: ${p.offer}`,
				`Tone: ${p.tone}`,
				`Financing: ${p.financing.join("; ")}`
			].join("\n");
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				id: p.id,
				className: "scroll-mt-24 rounded-lg bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs uppercase tracking-[0.2em] text-primary",
								children: [
									"Persona ",
									p.id,
									" · ",
									p.ages
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-2xl",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-muted",
								children: p.short
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, {
							text: brief,
							label: "Copy brief"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-muted",
						children: ["Typical origins: ", p.origins]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-6 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Col, {
								title: "Why they buy",
								items: p.motivations
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Col, {
								title: "Why this lot",
								items: p.fit
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Col, {
								title: "Objections to pre-empt",
								items: p.objections
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-4 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs uppercase tracking-widest text-faint",
									children: "Financing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								p.financing.join(" · ")
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs uppercase tracking-widest text-faint",
									children: "The offer line"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								p.offer
							]
						})]
					})
				]
			}, p.id);
		})]
	});
}
function Col({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs uppercase tracking-widest text-faint",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-2 space-y-2",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "text-sm text-fg",
			children: item
		}, item))
	})] });
}
//#endregion
export { PersonasPage as component };
