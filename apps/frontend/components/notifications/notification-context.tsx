"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type NotificationType = "campaign" | "payout" | "system";

export type Notification = {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  type: NotificationType;
};

export type NotificationContextValue = {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllRead: () => void;
};

const STORAGE_KEY = "adsbazaar_notification_read_state";

const INITIAL_NOTIFICATIONS: Notification[] = [
  {
    id: "n1",
    title: "New applicant",
    description: "Alex Rivera applied to your Summer Launch campaign",
    time: "2 min ago",
    read: false,
    type: "campaign",
  },
  {
    id: "n2",
    title: "Proof submitted",
    description: "Creator submitted proof for Cyberpunk Rebrand Q4",
    time: "1 hour ago",
    read: false,
    type: "campaign",
  },
  {
    id: "n3",
    title: "Payout processed",
    description: "2,500 USDC released to your wallet",
    time: "3 hours ago",
    read: true,
    type: "payout",
  },
  {
    id: "n4",
    title: "Campaign ending soon",
    description: "Twitter Alpha Thread expires in 2 days",
    time: "Yesterday",
    read: true,
    type: "system",
  },
];

const NotificationContext = createContext<NotificationContextValue | null>(
  null,
);

function loadReadIds(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return new Set();
    return new Set(parsed.filter((v): v is string => typeof v === "string"));
  } catch {
    return new Set();
  }
}

function saveReadIds(ids: Set<string>): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(ids)));
  } catch {
    // Ignore storage failures (private mode, quota, etc.) — UI still works.
  }
}

export function NotificationProvider({ children }: { children: ReactNode }) {
  // Always start with the seed data so server and client markup match.
  // We hydrate the read state from sessionStorage in an effect below.
  const [notifications, setNotifications] =
    useState<Notification[]>(INITIAL_NOTIFICATIONS);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate read state from sessionStorage on mount.
  useEffect(() => {
    const readIds = loadReadIds();
    if (readIds.size === 0) {
      setHydrated(true);
      return;
    }
    setNotifications((prev) =>
      prev.map((n) => (readIds.has(n.id) ? { ...n, read: true } : n)),
    );
    setHydrated(true);
  }, []);

  // Persist read state whenever the notification list changes after hydration.
  useEffect(() => {
    if (!hydrated) return;
    const readIds = new Set(
      notifications.filter((n) => n.read).map((n) => n.id),
    );
    saveReadIds(readIds);
  }, [notifications, hydrated]);

  const markAsRead = useCallback((id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  }, []);

  const markAllRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }, []);

  const unreadCount = useMemo(
    () => notifications.filter((n) => !n.read).length,
    [notifications],
  );

  const value = useMemo<NotificationContextValue>(
    () => ({ notifications, unreadCount, markAsRead, markAllRead }),
    [notifications, unreadCount, markAsRead, markAllRead],
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications(): NotificationContextValue {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotifications must be used within a NotificationProvider",
    );
  }
  return context;
}
