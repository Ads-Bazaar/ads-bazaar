import { DashboardHeader } from "@/components/dashboard/shared/dashboard-header";

interface PageParams {
  id: string;
}

// Next.js dynamic route params are asynchronously resolved in newer versions
export default async function CreatorCampaignDetailPage({ 
  params 
}: { 
  params: Promise<PageParams> 
}) {
  const { id } = await params;

  return (
    <>
      <DashboardHeader eyebrow="Campaign details" title={`Campaign ID: ${id}`} />
      <div className="flex flex-col items-center justify-center gap-2 border border-[var(--dash-border)] bg-[var(--dash-surface)] px-6 py-20 text-center">
        <p className="text-sm font-medium text-[var(--dash-heading)]">
          Creator campaign detail view coming soon.
        </p>
        <p className="text-xs text-[var(--dash-muted)] max-w-sm">
          This view will eventually include the campaign brief, application status, proof submission forms, and escrow payout tracking.
        </p>
      </div>
    </>
  );
}
