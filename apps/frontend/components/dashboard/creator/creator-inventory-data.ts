export type ChannelStatus = "active" | "reconnect";

export type ConnectedChannel = {
  handle: string;
  followers: string;
  iconPath: string;
  id: string;
  niche: string;
  platform: string;
  status: ChannelStatus;
};

export type SyncItem = {
  id: string;
  platform: string;
  schedule: string;
  status: "ok" | "failed";
};

export type AudienceCategory = {
  label: string;
};

export type MediaKit = {
  fileName: string;
  lastUpdated: string;
  previewImagePath: string;
};

export type AudienceInsightsData = {
  primaryRegion: string;
  primaryRegionShare: string;
  reachDelta: string;
  reachProgress: number;
  topCategories: AudienceCategory[];
  totalReach: string;
};

export const connectedChannels: ConnectedChannel[] = [
  {
    id: "instagram",
    platform: "Instagram",
    handle: "@alexa.vibe",
    followers: "452K Followers",
    niche: "Lifestyle & Fashion",
    status: "active",
    iconPath: "/icons/instagram.svg",
  },
  {
    id: "tiktok",
    platform: "TikTok",
    handle: "@alexa_vibe_official",
    followers: "1.2M Followers",
    niche: "Daily Vlogs",
    status: "active",
    iconPath: "/icons/tiktok.svg",
  },
  {
    id: "youtube",
    platform: "YouTube",
    handle: "Alexa Vibe YT",
    followers: "89K Subscribers",
    niche: "Travel Guides",
    status: "reconnect",
    iconPath: "/icons/youtube.svg",
  },
];

export const totalActiveConnections = 2;

export const mediaKit: MediaKit = {
  fileName: "Creator_MediaKit_2024.pdf",
  lastUpdated: "3 days ago",
  previewImagePath: "/images/media-kit-preview.png",
};

export const audienceInsights: AudienceInsightsData = {
  totalReach: "1.74M",
  reachDelta: "+12.4% from last month",
  reachProgress: 74,
  topCategories: [
    { label: "LIFESTYLE" },
    { label: "TRAVEL" },
    { label: "TECH" },
  ],
  primaryRegion: "United States",
  primaryRegionShare: "42% of total audience",
};

export const syncSchedule: SyncItem[] = [
  {
    id: "instagram",
    platform: "Instagram Insights",
    schedule: "Daily",
    status: "ok",
  },
  {
    id: "tiktok",
    platform: "TikTok Performance",
    schedule: "Real-time",
    status: "ok",
  },
  {
    id: "youtube",
    platform: "YouTube Data",
    schedule: "Failed",
    status: "failed",
  },
];

export const syncNote =
  "Automatic syncing ensures your media kit always displays live, verified data to potential brand partners.";
