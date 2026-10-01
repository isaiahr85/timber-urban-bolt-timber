import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as GEOS, c as SEARCH_LINKS, i as GEMINI_PLAYGROUND_SCRIPT, n as CHANNELS, o as INTERESTS, r as CREATIVE_CONCEPTS, s as KEYWORDS, t as AD_TEMPLATES } from "./ads-BVdHcqCF.mjs";
import { n as Sparkles, o as ExternalLink } from "../_libs/lucide-react.mjs";
import { i as downloadText } from "./router-BkQhILSx.mjs";
import { t as PERSONAS } from "./personas-B3bcrcNM.mjs";
import { n as CopyButton, t as Button } from "./copy-button-Bv9R-saz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ads-DnCBGVP6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var generateAdCopy = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("874fe81012d70bd721e4b01793f4a1565c191cb8c15862579aeafba39df12faa"));
function AdsPage() {
	const [persona, setPersona] = (0, import_react.useState)("A");
	const [channel, setChannel] = (0, import_react.useState)("meta");
	const [extra, setExtra] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [source, setSource] = (0, import_react.useState)("template");
	const [copy, setCopy] = (0, import_react.useState)(AD_TEMPLATES.A.meta);
	const combined = (0, import_react.useMemo)(() => `${copy.headline}\n\n${copy.body}\n\n${copy.cta}`, [copy]);
	async function onGenerate() {
		setBusy(true);
		try {
			const result = await generateAdCopy({ data: {
				persona,
				channel,
				extra: extra || void 0
			} });
			setCopy({
				headline: result.headline,
				body: result.body,
				cta: result.cta
			});
			setSource(result.source);
		} finally {
			setBusy(false);
		}
	}
	function onTemplate() {
		const t = AD_TEMPLATES[persona][channel];
		setCopy(t);
		setSource("template");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-muted",
					children: "Digital traffic"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-3xl",
					children: "Ads, search & playground script"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-muted",
					children: "Geographic targeting, keywords, interests, and ready-to-run queries. Export a Google AI Studio / Gemini script, or generate channel copy here."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-4 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						title: "Geographic targeting",
						children: GEOS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-medium text-fg",
									children: [g.label, "."]
								}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: g.detail
								})
							]
						}, g.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						title: "Keywords",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-wrap gap-2",
							children: KEYWORDS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full bg-raised px-3 py-1 text-xs text-fg",
								children: k
							}, k))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						title: "Audience interests",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-wrap gap-2",
							children: INTERESTS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full bg-raised px-3 py-1 text-xs text-fg",
								children: k
							}, k))
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-3 font-display text-2xl",
				children: "Creative concepts"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-3",
				children: CREATIVE_CONCEPTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-md bg-surface p-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-lg",
						children: c.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: c.body
					})]
				}, c.title))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl",
					children: "Public search desk"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, {
					text: SEARCH_LINKS.map((l) => `${l.label}\n${l.href}`).join("\n\n"),
					label: "Copy all URLs"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-2 sm:grid-cols-2",
				children: SEARCH_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: l.href,
					target: "_blank",
					rel: "noreferrer",
					className: "flex min-h-11 items-center justify-between gap-3 rounded-md bg-surface px-4 py-3 text-sm shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
					children: [l.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4 shrink-0 text-muted" })]
				}) }, l.href))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-lg bg-surface p-5 shadow-[var(--shadow-border)] sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl",
							children: "Copy studio"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Templates are live now. Grok rewrite is optional and user-initiated."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs uppercase tracking-widest text-faint",
							children: ["Source: ", source]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid gap-4 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-widest text-faint",
								children: "Persona"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "mt-1 min-h-11 w-full rounded-md bg-raised px-3 text-fg",
								value: persona,
								onChange: (e) => {
									const next = e.target.value;
									setPersona(next);
									setCopy(AD_TEMPLATES[next][channel]);
									setSource("template");
								},
								children: Object.keys(PERSONAS).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: id,
									children: [
										id,
										" — ",
										PERSONAS[id].name
									]
								}, id))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-widest text-faint",
								children: "Channel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "mt-1 min-h-11 w-full rounded-md bg-raised px-3 text-fg",
								value: channel,
								onChange: (e) => {
									const next = e.target.value;
									setChannel(next);
									setCopy(AD_TEMPLATES[persona][next]);
									setSource("template");
								},
								children: CHANNELS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c.id,
									children: c.label
								}, c.id))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 block text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-widest text-faint",
							children: "Extra direction"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "mt-1 min-h-11 w-full rounded-md bg-raised px-3 text-fg placeholder:text-faint",
							value: extra,
							onChange: (e) => setExtra(e.target.value),
							placeholder: "e.g. mention reclaimed wood and catchment"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								onClick: onTemplate,
								children: "Load template"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								onClick: onGenerate,
								disabled: busy,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), busy ? "Writing…" : "Rewrite with Grok"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, { text: combined }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								onClick: () => downloadText(`lehua-${persona}-${channel}.txt`, combined),
								children: "Download"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Headline",
								value: copy.headline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Body",
								value: copy.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "CTA",
								value: copy.cta
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-lg bg-surface p-5 shadow-[var(--shadow-border)] sm:p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: "Google AI Studio script"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 max-w-2xl text-sm text-muted",
						children: "Paste this into Gemini / Google AI Studio as the system prompt. It hunts public buyer signals only — no private accounts, no invented contact details."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, {
							text: GEMINI_PLAYGROUND_SCRIPT,
							label: "Copy script"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => downloadText("lehua-google-ai-playground.txt", GEMINI_PLAYGROUND_SCRIPT),
							children: "Download .txt"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "mt-4 max-h-80 overflow-auto whitespace-pre-wrap rounded-md bg-bg p-4 text-xs leading-relaxed text-muted",
					children: GEMINI_PLAYGROUND_SCRIPT
				})]
			})
		]
	});
}
function Block({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-surface p-5 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-xs uppercase tracking-widest text-faint",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 space-y-2",
			children
		})]
	});
}
function Field({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs uppercase tracking-widest text-faint",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 whitespace-pre-wrap text-sm text-fg",
		children: value
	})] });
}
//#endregion
export { AdsPage as component };
