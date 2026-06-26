"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export type MarketplacePaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function MarketplacePagination({
  currentPage,
  totalPages,
  onPageChange,
}: MarketplacePaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    if (totalPages <= 4) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    return [1, 2, 3, "...", totalPages];
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        className="border border-outline-variant p-2 text-on-surface-variant hover:text-on-surface disabled:opacity-30"
        aria-label="Previous page"
      >
        <ChevronLeft className="size-4" />
      </button>

      {getPageNumbers().map((page, idx) =>
        page === "..." ? (
          <span
            key={`ellipsis-${idx}`}
            className="text-on-surface-variant size-9 flex items-center justify-center text-sm font-semibold"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page as number)}
            className={`size-9 flex items-center justify-center text-sm font-semibold ${
              currentPage === page
                ? "bg-primary-container text-on-primary"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        className="border border-outline-variant p-2 text-on-surface-variant hover:text-on-surface disabled:opacity-30"
        aria-label="Next page"
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  );
}
