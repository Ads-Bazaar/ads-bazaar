import { campaignsPageStats } from "./campaigns-list-data";

export function CampaignsStatCards() {
  const { totalCampaigns, activeNow, pendingReview, totalBudgetLocked } =
    campaignsPageStats;

  return (
    <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {/* Total Campaigns */}
      <div className="border border-[var(--dash-border)] bg-[var(--dash-surface)] p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)]">
          Total Campaigns
        </p>
        <p className="font-[family-name:var(--font-sora)] text-[28px] font-semibold text-[var(--dash-heading)]">
          {totalCampaigns.value}
        </p>
        <span className="text-xs font-bold text-[var(--dash-accent)]">
          {totalCampaigns.delta}
        </span>
      </div>

      {/* Active Now */}
      <div className="border border-[var(--dash-border)] bg-[var(--dash-surface)] p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)]">
          Active Now
        </p>
        <p className="flex items-center font-[family-name:var(--font-sora)] text-[28px] font-semibold text-[var(--dash-heading)]">
          {activeNow.value}
          {activeNow.indicator && (
            <span
              className="ml-2 inline-block size-2 rounded-full bg-[var(--dash-accent)]"
              aria-label="Active indicator"
            />
          )}
        </p>
      </div>

      {/* Pending Review */}
      <div className="border border-[var(--dash-border)] bg-[var(--dash-surface)] p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)]">
          Pending Review
        </p>
        <p className="font-[family-name:var(--font-sora)] text-[28px] font-semibold text-[var(--dash-heading)]">
          {pendingReview.value}
        </p>
        <span className="text-xs text-[var(--dash-muted)]">
          {pendingReview.sub}
        </span>
      </div>

      {/* Total Budget Locked */}
      <div className="border border-[var(--dash-border)] bg-[var(--dash-surface)] p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)]">
          Total Budget Locked
        </p>
        <p className="font-[family-name:var(--font-sora)] text-[28px] font-semibold text-[var(--dash-heading)]">
          {totalBudgetLocked.value}
          <span className="ml-1 text-sm font-bold text-[var(--dash-muted)]">
            {totalBudgetLocked.unit}
          </span>
        </p>
      </div>
    </div>
  );
}
