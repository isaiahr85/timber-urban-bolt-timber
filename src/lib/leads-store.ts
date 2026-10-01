import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PersonaId } from "@/data/personas";

export const STAGES = [
  "new",
  "contacted",
  "packet-sent",
  "showing",
  "offer",
  "cold",
] as const;

export type LeadStage = (typeof STAGES)[number];

export type Lead = {
  id: string;
  name: string;
  persona: PersonaId;
  geo: string;
  channel: string;
  contact: string;
  notes: string;
  stage: LeadStage;
  createdAt: number;
};

type State = {
  leads: Lead[];
  add: (lead: Omit<Lead, "id" | "createdAt">) => void;
  update: (id: string, patch: Partial<Lead>) => void;
  remove: (id: string) => void;
};

export const STAGE_LABEL: Record<LeadStage, string> = {
  new: "New",
  contacted: "Contacted",
  "packet-sent": "Packet sent",
  showing: "Showing",
  offer: "Offer",
  cold: "Cold",
};

export const useLeads = create<State>()(
  persist(
    (set) => ({
      leads: [
        {
          id: "seed-1",
          name: "Sample — CA tiny-home builder",
          persona: "A",
          geo: "California",
          channel: "Reddit r/TinyHouses",
          contact: "public username only",
          notes: "Asked about catchment and HOA minimum size. Send disclosure snapshot.",
          stage: "new",
          createdAt: Date.now() - 86400000,
        },
        {
          id: "seed-2",
          name: "Sample — Hilo first-time buyer",
          persona: "B",
          geo: "East Hawaiʻi",
          channel: "Facebook group",
          contact: "local referral",
          notes: "Wants USDA path. Confirm insurance quote first.",
          stage: "packet-sent",
          createdAt: Date.now() - 172800000,
        },
      ],
      add: (lead) =>
        set((s) => ({
          leads: [
            {
              ...lead,
              id: crypto.randomUUID(),
              createdAt: Date.now(),
            },
            ...s.leads,
          ],
        })),
      update: (id, patch) =>
        set((s) => ({
          leads: s.leads.map((l) => (l.id === id ? { ...l, ...patch } : l)),
        })),
      remove: (id) => set((s) => ({ leads: s.leads.filter((l) => l.id !== id) })),
    }),
    { name: "lehua-desk-leads" },
  ),
);
