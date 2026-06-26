"use client"

import type { CampaignListItem } from "./campaigns-list-data"

interface CampaignListRowProps {
  campaign: CampaignListItem
  onSubmitProof?: (id: string) => void
  onResolveDispute?: (id: string) => void
}

const STATUS_BADGE_CLASSES: Record<CampaignListItem["status"], string> = {
  active: "border-[var(--dash-accent-strong)] text-[var(--dash-accent-strong)]",
  review: "border-[var(--dash-muted)] text-[var(--dash-muted)]",
  completed: "border-[var(--dash-border)] text-[var(--dash-muted)]",
  disputed: "border-[var(--dash-danger)] text-[var(--dash-danger)]",
}

const STATUS_LABEL: Record<CampaignListItem["status"], string> = {
  active: "ACTIVE",
  review: "REVIEW",
  completed: "COMPLETED",
  disputed: "DISPUTED",
}

function ProgressBar({
  percent,
  tone,
}: {
  percent: number
  tone: "accent" | "dim" | "danger"
}) {
  const fillClass =
    tone === "accent"
      ? "bg-[var(--dash-accent-strong)]"
      : tone === "danger"
        ? "bg-[var(--dash-danger)]"
        : "bg-[var(--dash-border)]"

  return (
    <div className="h-1 w-full max-w-[140px] overflow-hidden rounded-full bg-[var(--dash-border)]">
      <div
        className={`h-full rounded-full ${fillClass}`}
        style={{ width: `${Math.min(100, Math.max(0, percent))}%` }}
      />
    </div>
  )
}

function OutlineButton({
  children,
  onClick,
  tone = "default",
  disabled = false,
  title,
}: {
  children: React.ReactNode
  onClick?: () => void
  tone?: "default" | "danger"
  disabled?: boolean
  title?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`h-11 shrink-0 whitespace-nowrap rounded border px-5 text-xs font-bold uppercase tracking-[0.05em] transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
        tone === "danger"
          ? "border-[var(--dash-danger)] text-[var(--dash-danger)] hover:bg-[var(--dash-danger)] hover:text-[var(--dash-on-danger)]"
          : "border-[var(--dash-border)] text-[var(--dash-heading)] hover:border-[var(--dash-muted)]"
      }`}
    >
      {children}
    </button>
  )
}

function FilledButton({
  children,
  onClick,
  tone = "accent",
  disabled = false,
  title,
}: {
  children: React.ReactNode
  onClick?: () => void
  tone?: "accent" | "danger"
  disabled?: boolean
  title?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`h-11 shrink-0 whitespace-nowrap rounded px-5 text-xs font-bold uppercase tracking-[0.05em] transition-opacity disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-90 ${
        tone === "danger"
          ? "bg-[var(--dash-danger)] text-[var(--dash-on-danger)]"
          : "bg-[var(--dash-accent-strong)] text-[var(--dash-on-accent-strong)]"
      }`}
    >
      {children}
    </button>
  )
}

export function CampaignListRow({
  campaign,
  onSubmitProof,
  onResolveDispute,
}: CampaignListRowProps) {
  const Icon = campaign.icon
  const isDisputed = campaign.status === "disputed"

  const nameClass = isDisputed
    ? "font-semibold text-[var(--dash-danger)]"
    : "font-semibold text-[var(--dash-heading)]"
  const subtitleClass = isDisputed
    ? "text-sm text-[var(--dash-danger)]/80"
    : "text-sm text-[var(--dash-muted)]"

  return (
    <div className="flex flex-col gap-4 border border-[var(--dash-border)] bg-[var(--dash-surface)] p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <div className="flex min-w-0 flex-1 items-center gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded border border-[var(--dash-border)] bg-[#262626]">
          <Icon className="size-5 text-[var(--dash-body)]" />
        </div>
        <div className="min-w-0">
          <p className={`${nameClass} truncate`}>{campaign.name}</p>
          <p className={`${subtitleClass} truncate`}>{campaign.subtitle}</p>
        </div>
      </div>

      <div className="flex shrink-0 flex-row items-baseline justify-between gap-2 sm:block sm:w-28">
        <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)]">
          Payout
        </p>
        <p className="text-2xl font-bold text-[var(--dash-heading)]">
          {campaign.payoutAmount}{" "}
          <span className="text-sm font-normal text-[var(--dash-muted)]">
            {campaign.payoutAsset}
          </span>
        </p>
      </div>

      <div className="flex shrink-0 flex-row items-center justify-between gap-2 sm:block sm:w-28">
        <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)] sm:mb-1.5">
          Status
        </p>
        <span
          className={`inline-block rounded border px-2 py-0.5 text-[10px] font-bold tracking-widest ${STATUS_BADGE_CLASSES[campaign.status]}`}
        >
          {STATUS_LABEL[campaign.status]}
        </span>
      </div>

      <div className="flex shrink-0 flex-col gap-1.5 sm:w-36">
        {campaign.status === "active" && (
          <>
            <p className="text-xs text-[var(--dash-muted)]">
              Progress{" "}
              <span className="font-semibold text-[var(--dash-heading)]">
                {campaign.progress ?? 0}%
              </span>
            </p>
            <ProgressBar percent={campaign.progress ?? 0} tone="accent" />
          </>
        )}
        {campaign.status === "review" && (
          <>
            <p className="text-xs text-[var(--dash-muted)]">
              Progress{" "}
              <span className="font-semibold text-[var(--dash-heading)]">100%</span>
            </p>
            <ProgressBar percent={100} tone="accent" />
          </>
        )}
        {campaign.status === "completed" && (
          <>
            <p className="text-xs text-[var(--dash-muted)]">
              <span className="font-semibold">Completed</span>{" "}
              {campaign.completedDate}
            </p>
            <ProgressBar percent={100} tone="dim" />
          </>
        )}
        {campaign.status === "disputed" && (
          <>
            <p className="text-xs font-bold uppercase tracking-[0.05em] text-[var(--dash-danger)]">
              Action Required
            </p>
            <p className="text-xs text-[var(--dash-danger)]">
              {campaign.hoursLeft}h Left
            </p>
            <ProgressBar percent={10} tone="danger" />
          </>
        )}
      </div>

      <div className="flex shrink-0 flex-col gap-2 xs:flex-row sm:w-auto">
        {campaign.status === "active" && (
          <>
            <OutlineButton>View Brief</OutlineButton>
            <FilledButton
              disabled
              title="Coming soon"
              onClick={() => onSubmitProof?.(campaign.id)}
            >
              Submit Proof
            </FilledButton>
          </>
        )}
        {campaign.status === "review" && (
          <OutlineButton>View Submission</OutlineButton>
        )}
        {campaign.status === "completed" && (
          <OutlineButton>View Invoice</OutlineButton>
        )}
        {campaign.status === "disputed" && (
          <FilledButton
            tone="danger"
            disabled
            title="Coming soon"
            onClick={() => onResolveDispute?.(campaign.id)}
          >
            Resolve Dispute
          </FilledButton>
        )}
      </div>
    </div>
  )
}