import type { SyncItem } from "./creator-inventory-data";

export function SyncSchedule({
  items,
  note,
}: {
  items: SyncItem[];
  note: string;
}) {
  return (
    <section className="col-span-12 border border-[var(--dash-border)] bg-[var(--dash-surface)] p-6 lg:col-span-4">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)]">
        Sync Schedule
      </h2>

      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center">
              <span
                className={`size-2 shrink-0 rounded-full ${
                  item.status === "ok"
                    ? "bg-[var(--dash-accent)]"
                    : "bg-[var(--dash-muted)] opacity-40"
                }`}
              />
              <span className="ml-2 truncate text-sm text-[var(--dash-body)]">
                {item.platform}
              </span>
            </div>
            <span className="shrink-0 text-xs font-semibold text-[var(--dash-muted)]">
              {item.schedule}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-[var(--dash-muted)]">
        {note}
      </p>
    </section>
  );
}
