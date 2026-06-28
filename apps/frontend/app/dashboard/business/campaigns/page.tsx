import { DashboardHeader } from "@/components/dashboard/shared/dashboard-header";
import { CampaignsPageHeader } from "@/components/dashboard/business/campaigns-page-header";
import { CampaignsStatCards } from "@/components/dashboard/business/campaigns-stat-cards";
import { CampaignsFilterBar } from "@/components/dashboard/business/campaigns-filter-bar";
import { CampaignListCard } from "@/components/dashboard/business/campaign-list-card";
import { CampaignsLoadMore } from "@/components/dashboard/business/campaigns-load-more";
import { campaignsList } from "@/components/dashboard/business/campaigns-list-data";

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
