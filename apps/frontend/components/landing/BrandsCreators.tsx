"use client";

import { ArrowUpRight, FileText, Lock, ShieldCheck, Search, Zap, Wallet } from "lucide-react";
import { useOnboardingModal } from "@/components/onboarding/onboarding-modal-context";

const steps = [
  {
    side: "business",
    icon: FileText,
    title: "Define Brief",
    description: "Upload deliverables, timeline, and budget.",
  },
  {
    side: "creator",
    icon: Search,
    title: "Explore Gigs",
    description: "Filter campaigns by niche, rate, and platform.",
  },
  {
    side: "business",
    icon: Lock,
    title: "Fund Escrow",
    description: "Lock funds safely in a Soroban contract.",
  },
  {
    side: "creator",
    icon: Zap,
    title: "Execute Fast",
    description: "Submit content proof and trigger smart releases.",
  },
  {
    side: "business",
    icon: ShieldCheck,
    title: "Review & Approve",
    description: "Pay only once work is verified via social APIs.",
  },
  {
    side: "creator",
    icon: Wallet,
    title: "Instant Payout",
    description: "Receive XLM or stablecoins directly to your wallet.",
  },
] as const;

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[6px] h-[10px] -rotate-1 bg-primary-container/70"
      />
      <span className="relative">{children}</span>
    </span>
  );
}

export function BrandsCreators() {
  const { openOnboarding } = useOnboardingModal();

  return (
    <section className="py-16 md:py-[100px] px-6 bg-background">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2 className="font-sora font-[700] text-[32px] md:text-[40px] leading-[1.15] tracking-[-0.02em] text-on-surface max-w-[520px]">
            Built for <Highlight>brands</Highlight>. Built for{" "}
            <Highlight>creators</Highlight>.
          </h2>
          <p className="font-geist text-[15px] text-on-surface-variant max-w-[360px]">
            One marketplace, two sides of the same escrow-backed
            workflow — from campaign brief to instant payout.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isCreator = step.side === "creator";
            return (
              <button
                key={step.title}
                type="button"
                onClick={() => openOnboarding(step.side)}
                className={`group relative flex min-h-[240px] flex-col overflow-hidden rounded-[24px] p-6 md:p-8 text-left transition-all duration-200 ease-out hover:-translate-y-1.5 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  isCreator
                    ? "bg-primary-container text-on-primary focus-visible:outline-on-primary"
                    : "bg-surface-container text-on-surface border border-outline-variant focus-visible:outline-primary-container"
                }`}
              >
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.25}
                  className={`pointer-events-none absolute -right-6 -bottom-8 size-[168px] rotate-[-8deg] transition-transform duration-300 ease-out group-hover:rotate-0 group-hover:scale-105 ${
                    isCreator ? "text-on-primary/15" : "text-primary-container/10"
                  }`}
                />

                <div className="relative flex items-center justify-between mb-8">
                  <div
                    className={`flex size-11 items-center justify-center rounded-[10px] ${
                      isCreator ? "bg-on-primary/10" : "bg-surface-container-high"
                    }`}
                  >
                    <Icon
                      className={`size-5 ${isCreator ? "text-on-primary" : "text-primary-container"}`}
                    />
                  </div>
                  <span
                    className={`font-geist font-[600] text-[11px] uppercase tracking-[0.05em] ${
                      isCreator ? "text-on-primary/70" : "text-on-surface-variant"
                    }`}
                  >
                    {isCreator ? "For creators" : "For brands"} · {String((i >> 1) + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative flex-1">
                  <h3 className="font-sora font-[600] text-[20px] mb-2">
                    {step.title}
                  </h3>
                  <p
                    className={`font-geist text-[15px] leading-relaxed max-w-[85%] ${
                      isCreator ? "text-on-primary/80" : "text-on-surface-variant"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                <div className="relative mt-6 flex items-center gap-2">
                  <span
                    className={`flex size-8 items-center justify-center rounded-full transition-transform duration-200 ease-out group-hover:rotate-45 ${
                      isCreator ? "bg-on-primary text-primary-container" : "bg-primary-container text-on-primary"
                    }`}
                  >
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                  <span className="font-geist font-[600] text-[13px]">
                    Get started
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
