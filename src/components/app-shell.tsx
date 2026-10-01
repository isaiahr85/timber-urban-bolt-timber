import { Link, useRouterState } from "@tanstack/react-router";
import { PROPERTY } from "@/data/property";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Overview" },
  { to: "/personas", label: "Personas" },
  { to: "/ads", label: "Ads & search" },
  { to: "/finance", label: "Capital" },
  { to: "/diligence", label: "Diligence" },
  { to: "/leads", label: "Leads" },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 10% -10%, color-mix(in oklab, var(--color-primary) 18%, transparent), transparent), radial-gradient(ellipse 50% 40% at 100% 0%, color-mix(in oklab, var(--color-leaf) 10%, transparent), transparent)",
        }}
      />
      <header className="relative border-b border-line bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
                Buyer discovery desk
              </p>
              <h1 className="font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl">
                Lehua Desk
              </h1>
              <p className="mt-1 max-w-xl text-sm text-muted">
                {PROPERTY.address}, {PROPERTY.city} · {PROPERTY.subdivision} · TMK{" "}
                {PROPERTY.tmkShort}
              </p>
            </div>
            <div className="rounded-md bg-surface px-3 py-2 text-right shadow-[var(--shadow-border)]">
              <p className="text-xs uppercase tracking-widest text-faint">As-is talk</p>
              <p className="font-display text-xl tabular-nums text-fg">
                ${PROPERTY.asIs.toLocaleString()}
              </p>
            </div>
          </div>
          <nav className="-mx-1 flex gap-1 overflow-x-auto pb-1">
            {NAV.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "shrink-0 rounded-md px-3 py-2.5 text-sm transition-colors duration-150",
                    active
                      ? "bg-raised text-fg"
                      : "text-muted hover:bg-surface hover:text-fg",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <main className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        {children}
      </main>
    </div>
  );
}
