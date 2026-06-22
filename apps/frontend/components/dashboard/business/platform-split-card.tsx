"use client";

import type { PlatformShare } from "./analytics-data";

const SIZE = 160;
const RADIUS = 62;
const STROKE_WIDTH = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const SEGMENT_COLORS = ["var(--dash-accent)", "#4b5563", "#374151"];

export function PlatformSplitCard({ platforms }: { platforms: PlatformShare[] }) {
  const lead = platforms[0];

  let cumulative = 0;
  const segments = platforms.map((platform, index) => {
    const fraction = platform.percentage / 100;
    const start = cumulative;
    cumulative += fraction;
    
    const dashLength = fraction * CIRCUMFERENCE;
    const offset = -(start * CIRCUMFERENCE);
    
    return {
      key: platform.name,
      color: SEGMENT_COLORS[index] ?? SEGMENT_COLORS[SEGMENT_COLORS.length - 1],
      dashArray: `${dashLength} ${CIRCUMFERENCE}`,
      dashOffset: offset,
    };
  });

  return (
    <div className="flex h-full flex-col border border-[var(--dash-border)] bg-[var(--dash-surface)] p-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)]">
          Platform Split
        </p>
        <p className="mt-0.5 text-xs text-[var(--dash-muted)]">Performance distribution</p>
      </div>

      <div className="relative mx-auto mt-6 flex flex-1 items-center justify-center">
        <div className="relative" style={{ width: SIZE, height: SIZE }}>
          <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} aria-hidden="true" className="-rotate-90">
            {segments.map((segment) => (
              <circle
                key={segment.key}
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={RADIUS}
                fill="none"
                stroke={segment.color}
                strokeWidth={STROKE_WIDTH}
                strokeDasharray={segment.dashArray}
                strokeDashoffset={segment.dashOffset}
              />
            ))}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-xl font-semibold text-[var(--dash-heading)]">{lead.percentage}%</span>
            <span className="text-xs text-[var(--dash-muted)]">{lead.name} Dominance</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {platforms.map((platform) => (
          <div key={platform.name} className="flex items-center gap-2">
            <span
              className={`size-2 rounded-full ${
                platform.accentDot ? "bg-[var(--dash-accent)]" : "bg-gray-500"
              }`}
              aria-hidden="true"
            />
            <span className="flex-1 text-sm text-[var(--dash-body)]">{platform.name}</span>
            <span className="text-sm font-bold text-[var(--dash-heading)]">{platform.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
