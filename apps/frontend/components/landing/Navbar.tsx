"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ConnectWalletButton } from "@/components/wallet/connect-wallet-button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-20 grid grid-cols-[1fr_auto_1fr] items-center">
        {/* Logo */}
        <div className="flex items-center justify-self-start">
          <a href="/" className="font-sora font-bold text-xl text-on-surface">
            AdsBazaar
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 justify-self-center">
          <a
            href="/marketplace"
            className="text-[15px] text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Marketplace
          </a>
          <a
            href="/explore"
            className="text-[15px] text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Explore
          </a>
          <a
            href="/stats"
            className="text-[15px] text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Stats
          </a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6 justify-self-end">
          <ConnectWalletButton />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center justify-self-end">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-on-surface-variant"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden overflow-visible bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
          <a
            href="/marketplace"
            className="text-[15px] text-on-surface py-2 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Marketplace
          </a>
          <a
            href="/explore"
            className="text-[15px] text-on-surface-variant py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Explore
          </a>
          <a
            href="/stats"
            className="text-[15px] text-on-surface-variant py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Stats
          </a>
          <div className="flex items-center justify-between gap-3 pt-4">
            <ConnectWalletButton />
          </div>
        </div>
      )}
    </nav>
  );
}
