"use client";

import { Menu, LayoutGrid } from "lucide-react";
import { NotificationBell } from "@/components/notifications/notification-bell";

export default function TopBar() {
  const handleToggle = () => {
    window.dispatchEvent(new CustomEvent("toggle-sidebar"));
  };

  return (
    <header className="h-[60px] border-b border-outline-variant bg-surface-container-low flex items-center justify-between px-6 z-30">
      {/* Left side */}
      <div className="flex items-center space-x-3">
        {/* Mobile Hamburger menu */}
        <button
          onClick={handleToggle}
          className="md:hidden p-1.5 rounded-[4px] hover:bg-surface-container-high text-on-surface transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Network indicator */}
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[var(--db-primary-container)]" aria-hidden="true" />
          <span className="font-geist text-sm text-on-surface-variant">
            Active: <span className="text-on-surface">Stellar Mainnet</span>
          </span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        {/* Icon buttons hidden on < 480px */}
        <div className="hidden min-[480px]:inline-flex">
          <NotificationBell variant="dashboard" />
        </div>

        <button
          className="hidden min-[480px]:inline-flex p-1.5 rounded-[4px] hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"
          aria-label="Wallet/Portfolio shortcut"
        >
          <LayoutGrid className="w-5 h-5" />
        </button>

        {/* New Campaign CTA */}
        <button
          className="bg-primary-container text-on-primary font-geist text-sm font-semibold px-4 h-[36px] rounded-[4px] hover:opacity-90 transition-opacity duration-150 whitespace-nowrap"
        >
          New Campaign
        </button>
      </div>
    </header>
  );
}
