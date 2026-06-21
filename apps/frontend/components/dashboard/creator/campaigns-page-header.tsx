"use client"

import { Search, Bell, Menu } from "lucide-react"
import { useMobileNav } from "@/components/dashboard/creator/mobile-nav-context"
import { WalletChip } from "@/components/wallet/wallet-chip"

interface CampaignsPageHeaderProps {
  searchValue: string
  onSearchChange: (value: string) => void
}

export function CampaignsPageHeader({
  searchValue,
  onSearchChange,
}: CampaignsPageHeaderProps) {
  const { openMobileNav } = useMobileNav()

  return (
    <div>
      <div className="flex items-center gap-4">
        {/* Mobile hamburger — < 1024px, same pattern as DashboardHeader */}
        <button
          type="button"
          onClick={openMobileNav}
          aria-label="Open menu"
          className="flex size-11 shrink-0 items-center justify-center rounded border border-[var(--dash-border)] text-[var(--dash-muted)] transition-colors hover:text-[var(--dash-heading)] lg:hidden"
        >
          <Menu className="size-5" />
        </button>

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

        <div className="flex shrink-0 flex-wrap items-center justify-end gap-3">
          <button
            type="button"
            aria-label="Notifications"
            className="flex size-11 items-center justify-center rounded text-[var(--dash-muted)] transition-colors hover:text-[var(--dash-heading)]"
          >
            <Bell className="size-5" />
          </button>
          <WalletChip />
        </div>
      </div>

      <div className="mt-8">
        <h1 className="font-[family-name:var(--font-sora)] text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--dash-heading)]">
          Campaigns
        </h1>
        <p className="mt-1 text-base text-[var(--dash-muted)]">
          Manage your active gigs and submissions
        </p>
      </div>
    </div>
  )
}
