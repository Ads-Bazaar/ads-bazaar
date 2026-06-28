import { Zap } from "lucide-react";

export function ClaimableCard({ amount }: { amount: string }) {

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
        disabled
        title="Coming soon — Soroban contract integration required"
        className="mt-6 flex min-h-11 w-full items-center justify-center gap-2 rounded bg-[var(--dash-accent)] py-3 font-bold text-[var(--dash-on-accent)] transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dash-accent)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Zap className="size-5" aria-hidden="true" />
        Claim Payout
      </button>
    </article>
  );
}
