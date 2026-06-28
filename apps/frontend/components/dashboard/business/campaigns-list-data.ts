export type CampaignListStatus = "active" | "under-review" | "draft" | "completed";

export type CampaignListItem = {
  id: string;
  title: string;
  dateRange: string;
  status: CampaignListStatus;
  heroImagePath: string;
  budget: string;
  applicants: string;
  impressions?: string;
  avgReach?: string;
  estImpressions?: string;
  estReach?: string;
  totalSpent?: string;
  finalReach?: string;
  roiScore?: string;
  creatorsPaid?: string;
  draftNote?: string;
};

export const campaignsPageStats = {
  totalCampaigns: { value: "124", delta: "+12%" },
  activeNow: { value: "18", indicator: true },
  pendingReview: { value: "06", sub: "In queue" },
  totalBudgetLocked: { value: "142.5k", unit: "XLM" },
};

export const campaignsList: CampaignListItem[] = [
  {
    id: "cyberpunk-rebrand",
    title: "Cyberpunk Rebrand – Q4 Launch",
    dateRange: "Oct 12 – Dec 15, 2024",
    status: "active",
    heroImagePath: "/images/campaign-cyberpunk.jpg",
    budget: "45,000 XLM",
    applicants: "12 Creators",
    impressions: "1.2M",
    avgReach: "340k",
  },
  {
    id: "stellar-fitness",
    title: "Stellar Fitness App Promo",
    dateRange: "Jan 05 – Feb 28, 2025",
    status: "under-review",
    heroImagePath: "/images/campaign-fitness.jpg",
    budget: "12,500 XLM",
    applicants: "42 Creators",
    estImpressions: "—",
    estReach: "—",
  },
  {
    id: "nft-gallery",
    title: "NFT Gallery Summer Tour",
    dateRange: "Pending Dates",
    status: "draft",
    heroImagePath: "/images/campaign-nft.jpg",
    budget: "8,000 XLM",
    applicants: "0",
    draftNote: "Complete campaign setup to launch",
  },
  {
    id: "defi-education",
    title: "DeFi Protocol Education",
    dateRange: "Aug 01 – Sep 15, 2024",
    status: "completed",
    heroImagePath: "/images/campaign-defi.jpg",
    budget: "",
    applicants: "",
    totalSpent: "22,400 XLM",
    finalReach: "890k",
    roiScore: "4.8/5",
    creatorsPaid: "15",
  },
];

export const filterTabs = ["All", "Active", "Scheduled", "Drafts", "Completed"] as const;
