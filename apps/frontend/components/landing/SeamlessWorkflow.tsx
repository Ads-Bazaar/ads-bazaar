import { Link2, Lock, PenLine, ScanSearch, Wallet2, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Link2,
    title: "Connect",
    description: "Link your Stellar wallet and social identity profiles.",
  },
  {
    icon: Lock,
    title: "Stake",
    description: "Campaign funds are staked into a secure escrow contract.",
  },
  {
    icon: PenLine,
    title: "Create",
    description: "Content is produced and uploaded to the bazaar registry.",
  },
  {
    icon: ScanSearch,
    title: "Verify",
    description: "Autonomous or manual verification of campaign success.",
  },
  {
    icon: Wallet2,
    title: "Release",
    description: "Funds are released to the creator's wallet instantly.",
  },
];

function Connector() {
  return (
    <svg
      viewBox="0 0 24 64"
      fill="none"
      aria-hidden="true"
      className="w-6 h-16 text-primary-container/60 shrink-0"
    >
      <line
        x1="12"
        y1="0"
        x2="12"
        y2="50"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1 9"
        className="animate-dash-flow"
      />
      <path
        d="M5 42L12 54L19 42"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SeamlessWorkflow() {
  return (
    <section className="py-16 md:py-[100px] px-6 bg-background">
      <div className="max-w-[720px] mx-auto">
        <div className="flex items-center gap-4 mb-16 md:mb-20">
          <div className="h-px flex-1 bg-outline-variant" />
          <h2 className="font-sora font-[700] text-[28px] md:text-[32px] text-on-surface whitespace-nowrap">
            Seamless Workflow
          </h2>
          <div className="h-px flex-1 bg-outline-variant" />
        </div>

        <div className="flex flex-col items-center">
          {/* Start node */}
          <div className="flex items-center gap-3">
            <span className="relative flex size-3.5 items-center justify-center">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-container/60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-primary-container" />
            </span>
            <span className="font-geist font-[600] text-[13px] uppercase tracking-[0.05em] text-on-surface-variant">
              Start
            </span>
          </div>

          <Connector />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex flex-col items-center w-full">
                <div className="group relative flex w-full max-w-[440px] items-center gap-4 rounded-2xl border border-outline-variant bg-surface-container p-5 transition-all duration-150 ease-out hover:-translate-y-0.5 hover:border-primary-container/60">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-surface-container-high">
                    <Icon className="size-5 text-primary-container" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-sora font-[600] text-[16px] text-on-surface">
                      {step.title}
                    </h3>
                    <p className="font-geist text-[14px] text-on-surface-variant leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <span className="absolute -top-2.5 -right-2.5 flex size-6 items-center justify-center rounded-full bg-primary-container font-geist text-[11px] font-bold text-on-primary">
                    {i + 1}
                  </span>
                </div>

                {i < steps.length - 1 && <Connector />}
              </div>
            );
          })}

          <Connector />

          {/* Complete node */}
          <div className="flex items-center gap-3 max-w-[440px] text-center">
            <CheckCircle2 className="size-6 shrink-0 text-primary-container" aria-hidden="true" />
            <p className="font-geist text-[15px] text-on-surface text-left">
              <span className="font-[600] text-primary-container">Instantly settled.</span>{" "}
              <span className="text-on-surface-variant">
                No middleman, no manual releases — just code.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
