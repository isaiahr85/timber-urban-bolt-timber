import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PERSONAS, type PersonaId } from "@/data/personas";
import { AD_TEMPLATES } from "@/data/ads";
import { CopyButton } from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import {
  STAGE_LABEL,
  STAGES,
  useLeads,
  type LeadStage,
} from "@/lib/leads-store";

export const Route = createFileRoute("/leads")({ component: LeadsPage });

function LeadsPage() {
  const leads = useLeads((s) => s.leads);
  const add = useLeads((s) => s.add);
  const update = useLeads((s) => s.update);
  const remove = useLeads((s) => s.remove);
  const [name, setName] = useState("");
  const [persona, setPersona] = useState<PersonaId>("A");
  const [geo, setGeo] = useState("California");
  const [channel, setChannel] = useState("Reddit");
  const [contact, setContact] = useState("");
  const [notes, setNotes] = useState("");
  const [filter, setFilter] = useState<"all" | PersonaId>("all");

  const shown = filter === "all" ? leads : leads.filter((l) => l.persona === filter);

  function onAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    add({
      name: name.trim(),
      persona,
      geo,
      channel,
      contact,
      notes,
      stage: "new",
    });
    setName("");
    setContact("");
    setNotes("");
  }

  return (
    <div className="flex flex-col gap-8">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-muted">Pipeline</p>
        <h2 className="mt-1 font-display text-3xl">Leads</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Log public inquiries only. Store a handle or business email — not scraped
          private data. Saved in this browser.
        </p>
      </header>

      <form
        onSubmit={onAdd}
        className="grid gap-3 rounded-lg bg-surface p-5 shadow-[var(--shadow-border)] sm:grid-cols-2"
      >
        <Field label="Name or handle">
          <input
            required
            className="min-h-11 w-full rounded-md bg-raised px-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Field>
        <Field label="Persona">
          <select
            className="min-h-11 w-full rounded-md bg-raised px-3"
            value={persona}
            onChange={(e) => setPersona(e.target.value as PersonaId)}
          >
            {(Object.keys(PERSONAS) as PersonaId[]).map((id) => (
              <option key={id} value={id}>
                {id} — {PERSONAS[id].name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Geography">
          <input
            className="min-h-11 w-full rounded-md bg-raised px-3"
            value={geo}
            onChange={(e) => setGeo(e.target.value)}
          />
        </Field>
        <Field label="Channel">
          <input
            className="min-h-11 w-full rounded-md bg-raised px-3"
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
          />
        </Field>
        <Field label="Public contact">
          <input
            className="min-h-11 w-full rounded-md bg-raised px-3"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="listing reply email, public @handle"
          />
        </Field>
        <Field label="Notes">
          <input
            className="min-h-11 w-full rounded-md bg-raised px-3"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </Field>
        <div className="sm:col-span-2">
          <Button type="submit">Add lead</Button>
        </div>
      </form>

      <div className="flex flex-wrap gap-2">
        <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
          All ({leads.length})
        </FilterChip>
        {(Object.keys(PERSONAS) as PersonaId[]).map((id) => (
          <FilterChip
            key={id}
            active={filter === id}
            onClick={() => setFilter(id)}
          >
            {id}
          </FilterChip>
        ))}
      </div>

      {shown.length === 0 ? (
        <p className="text-muted">No leads in this filter yet.</p>
      ) : (
        <ul className="grid gap-3">
          {shown.map((lead) => {
            const outreach = outreachFor(lead.persona, lead.name);
            return (
              <li
                key={lead.id}
                className="rounded-md bg-surface p-5 shadow-[var(--shadow-border)]"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary">
                      Persona {lead.persona} · {lead.geo} · {lead.channel}
                    </p>
                    <h3 className="font-display text-xl">{lead.name}</h3>
                    <p className="text-sm text-muted">{lead.contact || "No contact yet"}</p>
                    {lead.notes ? (
                      <p className="mt-2 text-sm text-fg">{lead.notes}</p>
                    ) : null}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <select
                      className="min-h-11 rounded-md bg-raised px-3 text-sm"
                      value={lead.stage}
                      onChange={(e) =>
                        update(lead.id, { stage: e.target.value as LeadStage })
                      }
                    >
                      {STAGES.map((s) => (
                        <option key={s} value={s}>
                          {STAGE_LABEL[s]}
                        </option>
                      ))}
                    </select>
                    <CopyButton text={outreach} label="Outreach" />
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => remove(lead.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function outreachFor(persona: PersonaId, name: string) {
  const ad = AD_TEMPLATES[persona].reddit;
  return `Aloha ${name},\n\n${ad.body}\n\n${PERSONAS[persona].offer}\n\nI can send the disclosure snapshot (Lava Zone 2, HOA, catchment, TVR limits) and the capital packet for your situation.\n\n— Lehua Desk, 14-3555 Lehua Rd, Pahoa`;
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm">
      <span className="text-xs uppercase tracking-widest text-faint">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "min-h-11 rounded-full bg-primary px-4 text-sm text-primary-fg"
          : "min-h-11 rounded-full bg-surface px-4 text-sm text-muted shadow-[var(--shadow-border)]"
      }
    >
      {children}
    </button>
  );
}
