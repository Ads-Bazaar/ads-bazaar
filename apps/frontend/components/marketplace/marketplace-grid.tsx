import Link from "next/link";
import type { MarketplaceCampaign } from "./marketplace-data";
import { MarketplaceCampaignCard } from "./marketplace-campaign-card";

type MarketplaceGridProps = {
  campaigns: MarketplaceCampaign[];
};

export function MarketplaceGrid({ campaigns }: MarketplaceGridProps) {
  if (campaigns.length === 0) {
    return (
      <div className="border border-outline-variant bg-surface-container py-16 text-center">
        <p className="text-on-surface-variant text-sm">
          No campaigns match your search. Try a different keyword.
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
