"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface CampaignsPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

function getPageList(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const pages = new Set<number>([1, total, current])
  if (current - 1 >= 1) pages.add(current - 1)
  if (current + 1 <= total) pages.add(current + 1)

  const sorted = Array.from(pages).sort((a, b) => a - b)
  const result: (number | "ellipsis")[] = []

  sorted.forEach((page, i) => {
    if (i > 0) {
      const prev = sorted[i - 1]
      if (page - prev === 2) {
        result.push(prev + 1)
      } else if (page - prev > 2) {
        result.push("ellipsis")
      }
    }
    result.push(page)
  })

  return result
}

export function CampaignsPagination({
  currentPage,
  totalPages,
  onPageChange,
}: CampaignsPaginationProps) {
  if (totalPages <= 1) return null

  const pageList = getPageList(currentPage, totalPages)
  const isFirst = currentPage === 1
  const isLast = currentPage === totalPages

  return (
    <div className="mt-8 flex items-center justify-center gap-1">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirst}
        aria-label="Previous page"
        className={`flex size-9 items-center justify-center rounded text-[var(--dash-muted)] transition-colors hover:text-[var(--dash-heading)] ${
          isFirst ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        <ChevronLeft className="size-4" />
      </button>

      {pageList.map((item, i) =>
        item === "ellipsis" ? (
          <span
            key={`ellipsis-${i}`}
            className="flex size-9 items-center justify-center text-[var(--dash-muted)]"
          >
            ...
          </span>
        ) : (
          <button
            key={item}
            type="button"
            onClick={() => onPageChange(item)}
            className={`flex size-9 items-center justify-center rounded text-sm transition-colors ${
              item === currentPage
                ? "bg-[var(--dash-accent-strong)] font-bold text-[var(--dash-on-accent-strong)]"
                : "text-[var(--dash-muted)] hover:text-[var(--dash-heading)]"
            }`}
          >
            {item}
          </button>
        ),
      )}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLast}
        aria-label="Next page"
        className={`flex size-9 items-center justify-center rounded text-[var(--dash-muted)] transition-colors hover:text-[var(--dash-heading)] ${
          isLast ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  )
}
