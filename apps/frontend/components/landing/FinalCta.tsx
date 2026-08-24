"use client";

import { useState } from "react";
import { useWallet } from "@/components/wallet/wallet-context";
import { WalletErrorMessage } from "@/components/wallet/wallet-error-message";
import { useOnboardingModal } from "@/components/onboarding/onboarding-modal-context";

const stats = [
  { label: "Escrow secured", value: "$2.4M" },
  { label: "Creators onboarded", value: "12.8k" },
  { label: "Settlement time", value: "<5s" },
];

export function FinalCta() {
  const { wallet, connect, isConnecting, error } = useWallet();
  const { openOnboarding } = useOnboardingModal();
  const [pendingIntent, setPendingIntent] = useState<"business" | "creator" | null>(null);

  const handleStart = (intent: "business" | "creator") => {
    if (wallet) {
      openOnboarding(intent);
      return;
    }
    setPendingIntent(intent);
  };

  const handleConnect = async () => {
    const result = await connect();
    if (result && pendingIntent) {
      const intent = pendingIntent;
      setPendingIntent(null);
      openOnboarding(intent);
    }
  };

  const needsWallet = pendingIntent !== null;

  return (
    <section className="relative overflow-hidden py-20 md:py-[120px] px-6 bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-container/10 blur-3xl"
      />

      <div className="relative max-w-[720px] mx-auto text-center">
        <h2 className="font-sora font-[800] text-[36px] md:text-[52px] leading-[1.1] tracking-[-0.02em] text-on-surface mb-6">
          Ready to scale your{" "}
          <span className="relative inline-block">
            influence
            <svg
              viewBox="0 0 220 16"
              fill="none"
              aria-hidden="true"
              className="absolute left-0 -bottom-1 w-full text-primary-container"
              preserveAspectRatio="none"
            >
              <path
                d="M2 12C24 3 46 3 68 9C90 15 112 15 134 8C156 1 178 1 200 8C208 11 214 10 218 6"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
          ?
        </h2>
        <p className="font-geist text-[16px] md:text-[18px] text-on-surface-variant mb-10 max-w-[520px] mx-auto">
          Join the marketplace where trust is decentralized and growth is
          global — whichever side of the deal you're on.
        </p>

        {needsWallet ? (
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-on-surface-variant font-geist">
              Connect your Stellar wallet to continue
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleConnect}
                disabled={isConnecting}
                className="bg-primary-container text-on-primary font-geist font-semibold text-[16px] h-[56px] px-10 rounded-full inline-flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {isConnecting ? "Connecting..." : "Connect wallet"}
              </button>
              <button
                type="button"
                onClick={() => setPendingIntent(null)}
                className="bg-transparent border border-on-surface text-on-surface font-geist font-semibold text-[16px] h-[56px] px-10 rounded-full inline-flex items-center justify-center hover:bg-surface-container transition-colors"
              >
                Cancel
              </button>
            </div>
            {error && <WalletErrorMessage error={error} />}
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => handleStart("business")}
              className="bg-primary-container text-on-primary font-geist font-semibold text-[16px] h-[56px] px-10 rounded-full inline-flex items-center justify-center transition-[opacity,transform] duration-150 ease-out hover:opacity-90 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container"
            >
              Launch a Campaign
            </button>
            <button
              type="button"
              onClick={() => handleStart("creator")}
              className="bg-transparent border border-on-surface text-on-surface font-geist font-semibold text-[16px] h-[56px] px-10 rounded-full inline-flex items-center justify-center transition-[colors,transform] duration-150 ease-out hover:bg-surface-container hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-surface"
            >
              Find Campaigns
            </button>
          </div>
        )}

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <span className="font-sora font-bold text-[20px] text-on-surface">
                {stat.value}
              </span>
              <span className="font-geist text-[12px] uppercase tracking-[0.05em] text-on-surface-variant">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
