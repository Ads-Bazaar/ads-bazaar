import Link from "next/link";
import { marketplaceCampaigns } from "./marketplace-data";
import { MarketplaceCampaignCard } from "./marketplace-campaign-card";

export function MarketplaceGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {marketplaceCampaigns.map((campaign) => (
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
