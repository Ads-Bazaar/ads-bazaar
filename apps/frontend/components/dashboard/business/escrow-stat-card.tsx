import type { EscrowStat } from '@/components/dashboard/business/payouts-data';
import { TrendingUp } from 'lucide-react';

interface EscrowStatCardProps {
  stat: EscrowStat;
}

export function EscrowStatCard({ stat }: EscrowStatCardProps) {
  return (
    <div className="border border-[var(--dash-border)] bg-[var(--dash-surface)] p-5">
      <div className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)] mb-3">
        {stat.label}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="font-[family-name:var(--font-sora)] text-[32px] font-semibold text-[var(--dash-heading)]">
          {stat.value}
        </span>
        <span className="text-sm font-bold text-[var(--dash-muted)]">{stat.unit}</span>
      </div>
      {stat.sub && (
        <div className={`text-xs mt-2 ${stat.isPositive ? 'flex items-center gap-1 text-[var(--dash-accent-strong)]' : 'text-[var(--dash-muted)]'} `}>
          {stat.isPositive && <TrendingUp className="size-3" />}
          {stat.sub}
        </div>
      )}
    </div>
  );
}
