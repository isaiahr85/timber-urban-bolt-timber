import { createServerFn } from "@tanstack/react-start";
import { AD_TEMPLATES, type ChannelId } from "@/data/ads";
import type { PersonaId } from "@/data/personas";

type Input = {
  persona: PersonaId;
  channel: ChannelId;
  extra?: string;
};

export const generateAdCopy = createServerFn({ method: "POST" })
  .validator((input: Input) => input)
  .handler(async ({ data }) => {
    const fallback = AD_TEMPLATES[data.persona][data.channel];
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return { ok: true as const, source: "template" as const, ...fallback };
    }

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        max_tokens: 500,
        messages: [
          {
            role: "system",
            content:
              "You write honest Hawaiʻi land ads. Return JSON only with keys headline, body, cta. No markdown. Disclose Lava Zone 2, HOA, catchment, and that this is not a short-term rental play. Property: 14-3555 Lehua Rd, Pahoa, Nanawale Estates, 8040 sf, septic, shed, lean-tos, as-is ~$17800.",
          },
          {
            role: "user",
            content: `Persona ${data.persona}. Channel ${data.channel}. Extra: ${data.extra || "none"}. Write one headline, body, and CTA.`,
          },
        ],
      }),
    });

    if (!res.ok) {
      return { ok: true as const, source: "template" as const, ...fallback };
    }

    const body = (await res.json()) as {
      choices: { message: { content: string } }[];
    };
    const text = body.choices[0]?.message.content ?? "";
    try {
      const jsonStart = text.indexOf("{");
      const jsonEnd = text.lastIndexOf("}");
      const parsed = JSON.parse(text.slice(jsonStart, jsonEnd + 1)) as {
        headline?: string;
        body?: string;
        cta?: string;
      };
      return {
        ok: true as const,
        source: "grok" as const,
        headline: parsed.headline || fallback.headline,
        body: parsed.body || fallback.body,
        cta: parsed.cta || fallback.cta,
      };
    } catch {
      return { ok: true as const, source: "template" as const, ...fallback };
    }
  });
