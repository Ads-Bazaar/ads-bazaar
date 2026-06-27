import { Search } from "lucide-react";
import Link from "next/link";
import type { MarketplaceCampaign } from "./marketplace-data";
import { MarketplaceCampaignCard } from "./marketplace-campaign-card";

type MarketplaceGridProps = {
  campaigns: MarketplaceCampaign[];
};

export function MarketplaceGrid({ campaigns }: MarketplaceGridProps) {
  if (campaigns.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
        <Search
          className="size-10 text-on-surface-variant"
          aria-hidden="true"
        />
        <p className="text-sm font-semibold text-on-surface">
          No campaigns found
        </p>
        <p className="max-w-xs text-sm text-on-surface-variant">
          Try adjusting your search to find what you are looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {campaigns.map((campaign) => (
        <Link
          key={campaign.id}
          href={`/marketplace/${campaign.id}`}
          className="block"
        >
          <MarketplaceCampaignCard campaign={campaign} />
        </Link>
      ))}
    </div>
  );
}
