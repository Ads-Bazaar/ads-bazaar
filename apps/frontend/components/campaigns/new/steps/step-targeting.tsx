"use client";

import { TrendingUp } from "lucide-react";
import { CategoryTagInput } from "../shared/category-tag-input";

const CATEGORIES = [
  "Tech",
  "Lifestyle",
  "Gaming",
  "Finance",
  "Fashion",
  "Food",
  "Travel",
  "Education",
  "Fitness",
  "Music",
  "Art",
  "Health",
  "Sports",
];

const AUDIENCE_SIZES = [
  { value: "under-1k", label: "Under 1K" },
  { value: "1k-10k", label: "1K – 10K" },
  { value: "10k-50k", label: "10K – 50K (Micro)" },
  { value: "50k-200k", label: "50K – 200K (Mid)" },
  { value: "200k-1m", label: "200K – 1M (Macro)" },
  { value: "1m+", label: "1M+" },
];

const REGIONS = [
  "North America",
  "Europe",
  "Africa",
  "Southeast Asia",
  "Latin America",
  "Middle East",
  "Global",
];

const BAR_HEIGHTS = [20, 36, 56, 64, 44, 28];

interface TargetingState {
  categories: string[];
  minAudienceSize: string;
  regions: string[];
  requirements: string;
}

interface StepTargetingProps {
  data: TargetingState;
  onChange: (data: TargetingState) => void;
  errors: Record<string, string>;
}

export function StepTargeting({ data, onChange, errors }: StepTargetingProps) {
  function update(patch: Partial<TargetingState>) {
    onChange({ ...data, ...patch });
  }

  function toggleRegion(region: string) {
    const next = data.regions.includes(region)
      ? data.regions.filter((r) => r !== region)
      : [...data.regions, region];
    update({ regions: next });
  }

  return (
    <div className="rounded-2xl border border-[var(--dash-border)] bg-white p-6 text-[var(--dash-bg)]">
      <h2 className="text-xl font-bold text-[var(--dash-bg)]">
        Target Creator Profile
      </h2>
      <p className="mt-1 text-sm text-[var(--dash-muted)]">
        Define the ideal creator persona for your campaign. This helps our
        algorithm match you with the right talent.
      </p>

      <div className="mt-6 flex flex-col gap-5">
        {/* Creator Categories */}
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[var(--dash-muted)]">
            Creator Categories <span className="text-red-500">*</span>
          </label>
          <CategoryTagInput
            selected={data.categories}
            options={CATEGORIES}
            onChange={(categories) => update({ categories })}
          />
          {errors.categories && (
            <p className="mt-1 text-xs text-red-500">{errors.categories}</p>
          )}
        </div>

        {/* Audience + Regions */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[var(--dash-muted)]">
              Minimum Audience Size <span className="text-red-500">*</span>
            </label>
            <select
              value={data.minAudienceSize}
              onChange={(e) => update({ minAudienceSize: e.target.value })}
              className="w-full rounded-lg border border-[var(--dash-border)] bg-[var(--dash-border)] px-3 py-2.5 text-sm text-[var(--dash-bg)] outline-none focus:border-[var(--dash-bg)]"
            >
              <option value="">Select audience size</option>
              {AUDIENCE_SIZES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
            {errors.minAudienceSize && (
              <p className="mt-1 text-xs text-red-500">
                {errors.minAudienceSize}
              </p>
            )}
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[var(--dash-muted)]">
              Preferred Regions <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-1.5">
              {REGIONS.map((region) => {
                const isSelected = data.regions.includes(region);
                return (
                  <button
                    key={region}
                    type="button"
                    onClick={() => toggleRegion(region)}
                    className="rounded-full px-2.5 py-1 text-xs font-medium transition"
                    style={{
                      border: isSelected
                        ? "1px solid #c8f232"
                        : "1px solid rgba(0,0,0,0.15)",
                      color: isSelected ? "#4a6500" : "#66706c",
                      backgroundColor: isSelected ? "#f0ffd0" : "transparent",
                    }}
                  >
                    {region}
                  </button>
                );
              })}
            </div>
            {errors.regions && (
              <p className="mt-1 text-xs text-red-500">{errors.regions}</p>
            )}
          </div>
        </div>

        {/* Key Requirements */}
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[var(--dash-muted)]">
            Key Requirements
          </label>
          <textarea
            value={data.requirements}
            onChange={(e) => update({ requirements: e.target.value })}
            placeholder="Must have 50k+ followers on YouTube, high engagement rates on tech-focused content..."
            rows={3}
            className="w-full resize-none rounded-lg border border-[var(--dash-border)] bg-[var(--dash-border)] px-3 py-2.5 text-sm text-[var(--dash-bg)] outline-none placeholder:text-[var(--dash-muted)] focus:border-[var(--dash-bg)]"
          />
        </div>

        {/* Matching Potential */}
        <div className="rounded-lg border border-[rgba(0,0,0,0.1)] bg-[#f8f8f8] p-4">
          <div className="mb-3 flex items-center gap-2">
            <TrendingUp size={14} className="text-[var(--dash-muted)]" />
            <span className="text-[13px] font-semibold text-[var(--dash-muted)]">
              Matching Potential
            </span>
          </div>
          <div className="flex items-end gap-2" style={{ height: 64 }}>
            {BAR_HEIGHTS.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{ height: h, backgroundColor: "#c8f232" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
