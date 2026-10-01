import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import {
  AD_TEMPLATES,
  CHANNELS,
  CREATIVE_CONCEPTS,
  GEMINI_PLAYGROUND_SCRIPT,
  GEOS,
  INTERESTS,
  KEYWORDS,
  SEARCH_LINKS,
  type ChannelId,
} from "@/data/ads";
import { PERSONAS, type PersonaId } from "@/data/personas";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/copy-button";
import { generateAdCopy } from "@/lib/generate-copy";
import { downloadText } from "@/lib/utils";

export const Route = createFileRoute("/ads")({ component: AdsPage });

function AdsPage() {
  const [persona, setPersona] = useState<PersonaId>("A");
  const [channel, setChannel] = useState<ChannelId>("meta");
  const [extra, setExtra] = useState("");
  const [busy, setBusy] = useState(false);
  const [source, setSource] = useState<"template" | "grok">("template");
  const [copy, setCopy] = useState(AD_TEMPLATES.A.meta);

  const combined = useMemo(
    () => `${copy.headline}\n\n${copy.body}\n\n${copy.cta}`,
    [copy],
  );

  async function onGenerate() {
    setBusy(true);
    try {
      const result = await generateAdCopy({
        data: { persona, channel, extra: extra || undefined },
      });
      setCopy({ headline: result.headline, body: result.body, cta: result.cta });
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

  return (
    <div className="flex flex-col gap-10">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-muted">Digital traffic</p>
        <h2 className="mt-1 font-display text-3xl">Ads, search & playground script</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Geographic targeting, keywords, interests, and ready-to-run queries.
          Export a Google AI Studio / Gemini script, or generate channel copy here.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <Block title="Geographic targeting">
          {GEOS.map((g) => (
            <p key={g.id} className="text-sm">
              <span className="font-medium text-fg">{g.label}.</span>{" "}
              <span className="text-muted">{g.detail}</span>
            </p>
          ))}
        </Block>
        <Block title="Keywords">
          <ul className="flex flex-wrap gap-2">
            {KEYWORDS.map((k) => (
              <li
                key={k}
                className="rounded-full bg-raised px-3 py-1 text-xs text-fg"
              >
                {k}
              </li>
            ))}
          </ul>
        </Block>
        <Block title="Audience interests">
          <ul className="flex flex-wrap gap-2">
            {INTERESTS.map((k) => (
              <li
                key={k}
                className="rounded-full bg-raised px-3 py-1 text-xs text-fg"
              >
                {k}
              </li>
            ))}
          </ul>
        </Block>
      </section>

      <section>
        <h3 className="mb-3 font-display text-2xl">Creative concepts</h3>
        <div className="grid gap-3 md:grid-cols-3">
          {CREATIVE_CONCEPTS.map((c) => (
            <article
              key={c.title}
              className="rounded-md bg-surface p-5 shadow-[var(--shadow-border)]"
            >
              <h4 className="font-display text-lg">{c.title}</h4>
              <p className="mt-2 text-sm text-muted">{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
          <h3 className="font-display text-2xl">Public search desk</h3>
          <CopyButton
            text={SEARCH_LINKS.map((l) => `${l.label}\n${l.href}`).join("\n\n")}
            label="Copy all URLs"
          />
        </div>
        <ul className="grid gap-2 sm:grid-cols-2">
          {SEARCH_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center justify-between gap-3 rounded-md bg-surface px-4 py-3 text-sm shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
              >
                {l.label}
                <ExternalLink className="size-4 shrink-0 text-muted" />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-lg bg-surface p-5 shadow-[var(--shadow-border)] sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl">Copy studio</h3>
            <p className="text-sm text-muted">
              Templates are live now. Grok rewrite is optional and user-initiated.
            </p>
          </div>
          <p className="text-xs uppercase tracking-widest text-faint">
            Source: {source}
          </p>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <label className="text-sm">
            <span className="text-xs uppercase tracking-widest text-faint">Persona</span>
            <select
              className="mt-1 min-h-11 w-full rounded-md bg-raised px-3 text-fg"
              value={persona}
              onChange={(e) => {
                const next = e.target.value as PersonaId;
                setPersona(next);
                setCopy(AD_TEMPLATES[next][channel]);
                setSource("template");
              }}
            >
              {(Object.keys(PERSONAS) as PersonaId[]).map((id) => (
                <option key={id} value={id}>
                  {id} — {PERSONAS[id].name}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            <span className="text-xs uppercase tracking-widest text-faint">Channel</span>
            <select
              className="mt-1 min-h-11 w-full rounded-md bg-raised px-3 text-fg"
              value={channel}
              onChange={(e) => {
                const next = e.target.value as ChannelId;
                setChannel(next);
                setCopy(AD_TEMPLATES[persona][next]);
                setSource("template");
              }}
            >
              {CHANNELS.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="mt-4 block text-sm">
          <span className="text-xs uppercase tracking-widest text-faint">
            Extra direction
          </span>
          <input
            className="mt-1 min-h-11 w-full rounded-md bg-raised px-3 text-fg placeholder:text-faint"
            value={extra}
            onChange={(e) => setExtra(e.target.value)}
            placeholder="e.g. mention reclaimed wood and catchment"
          />
        </label>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button type="button" variant="outline" onClick={onTemplate}>
            Load template
          </Button>
          <Button type="button" onClick={onGenerate} disabled={busy}>
            <Sparkles className="size-4" />
            {busy ? "Writing…" : "Rewrite with Grok"}
          </Button>
          <CopyButton text={combined} />
          <Button
            type="button"
            variant="ghost"
            onClick={() =>
              downloadText(`lehua-${persona}-${channel}.txt`, combined)
            }
          >
            Download
          </Button>
        </div>
        <div className="mt-6 space-y-3">
          <Field label="Headline" value={copy.headline} />
          <Field label="Body" value={copy.body} />
          <Field label="CTA" value={copy.cta} />
        </div>
      </section>

      <section className="rounded-lg bg-surface p-5 shadow-[var(--shadow-border)] sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl">Google AI Studio script</h3>
            <p className="mt-1 max-w-2xl text-sm text-muted">
              Paste this into Gemini / Google AI Studio as the system prompt. It
              hunts public buyer signals only — no private accounts, no invented
              contact details.
            </p>
          </div>
          <div className="flex gap-2">
            <CopyButton text={GEMINI_PLAYGROUND_SCRIPT} label="Copy script" />
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                downloadText("lehua-google-ai-playground.txt", GEMINI_PLAYGROUND_SCRIPT)
              }
            >
              Download .txt
            </Button>
          </div>
        </div>
        <pre className="mt-4 max-h-80 overflow-auto whitespace-pre-wrap rounded-md bg-bg p-4 text-xs leading-relaxed text-muted">
          {GEMINI_PLAYGROUND_SCRIPT}
        </pre>
      </section>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-md bg-surface p-5 shadow-[var(--shadow-border)]">
      <h3 className="text-xs uppercase tracking-widest text-faint">{title}</h3>
      <div className="mt-3 space-y-2">{children}</div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-faint">{label}</p>
      <p className="mt-1 whitespace-pre-wrap text-sm text-fg">{value}</p>
    </div>
  );
}
