import { ShieldCheck } from 'lucide-react';

export function SorobanSecureCard() {
  return (
    <div className="border border-[var(--dash-border)] bg-[var(--dash-surface)] p-5">
      <div className="flex items-center gap-3 mb-3">
        <ShieldCheck className="size-6 text-[var(--dash-accent)]" />
        <h3 className="text-sm font-bold text-[var(--dash-heading)]">Stellar Soroban Secure</h3>
      </div>
      <p className="text-xs leading-relaxed text-[var(--dash-muted)]">
        Your funds are protected by multi‑signature escrow contracts. Releases are only executed upon campaign milestone verification.
      </p>
      <div className="flex items-center gap-2 mt-4 bg-[var(--dash-bg)] border border-[var(--dash-border)] px-3 py-2 font-mono text-xs text-[var(--dash-body)]">
        <span className="size-2 rounded-full bg-green-500" />
        Mainnet v20.1.0
      </div>
      <div className="mt-4 h-24 overflow-hidden border border-[var(--dash-border)] bg-[var(--dash-bg)]" />
      <a
        href="#"
        className="block mt-3 text-center text-xs font-bold text-[var(--dash-accent)] hover:underline cursor-not-allowed pointer-events-none"
        title="Coming soon"
        aria-disabled="true"
      >
        Network Explorer
      </a>
    </div>
  );
}
