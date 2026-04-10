"use client";

interface Step {
  number: number;
  title: string;
  description: string;
}

const productOwnerSteps: Step[] = [
  {
    number: 1,
    title: "Create Your Campaign",
    description:
      "Set up advertising campaigns with specific requirements, budget, and target audience.",
  },
  {
    number: 2,
    title: "Select and Invite Influencers",
    description:
      "Choose from a curated list of content creators that match your brand values.",
  },
  {
    number: 3,
    title: "Approve and Pay",
    description:
      "Review submitted content and process payments securely through smart contracts.",
  },
  {
    number: 4,
    title: "Track Performance",
    description:
      "Monitor campaign metrics, engagement rates, and ROI in real time.",
  },
];

const influencerSteps: Step[] = [
  {
    number: 1,
    title: "Apply to Campaigns",
    description:
      "Browse and apply to relevant brand partnerships that fit your niche.",
  },
  {
    number: 2,
    title: "Submit Quality Content",
    description:
      "Create and submit promotional content that meets campaign requirements.",
  },
  {
    number: 3,
    title: "Get Paid in Crypto",
    description:
      "Receive secure cryptocurrency payments directly to your wallet.",
  },
  {
    number: 4,
    title: "Build Your Portfolio",
    description:
      "Grow your creator profile and reputation with verified collaborations.",
  },
];

function StepCard({ step }: { step: Step }) {
  return (
    <div className="flex gap-4 group">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400 font-bold text-sm group-hover:bg-green-500/30 group-hover:border-green-400/60 transition-all duration-300">
        {step.number}
      </div>
      <div className="flex-1">
        <h4 className="text-white font-semibold text-base mb-1 group-hover:text-green-400 transition-colors duration-300">
          {step.title}
        </h4>
        <p className="text-white/60 text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}

function JourneyColumn({
  title,
  icon,
  steps,
}: {
  title: string;
  icon: string;
  steps: Step[];
}) {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-2xl" role="img" aria-label={title}>
          {icon}
        </span>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="flex flex-col gap-6">
        {steps.map((step) => (
          <StepCard key={step.number} step={step} />
        ))}
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section
      className="relative py-20 sm:py-28 px-4 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden"
      aria-labelledby="how-it-works-title"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            id="how-it-works-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
            Powered by smart contracts and designed for seamless collaboration
          </p>
        </div>

        {/* Two columns */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Product Owner Journey */}
          <JourneyColumn
            title="For Product Owners"
            icon="🏢"
            steps={productOwnerSteps}
          />

          {/* Central Divider - visible on lg+ */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-green-500/30 to-transparent" />
          </div>

          {/* Mobile Divider */}
          <div className="lg:hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Influencer Journey */}
          <JourneyColumn
            title="For Influencers"
            icon="🌟"
            steps={influencerSteps}
          />
        </div>

        {/* Central showcase images */}
        <div className="mt-16 flex justify-center gap-4 sm:gap-6">
          <div className="w-32 h-20 sm:w-48 sm:h-28 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden hover:border-green-500/30 transition-all duration-300">
            <div className="text-center">
              <span className="text-2xl sm:text-3xl">📊</span>
              <p className="text-[10px] sm:text-xs text-white/50 mt-1">
                Campaign Analytics
              </p>
            </div>
          </div>
          <div className="w-32 h-20 sm:w-48 sm:h-28 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden hover:border-green-500/30 transition-all duration-300">
            <div className="text-center">
              <span className="text-2xl sm:text-3xl">🤝</span>
              <p className="text-[10px] sm:text-xs text-white/50 mt-1">
                Smart Contracts
              </p>
            </div>
          </div>
          <div className="w-32 h-20 sm:w-48 sm:h-28 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden hover:border-green-500/30 transition-all duration-300">
            <div className="text-center">
              <span className="text-2xl sm:text-3xl">💰</span>
              <p className="text-[10px] sm:text-xs text-white/50 mt-1">
                Crypto Payments
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
