import { campaignsPageStats } from "./campaigns-list-data";

export function CampaignsStatCards() {
  const stats = [
    {
      label: "Total Campaigns",
      value: campaignsPageStats.totalCampaigns.value,
      detail: <span className="text-xs font-bold text-[var(--dash-accent)]">{campaignsPageStats.totalCampaigns.delta}</span>,
    },
    {
      label: "Active Now",
      value: campaignsPageStats.activeNow.value,
      detail: <span className="ml-2 inline-block size-2 rounded-full bg-[var(--dash-accent)]" aria-label="Active" />,
    },
    {
      label: "Pending Review",
      value: campaignsPageStats.pendingReview.value,
      detail: <span className="text-xs text-[var(--dash-muted)]">{campaignsPageStats.pendingReview.sub}</span>,
    },
    {
      label: "Total Budget Locked",
      value: campaignsPageStats.totalBudgetLocked.value,
      detail: <span className="ml-1 text-sm font-bold text-[var(--dash-muted)]">{campaignsPageStats.totalBudgetLocked.unit}</span>,
    },
  ];

  return (
    <section className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4" aria-label="Campaign stats">
      {stats.map((stat) => (
        <article key={stat.label} className="border border-[var(--dash-border)] bg-[var(--dash-surface)] p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)]">
            {stat.label}
          </p>
          <div className="mt-2 flex items-baseline">
            <p className="font-[family-name:var(--font-sora)] text-[28px] font-semibold leading-none text-[var(--dash-heading)]">
              {stat.value}
            </p>
            {stat.detail}
          </div>
        </article>
      ))}
    </section>
  );
}
