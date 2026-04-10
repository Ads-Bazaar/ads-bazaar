"use client";

interface RoleCard {
  title: string;
  description: string;
  icon: string;
  audience: string;
}

const roles: RoleCard[] = [
  {
    title: "Product Owner",
    description:
      "Launch campaigns, discover top influencers, and grow your brand with transparent, smart-contract-powered collaborations.",
    icon: "🏢",
    audience: "For businesses & brands",
  },
  {
    title: "Influencer",
    description:
      "Monetize your social media presence, connect with brands you love, and get paid securely in crypto for your content.",
    icon: "🌟",
    audience: "For content creators",
  },
];

export default function RoleSelectionSection() {
  return (
    <section
      className="relative py-20 sm:py-28 px-4 bg-gradient-to-b from-gray-950 to-black overflow-hidden"
      aria-labelledby="role-selection-title"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            id="role-selection-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Choose Your Role to Get Started
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
            Select how you want to use Ads Bazaar
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {roles.map((role) => (
            <div
              key={role.title}
              className="group relative rounded-2xl bg-white/5 border border-white/10 p-8 sm:p-10 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:bg-white/[0.08] hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1"
              role="button"
              tabIndex={0}
              aria-label={`Get started as ${role.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                }
              }}
            >
              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-4xl mb-6 group-hover:bg-green-500/20 group-hover:border-green-400/40 transition-all duration-300">
                {role.icon}
              </div>

              {/* Audience tag */}
              <span className="text-xs text-green-400/80 font-medium uppercase tracking-wider mb-2">
                {role.audience}
              </span>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                {role.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-8">
                {role.description}
              </p>

              {/* CTA Button */}
              <button
                className="mt-auto inline-flex items-center justify-center px-8 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold text-sm sm:text-base rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-green-500/30"
                aria-label={`Get started as ${role.title}`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
