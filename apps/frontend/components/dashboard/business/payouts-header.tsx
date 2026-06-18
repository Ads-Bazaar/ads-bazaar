import { Plus } from "lucide-react";

export function PayoutsHeader() {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="font-[family-name:var(--font-sora)] text-[28px] font-semibold text-[var(--dash-heading)]">
          Payouts &amp; Escrow
        </h1>
        <p className="text-sm text-[var(--dash-muted)] mt-1 max-w-lg">
          Monitor your campaign smart contracts, manage escrowed capital, and view cross-asset transaction logs on the Stellar network.
        </p>
      </div>
      <button
        disabled
        title="Coming soon"
        className="flex items-center gap-2 bg-[var(--dash-accent)] px-5 py-3 font-bold text-[var(--dash-on-accent)] hover:opacity-90 transition-opacity"
      >
        <Plus size={16} />
        Add Funds
      </button>
    </div>
  );
}
