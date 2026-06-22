"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { filterTabs } from "./campaigns-list-data";

export function CampaignsFilterBar() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
      {/* Tab filters */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Campaign status filters">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dash-accent)] ${
              activeTab === tab
                ? "rounded bg-[var(--dash-accent)] text-[var(--dash-on-accent)]"
                : "text-[var(--dash-muted)] hover:text-[var(--dash-heading)]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search + Sort */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search
            className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[var(--dash-muted)]"
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Filter by name..."
            disabled
            title="Coming soon"
            className="w-48 border border-[var(--dash-border)] bg-[var(--dash-surface)] py-2 pr-4 pl-9 text-sm text-[var(--dash-body)] placeholder:text-[var(--dash-muted)]/50 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dash-accent)]"
          />
        </div>
        <select
          disabled
          title="Coming soon"
          className="border border-[var(--dash-border)] bg-[var(--dash-surface)] px-4 py-2 text-sm text-[var(--dash-muted)] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dash-accent)]"
          aria-label="Sort campaigns"
        >
          <option>Sort By: Newest</option>
        </select>
      </div>
    </div>
  );
}
