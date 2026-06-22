"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console
    console.error(error);
  }, [error]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background text-on-surface px-6 font-geist overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary-container/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center flex flex-col items-center max-w-lg w-full">
        {/* Icon */}
        <div className="mb-6 p-4 rounded-full bg-primary-container/10 border border-primary-container/20">
          <AlertCircle className="w-12 h-12 text-primary-container animate-pulse" />
        </div>

        {/* Heading */}
        <h1 className="font-sora font-extrabold text-3xl md:text-4xl tracking-tight mb-2">
          Something went wrong
        </h1>

        {/* Description */}
        <p className="text-on-surface-variant font-geist text-base md:text-lg mb-8 max-w-[420px]">
          An unexpected error occurred. Please try again.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => reset()}
            className="bg-primary-container text-on-primary font-geist font-semibold text-[16px] h-[48px] px-8 rounded-[4px] inline-flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer w-full sm:w-auto"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="bg-transparent border border-on-surface text-on-surface font-geist font-semibold text-[16px] h-[48px] px-8 rounded-[4px] inline-flex items-center justify-center hover:bg-on-surface/10 transition-colors w-full sm:w-auto"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
