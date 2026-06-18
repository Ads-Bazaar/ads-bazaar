import type { SorobanContract } from '@/components/dashboard/business/payouts-data';
import { ContractCard } from '@/components/dashboard/business/contract-card';
import { ArrowRight } from 'lucide-react';

interface SorobanContractsSectionProps {
  contracts: SorobanContract[];
}

export function SorobanContractsSection({ contracts }: SorobanContractsSectionProps) {
  return (
    <section className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-[family-name:var(--font-sora)] text-xl font-semibold text-[var(--dash-heading)]">
          Active Soroban Contracts
        </h2>
        <a href="#" title="Coming soon" className="text-xs font-bold text-[var(--dash-accent)] hover:underline cursor-not-allowed pointer-events-none" aria-disabled="true">
          View All Contracts
        </a>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {contracts.map((contract) => (
          <ContractCard key={contract.id} contract={contract} />
        ))}
      </div>
    </section>
  );
}
