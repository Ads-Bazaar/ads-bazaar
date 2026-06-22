import { Loader2 } from "lucide-react";

export default function DashboardLoading() {
  return (
    <div className="creator-dashboard-theme min-h-[70vh] p-6 font-geist flex flex-col gap-8">
      {/* Header Skeleton */}
      <div className="flex flex-col gap-3">
        <div className="h-8 w-48 bg-[var(--dash-border)] rounded-md animate-pulse" />
        <div className="h-4 w-72 bg-[var(--dash-border)] rounded-md animate-pulse" />
      </div>

      {/* Main Skeleton Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-[var(--dash-surface)] border border-[var(--dash-border)] rounded-lg p-6 flex flex-col gap-4"
          >
            <div className="h-5 w-1/3 bg-[var(--dash-border)] rounded-md animate-pulse" />
            <div className="h-8 w-2/3 bg-[var(--dash-border)] rounded-md animate-pulse" />
            <div className="space-y-2 mt-2">
              <div className="h-3.5 w-full bg-[var(--dash-border)] rounded-md animate-pulse" />
              <div className="h-3.5 w-5/6 bg-[var(--dash-border)] rounded-md animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      {/* Centered Spinner */}
      <div className="flex-1 flex flex-col items-center justify-center py-16">
        <Loader2 className="w-10 h-10 animate-spin text-[var(--dash-accent)] mb-3" />
        <span className="text-[var(--dash-muted)] font-geist font-medium text-[15px]">
          Loading...
        </span>
      </div>
    </div>
  );
}
