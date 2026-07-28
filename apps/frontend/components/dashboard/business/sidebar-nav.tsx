"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useWizardModal } from "./wizard-modal-context";
import { useRole } from "@/components/role/role-context";
import {
  ArrowLeftRight,
  BarChart3,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Megaphone,
  Settings,
  Wallet,
  type LucideIcon,
} from "lucide-react";

type NavItem = {
  href: string;
  icon: LucideIcon;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/dashboard/business", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/business/campaigns", icon: Megaphone, label: "Campaigns" },
  { href: "/dashboard/business/analytics", icon: BarChart3, label: "Analytics" },
  { href: "/dashboard/business/payouts", icon: Wallet, label: "Payouts" },
  { href: "/dashboard/business/settings", icon: Settings, label: "Settings" },
];

function isActiveHref(pathname: string, href: string) {
  if (href === "/dashboard/business") {
    // exact match only — don't highlight Dashboard when on /dashboard/business/campaigns etc.
    return pathname === href;
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const router = useRouter();
  const { openWizard } = useWizardModal();
  const { setRole } = useRole();

  return (
    <div className="flex h-full flex-col gap-4 px-4 py-6">
      <div className="mb-4 px-2">
        <h1 className="text-[20px] font-bold tracking-tight text-[var(--dash-heading)]">
          AdsBazaar Business
        </h1>
        <p className="text-[12px] font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)] opacity-70">
          Campaign Management
        </p>
      </div>

      <nav className="flex flex-grow flex-col gap-1" aria-label="Dashboard navigation">
        {navItems.map((item) => {
          const active = isActiveHref(pathname, item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={`flex min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-[15px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dash-accent)] ${
                active
                  ? "bg-[var(--dash-accent-strong)] font-bold text-[var(--dash-on-accent-strong)]"
                  : "text-[var(--dash-muted)] hover:bg-[var(--dash-border)] hover:text-[var(--dash-heading)]"
              }`}
            >
              <Icon className="size-5" aria-hidden="true" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <button
        type="button"
        onClick={() => { onNavigate?.(); openWizard(); }}
        className="mt-4 flex min-h-11 w-full items-center justify-center rounded-lg bg-[var(--dash-accent-strong)] py-3 text-center font-bold text-[var(--dash-on-accent-strong)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dash-accent)]"
      >
        New Campaign
      </button>

      <div className="mt-auto flex flex-col gap-1">
        <button
          type="button"
          onClick={() => {
            onNavigate?.();
            setRole("creator");
            router.push("/dashboard/creator");
          }}
          className="flex min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-left text-[13px] font-medium text-[var(--dash-muted)] opacity-70 transition-colors hover:bg-[var(--dash-border)] hover:text-[var(--dash-heading)] hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dash-accent)]"
        >
          <ArrowLeftRight className="size-4" aria-hidden="true" />
          <span>Switch to Creator Dashboard</span>
        </button>
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate?.();
          }}
          title="Coming soon"
          className="flex min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-[15px] font-medium text-[var(--dash-muted)] transition-colors hover:bg-[var(--dash-border)] hover:text-[var(--dash-heading)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dash-accent)]"
        >
          <HelpCircle className="size-5" aria-hidden="true" />
          <span>Help Center</span> <span className="text-[10px] opacity-60 ml-1">(Coming soon)</span>
        </Link>
        <button
          type="button"
          onClick={() => {
            onNavigate?.();
            router.push("/");
          }}
          className="flex min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-left text-[15px] font-medium text-[var(--dash-muted)] transition-colors hover:bg-[var(--dash-border)] hover:text-[var(--dash-heading)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dash-accent)]"
        >
          <LogOut className="size-5" aria-hidden="true" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
