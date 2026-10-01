import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leads-store-DEOA-45U.js
var STAGES = [
	"new",
	"contacted",
	"packet-sent",
	"showing",
	"offer",
	"cold"
];
var STAGE_LABEL = {
	new: "New",
	contacted: "Contacted",
	"packet-sent": "Packet sent",
	showing: "Showing",
	offer: "Offer",
	cold: "Cold"
};
var useLeads = create()(persist((set) => ({
	leads: [{
		id: "seed-1",
		name: "Sample — CA tiny-home builder",
		persona: "A",
		geo: "California",
		channel: "Reddit r/TinyHouses",
		contact: "public username only",
		notes: "Asked about catchment and HOA minimum size. Send disclosure snapshot.",
		stage: "new",
		createdAt: Date.now() - 864e5
	}, {
		id: "seed-2",
		name: "Sample — Hilo first-time buyer",
		persona: "B",
		geo: "East Hawaiʻi",
		channel: "Facebook group",
		contact: "local referral",
		notes: "Wants USDA path. Confirm insurance quote first.",
		stage: "packet-sent",
		createdAt: Date.now() - 1728e5
	}],
	add: (lead) => set((s) => ({ leads: [{
		...lead,
		id: crypto.randomUUID(),
		createdAt: Date.now()
	}, ...s.leads] })),
	update: (id, patch) => set((s) => ({ leads: s.leads.map((l) => l.id === id ? {
		...l,
		...patch
	} : l) })),
	remove: (id) => set((s) => ({ leads: s.leads.filter((l) => l.id !== id) }))
}), { name: "lehua-desk-leads" }));
//#endregion
export { STAGE_LABEL as n, useLeads as r, STAGES as t };
