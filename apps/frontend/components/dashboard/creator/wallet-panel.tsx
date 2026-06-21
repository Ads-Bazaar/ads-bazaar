import { Wallet } from "lucide-react";
import type { WalletBalance } from "./creator-payouts-data";

type WalletPanelProps = {
  wallet: {
    address: string;
    balances: WalletBalance[];
    connectedVia: string;
  };
};

export function WalletPanel({ wallet }: WalletPanelProps) {
  return (
    <article className="col-span-12 border border-[var(--dash-border)] bg-[var(--dash-surface)] p-6 lg:col-span-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center border border-[var(--dash-border)] bg-[var(--dash-bg)]">
          <Wallet className="size-5 text-[var(--dash-accent)]" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-base font-bold text-[var(--dash-heading)]">
            Connected Stellar Wallet
          </h2>
          <p className="text-xs text-[var(--dash-muted)]">
            {wallet.address} <span aria-hidden="true">•</span>{" "}
            <span className="text-[var(--dash-accent)]">
              Connected via {wallet.connectedVia}
            </span>
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {wallet.balances.map((balance) => (
          <div
            key={balance.label}
            className="border border-[var(--dash-border)] bg-[var(--dash-bg)] p-4"
          >
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)]">
              {balance.label}
            </p>
            <p className="font-[family-name:var(--font-sora)] text-[22px] font-semibold text-[var(--dash-heading)]">
              {balance.amount}
            </p>
            <p className="mt-1 text-xs text-[var(--dash-muted)]">
              {balance.asset}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
