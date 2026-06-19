"use client";

import { Briefcase, FileText, type LucideIcon } from "lucide-react";
import type { MarketplaceCampaign } from "./marketplace-data";

// Map string iconId to corresponding LucideIcon
const iconMap: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  "file-text": FileText,
};

type MarketplaceCampaignCardProps = {
  campaign: MarketplaceCampaign;
};

export function MarketplaceCampaignCard({ campaign }: MarketplaceCampaignCardProps) {
  // Determine card border color based on priority
  const borderClass =
    campaign.status === "high-priority"
      ? "border-primary-container/30"
      : "border-outline-variant";

  // Resolve campaign icon (default to Briefcase)
  const Icon = (campaign.iconId && iconMap[campaign.iconId]) || Briefcase;

  // Format Ref ID if present
  const displayRefId = campaign.refId
    ? campaign.refId.startsWith("ID:")
      ? campaign.refId
      : `ID: ${campaign.refId}`
    : null;

  // Applicant avatars calculation
  const maxVisibleAvatars = 2;
  const totalAvatars = campaign.applicantAvatars.length;
  const visibleAvatars = campaign.applicantAvatars.slice(0, maxVisibleAvatars);
  const overflowCount = totalAvatars - maxVisibleAvatars;

  return (
    <article
      className={`border ${borderClass} bg-surface-container p-5 flex flex-col transition-colors hover:border-primary-container/40`}
    >
      {/* Header Row */}
      <div className="flex items-start justify-between mb-4">
        {/* Left - Icon placeholder */}
        <div className="size-10 border border-outline-variant bg-surface-container-high flex items-center justify-center">
          <Icon className="size-5 text-on-surface-variant" aria-hidden="true" />
        </div>

        {/* Right - Status Area */}
        <div className="flex flex-col items-end gap-1">
          {/* Status Badge */}
          {campaign.status === "funded" ? (
            <span className="rounded border border-primary-container text-primary-container px-2 py-0.5 text-[10px] font-bold tracking-widest">
              FUNDED
            </span>
          ) : campaign.status === "high-priority" ? (
            <span className="rounded bg-primary-container text-on-primary px-2 py-0.5 text-[10px] font-bold tracking-widest">
              HIGH PRIORITY
            </span>
          ) : null}

          {/* Ref ID */}
          {displayRefId && (
            <span className="text-[10px] text-on-surface-variant font-mono">
              {displayRefId}
            </span>
          )}
        </div>
      </div>

      {/* Campaign Title */}
      <h3 className="font-sora text-sm font-semibold text-on-surface mt-1 truncate">
        {campaign.title}
      </h3>

      {/* Description */}
      <p className="text-xs leading-relaxed text-on-surface-variant mt-2 line-clamp-3">
        {campaign.description}
      </p>

      {/* Payout & Deadline Row */}
      <div className="flex items-end justify-between mt-auto pt-4">
        {/* Left - Payout */}
        <div>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant">
            PAYOUT
          </span>
          <div className="mt-0.5 flex items-baseline">
            <span className="font-sora text-lg font-bold text-on-surface">
              {campaign.payoutAmount}
            </span>
            <span className="text-xs font-bold text-on-surface-variant ml-1">
              {campaign.payoutCurrency}
            </span>
          </div>
        </div>

        {/* Right - Deadline */}
        <div>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant text-right">
            DEADLINE
          </span>
          <span className="block mt-0.5 text-sm font-semibold text-on-surface italic">
            {campaign.deadline}
          </span>
        </div>
      </div>

      {/* Footer Row */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-outline-variant">
        {/* Left - Applicant Avatars */}
        <div className="flex -space-x-1.5">
          {visibleAvatars.map((avatar, idx) => (
            <div
              key={idx}
              className="size-6 rounded-full bg-surface-container-high border-2 border-surface-container overflow-hidden flex items-center justify-center shrink-0"
            >
              {avatar.startsWith("/") || avatar.startsWith("http") ? (
                <img
                  src={avatar}
                  alt={`Applicant ${idx + 1}`}
                  className="size-full object-cover"
                  onError={(e) => {
                    // Hide individual image if it fails to load
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : null}
            </div>
          ))}
          {totalAvatars > maxVisibleAvatars && (
            <div className="size-6 rounded-full bg-surface-container-high border-2 border-surface-container flex items-center justify-center text-[8px] font-bold text-on-surface-variant shrink-0">
              +{overflowCount}
            </div>
          )}
        </div>

        {/* Right - CTA Button */}
        {campaign.hasApplyNow ? (
          <button
            type="button"
            disabled
            title="Coming soon"
            className="bg-primary-container text-on-primary px-4 py-2 text-xs font-bold hover:opacity-90 transition-opacity rounded cursor-not-allowed"
          >
            APPLY NOW
          </button>
        ) : (
          <button
            type="button"
            disabled
            title="Coming soon"
            className="border border-outline-variant px-4 py-2 text-xs font-bold text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-colors rounded cursor-not-allowed"
          >
            VIEW BRIEF
          </button>
        )}
      </div>
    </article>
  );
}
