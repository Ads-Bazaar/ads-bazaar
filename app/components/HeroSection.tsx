"use client";

import Image from "next/image";

interface FloatingIcon {
  label: string;
  emoji: string;
  position: string;
  delay: string;
}

const floatingIcons: FloatingIcon[] = [
  {
    label: "TikTok",
    emoji: "🎵",
    position: "top-[10%] left-[8%] sm:left-[12%]",
    delay: "animation-delay-0",
  },
  {
    label: "Instagram",
    emoji: "📸",
    position: "top-[5%] right-[15%] sm:right-[20%]",
    delay: "animation-delay-200",
  },
  {
    label: "YouTube",
    emoji: "▶️",
    position: "top-[35%] left-[2%] sm:left-[5%]",
    delay: "animation-delay-400",
  },
  {
    label: "Instant Collabs",
    emoji: "🤝",
    position: "top-[30%] right-[3%] sm:right-[8%]",
    delay: "animation-delay-600",
  },
  {
    label: "Real Connections",
    emoji: "💬",
    position: "bottom-[35%] left-[5%] sm:left-[10%]",
    delay: "animation-delay-800",
  },
  {
    label: "No Middleman",
    emoji: "✅",
    position: "bottom-[30%] right-[5%] sm:right-[12%]",
    delay: "animation-delay-1000",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-950 to-gray-900 px-4 py-16 sm:py-24">
      {/* Floating Icons */}
      {floatingIcons.map((icon) => (
        <div
          key={icon.label}
          className={`absolute ${icon.position} z-10 group`}
        >
          <div className="flex flex-col items-center gap-1 animate-float transition-transform duration-300 hover:scale-110">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-xl sm:text-2xl shadow-lg shadow-white/5 group-hover:shadow-white/20 group-hover:bg-white/15 transition-all duration-300">
              {icon.emoji}
            </div>
            <span className="text-[10px] sm:text-xs text-white/70 font-medium whitespace-nowrap">
              {icon.label}
            </span>
          </div>
        </div>
      ))}

      {/* Central Image */}
      <div className="relative z-20 mb-8 sm:mb-12">
        <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-green-500/10">
          <Image
            src="/placeholder-hero.jpg"
            alt="Content creator taking a selfie"
            width={256}
            height={256}
            className="w-full h-full object-cover"
            priority
          />
          {/* Fallback gradient if image not found */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/30 to-purple-500/30" />
        </div>
        {/* Glow effect behind circle */}
        <div className="absolute inset-0 -z-10 rounded-full bg-green-500/20 blur-3xl scale-150" />
      </div>

      {/* Text Content */}
      <div className="relative z-20 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-white leading-tight mb-4 sm:mb-6">
          Connect. Collaborate.{" "}
          <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Grow Your Brand.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Reach real audiences through trusted influencers, and message anyone
          with complete transparency and freedom.
        </p>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-flex items-center justify-center px-8 py-3.5 bg-green-500 hover:bg-green-400 text-black font-semibold text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
        >
          Get Started
        </a>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Float animation styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animation-delay-0 .animate-float {
          animation-delay: 0s;
        }
        .animation-delay-200 .animate-float {
          animation-delay: 0.2s;
        }
        .animation-delay-400 .animate-float {
          animation-delay: 0.4s;
        }
        .animation-delay-600 .animate-float {
          animation-delay: 0.6s;
        }
        .animation-delay-800 .animate-float {
          animation-delay: 0.8s;
        }
        .animation-delay-1000 .animate-float {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
