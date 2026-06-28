"use client";

import Link from "next/link";
import type { CampaignListItem, CampaignListStatus } from "./campaigns-list-data";

const badgeStyles: Record<CampaignListStatus, string> = {
  active: "border-[var(--dash-accent)] text-[var(--dash-accent)]",
  "under-review": "border-amber-400 text-amber-400",
  draft: "border-[var(--dash-border)] text-[var(--dash-muted)]",
  completed: "border-blue-400 text-blue-400",
};

const statusLabel: Record<CampaignListStatus, string> = {
  active: "ACTIVE",
  "under-review": "UNDER REVIEW",
  draft: "DRAFT",
  completed: "COMPLETED",
};

const Label = ({ label }: { label: string }) => (
  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)]">{label}</p>
);

const Value = ({ children, accent }: { children: React.ReactNode; accent?: boolean }) => (
  <p className={`text-sm font-bold ${accent ? "text-[var(--dash-accent)]" : "text-[var(--dash-heading)]"}`}>{children}</p>
);

function ActiveMetrics(c: CampaignListItem) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div><Label label="Budget" /><Value>{c.budget}</Value></div>
        <div><Label label="Applicants" /><Value>{c.applicants}</Value></div>
      </div>
      <hr className="my-3 border-[var(--dash-border)]" />
      <div className="grid grid-cols-2 gap-4">
        <div><Label label="Impressions" /><Value accent>{c.impressions}</Value></div>
        <div><Label label="Avg. Reach" /><Value>{c.avgReach}</Value></div>
      </div>
    </>
  );
}

function UnderReviewMetrics(c: CampaignListItem) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div><Label label="Budget" /><Value>{c.budget}</Value></div>
        <div><Label label="Applicants" /><Value>{c.applicants}</Value></div>
      </div>
      <hr className="my-3 border-[var(--dash-border)]" />
      <div className="grid grid-cols-2 gap-4">
        <div><Label label="Est. Impressions" /><Value>{c.estImpressions}</Value></div>
        <div><Label label="Est. Reach" /><Value>{c.estReach}</Value></div>
      </div>
    </>
  );
}

function DraftMetrics(c: CampaignListItem) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div><Label label="Budget" /><Value>{c.budget}</Value></div>
        <div><Label label="Applicants" /><Value>{c.applicants}</Value></div>
      </div>
      <p className="mt-3 text-sm italic text-[var(--dash-muted)]">{c.draftNote}</p>
    </>
  );
}

function CompletedMetrics(c: CampaignListItem) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div><Label label="Total Spent" /><Value>{c.totalSpent}</Value></div>
        <div><Label label="Final Reach" /><Value>{c.finalReach}</Value></div>
      </div>
      <hr className="my-3 border-[var(--dash-border)]" />
      <div className="grid grid-cols-2 gap-4">
        <div><Label label="ROI Score" /><Value accent>{c.roiScore}</Value></div>
        <div><Label label="Creators Paid" /><Value>{c.creatorsPaid}</Value></div>
      </div>
    </>
  );
}

const ctaLabels: Record<CampaignListStatus, string> = {
  active: "View Details",
  "under-review": "View Submission",
  draft: "Continue Draft",
  completed: "View Report",
};

export function CampaignListCard({ campaign }: { campaign: CampaignListItem }) {
  const { status } = campaign;
  const isDisabled = status !== "active";

  return (
    <article className="overflow-hidden border border-[var(--dash-border)] bg-[var(--dash-surface)]">
      <div className="relative h-40 overflow-hidden bg-[var(--dash-bg)]">
        <span
          className={`absolute top-3 right-3 rounded border px-2 py-0.5 text-[10px] font-bold tracking-widest ${badgeStyles[status]}`}
        >
          {statusLabel[status]}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-[family-name:var(--font-sora)] text-lg font-bold leading-tight text-[var(--dash-heading)]">
          {campaign.title}
        </h3>
        <p className="mt-1 text-xs text-[var(--dash-body)]">{campaign.dateRange}</p>

        <div className="mt-4 border-t border-[var(--dash-border)] pt-4">
          {status === "active" ? <ActiveMetrics {...campaign} /> : null}
          {status === "under-review" ? <UnderReviewMetrics {...campaign} /> : null}
          {status === "draft" ? <DraftMetrics {...campaign} /> : null}
          {status === "completed" ? <CompletedMetrics {...campaign} /> : null}
        </div>

        {isDisabled ? (
          <button
            type="button"
            disabled
            title="Coming soon"
            className="mt-4 w-full border border-[var(--dash-border)] py-3 text-center text-sm font-bold text-[var(--dash-heading)] opacity-60 cursor-not-allowed"
          >
            {ctaLabels[status]}
          </button>
        ) : (
          <Link
            href={`/dashboard/business/campaigns/${campaign.id}`}
            className="mt-4 block w-full bg-[var(--dash-accent-strong)] py-3 text-center text-sm font-bold text-[var(--dash-on-accent-strong)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dash-accent-strong)]"
          >
            {ctaLabels[status]}
          </Link>
        )}
      </div>
    </article>
  );
}
