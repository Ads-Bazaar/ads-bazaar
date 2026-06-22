import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found | AdsBazaar",
  description: "The page you're looking for doesn't exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background text-on-surface px-6 font-geist overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary-container/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center flex flex-col items-center max-w-lg w-full">
        {/* Large 404 Heading */}
        <h1 className="font-sora font-extrabold text-[120px] md:text-[160px] leading-none tracking-tighter text-primary-container mb-4 selection:bg-on-primary selection:text-primary-container">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="font-sora font-bold text-2xl md:text-3xl tracking-tight mb-2">
          Page not found
        </h2>

        {/* Description */}
        <p className="text-on-surface-variant font-geist text-base md:text-lg mb-8 max-w-[420px]">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="bg-primary-container text-on-primary font-geist font-semibold text-[16px] h-[48px] px-8 rounded-[4px] inline-flex items-center justify-center hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            Go Home
          </Link>
          <Link
            href="/marketplace"
            className="bg-transparent border border-on-surface text-on-surface font-geist font-semibold text-[16px] h-[48px] px-8 rounded-[4px] inline-flex items-center justify-center hover:bg-on-surface/10 transition-colors w-full sm:w-auto"
          >
            Browse Marketplace
          </Link>
        </div>
      </div>
    </div>
  );
}
