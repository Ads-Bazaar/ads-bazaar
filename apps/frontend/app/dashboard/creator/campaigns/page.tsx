"use client"
import { useMemo, useState } from "react"
import { Inbox } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/shared/dashboard-header"
import { CampaignsPageHeader } from "@/components/dashboard/creator/campaigns-page-header"
import {
  CampaignStatusTabs,
  type CampaignFilter,
} from "@/components/dashboard/creator/campaign-status-tabs"
import { CampaignListRow } from "@/components/dashboard/creator/campaign-list-row"
import { CampaignsPagination } from "@/components/dashboard/creator/campaigns-pagination"
import { campaignsList } from "@/components/dashboard/creator/campaigns-list-data"

const PAGE_SIZE = 4

export default function CreatorCampaignsPage() {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<CampaignFilter>("all")
  const [page, setPage] = useState(1)

  const activeCount = useMemo(
    () => campaignsList.filter((c) => c.status === "active").length,
    [],
  )
  const disputedCount = useMemo(
    () => campaignsList.filter((c) => c.status === "disputed").length,
    [],
  )

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()
    return campaignsList.filter((campaign) => {
      const matchesFilter = filter === "all" || campaign.status === filter
      const matchesSearch =
        query.length === 0 || campaign.name.toLowerCase().includes(query)
      return matchesFilter && matchesSearch
    })
  }, [search, filter])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const pageItems = filtered.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  )

  function handleSearchChange(value: string) {
    setSearch(value)
    setPage(1)
  }

  function handleFilterChange(value: CampaignFilter) {
    setFilter(value)
    setPage(1)
  }

  return (
    <>
      <DashboardHeader eyebrow="Manage your gigs" title="Campaigns" />
      <div className="flex flex-col gap-8">
        <CampaignsPageHeader
          searchValue={search}
          onSearchChange={handleSearchChange}
        />
        <CampaignStatusTabs
          active={filter}
          onChange={handleFilterChange}
          activeCount={activeCount}
          disputedCount={disputedCount}
        />
        {pageItems.length > 0 ? (
          <div className="flex flex-col gap-4">
            {pageItems.map((campaign) => (
              <CampaignListRow
                key={campaign.id}
                campaign={campaign}
                onSubmitProof={() => {}}
                onResolveDispute={() => {}}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 border border-[var(--dash-border)] bg-[var(--dash-surface)] py-20 text-center">
            <Inbox className="size-10 text-[var(--dash-muted)]" />
            <p className="font-semibold text-[var(--dash-heading)]">
              No campaigns found
            </p>
            <p className="max-w-xs text-sm text-[var(--dash-muted)]">
              Try adjusting your search or filter to find what you&apos;re
              looking for.
            </p>
          </div>
        )}
        <CampaignsPagination
          currentPage={safePage}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </>
  )
}