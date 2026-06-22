"use client";

import { Wand2 } from "lucide-react";
import { useWizardModal } from "./wizard-modal-context";

export function CampaignsPageHeader() {
  const { openWizard } = useWizardModal();

  return (
    <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="font-[family-name:var(--font-sora)] text-[28px] font-semibold text-[var(--dash-heading)]">
          Campaigns
        </h1>
        <p className="mt-1 text-sm text-[var(--dash-muted)]">
          Manage and monitor your decentralized advertising ventures.
        </p>
      </div>
      <button
        type="button"
        onClick={openWizard}
        className="flex items-center gap-2 bg-[var(--dash-accent-strong)] px-5 py-3 font-bold text-[var(--dash-on-accent-strong)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dash-accent)]"
      >
        <Wand2 className="size-4" aria-hidden="true" />
        Create New Campaign
      </button>
    </div>
  );
}
