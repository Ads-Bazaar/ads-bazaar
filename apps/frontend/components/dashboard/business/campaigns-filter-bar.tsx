"use client";

import { ChevronDown, Search, X } from "lucide-react";
import { useState } from "react";
import { filterTabs } from "./campaigns-list-data";

const tabStatusMap: Record<string, "all" | "active" | "scheduled" | "draft" | "completed"> = {
  All: "all",
  Active: "active",
  Scheduled: "scheduled",
  Drafts: "draft",
  Completed: "completed",
};

export function CampaignsFilterBar() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap gap-2">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`rounded px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dash-accent)] ${
              activeTab === tab
                ? "bg-[var(--dash-accent)] text-[var(--dash-on-accent)]"
                : "text-[var(--dash-muted)] hover:text-[var(--dash-heading)]"
            }`}
            aria-pressed={activeTab === tab}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute top-2.5 left-3 size-4 text-[var(--dash-muted)]" aria-hidden="true" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter by name..."
            disabled
            title="Coming soon"
            className="w-48 rounded-none border border-[var(--dash-border)] bg-[var(--dash-surface)] py-2 pl-10 pr-8 text-sm text-[var(--dash-body)] placeholder:text-[var(--dash-muted)]/50 disabled:cursor-not-allowed disabled:opacity-60"
            aria-label="Search campaigns (coming soon)"
          />
          {search ? (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute top-2 right-2 text-[var(--dash-muted)] hover:text-[var(--dash-heading)]"
              aria-label="Clear search"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          ) : null}
        </div>

        <button
          type="button"
          disabled
          title="Coming soon"
          className="flex items-center gap-1.5 rounded-none border border-[var(--dash-border)] bg-[var(--dash-surface)] px-4 py-2 text-sm text-[var(--dash-muted)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          Sort By: Newest
          <ChevronDown className="size-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}