"use client";

import { Search, ChevronDown } from "lucide-react";
import { quickTags } from "./marketplace-data";

export function MarketplaceFilters({
  searchValue,
  onSearchChange,
  selectedAsset,
  onAssetChange,
  selectedType,
  onTypeChange,
}: {
  searchValue: string;
  onSearchChange: (value: string) => void;
  selectedAsset: string;
  onAssetChange: (value: string) => void;
  selectedType: string;
  onTypeChange: (value: string) => void;
}) {
  return (
    <div className="border border-outline-variant bg-surface-container p-6 mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Search Campaigns */}
        <div>
          <label className="text-[10px] font-semibold uppercase tracking-[0.05em] text-on-surface mb-2 block">
            Search Campaigns
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant/50" />
            <input
              type="text"
              placeholder="Brand name or niche..."
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              className="bg-surface-container-high border border-outline-variant px-4 py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant/50 w-full pl-10"
            />
          </div>
        </div>

        {/* Settlement Asset */}
        <div>
          <label className="text-[10px] font-semibold uppercase tracking-[0.05em] text-on-surface mb-2 block">
            Settlement Asset
          </label>
          <div className="relative">
            <select
              value={selectedAsset}
              onChange={(e) => onAssetChange(e.target.value)}
              className="bg-surface-container-high border border-outline-variant px-4 py-2.5 text-sm text-on-surface w-full appearance-none cursor-pointer"
            >
              <option value="">All Assets</option>
              <option value="USDC">USDC</option>
              <option value="XLM">XLM</option>
              <option value="NGN">NGN</option>
              <option value="KES">KES</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant/50 pointer-events-none" />
          </div>
        </div>

        {/* Campaign Type */}
        <div>
          <label className="text-[10px] font-semibold uppercase tracking-[0.05em] text-on-surface mb-2 block">
            Campaign Type
          </label>
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => onTypeChange(e.target.value)}
              className="bg-surface-container-high border border-outline-variant px-4 py-2.5 text-sm text-on-surface w-full appearance-none cursor-pointer"
            >
              <option value="">All Types</option>
              <option value="funded">Funded</option>
              <option value="high-priority">High Priority</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant/50 pointer-events-none" />
          </div>
        </div>

        {/* Min. Payout */}
        <div>
          <label className="text-[10px] font-semibold uppercase tracking-[0.05em] text-on-surface mb-2 block">
            Min. Payout
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              disabled
              title="Coming soon"
              className="flex-1 accent-[#c8f232]"
            />
            <span className="text-sm font-semibold text-on-surface w-12 text-right">
              $500
            </span>
          </div>
        </div>
      </div>

      {/* Quick Tags */}
      <div className="flex flex-wrap gap-3 mt-6 items-center">
        <span className="text-[10px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant mr-2">
          QUICK TAGS:
        </span>
        {quickTags.map((tag) => (
          <button
            key={tag}
            className="border border-outline-variant px-3 py-1.5 text-xs font-semibold text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-colors cursor-pointer"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
