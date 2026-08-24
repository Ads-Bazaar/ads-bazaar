import Link from "next/link";
import Image from "next/image";
import { Mail, Tag } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-background">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          {/* Brand Column */}
          <div className="flex flex-col">
            <Link href="/" className="mb-4 flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-[10px] bg-surface-container-high">
                <Tag className="size-4 text-primary-container" aria-hidden="true" />
              </span>
              <span className="font-sora text-xl font-bold text-on-surface">
                AdsBazaar
              </span>
            </Link>
            <p className="max-w-[240px] font-geist text-[14px] leading-relaxed text-on-surface-variant">
              The trust layer for global creator campaigns — escrow-backed,
              instantly paid, built on Stellar.
            </p>
          </div>

          {/* Platform Links */}
          <div className="flex flex-col gap-4">
            <h4 className="mb-2 font-geist text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface">
              Platform
            </h4>
            <a
              href="/marketplace"
              className="font-geist text-[14px] text-on-surface-variant transition-colors hover:text-on-surface"
            >
              Marketplace
            </a>
            <a
              href="/dashboard"
              className="font-geist text-[14px] text-on-surface-variant transition-colors hover:text-on-surface"
            >
              Campaign Dashboard
            </a>
            <span className="font-geist text-[14px] text-on-surface-variant/50">
              Smart Contracts{" "}
              <span className="ml-1 rounded-full bg-surface-container-high px-2 py-0.5 text-[10px] text-on-surface-variant">
                Soon
              </span>
            </span>
          </div>

          {/* Network Links */}
          <div className="flex flex-col gap-4">
            <h4 className="mb-2 font-geist text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface">
              Network
            </h4>
            <a
              href="https://stellar.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-geist text-[14px] text-on-surface-variant transition-colors hover:text-on-surface"
            >
              Stellar Hub
            </a>
            <a
              href="https://soroban.stellar.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-geist text-[14px] text-on-surface-variant transition-colors hover:text-on-surface"
            >
              Soroban SDK
            </a>
            <a
              href="https://stellar.org/anchors"
              target="_blank"
              rel="noopener noreferrer"
              className="font-geist text-[14px] text-on-surface-variant transition-colors hover:text-on-surface"
            >
              Global Anchors
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-4">
            <h4 className="mb-2 font-geist text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface">
              Legal
            </h4>
            {["Terms of Service", "Privacy Policy", "Safety Center"].map((label) => (
              <span key={label} className="font-geist text-[14px] text-on-surface-variant/50">
                {label}{" "}
                <span className="ml-1 rounded-full bg-surface-container-high px-2 py-0.5 text-[10px] text-on-surface-variant">
                  Soon
                </span>
              </span>
            ))}
          </div>
        </div>

        <div
          aria-hidden="true"
          className="h-px w-full bg-gradient-to-r from-transparent via-outline-variant to-transparent"
        />

        <div className="flex flex-col items-center gap-6 pt-8 md:flex-row md:justify-between">
          <p className="font-geist text-[14px] text-on-surface-variant">
            © 2024 AdsBazaar Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="AdsBazaar on Instagram"
              className="rounded-[8px] overflow-hidden transition-transform duration-150 ease-out hover:-translate-y-0.5"
            >
              <Image src="/icons/instagram.svg" alt="" width={28} height={28} aria-hidden="true" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="AdsBazaar on TikTok"
              className="rounded-[8px] overflow-hidden transition-transform duration-150 ease-out hover:-translate-y-0.5"
            >
              <Image src="/icons/tiktok.svg" alt="" width={28} height={28} aria-hidden="true" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="AdsBazaar on YouTube"
              className="rounded-[8px] overflow-hidden transition-transform duration-150 ease-out hover:-translate-y-0.5"
            >
              <Image src="/icons/youtube.svg" alt="" width={28} height={28} aria-hidden="true" />
            </a>
            <a
              href="mailto:hello@adsbazaar.xyz"
              aria-label="Email AdsBazaar"
              className="flex size-7 items-center justify-center text-on-surface-variant transition-colors hover:text-on-surface"
            >
              <Mail className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
