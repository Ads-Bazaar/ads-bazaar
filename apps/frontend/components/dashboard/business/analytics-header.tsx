import { Calendar, ChevronDown, Download } from "lucide-react";

export function AnalyticsHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="font-[family-name:var(--font-sora)] text-[28px] font-semibold text-[var(--dash-heading)]">
          Analytics &amp; ROI
        </h1>
        <p className="mt-1 max-w-sm text-sm text-[var(--dash-muted)]">
          Track your campaign efficiency and growth across the decentralized network.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          disabled
          title="Coming soon"
          className="flex items-center gap-2 border border-[var(--dash-border)] bg-[var(--dash-surface)] px-4 py-2 text-sm text-[var(--dash-body)]"
        >
          <Calendar className="size-4" aria-hidden="true" />
          <span>Oct 1, 2023 – Oct 31, 2023</span>
          <ChevronDown className="size-4" aria-hidden="true" />
        </button>

        <button
          type="button"
          disabled
          title="Coming soon"
          className="flex items-center gap-2 border border-[var(--dash-border)] bg-[var(--dash-surface)] px-4 py-2 text-sm font-semibold text-[var(--dash-heading)]"
        >
          <Download className="size-4" aria-hidden="true" />
          <span>Export Report</span>
        </button>
      </div>
    </div>
  );
}
