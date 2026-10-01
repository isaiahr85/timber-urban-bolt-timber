import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { CROWD_PLATFORMS, RESOURCES } from "@/data/finance";
import { PERSONAS } from "@/data/personas";
import { CopyButton } from "@/components/copy-button";

export const Route = createFileRoute("/finance")({ component: FinancePage });

function FinancePage() {
  const packet = RESOURCES.map((r) => {
    const who = r.personas.map((id) => `${id} ${PERSONAS[id].name}`).join(", ");
    return `${r.name}\nFor: ${who}\n${r.amount}\n${r.summary}\n${r.how.map((h) => `• ${h}`).join("\n")}\n${r.href}`;
  }).join("\n\n---\n\n");

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            Buyer resource packets
          </p>
          <h2 className="mt-1 font-display text-3xl">Capital & grants</h2>
          <p className="mt-2 max-w-2xl text-muted">
            Attach the right sheet to the right persona. These are research
            pointers, not a promise that any buyer will qualify.
          </p>
        </div>
        <CopyButton text={packet} label="Copy full packet" />
      </header>

      {RESOURCES.map((r) => (
        <article
          key={r.id}
          className="rounded-lg bg-surface p-6 shadow-[var(--shadow-border)]"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary">
                {r.personas.map((id) => `Persona ${id}`).join(" · ")}
              </p>
              <h3 className="mt-1 font-display text-2xl">{r.name}</h3>
              <p className="mt-1 text-sm text-leaf">{r.amount}</p>
            </div>
            <a
              href={r.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-fg"
            >
              {r.label}
              <ExternalLink className="size-4" />
            </a>
          </div>
          <p className="mt-4 text-muted">{r.summary}</p>
          <ul className="mt-4 space-y-2">
            {r.how.map((h) => (
              <li key={h} className="text-sm text-fg">
                {h}
              </li>
            ))}
          </ul>
        </article>
      ))}

      <section className="rounded-md bg-surface p-5 shadow-[var(--shadow-border)]">
        <h3 className="font-display text-xl">Crowdfunding rails</h3>
        <p className="mt-1 text-sm text-muted">
          For eco-retreat and tiny-home startup stories — $5k–$50k typical ask.
        </p>
        <ul className="mt-4 flex flex-wrap gap-3">
          {CROWD_PLATFORMS.map((p) => (
            <li key={p.name}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center rounded-full bg-raised px-4 text-sm"
              >
                {p.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
