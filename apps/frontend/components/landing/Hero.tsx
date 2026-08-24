"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Crown, Zap, Mail } from "lucide-react";
import { useWallet } from "@/components/wallet/wallet-context";
import { WalletErrorMessage } from "@/components/wallet/wallet-error-message";
import { useOnboardingModal } from "@/components/onboarding/onboarding-modal-context";

function Sparkline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 18C10 18 10 8 18 8C26 8 26 16 34 16C42 16 42 4 50 4C58 4 58 14 66 14C72 14 74 10 78 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Hero() {
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

  const needsWallet = pendingIntent && !wallet;

  return (
    <section className="relative overflow-x-clip min-h-screen flex items-center pt-32 pb-0 px-6 lg:pt-40 lg:pr-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-120px] right-[-120px] size-[420px] rounded-full bg-primary-container/10 blur-3xl"
      />

      {/* Right-edge social rail */}
      <div
        aria-hidden="false"
        className="hidden xl:flex flex-col items-center gap-5 absolute right-6 top-1/2 -translate-y-1/2 z-20"
      >
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label="AdsBazaar on Instagram"
          className="rounded-[8px] overflow-hidden transition-transform duration-150 ease-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container"
        >
          <Image src="/icons/instagram.svg" alt="" width={28} height={28} aria-hidden="true" />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noreferrer"
          aria-label="AdsBazaar on TikTok"
          className="rounded-[8px] overflow-hidden transition-transform duration-150 ease-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container"
        >
          <Image src="/icons/tiktok.svg" alt="" width={28} height={28} aria-hidden="true" />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          aria-label="AdsBazaar on YouTube"
          className="rounded-[8px] overflow-hidden transition-transform duration-150 ease-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container"
        >
          <Image src="/icons/youtube.svg" alt="" width={28} height={28} aria-hidden="true" />
        </a>
        <a
          href="mailto:hello@adsbazaar.xyz"
          aria-label="Email AdsBazaar"
          className="flex size-7 items-center justify-center text-on-surface-variant transition-colors hover:text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container rounded-[4px]"
        >
          <Mail className="size-5" aria-hidden="true" />
        </a>

        <div className="h-14 w-px bg-outline-variant" aria-hidden="true" />

        <span
          className="font-geist font-[600] text-[11px] uppercase tracking-[0.15em] text-on-surface-variant"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Trusted on Stellar
        </span>

        <Zap
          className="animate-float-y size-4 text-primary-container"
          style={{ animationDelay: "0.8s" }}
          aria-hidden="true"
        />
      </div>

      <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col items-start text-left">
          <div className="relative animate-enter-down mb-8">
            <svg
              viewBox="0 0 240 62"
              fill="none"
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-4 -inset-y-2.5 h-[calc(100%+20px)] w-[calc(100%+32px)] text-primary-container/60"
              style={{ transform: "rotate(-2deg)" }}
              preserveAspectRatio="none"
            >
              <path
                d="M12 31C12 14 52 5 120 5C188 5 228 14 228 31C228 48 188 57 120 57C52 57 12 48 12 31Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <span className="relative inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-geist font-[600] text-[12px] uppercase tracking-[0.05em] text-on-surface-variant">
              <Sparkles className="size-3.5 text-primary-container" aria-hidden="true" />
              Decentralized advertising on Stellar
            </span>
          </div>

          <h1 className="animate-enter-left font-sora font-[800] text-[44px] md:text-[68px] leading-[1.05] tracking-[-0.04em] text-on-surface max-w-[580px] mb-6">
            The trust layer for{" "}
            global creator{" "}
            <span className="relative inline-block text-primary-container">
              <Crown
                className="absolute -top-3 -right-11 size-8 text-primary-container rotate-[18deg]"
                aria-hidden="true"
              />
              campaigns.
              <svg
                viewBox="0 0 220 16"
                fill="none"
                aria-hidden="true"
                className="absolute left-0 -bottom-2 w-full text-primary-container"
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
          </h1>

          <div className="flex items-start gap-3 mb-10 max-w-[480px]">
            <svg
              viewBox="0 0 28 96"
              fill="none"
              aria-hidden="true"
              className="hidden sm:block shrink-0 w-6 h-20 text-on-surface-variant/70 mt-1"
            >
              <path
                d="M14 4C4 16 24 28 14 40C4 52 24 64 14 76"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M6 70L14 84L22 70"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p
              className="animate-enter-left font-geist text-[16px] md:text-[18px] leading-relaxed text-on-surface-variant"
              style={{ animationDelay: "80ms" }}
            >
              Escrow-backed campaigns, instant creator payouts, and verifiable
              results — all settled on-chain, with no middleman.
            </p>
          </div>

          <div
            className="animate-enter-left flex flex-col items-center gap-4 w-full sm:w-auto"
            style={{ animationDelay: "160ms" }}
          >
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
                    className="bg-primary-container text-on-primary font-geist font-semibold text-[16px] h-[48px] px-8 rounded-full inline-flex items-center justify-center transition-[opacity,transform] duration-150 ease-out hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container"
                  >
                    {isConnecting ? "Connecting..." : "Connect wallet"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPendingIntent(null)}
                    className="bg-transparent border border-on-surface text-on-surface font-geist font-semibold text-[16px] h-[48px] px-8 rounded-full inline-flex items-center justify-center transition-colors hover:bg-surface-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-surface"
                  >
                    Cancel
                  </button>
                </div>
                {error && <WalletErrorMessage error={error} />}
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => handleStart("business")}
                  className="group bg-primary-container text-on-primary font-geist font-semibold text-[16px] h-[48px] px-8 rounded-full w-full sm:w-auto inline-flex items-center justify-center gap-2 transition-[opacity,transform] duration-150 ease-out hover:opacity-90 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container"
                >
                  Start a campaign
                  <span aria-hidden="true" className="transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => handleStart("creator")}
                  className="bg-transparent border border-on-surface text-on-surface font-geist font-semibold text-[16px] h-[48px] px-8 rounded-full w-full sm:w-auto inline-flex items-center justify-center transition-[colors,transform] duration-150 ease-out hover:bg-surface-container hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-surface"
                >
                  Find campaigns
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="animate-enter-right relative mx-auto w-full max-w-[380px] lg:max-w-none lg:h-[78vh] lg:min-h-[560px] lg:max-h-[880px]">
          <div className="relative aspect-[848/1237] w-full lg:h-full lg:w-auto lg:mx-auto">
            <div
              aria-hidden="true"
              className="absolute -inset-6 lg:-inset-10 rounded-[45%_55%_60%_40%/45%_40%_60%_55%] bg-[var(--mint)]/40"
            />
            <Image
              src="/hoodie_transparent.png"
              alt="Creator wearing an AdsBazaar branded hoodie"
              fill
              priority
              sizes="(min-width: 1024px) 520px, 80vw"
              className="relative object-contain object-bottom drop-shadow-[0_35px_50px_rgba(0,0,0,0.55)]"
            />

            <div
              className="animate-float-y absolute top-[8%] -right-2 sm:-right-6 lg:-right-16 w-[150px] sm:w-[220px] rounded-xl sm:rounded-2xl bg-[var(--paper)] px-3 py-2.5 sm:px-4 sm:py-3 shadow-2xl"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="font-geist font-[600] text-[10px] sm:text-[12px] text-[var(--muted-dark)]">
                Escrow secured
              </span>
              <div className="flex items-center gap-1.5 sm:gap-2 mt-1">
                <span className="font-sora font-bold text-[16px] sm:text-[22px] text-[var(--ink)]">$2.4M</span>
                <span className="flex size-5 sm:size-6 items-center justify-center rounded-full bg-primary-container">
                  <Sparkles className="size-3 sm:size-3.5 text-on-primary" aria-hidden="true" />
                </span>
              </div>
              <span className="block mt-1 text-[9px] sm:text-[11px] font-geist text-[var(--muted-dark)]">
                +18% vs last month
              </span>
              <Sparkline className="mt-1 w-full h-4 sm:h-6 text-[var(--mint)]" />
            </div>

            <div
              className="animate-float-y absolute bottom-[10%] -left-2 sm:-left-6 lg:-left-16 w-[150px] sm:w-[220px] rounded-xl sm:rounded-2xl bg-[var(--paper)] px-3 py-2.5 sm:px-4 sm:py-3 shadow-2xl"
              style={{ animationDelay: "1.6s" }}
            >
              <span className="font-geist font-[600] text-[10px] sm:text-[12px] text-[var(--muted-dark)]">
                Creators onboarded
              </span>
              <div className="flex items-center gap-1.5 sm:gap-2 mt-1">
                <span className="font-sora font-bold text-[16px] sm:text-[22px] text-[var(--ink)]">12.8k</span>
                <span className="flex size-5 sm:size-6 items-center justify-center rounded-full bg-primary-container">
                  <Crown className="size-3 sm:size-3.5 text-on-primary" aria-hidden="true" />
                </span>
              </div>
              <span className="block mt-1 text-[9px] sm:text-[11px] font-geist text-[var(--muted-dark)]">
                +9% vs last month
              </span>
              <Sparkline className="mt-1 w-full h-4 sm:h-6 text-[var(--mint)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
