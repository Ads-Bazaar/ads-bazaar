import { LayoutGrid, List } from "lucide-react";

export function MarketplaceGridHeader({ count }: { count: number }) {
  return (
    <div className="flex items-center justify-between mt-12 mb-6">
      <div>
        <h2 className="font-sora text-xl font-semibold text-on-surface">
          Active Marketplace
        </h2>
        <p className="text-xs text-on-surface-variant mt-1">
          Showing {count} verified funded campaigns
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          disabled
          className="border border-outline-variant p-2 text-on-surface"
          aria-label="Grid view"
        >
          <LayoutGrid className="size-4" />
        </button>
        <button
          disabled
          className="border border-outline-variant p-2 text-on-surface-variant"
          aria-label="List view"
        >
          <List className="size-4" />
        </button>
      </div>
    </div>
  );
}
