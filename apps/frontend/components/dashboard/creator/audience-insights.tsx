import type { AudienceInsightsData } from "./creator-inventory-data";

export function AudienceInsights({
  insights,
}: {
  insights: AudienceInsightsData;
}) {
  return (
    <section className="col-span-12 border border-[var(--dash-border)] bg-[var(--dash-surface)] p-6 lg:col-span-8">
      <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.05em] text-[var(--dash-accent)]">
        Aggregated Audience Insights
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div>
          <p className="mb-1 text-xs text-[var(--dash-muted)]">Total Reach</p>
          <p className="text-3xl font-bold text-[var(--dash-heading)]">
            {insights.totalReach}
          </p>
          <div className="mt-3 mb-1 h-1 bg-[var(--dash-border)]">
            <div
              className="h-full bg-[var(--dash-accent)]"
              style={{ width: `${insights.reachProgress}%` }}
            />
          </div>
          <p className="text-xs text-[var(--dash-muted)]">
            {insights.reachDelta}
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs text-[var(--dash-muted)]">
            Top Categories
          </p>
          <div className="flex flex-wrap gap-2">
            {insights.topCategories.map((category) => (
              <span
                key={category.label}
                className="border border-[var(--dash-border)] px-2 py-0.5 text-[10px] font-bold tracking-widest text-[var(--dash-body)]"
              >
                {category.label}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-1 text-xs text-[var(--dash-muted)]">
            Primary Region
          </p>
          <p className="text-xl font-bold text-[var(--dash-heading)]">
            {insights.primaryRegion}
          </p>
          <p className="text-xs text-[var(--dash-muted)]">
            {insights.primaryRegionShare}
          </p>
        </div>
      </div>
    </section>
  );
}
