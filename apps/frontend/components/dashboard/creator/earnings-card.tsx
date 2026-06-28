import { Wallet, Zap } from "lucide-react";

export function EarningsCard({
  usdApprox,
  xlm,
}: {
  usdApprox: string;
  xlm: string;
}) {

  return (
    <article className="col-span-12 flex flex-col justify-between border border-[var(--dash-border)] bg-[var(--dash-surface)] p-6 lg:col-span-4">
      <div>
        <div className="mb-4 flex items-start justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)]">
            Earnings Available
          </span>
          <Wallet className="size-5 text-[var(--dash-accent)]" aria-hidden="true" />
        </div>
        <p className="font-[family-name:var(--font-sora)] text-[40px] font-semibold leading-none text-[var(--dash-heading)]">
          {xlm} XLM
        </p>
        <p className="mt-2 text-sm text-[var(--dash-muted)]">
          ≈ ${usdApprox} USD
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
