import { CheckCircle2, RefreshCw, Settings } from "lucide-react";

export function OffRampPanel({ features }: { features: string[] }) {
  return (
    <article className="col-span-12 flex flex-col gap-4 border border-[var(--dash-border)] bg-[var(--dash-surface)] p-6 lg:col-span-4">
      <div className="flex items-center gap-2">
        <RefreshCw className="size-5 text-[var(--dash-accent)]" aria-hidden="true" />
        <h2 className="text-base font-bold text-[var(--dash-heading)]">
          Local Off-Ramp
        </h2>
      </div>

      <p className="text-sm leading-relaxed text-[var(--dash-muted)]">
        Withdraw to your local bank account instantly using SEP-24 integrated
        anchors. Supports SEPA, Pix, and ACH transfers globally.
      </p>

      <ul className="flex flex-col gap-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <CheckCircle2
              className="size-4 shrink-0 text-[var(--dash-accent)]"
              aria-hidden="true"
            />
            <span className="text-sm text-[var(--dash-body)]">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        disabled
        title="Coming soon"
        className="mt-auto flex w-full items-center justify-center gap-2 border border-[var(--dash-border)] py-3 text-sm font-bold text-[var(--dash-heading)] hover:bg-[var(--dash-border)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dash-accent)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Settings className="size-4" aria-hidden="true" />
        Configure Withdrawal
      </button>
    </article>
  );
}
