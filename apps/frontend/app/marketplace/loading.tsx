import { Loader2 } from "lucide-react";

export default function MarketplaceLoading() {
  return (
    <div className="bg-background text-on-surface min-h-screen max-w-[1280px] mx-auto px-6 lg:px-10 pt-32 pb-20 font-geist flex flex-col gap-10">
      {/* Hero Skeleton */}
      <div className="flex flex-col gap-4 max-w-2xl">
        <div className="h-4 w-32 bg-on-surface/10 rounded-md animate-pulse" />
        <div className="h-12 w-3/4 bg-on-surface/10 rounded-md animate-pulse" />
        <div className="h-6 w-full bg-on-surface/10 rounded-md animate-pulse" />
      </div>

      {/* Filter Bar Skeleton */}
      <div className="h-14 w-full bg-on-surface/5 border border-on-surface/10 rounded-lg animate-pulse" />

      {/* Grid of Card Skeletons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-on-surface/5 border border-on-surface/10 rounded-lg p-5 flex flex-col gap-4"
          >
            {/* Image Placeholder */}
            <div className="w-full h-48 bg-on-surface/10 rounded-md animate-pulse" />
            
            {/* Content lines */}
            <div className="h-4 w-1/4 bg-on-surface/10 rounded-md animate-pulse" />
            <div className="h-6 w-3/4 bg-on-surface/10 rounded-md animate-pulse" />
            
            <div className="space-y-2 mt-2">
              <div className="h-4 w-full bg-on-surface/10 rounded-md animate-pulse" />
              <div className="h-4 w-5/6 bg-on-surface/10 rounded-md animate-pulse" />
            </div>

            {/* Footer action placeholder */}
            <div className="h-10 w-full bg-on-surface/10 rounded-md animate-pulse mt-4" />
          </div>
        ))}
      </div>

      {/* Centered Loading Spinner */}
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="w-10 h-10 animate-spin text-primary-container mb-3" />
        <span className="text-on-surface-variant font-medium text-[15px]">
          Loading marketplace...
        </span>
      </div>
    </div>
  );
}
