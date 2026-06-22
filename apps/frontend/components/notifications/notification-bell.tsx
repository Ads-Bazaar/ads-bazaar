"use client";

import { useEffect, useRef, useState } from "react";
import { Bell, Check } from "lucide-react";
import { useNotifications, type Notification } from "./notification-context";

export type NotificationBellVariant = "landing" | "dashboard";

type VariantClasses = {
  button: string;
  buttonHover: string;
  badgeText: string;
  panel: string;
  panelHeaderBorder: string;
  panelHeaderTitle: string;
  markAllRead: string;
  markAllReadHover: string;
  item: string;
  itemBorder: string;
  itemHover: string;
  itemUnreadBg: string;
  itemRead: string;
  itemUnread: string;
  itemTitle: string;
  itemDescription: string;
  itemTime: string;
  unreadDot: string;
  empty: string;
};

const LANDING_VARIANT: VariantClasses = {
  button: "relative text-on-surface-variant",
  buttonHover: "hover:text-on-surface",
  badgeText: "text-[#293500]",
  panel: "bg-surface-container border-outline-variant",
  panelHeaderBorder: "border-outline-variant",
  panelHeaderTitle: "text-on-surface",
  markAllRead: "text-on-surface-variant",
  markAllReadHover: "hover:text-on-surface",
  item: "bg-surface-container",
  itemBorder: "border-outline-variant",
  itemHover: "hover:bg-surface-container-high",
  itemUnreadBg: "bg-primary-container/10",
  itemRead: "text-on-surface-variant",
  itemUnread: "text-on-surface",
  itemTitle: "text-on-surface",
  itemDescription: "text-on-surface-variant",
  itemTime: "text-on-surface-variant",
  unreadDot: "bg-primary-container",
  empty: "text-on-surface-variant",
};

const DASHBOARD_VARIANT: VariantClasses = {
  button:
    "relative flex size-11 items-center justify-center rounded text-[var(--dash-muted)]",
  buttonHover:
    "hover:text-[var(--dash-heading)] hover:bg-[var(--dash-surface)]",
  badgeText: "text-[var(--dash-on-accent-strong)]",
  panel: "bg-[var(--dash-surface)] border-[var(--dash-border)]",
  panelHeaderBorder: "border-[var(--dash-border)]",
  panelHeaderTitle: "text-[var(--dash-heading)]",
  markAllRead: "text-[var(--dash-muted)]",
  markAllReadHover: "hover:text-[var(--dash-heading)]",
  item: "bg-[var(--dash-surface)]",
  itemBorder: "border-[var(--dash-border)]",
  itemHover: "hover:bg-[var(--dash-bg)]",
  itemUnreadBg: "bg-[var(--dash-bg)]",
  itemRead: "text-[var(--dash-muted)]",
  itemUnread: "text-[var(--dash-heading)]",
  itemTitle: "text-[var(--dash-heading)]",
  itemDescription: "text-[var(--dash-muted)]",
  itemTime: "text-[var(--dash-muted)]",
  unreadDot: "bg-[var(--dash-accent-strong)]",
  empty: "text-[var(--dash-muted)]",
};

const VARIANTS: Record<NotificationBellVariant, VariantClasses> = {
  landing: LANDING_VARIANT,
  dashboard: DASHBOARD_VARIANT,
};

type NotificationItemProps = {
  notification: Notification;
  variant: NotificationBellVariant;
  onSelect: (id: string) => void;
};

function NotificationItem({
  notification,
  variant,
  onSelect,
}: NotificationItemProps) {
  const v = VARIANTS[variant];

  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(notification.id)}
        aria-label={`Notification: ${notification.title}`}
        className={`flex w-full items-start gap-3 rounded border p-3 text-left transition-colors ${v.itemBorder} ${v.item} ${v.itemHover} ${
          notification.read ? v.itemRead : v.itemUnread
        } ${!notification.read ? v.itemUnreadBg : ""}`}
      >
        <span
          aria-hidden="true"
          className={`mt-1.5 size-2 shrink-0 rounded-full ${
            notification.read ? "bg-transparent" : v.unreadDot
          }`}
        />
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold leading-snug">
            <span className={v.itemTitle}>{notification.title}</span>
          </span>
          <span
            className={`mt-0.5 block text-[13px] leading-snug ${v.itemDescription}`}
          >
            {notification.description}
          </span>
          <span
            className={`mt-1 block text-[11px] uppercase tracking-wide ${v.itemTime}`}
          >
            {notification.time}
          </span>
        </span>
      </button>
    </li>
  );
}

export type NotificationBellProps = {
  variant: NotificationBellVariant;
  className?: string;
};

export function NotificationBell({ variant, className }: NotificationBellProps) {
  const { notifications, unreadCount, markAsRead, markAllRead } =
    useNotifications();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const v = VARIANTS[variant];

  useEffect(() => {
    if (!isOpen) return;

    const handleMouseDown = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const buttonSize = variant === "landing" ? "p-1.5" : "size-11";

  return (
    <div ref={containerRef} className={`relative ${className ?? ""}`}>
      <button
        type="button"
        aria-label={
          unreadCount > 0
            ? `Notifications, ${unreadCount} unread`
            : "Notifications"
        }
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${buttonSize} transition-colors ${v.button} ${v.buttonHover}`}
      >
        <Bell className="size-5" aria-hidden="true" />
        {unreadCount > 0 && (
          <span
            aria-hidden="true"
            className={`absolute right-1 top-1 inline-flex min-w-[18px] items-center justify-center rounded-full bg-[var(--db-danger,#ff5470)] px-1 text-[10px] font-bold leading-[14px] ${v.badgeText}`}
          >
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-label="Notifications"
          className={`absolute right-0 top-full z-50 mt-2 w-[320px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-lg border shadow-xl ${v.panel}`}
        >
          <div
            className={`flex items-center justify-between border-b px-4 py-3 ${v.panelHeaderBorder}`}
          >
            <h3
              className={`text-sm font-semibold uppercase tracking-wide ${v.panelHeaderTitle}`}
            >
              Notifications
            </h3>
            <button
              type="button"
              onClick={markAllRead}
              disabled={unreadCount === 0}
              className={`flex items-center gap-1.5 text-xs font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${v.markAllRead} ${v.markAllReadHover}`}
            >
              <Check className="size-3.5" aria-hidden="true" />
              Mark all read
            </button>
          </div>

          {notifications.length === 0 ? (
            <p className={`px-4 py-6 text-center text-sm ${v.empty}`}>
              You're all caught up.
            </p>
          ) : (
            <ul className="flex max-h-[400px] flex-col gap-2 overflow-y-auto p-3">
              {notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  variant={variant}
                  onSelect={(id) => {
                    markAsRead(id);
                  }}
                />
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
