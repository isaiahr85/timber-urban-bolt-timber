import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, House, MapPin, Shield } from "lucide-react";
import { PROPERTY, POLICY_ALERTS } from "@/data/property";
import { PERSONA_LIST } from "@/data/personas";
import { useLeads } from "@/lib/leads-store";

export const Route = createFileRoute("/")({ component: OverviewPage });

function OverviewPage() {
  const leads = useLeads((s) => s.leads);
  const hot = leads.filter((l) => l.stage !== "cold").length;

  return (
    <div className="flex flex-col gap-10">
      <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-lg bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">The listing</p>
          <h2 className="mt-2 font-display text-3xl text-fg sm:text-4xl">
            A cleared Nanawale lot with the expensive line items already done.
          </h2>
          <p className="mt-4 max-w-prose text-muted">
            {PROPERTY.lotSqft.toLocaleString()} sq ft ({PROPERTY.lotAcres} acres) on Lehua
            Road. Permitted shed, two lean-tos, septic on site. Market this as
            infrastructure-in-place housing — not a vacant jungle square and not a
            short-term rental conversion.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {PROPERTY.improvements.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-fg">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <aside className="grid gap-3">
          <Stat icon={MapPin} k="Lava zone" v={`Zone ${PROPERTY.lavaZone}`} />
          <Stat icon={Droplets} k="Water / waste" v="Catchment · septic present" />
          <Stat icon={House} k="HOA" v="Nanawale Community Association" />
          <Stat icon={Shield} k="Pipeline" v={`${hot} active lead${hot === 1 ? "" : "s"}`} />
        </aside>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-3">
          <h3 className="font-display text-2xl">Value-add paths</h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {PROPERTY.valueAdd.map((v) => (
            <div
              key={v.label}
              className="rounded-md bg-surface p-5 shadow-[var(--shadow-border)]"
            >
              <p className="text-xs uppercase tracking-widest text-muted">{v.label}</p>
              <p className="mt-2 font-display text-xl text-fg">{v.range}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-4 font-display text-2xl">Four buyers worth hunting</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {PERSONA_LIST.map((p) => (
            <Link
              key={p.id}
              to="/personas"
              hash={p.id}
              className="group rounded-md bg-surface p-5 shadow-[var(--shadow-border)] transition-shadow duration-150 hover:shadow-[var(--shadow-border-hover)]"
            >
              <p className="text-xs uppercase tracking-widest text-primary">Persona {p.id}</p>
              <p className="mt-1 font-display text-xl">{p.name}</p>
              <p className="mt-2 text-sm text-muted">{p.short}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-fg">
                Open brief
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-4 font-display text-2xl">Policy that changes the pitch</h3>
        <div className="grid gap-3 md:grid-cols-2">
          {POLICY_ALERTS.map((a) => (
            <article
              key={a.id}
              className="rounded-md border-l-2 border-primary bg-surface px-5 py-4"
            >
              <h4 className="font-medium text-fg">{a.title}</h4>
              <p className="mt-1 text-sm text-muted">{a.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({
  icon: Icon,
  k,
  v,
}: {
  icon: typeof MapPin;
  k: string;
  v: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-md bg-surface p-4 shadow-[var(--shadow-border)]">
      <Icon className="mt-0.5 size-4 text-leaf" />
      <div>
        <p className="text-xs uppercase tracking-widest text-faint">{k}</p>
        <p className="text-sm text-fg">{v}</p>
      </div>
    </div>
  );
}
