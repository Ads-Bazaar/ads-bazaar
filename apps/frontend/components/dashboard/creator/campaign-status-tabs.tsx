"use client"

export type CampaignFilter = "all" | "active" | "review" | "completed" | "disputed"

interface CampaignStatusTabsProps {
  active: CampaignFilter
  onChange: (filter: CampaignFilter) => void
  activeCount: number
  disputedCount: number
}

const TABS: { label: string; value: CampaignFilter }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Under Review", value: "review" },
  { label: "Completed", value: "completed" },
  { label: "Disputed", value: "disputed" },
]

export function CampaignStatusTabs({
  active,
  onChange,
  activeCount,
  disputedCount,
}: CampaignStatusTabsProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex w-full gap-1 overflow-x-auto rounded-lg border border-[var(--dash-border)] bg-[var(--dash-surface)] p-1 sm:w-auto">
        {TABS.map((tab) => {
          const isActive = active === tab.value
          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => onChange(tab.value)}
              className={`shrink-0 whitespace-nowrap rounded px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] transition-colors ${
                isActive
                  ? "bg-[var(--dash-accent-strong)] font-bold text-[var(--dash-on-accent-strong)]"
                  : "text-[var(--dash-muted)] hover:text-[var(--dash-heading)]"
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div className="flex shrink-0 items-center gap-4 text-xs font-semibold">
        <span className="flex items-center gap-1.5 text-[var(--dash-accent-strong)]">
          <span className="size-2 rounded-full bg-[var(--dash-accent-strong)]" />
          {activeCount} Active
        </span>
        <span className="flex items-center gap-1.5 text-[var(--dash-danger)]">
          <span className="size-2 rounded-full bg-[var(--dash-danger)]" />
          {disputedCount} Disputed
        </span>
      </div>
    </div>
  )
}
