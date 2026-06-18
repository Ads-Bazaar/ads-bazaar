import type { WalletAsset } from '@/components/dashboard/business/payouts-data';
import { ArrowLeftRight, CircleDollarSign, Star, Euro } from 'lucide-react';

interface WalletAssetsPanelProps {
  assets: WalletAsset[];
}

export function WalletAssetsPanel({ assets }: WalletAssetsPanelProps) {
  const getIcon = (iconId: string) => {
    switch (iconId) {
      case 'usdc':
        return <CircleDollarSign className="text-blue-400" size={20} />;
      case 'xlm':
        return <Star className="text-yellow-400" size={20} />;
      case 'eurc':
        return <Euro className="text-orange-400" size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className="border border-[var(--dash-border)] bg-[var(--dash-surface)] p-5">
      <div className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)] mb-4">
        BUSINESS WALLET ASSETS
      </div>
      <div className="flex flex-col divide-y divide-[var(--dash-border)]">
        {assets.map((asset) => (
          <div key={asset.id} className="flex items-center gap-3 py-3">
            <div className="size-9 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
              {getIcon(asset.iconId)}
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold text-[var(--dash-heading)]">{asset.ticker}</div>
              <div className="text-[10px] text-[var(--dash-muted)]">{asset.name}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-[var(--dash-heading)]">{asset.amount}</div>
              <div className="text-[10px] text-[var(--dash-muted)]">{asset.usdValue}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--dash-border)] my-4" />
      <button
        type="button"
        disabled
        title="Coming soon"
        className="flex w-full items-center justify-center gap-2 border border-[var(--dash-border)] py-2.5 text-sm font-semibold text-[var(--dash-body)] hover:border-[var(--dash-accent)] hover:text-[var(--dash-accent)] transition-colors"
      >
        <ArrowLeftRight className="size-4" />
        Swap Assets
      </button>
    </div>
  );
}
