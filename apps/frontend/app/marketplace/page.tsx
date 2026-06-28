"use client";

import { useMemo, useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { MarketplaceHero } from "@/components/marketplace/marketplace-hero";
import { MarketplaceFilters } from "@/components/marketplace/marketplace-filters";
import { MarketplaceGridHeader } from "@/components/marketplace/marketplace-grid-header";
import { MarketplaceGrid } from "@/components/marketplace/marketplace-grid";
import { MarketplacePagination } from "@/components/marketplace/marketplace-pagination";
import { MarketplaceNewsletter } from "@/components/marketplace/marketplace-newsletter";
import { marketplaceCampaigns } from "@/components/marketplace/marketplace-data";

const PAGE_SIZE = 6;

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedAsset, setSelectedAsset] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return marketplaceCampaigns.filter((c) => {
      const matchesSearch = query === "" || c.title.toLowerCase().includes(query);
      const matchesAsset = selectedAsset === "" || c.currency === selectedAsset;
      const matchesType = selectedType === "" || c.status === selectedType;
      return matchesSearch && matchesAsset && matchesType;
    });
  }, [search, selectedAsset, selectedType]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const paged = filtered.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  );

  function handleSearchChange(value: string) {
    setSearch(value);
    setPage(1);
  }

  function handleAssetChange(value: string) {
    setSelectedAsset(value);
    setPage(1);
  }

  function handleTypeChange(value: string) {
    setSelectedType(value);
    setPage(1);
  }

  return (
    <>
      <Navbar />
      <main className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-32 pb-20">
        <MarketplaceHero />
        <MarketplaceFilters
          searchValue={search}
          onSearchChange={handleSearchChange}
          selectedAsset={selectedAsset}
          onAssetChange={handleAssetChange}
          selectedType={selectedType}
          onTypeChange={handleTypeChange}
        />
        <MarketplaceGridHeader count={filtered.length} />
        <MarketplaceGrid campaigns={paged} />
        <MarketplacePagination
          currentPage={safePage}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </main>
      <MarketplaceNewsletter />
      <Footer />
    </>
  );
}
