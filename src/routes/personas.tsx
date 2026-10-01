import { createFileRoute } from "@tanstack/react-router";
import { PERSONA_LIST } from "@/data/personas";
import { CopyButton } from "@/components/copy-button";

export const Route = createFileRoute("/personas")({ component: PersonasPage });

function PersonasPage() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-muted">Who to find</p>
        <h2 className="mt-1 font-display text-3xl">Buyer personas</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Four distinct buyers for this lot. Match ads, capital packets, and
          outreach tone to the persona — do not blast the same STR fantasy to
          everyone.
        </p>
      </header>
      {PERSONA_LIST.map((p) => {
        const brief = [
          `PERSONA ${p.id} — ${p.name}`,
          p.short,
          `Origins: ${p.origins}`,
          `Offer: ${p.offer}`,
          `Tone: ${p.tone}`,
          `Financing: ${p.financing.join("; ")}`,
        ].join("\n");
        return (
          <article
            id={p.id}
            key={p.id}
            className="scroll-mt-24 rounded-lg bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary">
                  Persona {p.id} · {p.ages}
                </p>
                <h3 className="mt-1 font-display text-2xl">{p.name}</h3>
                <p className="mt-1 text-muted">{p.short}</p>
              </div>
              <CopyButton text={brief} label="Copy brief" />
            </div>
            <p className="mt-4 text-sm text-muted">
              Typical origins: {p.origins}
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <Col title="Why they buy" items={p.motivations} />
              <Col title="Why this lot" items={p.fit} />
              <Col title="Objections to pre-empt" items={p.objections} />
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <p className="text-sm">
                <span className="text-xs uppercase tracking-widest text-faint">
                  Financing
                </span>
                <br />
                {p.financing.join(" · ")}
              </p>
              <p className="text-sm">
                <span className="text-xs uppercase tracking-widest text-faint">
                  The offer line
                </span>
                <br />
                {p.offer}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function Col({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-faint">{title}</p>
      <ul className="mt-2 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm text-fg">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
