import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { DashboardChrome } from "@/components/dashboard/shared/dashboard-chrome";
import { SidebarNav } from "@/components/dashboard/business/sidebar-nav";

export const metadata: Metadata = {
  title: {
    template: "%s — AdsBazaar Business",
    default: "Dashboard — AdsBazaar Business",
  },
};

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "800"],
});

export default function BusinessDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={sora.variable}>
      <DashboardChrome themeClass="business-dashboard-theme" SidebarNav={SidebarNav}>
        {children}
      </DashboardChrome>
    </div>
  );
}
