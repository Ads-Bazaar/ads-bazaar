import type { Metadata } from "next";
import { DashboardHeader } from "@/components/dashboard/shared/dashboard-header";
import { CampaignsPageHeader } from "@/components/dashboard/business/campaigns-page-header";
import { CampaignsStatCards } from "@/components/dashboard/business/campaigns-stat-cards";
import { CampaignsFilterBar } from "@/components/dashboard/business/campaigns-filter-bar";
import { CampaignListCard } from "@/components/dashboard/business/campaign-list-card";
import { CampaignsLoadMore } from "@/components/dashboard/business/campaigns-load-more";
import { campaignsList } from "@/components/dashboard/business/campaigns-list-data";

export const metadata: Metadata = {
  title: "Campaigns",
};

/**
 * Placeholder route. Full implementation tracked in
 * https://github.com/Ads-Bazaar/ads-bazaar/issues/49 — see that issue for the
 * file structure, components, design tokens, and acceptance criteria before
 * building this page out.
 */
export default function BusinessCampaignsPage() {
  return (
    <>
      <DashboardHeader eyebrow="Manage your briefs" title="Campaigns" />

      <CampaignsPageHeader />

      <CampaignsStatCards />

      <CampaignsFilterBar />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {campaignsList.map((campaign) => (
          <CampaignListCard key={campaign.id} campaign={campaign} />
        ))}
      </div>

      <CampaignsLoadMore />
    </>
  );
}
