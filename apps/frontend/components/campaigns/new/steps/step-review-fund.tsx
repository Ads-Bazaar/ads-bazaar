"use client";

import { Globe, Users, LayoutGrid, CheckCircle2 } from "lucide-react";
import { useWallet } from "@/components/wallet/wallet-context";

interface WizardState {
  brief: {
    title: string;
    description: string;
    imageUrl: string | null;
    platforms: string[];
    startDate: string;
    endDate: string;
    campaignType: string;
  };
  targeting: {
    categories: string[];
    minAudienceSize: string;
    regions: string[];
    requirements: string;
  };
  budget: {
    asset: string;
    totalBudget: number;
    creatorSlots: number;
  };
  proof: {
    contentFormats: string[];
    deliverables: string;
    submissionDeadline: string;
    verificationType: string;
    linkSocialPost: boolean;
    viewCountThreshold: boolean;
  };
}

interface StepReviewFundProps {
  data: WizardState;
  onGoToStep: (step: number) => void;
}

export function StepReviewFund({ data, onGoToStep }: StepReviewFundProps) {
  const { wallet } = useWallet();
  const { brief, targeting, budget, proof } = data;

  const walletDisplay = wallet
    ? `${wallet.address.slice(0, 4)}...${wallet.address.slice(-4)}`
    : "No wallet connected";

  const creatorPool = budget.totalBudget;
  const platformFee = budget.totalBudget * 0.005;
  const networkGas = 0.0001;
  const total = creatorPool + platformFee + networkGas;

  const usdRates: Record<string, number> = {
    USDC: 1,
    XLM: 0.12,
    EURC: 1.08,
    NGN: 0.00065,
    KES: 0.0077,
  };
  const usdEquiv = (total * (usdRates[budget.asset] ?? 1)).toFixed(2);

  return (
    <div className="flex flex-col gap-4">
      {/* Campaign Brief Summary */}
      <div className="rounded-2xl border border-[var(--dash-border)] bg-white p-6 text-[var(--dash-bg)]">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wide text-[var(--dash-muted)]">
            Campaign Brief
          </span>
          <button
            type="button"
            onClick={() => onGoToStep(1)}
            className="text-[12px] font-semibold text-[#4a6500] underline hover:no-underline"
          >
            EDIT
          </button>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-black text-[var(--dash-bg)] leading-tight">
              {brief.title || (
                <span className="text-[var(--dash-muted)]">
                  Untitled campaign
                </span>
              )}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--dash-muted)]">
              {brief.description || (
                <span className="italic text-[var(--dash-muted)]">
                  No description provided.
                </span>
              )}
            </p>
            {brief.platforms.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {brief.platforms.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-[var(--dash-border)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--dash-muted)]"
                  >
                    {p}
                  </span>
                ))}
              </div>
            )}
            {(brief.startDate || brief.endDate) && (
              <p className="mt-2 text-[12px] text-[var(--dash-muted)]">
                {brief.startDate} → {brief.endDate}
              </p>
            )}
          </div>
          {brief.imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={brief.imageUrl}
              alt="Campaign cover"
              className="h-[120px] w-[120px] shrink-0 rounded-lg object-cover"
            />
          )}
        </div>
      </div>

      {/* Targeting Summary */}
      <div className="rounded-2xl border border-[var(--dash-border)] bg-white p-6 text-[var(--dash-bg)]">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wide text-[var(--dash-muted)]">
            Targeting
          </span>
          <button
            type="button"
            onClick={() => onGoToStep(2)}
            className="text-[12px] font-semibold text-[#4a6500] underline hover:no-underline"
          >
            EDIT
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <Globe
              size={15}
              className="mt-0.5 shrink-0 text-[var(--dash-muted)]"
            />
            <span className="text-sm text-[var(--dash-bg)]">
              {targeting.regions.length > 0 ? (
                targeting.regions.join(", ")
              ) : (
                <span className="text-[var(--dash-muted)]">
                  No regions selected
                </span>
              )}
            </span>
          </div>
          <div className="flex items-start gap-3">
            <Users
              size={15}
              className="mt-0.5 shrink-0 text-[var(--dash-muted)]"
            />
            <span className="text-sm text-[var(--dash-bg)]">
              {targeting.categories.length > 0 ? (
                targeting.categories.join(", ")
              ) : (
                <span className="text-[var(--dash-muted)]">
                  No categories selected
                </span>
              )}
            </span>
          </div>
          <div className="flex items-start gap-3">
            <LayoutGrid
              size={15}
              className="mt-0.5 shrink-0 text-[var(--dash-muted)]"
            />
            <span className="text-sm text-[var(--dash-bg)]">
              {brief.platforms.length > 0 ? (
                brief.platforms.join(", ")
              ) : (
                <span className="text-[var(--dash-muted)]">
                  No platforms selected
                </span>
              )}
            </span>
          </div>
        </div>
      </div>

      {/* Proof of Work Summary */}
      <div className="rounded-2xl border border-[var(--dash-border)] bg-white p-6 text-[var(--dash-bg)]">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wide text-[var(--dash-muted)]">
            Proof of Work
          </span>
          <button
            type="button"
            onClick={() => onGoToStep(4)}
            className="text-[12px] font-semibold text-[#4a6500] underline hover:no-underline"
          >
            EDIT
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {proof.linkSocialPost && (
            <div className="flex items-start gap-3">
              <CheckCircle2
                size={15}
                className="mt-0.5 shrink-0 text-[#6d8d12]"
              />
              <div>
                <p className="text-sm font-semibold text-[var(--dash-bg)]">
                  Live Link Verification
                </p>
                <p className="text-[12px] text-[var(--dash-muted)]">
                  API-checked URL accessibility
                </p>
              </div>
            </div>
          )}
          {proof.viewCountThreshold && (
            <div className="flex items-start gap-3">
              <CheckCircle2
                size={15}
                className="mt-0.5 shrink-0 text-[#6d8d12]"
              />
              <div>
                <p className="text-sm font-semibold text-[var(--dash-bg)]">
                  Min. Engagement
                </p>
                <p className="text-[12px] text-[var(--dash-muted)]">
                  2.5% ER required for payout
                </p>
              </div>
            </div>
          )}
          {!proof.linkSocialPost && !proof.viewCountThreshold && (
            <p className="text-sm text-[var(--dash-muted)] italic">
              No verification methods selected.
            </p>
          )}
          {proof.contentFormats.length > 0 && (
            <p className="text-[12px] text-[var(--dash-muted)]">
              Formats: {proof.contentFormats.join(", ")}
            </p>
          )}
        </div>
      </div>

      {/* Financial Summary */}
      <div
        className="rounded-2xl border border-[var(--dash-border)] p-6"
        style={{ backgroundColor: "#2a2a2a" }}
      >
        <div className="mb-5 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wide text-[var(--dash-muted)]">
            Financial Summary
          </span>
          <span
            className="flex items-center gap-1.5 rounded px-2 py-1 text-[11px] text-[var(--dash-muted)]"
            style={{ border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            Wallet Connected
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[var(--dash-muted)]">
              Creator Pool
            </span>
            <span className="text-sm font-semibold text-[var(--dash-heading)]">
              {creatorPool.toLocaleString()} {budget.asset}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[var(--dash-muted)]">
              Platform Fee (0.5%)
            </span>
            <span className="text-sm font-semibold text-[var(--dash-heading)]">
              {platformFee.toFixed(4)} {budget.asset}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[var(--dash-muted)]">
              Network Gas (Est.)
            </span>
            <span className="text-sm font-semibold text-[var(--dash-heading)]">
              {networkGas} {budget.asset}
            </span>
          </div>
        </div>

        <div className="my-4 border-t border-[var(--dash-border)]" />

        <div className="text-right">
          <p className="text-[11px] font-bold uppercase tracking-wide text-[var(--dash-muted)]">
            Total to Lock in Escrow
          </p>
          <p className="mt-1 text-[40px] font-black leading-none text-[#c8f232]">
            {total.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 4,
            })}
            <span className="ml-2 text-xl font-semibold text-[var(--dash-muted)]">
              {budget.asset}
            </span>
          </p>
          <p className="mt-1 text-sm text-[var(--dash-muted)]">
            ≈ ${usdEquiv} USD
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[rgba(255,255,255,0.08)] pt-4">
          <span className="font-mono text-[13px] text-[rgba(255,255,255,0.35)]">{walletDisplay}</span>
          <span className="text-[12px] text-[rgba(255,255,255,0.35)]">Stellar Mainnet</span>
        </div>
      </div>
    </div>
  );
}
