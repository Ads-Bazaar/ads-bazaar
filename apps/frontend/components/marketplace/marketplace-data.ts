export type CampaignStatus = "funded" | "high-priority";

export type MarketplaceCampaign = {
  id: string;
  title: string;
  description: string;
  status: CampaignStatus;
  statusLabel: string;
  refId: string;
  payout: string;
  currency: string;
  deadline: string;
  applicantAvatars: number;
  hasApplyNow: boolean;
};

export const marketplaceCampaigns: MarketplaceCampaign[] = [
  {
    id: "nextgen-wallet",
    title: "NextGen Wallet Review",
    description: "Create a 60-second tutorial on setting up a trustline for USDC on Stellar. High engagement required.",
    status: "funded",
    statusLabel: "FUNDED",
    refId: "ID: #BA-0922",
    payout: "2,450.00",
    currency: "USDC",
    deadline: "14 Days",
    applicantAvatars: 3,
    hasApplyNow: false,
  },
  {
    id: "lumen-node",
    title: "Lumen Node Operator UGC",
    description: "Explain the benefits of running a validator node on the Stellar network. Target audience: Developers & IT pros.",
    status: "high-priority",
    statusLabel: "HIGH PRIORITY",
    refId: "",
    payout: "15,000",
    currency: "XLM",
    deadline: "5 Days",
    applicantAvatars: 2,
    hasApplyNow: true,
  },
  {
    id: "cross-border",
    title: "Cross-Border Storytelling",
    description: "Document your experience sending money from Lagos to Nairobi using the latest fintech bridge. Authentic, raw footage.",
    status: "funded",
    statusLabel: "FUNDED",
    refId: "",
    payout: "850,000",
    currency: "NGN",
    deadline: "21 Days",
    applicantAvatars: 1,
    hasApplyNow: false,
  },
  {
    id: "twitter-alpha",
    title: "Twitter Alpha Thread",
    description: "A 10-post deep dive into Soroban smart contracts for traditional finance audiences. Technical but accessible.",
    status: "funded",
    statusLabel: "FUNDED",
    refId: "",
    payout: "1,200.00",
    currency: "USDC",
    deadline: "2 Days",
    applicantAvatars: 1,
    hasApplyNow: false,
  },
  {
    id: "healthy-habits",
    title: "Healthy Habits x Stellar",
    description: "Lifestyle content showing how you use Anchor-powered savings apps to fund your wellness routine.",
    status: "funded",
    statusLabel: "FUNDED",
    refId: "",
    payout: "150,000",
    currency: "KES",
    deadline: "10 Days",
    applicantAvatars: 2,
    hasApplyNow: false,
  },
  {
    id: "defi-moms",
    title: "DeFi Explained for Moms",
    description: "Create a relatable video explaining why holding stablecoins is safer than local currency during inflation.",
    status: "funded",
    statusLabel: "FUNDED",
    refId: "",
    payout: "3,000.00",
    currency: "USDC",
    deadline: "7 Days",
    applicantAvatars: 1,
    hasApplyNow: false,
  },
];

export const quickTags = ["WEB3 NATIVE", "E-COMMERCE", "TIKTOK TREND", "UGC"];
