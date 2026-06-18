import type { SorobanContract } from '@/components/dashboard/business/payouts-data';
import { ExternalLink } from 'lucide-react';

interface ContractCardProps {
  contract: SorobanContract;
}

export function ContractCard({ contract }: ContractCardProps) {
  const statusStyles =
    contract.status === 'funded'
      ? 'border-[var(--dash-accent-strong)] text-[var(--dash-on-accent-strong)] bg-[var(--dash-accent-strong)]/10'
      : 'border-red-400 text-red-400';
  const statusLabel = contract.status === 'funded' ? 'FUNDED' : 'RELEASING';

  return (
    <div className="border border-[var(--dash-border)] bg-[var(--dash-surface)] p-5">
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="text-sm font-semibold text-[var(--dash-heading)]">{contract.name}</div>
          <div className="text-xs text-[var(--dash-muted)] font-mono mt-0.5">{contract.address}</div>
        </div>
        <span
          className={`inline-block rounded border px-2 py-0.5 text-[10px] font-bold tracking-widest ${statusStyles}`}
        >
          {statusLabel}
        </span>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-baseline gap-1">
          <span className="font-[family-name:var(--font-sora)] text-[22px] font-semibold text-[var(--dash-heading)]">
            {contract.amount}
          </span>
          <span className="text-xs font-bold text-[var(--dash-muted)]">{contract.currency}</span>
        </div>
        <button
          type="button"
          disabled
          title="Coming soon"
          className="flex items-center gap-2 text-[var(--dash-muted)] hover:text-[var(--dash-accent)]"
        >
          <ExternalLink className="size-4" />
        </button>
      </div>
    </div>
  );
}
