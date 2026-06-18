import { Clock, ExternalLink } from "lucide-react";
import type {
  PayoutHistoryItem,
  PayoutStatus,
} from "./creator-payouts-data";

const statusStyles: Record<PayoutStatus, string> = {
  claimed: "border-[var(--dash-accent)] text-[var(--dash-accent)]",
  failed: "border-red-400 text-red-400",
  pending: "border-amber-400 text-amber-400",
};

export function PayoutHistoryTable({
  items,
}: {
  items: PayoutHistoryItem[];
}) {
  return (
    <article className="col-span-12 min-w-0 border border-[var(--dash-border)] bg-[var(--dash-surface)] p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-xs font-semibold uppercase tracking-[0.05em] text-[var(--dash-heading)]">
          Payout History
        </h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled
            title="Coming soon"
            className="border border-[var(--dash-border)] px-3 py-1.5 text-xs font-bold text-[var(--dash-muted)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Export CSV
          </button>
          <button
            type="button"
            disabled
            title="Coming soon"
            className="border border-[var(--dash-border)] px-3 py-1.5 text-xs font-bold text-[var(--dash-muted)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr>
              <th className="border-b border-[var(--dash-border)] pb-4 text-xs font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)]">
                DATE
              </th>
              <th className="border-b border-[var(--dash-border)] pb-4 text-xs font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)]">
                CAMPAIGN SOURCE
              </th>
              <th className="border-b border-[var(--dash-border)] pb-4 text-xs font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)]">
                AMOUNT &amp; ASSET
              </th>
              <th className="border-b border-[var(--dash-border)] pb-4 text-xs font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)]">
                STATUS
              </th>
              <th className="border-b border-[var(--dash-border)] pb-4 text-right text-xs font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)]">
                ON-CHAIN
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--dash-border)]">
            {items.map((item) => {
              const Icon = item.campaignIcon;

              return (
                <tr key={item.id}>
                  <td className="py-4 text-sm text-[var(--dash-muted)]">
                    {item.date}
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-8 shrink-0 items-center justify-center border border-[var(--dash-border)] bg-[var(--dash-bg)]">
                        <Icon
                          className="size-[18px] text-[var(--dash-body)]"
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-sm font-medium text-[var(--dash-heading)]">
                        {item.campaignName}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 text-sm font-medium text-[var(--dash-heading)]">
                    {item.amount}
                  </td>
                  <td className="py-4">
                    <span
                      className={`rounded border px-2 py-0.5 text-[10px] font-bold tracking-widest ${statusStyles[item.status]}`}
                    >
                      {item.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    {item.txUrl && item.status !== "pending" ? (
                      <a
                        href={item.txUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${item.campaignName} transaction on-chain`}
                        className="inline-flex text-[var(--dash-muted)] hover:text-[var(--dash-accent)]"
                      >
                        <ExternalLink className="size-4" aria-hidden="true" />
                      </a>
                    ) : (
                      <span
                        title="Transaction pending"
                        className="inline-flex text-[var(--dash-muted)] opacity-40"
                      >
                        <Clock className="size-4" aria-hidden="true" />
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </article>
  );
}
