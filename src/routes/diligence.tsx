import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { DILIGENCE, DISCLOSURE_SCRIPT } from "@/data/diligence";
import { PROPERTY } from "@/data/property";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/copy-button";
import { downloadText } from "@/lib/utils";

export const Route = createFileRoute("/diligence")({ component: DiligencePage });

function DiligencePage() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          Listing disclosures
        </p>
        <h2 className="mt-1 font-display text-3xl">Due diligence desk</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Send buyers to official portals. Confirm TMK on the county tax map
          before Bureau of Conveyances searches. This lot is Lava Zone {PROPERTY.lavaZone}{" "}
          with catchment and a mandatory HOA.
        </p>
      </header>

      <section className="rounded-lg bg-surface p-5 shadow-[var(--shadow-border)] sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-2xl">Disclosure snapshot</h3>
          <div className="flex flex-wrap gap-2">
            <CopyButton text={DISCLOSURE_SCRIPT} label="Copy snapshot" />
            <Button
              type="button"
              variant="outline"
              onClick={() => downloadText("lehua-disclosure.txt", DISCLOSURE_SCRIPT)}
            >
              Download
            </Button>
          </div>
        </div>
        <pre className="mt-4 max-h-72 overflow-auto whitespace-pre-wrap rounded-md bg-bg p-4 text-xs leading-relaxed text-muted">
          {DISCLOSURE_SCRIPT}
        </pre>
      </section>

      {DILIGENCE.map((d) => (
        <article
          key={d.id}
          className="rounded-lg bg-surface p-6 shadow-[var(--shadow-border)]"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-widest text-faint">
                {d.official}
              </p>
              <h3 className="mt-1 font-display text-2xl">{d.title}</h3>
            </div>
            <a
              href={d.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm"
            >
              Open portal
              <ExternalLink className="size-4" />
            </a>
          </div>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {d.steps.map((s) => (
              <li key={s} className="text-sm text-fg">
                {s}
              </li>
            ))}
          </ol>
        </article>
      ))}
    </div>
  );
}
