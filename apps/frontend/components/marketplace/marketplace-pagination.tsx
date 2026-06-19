"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function MarketplacePagination({ totalPages }: { totalPages: number }) {
  const [activePage, setActivePage] = useState(1);

  const getPageNumbers = () => {
    if (totalPages <= 4) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    return [1, 2, 3, "...", totalPages];
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        disabled={activePage === 1}
        onClick={() => setActivePage((p) => Math.max(1, p - 1))}
        className="border border-outline-variant p-2 text-on-surface-variant hover:text-on-surface disabled:opacity-30"
        aria-label="Previous page"
      >
        <ChevronLeft className="size-4" />
      </button>

      {getPageNumbers().map((page, idx) =>
        page === "..." ? (
          <span key={`ellipsis-${idx}`} className="text-on-surface-variant size-9 flex items-center justify-center text-sm font-semibold">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => setActivePage(page as number)}
            className={`size-9 flex items-center justify-center text-sm font-semibold ${
              activePage === page
                ? "bg-primary-container text-on-primary"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        disabled={activePage === totalPages}
        onClick={() => setActivePage((p) => Math.min(totalPages, p + 1))}
        className="border border-outline-variant p-2 text-on-surface-variant hover:text-on-surface disabled:opacity-30"
        aria-label="Next page"
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  );
}
