import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { t as AD_TEMPLATES } from "./ads-BVdHcqCF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/generate-copy-BghimWQD.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var generateAdCopy_createServerFn_handler = createServerRpc({
	id: "874fe81012d70bd721e4b01793f4a1565c191cb8c15862579aeafba39df12faa",
	name: "generateAdCopy",
	filename: "src/lib/generate-copy.ts"
}, (opts) => generateAdCopy.__executeServer(opts));
var generateAdCopy = createServerFn({ method: "POST" }).validator((input) => input).handler(generateAdCopy_createServerFn_handler, async ({ data }) => {
	const fallback = AD_TEMPLATES[data.persona][data.channel];
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: true,
		source: "template",
		...fallback
	};
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			max_tokens: 500,
			messages: [{
				role: "system",
				content: "You write honest Hawaiʻi land ads. Return JSON only with keys headline, body, cta. No markdown. Disclose Lava Zone 2, HOA, catchment, and that this is not a short-term rental play. Property: 14-3555 Lehua Rd, Pahoa, Nanawale Estates, 8040 sf, septic, shed, lean-tos, as-is ~$17800."
			}, {
				role: "user",
				content: `Persona ${data.persona}. Channel ${data.channel}. Extra: ${data.extra || "none"}. Write one headline, body, and CTA.`
			}]
		})
	});
	if (!res.ok) return {
		ok: true,
		source: "template",
		...fallback
	};
	const text = (await res.json()).choices[0]?.message.content ?? "";
	try {
		const jsonStart = text.indexOf("{");
		const jsonEnd = text.lastIndexOf("}");
		const parsed = JSON.parse(text.slice(jsonStart, jsonEnd + 1));
		return {
			ok: true,
			source: "grok",
			headline: parsed.headline || fallback.headline,
			body: parsed.body || fallback.body,
			cta: parsed.cta || fallback.cta
		};
	} catch {
		return {
			ok: true,
			source: "template",
			...fallback
		};
	}
});
//#endregion
export { generateAdCopy_createServerFn_handler };
