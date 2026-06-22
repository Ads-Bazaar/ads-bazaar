"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log dashboard error
    console.error("Dashboard error caught:", error);
  }, [error]);

  return (
    <div className="creator-dashboard-theme flex items-center justify-center min-h-[60vh] p-6 font-geist">
      <div className="w-full max-w-md bg-[var(--dash-surface)] border border-[var(--dash-border)] rounded-xl p-8 text-center flex flex-col items-center shadow-lg">
        {/* Icon */}
        <div className="mb-6 p-4 rounded-full bg-[var(--dash-border)] border border-[var(--dash-border)]">
          <AlertTriangle className="w-10 h-10 text-[var(--dash-accent)] animate-pulse" />
        </div>

        {/* Heading */}
        <h2 className="font-sora font-bold text-2xl text-[var(--dash-heading)] tracking-tight mb-2">
          Something went wrong
        </h2>

        {/* Description */}
        <p className="text-[var(--dash-muted)] font-geist text-[15px] leading-relaxed mb-8 max-w-[340px]">
          An unexpected error occurred. Please try again.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <button
            type="button"
            onClick={() => reset()}
            className="bg-[var(--dash-accent)] text-[var(--dash-on-accent)] font-geist font-semibold text-[15px] h-[44px] px-6 rounded-[4px] inline-flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer w-full sm:w-auto"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="bg-transparent border border-[var(--dash-border)] text-[var(--dash-heading)] font-geist font-semibold text-[15px] h-[44px] px-6 rounded-[4px] inline-flex items-center justify-center hover:bg-white/5 transition-colors w-full sm:w-auto"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
