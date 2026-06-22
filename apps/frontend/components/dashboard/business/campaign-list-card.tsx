"use client";

import Link from "next/link";
import type { CampaignListItem } from "./campaigns-list-data";

const statusBadgeStyles: Record<CampaignListItem["status"], string> = {
  active: "border-[var(--dash-accent)] text-[var(--dash-accent)]",
  "under-review": "border-amber-400 text-amber-400",
  draft: "border-[var(--dash-border)] text-[var(--dash-muted)]",
  completed: "border-blue-400 text-blue-400",
};

const statusLabels: Record<CampaignListItem["status"], string> = {
  active: "ACTIVE",
  "under-review": "UNDER REVIEW",
  draft: "DRAFT",
  completed: "COMPLETED",
};

function MetricCell({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div>
      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)]">
        {label}
      </p>
      <p
        className={`text-sm font-bold ${
          accent ? "text-[var(--dash-accent)]" : "text-[var(--dash-heading)]"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

export function CampaignListCard({ campaign }: { campaign: CampaignListItem }) {
  return (
    <article className="border border-[var(--dash-border)] bg-[var(--dash-surface)] overflow-hidden">
      {/* Hero image — dark bg is the fallback since images won't exist locally */}
      <div
        className="relative h-40 overflow-hidden bg-[var(--dash-bg)]"
        style={{
          backgroundImage: `url(${campaign.heroImagePath})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label={campaign.title}
      >
        {/* Status badge */}
        <span
          className={`absolute top-3 right-3 rounded border px-2 py-0.5 text-[10px] font-bold tracking-widest ${
            statusBadgeStyles[campaign.status]
          }`}
        >
          {statusLabels[campaign.status]}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-[family-name:var(--font-sora)] text-lg font-bold leading-tight text-[var(--dash-heading)]">
          {campaign.title}
        </h3>
        <p className="mt-1 text-xs text-[var(--dash-body)]">{campaign.dateRange}</p>

        {/* Status-specific metrics */}
        {campaign.status === "active" && (
          <div className="mt-4 border-t border-[var(--dash-border)] pt-4">
            <div className="grid grid-cols-2 gap-4">
              <MetricCell label="Budget" value={campaign.budget} />
              <MetricCell label="Applicants" value={campaign.applicants} />
            </div>
            <div className="my-3 border-t border-[var(--dash-border)]" />
            <div className="grid grid-cols-2 gap-4">
              <MetricCell
                label="Impressions"
                value={campaign.impressions ?? "—"}
                accent
              />
              <MetricCell label="Avg. Reach" value={campaign.avgReach ?? "—"} />
            </div>
            <Link
              href={`/dashboard/business/campaigns/${campaign.id}`}
              className="mt-4 block w-full bg-[var(--dash-accent-strong)] py-3 text-center font-bold text-[var(--dash-on-accent-strong)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dash-accent)]"
            >
              View Details
            </Link>
          </div>
        )}

        {campaign.status === "under-review" && (
          <div className="mt-4 border-t border-[var(--dash-border)] pt-4">
            <div className="grid grid-cols-2 gap-4">
              <MetricCell label="Budget" value={campaign.budget} />
              <MetricCell label="Applicants" value={campaign.applicants} />
            </div>
            <div className="my-3 border-t border-[var(--dash-border)]" />
            <div className="grid grid-cols-2 gap-4">
              <MetricCell
                label="Est. Impressions"
                value={campaign.estImpressions ?? "—"}
              />
              <MetricCell label="Est. Reach" value={campaign.estReach ?? "—"} />
            </div>
            <button
              type="button"
              disabled
              title="Coming soon"
              className="mt-4 w-full border border-[var(--dash-border)] py-3 text-center font-bold text-[var(--dash-heading)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              View Submission
            </button>
          </div>
        )}

        {campaign.status === "draft" && (
          <div className="mt-4 border-t border-[var(--dash-border)] pt-4">
            <div className="grid grid-cols-2 gap-4">
              <MetricCell label="Budget" value={campaign.budget} />
              <MetricCell label="Applicants" value={campaign.applicants} />
            </div>
            {campaign.draftNote && (
              <p className="mt-3 text-sm italic text-[var(--dash-muted)]">
                {campaign.draftNote}
              </p>
            )}
            <button
              type="button"
              disabled
              title="Coming soon"
              className="mt-4 w-full border border-[var(--dash-border)] py-3 text-center font-bold text-[var(--dash-muted)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              Continue Draft
            </button>
          </div>
        )}

        {campaign.status === "completed" && (
          <div className="mt-4 border-t border-[var(--dash-border)] pt-4">
            <div className="grid grid-cols-2 gap-4">
              <MetricCell label="Total Spent" value={campaign.totalSpent ?? "—"} />
              <MetricCell label="Final Reach" value={campaign.finalReach ?? "—"} />
            </div>
            <div className="my-3 border-t border-[var(--dash-border)]" />
            <div className="grid grid-cols-2 gap-4">
              <MetricCell
                label="ROI Score"
                value={campaign.roiScore ?? "—"}
                accent
              />
              <MetricCell
                label="Creators Paid"
                value={campaign.creatorsPaid ?? "—"}
              />
            </div>
            <button
              type="button"
              disabled
              title="Coming soon"
              className="mt-4 w-full border border-[var(--dash-border)] py-3 text-center font-bold text-[var(--dash-heading)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              View Report
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
