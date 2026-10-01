import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as AD_TEMPLATES } from "./ads-BVdHcqCF.mjs";
import { t as PERSONAS } from "./personas-B3bcrcNM.mjs";
import { n as CopyButton, t as Button } from "./copy-button-Bv9R-saz.mjs";
import { n as STAGE_LABEL, r as useLeads, t as STAGES } from "./leads-store-DEOA-45U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leads-CutJro4J.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LeadsPage() {
	const leads = useLeads((s) => s.leads);
	const add = useLeads((s) => s.add);
	const update = useLeads((s) => s.update);
	const remove = useLeads((s) => s.remove);
	const [name, setName] = (0, import_react.useState)("");
	const [persona, setPersona] = (0, import_react.useState)("A");
	const [geo, setGeo] = (0, import_react.useState)("California");
	const [channel, setChannel] = (0, import_react.useState)("Reddit");
	const [contact, setContact] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)("all");
	const shown = filter === "all" ? leads : leads.filter((l) => l.persona === filter);
	function onAdd(e) {
		e.preventDefault();
		if (!name.trim()) return;
		add({
			name: name.trim(),
			persona,
			geo,
			channel,
			contact,
			notes,
			stage: "new"
		});
		setName("");
		setContact("");
		setNotes("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-muted",
					children: "Pipeline"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-3xl",
					children: "Leads"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-muted",
					children: "Log public inquiries only. Store a handle or business email — not scraped private data. Saved in this browser."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: onAdd,
				className: "grid gap-3 rounded-lg bg-surface p-5 shadow-[var(--shadow-border)] sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Name or handle",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							className: "min-h-11 w-full rounded-md bg-raised px-3",
							value: name,
							onChange: (e) => setName(e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Persona",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "min-h-11 w-full rounded-md bg-raised px-3",
							value: persona,
							onChange: (e) => setPersona(e.target.value),
							children: Object.keys(PERSONAS).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: id,
								children: [
									id,
									" — ",
									PERSONAS[id].name
								]
							}, id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Geography",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "min-h-11 w-full rounded-md bg-raised px-3",
							value: geo,
							onChange: (e) => setGeo(e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Channel",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "min-h-11 w-full rounded-md bg-raised px-3",
							value: channel,
							onChange: (e) => setChannel(e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Public contact",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "min-h-11 w-full rounded-md bg-raised px-3",
							value: contact,
							onChange: (e) => setContact(e.target.value),
							placeholder: "listing reply email, public @handle"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Notes",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "min-h-11 w-full rounded-md bg-raised px-3",
							value: notes,
							onChange: (e) => setNotes(e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: "Add lead"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FilterChip, {
					active: filter === "all",
					onClick: () => setFilter("all"),
					children: [
						"All (",
						leads.length,
						")"
					]
				}), Object.keys(PERSONAS).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
					active: filter === id,
					onClick: () => setFilter(id),
					children: id
				}, id))]
			}),
			shown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: "No leads in this filter yet."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3",
				children: shown.map((lead) => {
					const outreach = outreachFor(lead.persona, lead.name);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-md bg-surface p-5 shadow-[var(--shadow-border)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs uppercase tracking-widest text-primary",
									children: [
										"Persona ",
										lead.persona,
										" · ",
										lead.geo,
										" · ",
										lead.channel
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl",
									children: lead.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: lead.contact || "No contact yet"
								}),
								lead.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-fg",
									children: lead.notes
								}) : null
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										className: "min-h-11 rounded-md bg-raised px-3 text-sm",
										value: lead.stage,
										onChange: (e) => update(lead.id, { stage: e.target.value }),
										children: STAGES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: s,
											children: STAGE_LABEL[s]
										}, s))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, {
										text: outreach,
										label: "Outreach"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										variant: "ghost",
										onClick: () => remove(lead.id),
										children: "Remove"
									})
								]
							})]
						})
					}, lead.id);
				})
			})
		]
	});
}
function outreachFor(persona, name) {
	return `Aloha ${name},\n\n${AD_TEMPLATES[persona].reddit.body}\n\n${PERSONAS[persona].offer}\n\nI can send the disclosure snapshot (Lava Zone 2, HOA, catchment, TVR limits) and the capital packet for your situation.\n\n— Lehua Desk, 14-3555 Lehua Rd, Pahoa`;
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs uppercase tracking-widest text-faint",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1",
			children
		})]
	});
}
function FilterChip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: active ? "min-h-11 rounded-full bg-primary px-4 text-sm text-primary-fg" : "min-h-11 rounded-full bg-surface px-4 text-sm text-muted shadow-[var(--shadow-border)]",
		children
	});
}
//#endregion
export { LeadsPage as component };
