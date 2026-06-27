"use client"

import { Search } from "lucide-react"
import { WalletChip } from "@/components/wallet/wallet-chip"
import { NotificationBell } from "@/components/notifications/notification-bell"

interface CampaignsPageHeaderProps {
  searchValue: string
  onSearchChange: (value: string) => void
}

export function CampaignsPageHeader({
  searchValue,
  onSearchChange,
}: CampaignsPageHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative min-w-0 flex-grow">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[var(--dash-muted)]" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search campaigns..."
          className="h-11 w-full rounded border border-[var(--dash-border)] bg-[var(--dash-surface)] pl-10 pr-4 text-sm text-[var(--dash-heading)] placeholder:text-[var(--dash-muted)] focus:border-[var(--dash-accent-strong)] focus:outline-none"
        />
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <NotificationBell variant="dashboard" />
        <div className="hidden lg:block">
          <WalletChip />
        </div>
      </div>
    </div>
  )
}
