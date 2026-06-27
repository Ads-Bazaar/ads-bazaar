"use client";

import { Settings2, Link2, BarChart2 } from "lucide-react";
import { ContentFormatSelector } from "../shared/content-format-selector";
import { VerificationToggleRow } from "../shared/verification-toggle-row";

const FORMATS = ["Video", "Post", "Thread", "Other"];
const VERIFICATION_TYPES = ["Manual Review", "Automatic (API)", "Hybrid"];

interface ProofState {
  contentFormats: string[];
  deliverables: string;
  submissionDeadline: string;
  verificationType: string;
  linkSocialPost: boolean;
  viewCountThreshold: boolean;
}

interface StepProofRequirementsProps {
  data: ProofState;
  onChange: (data: ProofState) => void;
  errors: Record<string, string>;
}

export function StepProofRequirements({
  data,
  onChange,
  errors,
}: StepProofRequirementsProps) {
  function update(patch: Partial<ProofState>) {
    onChange({ ...data, ...patch });
  }

  return (
    <div className="rounded-2xl border border-[var(--dash-border)] bg-white p-6 text-[var(--dash-bg)]">
      <h2 className="text-xl font-bold text-[var(--dash-bg)]">
        Proof Requirements
      </h2>
      <p className="mt-1 text-sm text-[var(--dash-muted)]">
        Define the validation standards creators must meet to successfully
        complete this task and receive payment.
      </p>

      <div className="mt-6 flex flex-col gap-5">
        {/* Content Format */}
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-[var(--dash-muted)]">
            Content Format <span className="text-red-500">*</span>
          </label>
          <ContentFormatSelector
            formats={FORMATS}
            selected={data.contentFormats}
            onChange={(contentFormats) => update({ contentFormats })}
          />
          {errors.contentFormats && (
            <p className="mt-1 text-xs text-red-500">{errors.contentFormats}</p>
          )}
        </div>

        {/* Deliverables */}
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[var(--dash-muted)]">
            Deliverables Description <span className="text-red-500">*</span>
          </label>
          <textarea
            value={data.deliverables}
            onChange={(e) => update({ deliverables: e.target.value })}
            placeholder="Detail specific tasks (e.g. 'Must include #AdsBazaar and link to website in the first 10 seconds...')"
            rows={5}
            className="w-full resize-none rounded-lg border border-[var(--dash-border)] bg-[var(--dash-border)] px-3 py-2.5 text-sm text-[var(--dash-bg)] outline-none placeholder:text-[var(--dash-muted)] focus:border-[var(--dash-bg)]"
          />
          {errors.deliverables && (
            <p className="mt-1 text-xs text-red-500">{errors.deliverables}</p>
          )}
        </div>

        {/* Deadline + Verification Type */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[var(--dash-muted)]">
              Submission Deadline <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={data.submissionDeadline}
              onChange={(e) => update({ submissionDeadline: e.target.value })}
              className="w-full rounded-lg border border-[var(--dash-border)] bg-[var(--dash-border)] px-3 py-2.5 text-sm text-[var(--dash-bg)] outline-none focus:border-[var(--dash-bg)]"
            />
            {errors.submissionDeadline && (
              <p className="mt-1 text-xs text-red-500">
                {errors.submissionDeadline}
              </p>
            )}
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[var(--dash-muted)]">
              Verification Type
            </label>
            <select
              value={data.verificationType}
              onChange={(e) => update({ verificationType: e.target.value })}
              className="w-full rounded-lg border border-[var(--dash-border)] bg-[var(--dash-border)] px-3 py-2.5 text-sm text-[var(--dash-bg)] outline-none focus:border-[var(--dash-bg)]"
            >
              <option value="">Select type</option>
              {VERIFICATION_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Verification Toggles */}
        <div>
          <div className="mb-2 flex items-center gap-1.5">
            <Settings2
              size={16}
              className="text-[#c8f232]"
              style={{ color: "#4a6500" }}
            />
            <label className="text-xs font-bold uppercase tracking-wide text-[var(--dash-muted)]">
              Automated Verification
            </label>
          </div>
          <div className="overflow-hidden rounded-xl border border-[rgba(0,0,0,0.1)] bg-[#f8f8f8]">
            <VerificationToggleRow
              icon={<Link2 size={14} />}
              title="Link Social Post"
              description="System automatically checks for tags & hashtags"
              enabled={data.linkSocialPost}
              onChange={(val) => update({ linkSocialPost: val })}
            />
            <VerificationToggleRow
              icon={<BarChart2 size={14} />}
              title="View Count Threshold"
              description="Verify engagement reach via API"
              enabled={data.viewCountThreshold}
              onChange={(val) => update({ viewCountThreshold: val })}
              isLast
            />
          </div>
        </div>
      </div>
    </div>
  );
}
