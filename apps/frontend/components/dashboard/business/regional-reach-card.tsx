import type { RegionRow } from "./analytics-data";

const MAP_DOTS = [
  { top: "45%", left: "22%" }, // US
  { top: "30%", left: "45%" }, // UK
  { top: "40%", left: "75%" }, // Asia-Pacific
];

export function RegionalReachCard({ regions }: { regions: RegionRow[] }) {
  return (
    <div className="flex h-full flex-col border border-[var(--dash-border)] bg-[var(--dash-surface)] p-6">
      <div>
        <h2 className="text-sm font-semibold text-[var(--dash-heading)]">Regional Reach</h2>
        <p className="mt-0.5 text-xs text-[var(--dash-muted)]">
          Top performing locations by engagement
        </p>
      </div>

      <div className="relative mt-4 h-[140px] border border-[var(--dash-border)] bg-[var(--dash-bg)]">
        {MAP_DOTS.map((dot, index) => (
          <span
            key={index}
            className="absolute size-2 rounded-full bg-[var(--dash-accent)]"
            style={{ top: dot.top, left: dot.left }}
            aria-hidden="true"
          />
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {regions.map((region) => (
          <div key={region.name}>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm text-[var(--dash-body)]">{region.name}</span>
              <span className="text-sm font-bold text-[var(--dash-heading)]">
                {region.percentage}%
              </span>
            </div>
            <div className="h-1 bg-[var(--dash-border)]">
              <div
                className={`h-full ${
                  region.isAccent ? "bg-[var(--dash-accent)]" : "bg-[var(--dash-muted)]"
                }`}
                style={{ width: `${region.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
