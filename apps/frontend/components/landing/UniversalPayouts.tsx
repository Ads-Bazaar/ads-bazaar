const destinations = [
  { code: "NGN", symbol: "₦", name: "Nigerian Naira", color: "#10a151", text: "text-white", delay: "0s" },
  { code: "KES", symbol: "KSh", name: "Kenyan Shilling", color: "#ff0000", text: "text-white", delay: "0.4s" },
  { code: "GHS", symbol: "₵", name: "Ghanaian Cedi", color: "#f9d616", text: "text-background", delay: "0.8s" },
  { code: "PHP", symbol: "₱", name: "Philippine Peso", color: "#0038a8", text: "text-white", delay: "1.2s" },
];

export function UniversalPayouts() {
  return (
    <section className="relative overflow-hidden py-16 md:py-[100px] px-6 bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-primary-container/5 blur-3xl"
      />

      <div className="relative max-w-[1280px] mx-auto text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container px-4 py-1.5 font-geist font-[600] text-[12px] uppercase tracking-[0.05em] text-on-surface-variant mb-6">
          Cross-border settlement
        </span>

        <h2 className="font-sora font-[700] text-[32px] md:text-[44px] tracking-[-0.02em] text-on-surface mb-4 max-w-[640px] mx-auto">
          Universal payouts.{" "}
          <span className="text-primary-container">Local context.</span>
        </h2>

        <p className="font-geist text-[15px] md:text-[17px] text-on-surface-variant max-w-[560px] mx-auto leading-relaxed mb-16">
          Leveraging Stellar&apos;s global anchor network to bridge digital
          assets to local currency bank accounts in minutes, not days.
        </p>

        {/* Flow visual */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4 mb-16">
          {/* Source */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center">
              <div className="w-[64px] h-[64px] bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-background">
                <span className="font-geist font-[800] text-background text-[13px]">USDC</span>
              </div>
              <div className="w-[64px] h-[64px] -ml-4 bg-primary-container rounded-full flex items-center justify-center shadow-lg border-4 border-background">
                <span className="font-geist font-[800] text-on-primary text-[13px]">XLM</span>
              </div>
            </div>
            <span className="font-geist font-[600] text-[12px] uppercase tracking-[0.05em] text-on-surface-variant">
              Paid in any Stellar asset
            </span>
          </div>

          {/* Connector */}
          <div className="flex flex-col items-center gap-2 px-2">
            <svg
              viewBox="0 0 160 24"
              fill="none"
              aria-hidden="true"
              className="hidden lg:block w-[160px] h-6 text-primary-container/70 -rotate-0"
            >
              <line
                x1="2"
                y1="12"
                x2="146"
                y2="12"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="1 9"
                className="animate-dash-flow"
              />
              <path
                d="M138 5L150 12L138 19"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              viewBox="0 0 24 60"
              fill="none"
              aria-hidden="true"
              className="lg:hidden w-6 h-[60px] text-primary-container/70"
            >
              <line
                x1="12"
                y1="2"
                x2="12"
                y2="46"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="1 9"
                className="animate-dash-flow"
              />
              <path
                d="M5 38L12 50L19 38"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-geist font-[600] text-[11px] uppercase tracking-[0.05em] text-primary-container whitespace-nowrap">
              Stellar anchors
            </span>
          </div>

          {/* Destinations */}
          <div className="flex flex-wrap items-start justify-center gap-4 md:gap-6 max-w-[600px]">
            {destinations.map((d) => (
              <div
                key={d.code}
                className="animate-float-y flex flex-col items-center gap-3 bg-surface-container border border-outline-variant rounded-[8px] p-5 w-[128px] transition-transform duration-150 ease-out hover:-translate-y-1"
                style={{ animationDelay: d.delay }}
              >
                <div
                  className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: d.color }}
                >
                  <span
                    className={`font-geist font-[800] leading-none ${d.text} ${
                      d.symbol.length > 1 ? "text-[13px]" : "text-[22px]"
                    }`}
                  >
                    {d.symbol}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <span className="font-geist font-[600] text-[11px] text-on-surface-variant text-center leading-tight">
                    {d.name}
                  </span>
                  <span className="font-geist text-[10px] uppercase tracking-[0.05em] text-on-surface-variant/60">
                    {d.code}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stat strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[720px] mx-auto">
          <div className="bg-surface-container border border-outline-variant rounded-[8px] p-5">
            <span className="font-sora font-bold text-[24px] text-on-surface block mb-1">&lt;5s</span>
            <span className="font-geist text-[12px] uppercase tracking-[0.05em] text-on-surface-variant">
              Settlement time
            </span>
          </div>
          <div className="bg-surface-container border border-outline-variant rounded-[8px] p-5">
            <span className="font-sora font-bold text-[24px] text-on-surface block mb-1">180+</span>
            <span className="font-geist text-[12px] uppercase tracking-[0.05em] text-on-surface-variant">
              Countries reached
            </span>
          </div>
          <div className="bg-surface-container border border-outline-variant rounded-[8px] p-5">
            <span className="font-sora font-bold text-[24px] text-on-surface block mb-1">$0.00001</span>
            <span className="font-geist text-[12px] uppercase tracking-[0.05em] text-on-surface-variant">
              Network fee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
