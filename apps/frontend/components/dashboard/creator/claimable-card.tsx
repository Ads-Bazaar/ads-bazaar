"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Zap } from "lucide-react";

type ClaimStatus = "idle" | "loading" | "success";

export function ClaimableCard({ amount }: { amount: string }) {
  const [status, setStatus] = useState<ClaimStatus>("idle");

  const handleClaim = () => {
    if (status !== "idle") {
      return;
    }

    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <article className="col-span-12 flex flex-col justify-between border border-[var(--dash-accent)] bg-[var(--dash-surface)] p-6 sm:col-span-6 lg:col-span-4">
      <div>
        <div className="flex items-start justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)]">
            AVAILABLE TO CLAIM
          </span>
          <span className="rounded border border-[var(--dash-accent)] px-2 py-0.5 text-[10px] font-bold tracking-widest text-[var(--dash-accent)]">
            READY
          </span>
        </div>

        <p className="mt-4 font-[family-name:var(--font-sora)] text-[32px] font-semibold text-[var(--dash-heading)]">
          {amount}
        </p>
        <p className="mt-1 text-xs text-[var(--dash-muted)]">
          Secured in Stellar Vault
        </p>
      </div>

      <button
        type="button"
        onClick={handleClaim}
        disabled={status !== "idle"}
        aria-busy={status === "loading"}
        className={`mt-6 flex min-h-11 w-full items-center justify-center gap-2 font-bold transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dash-accent)] disabled:cursor-not-allowed ${
          status === "success"
            ? "bg-[var(--dash-border)] text-[var(--dash-accent)]"
            : "bg-[var(--dash-accent)] text-[var(--dash-on-accent)] hover:opacity-90 disabled:opacity-80"
        }`}
      >
        {status === "idle" ? (
          <>
            <Zap className="size-5" aria-hidden="true" />
            Claim Payout
          </>
        ) : status === "loading" ? (
          <>
            <Loader2
              className="size-5 animate-spin motion-reduce:animate-none"
              aria-hidden="true"
            />
            Processing...
          </>
        ) : (
          <>
            <CheckCircle2 className="size-5" aria-hidden="true" />
            Payout initiated
          </>
        )}
      </button>
    </article>
  );
}
