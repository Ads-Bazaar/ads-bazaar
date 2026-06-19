export type CampaignStatus = "funded" | "high-priority";

export interface MarketplaceCampaign {
  id: string;
  refId?: string;
  title: string;
  description: string;
  status: CampaignStatus;
  payoutAmount: string;
  payoutCurrency: string;
  deadline: string;
  applicantAvatars: string[];
  hasApplyNow: boolean;
  iconId?: string;
}

export const marketplaceCampaigns: MarketplaceCampaign[] = [
  {
    id: "1",
    refId: "#BA-0922",
    title: "Vibrant TikTok Promo for Eco-Friendly Water Bottle",
    description:
      "Looking for active creators to produce high-energy, engaging TikTok videos promoting our new reusable insulated water bottles. Highlight the 24-hour cold retention and sleek modern designs.",
    status: "high-priority",
    payoutAmount: "2,450.00",
    payoutCurrency: "USDC",
    deadline: "14 Days",
    applicantAvatars: [
      "/avatars/avatar1.jpg",
      "/avatars/avatar2.jpg",
      "/avatars/avatar3.jpg",
      "/avatars/avatar4.jpg",
      "/avatars/avatar5.jpg",
    ],
    hasApplyNow: true,
    iconId: "briefcase",
  },
  {
    id: "2",
    refId: "#BA-0923",
    title: "Instagram Carousel: Web3 Dev Tooling Platform Launch",
    description:
      "Create an educational carousel post explaining the developer experience benefits of our new Soroban-based smart contract deployment tools. Target blockchain developers.",
    status: "funded",
    payoutAmount: "1,200.00",
    payoutCurrency: "USDC",
    deadline: "7 Days",
    applicantAvatars: [
      "/avatars/avatar6.jpg",
      "/avatars/avatar7.jpg",
    ],
    hasApplyNow: false,
    iconId: "file-text",
  },
  {
    id: "3",
    title: "YouTube Dedicated Review: Stellar Wallet Integration Guide",
    description:
      "Produce a detailed, step-by-step tutorial video showing how to integrate Stellar Freighter API into a standard Next.js application, from wallet connection to signing transactions.",
    status: "funded",
    payoutAmount: "3,500.00",
    payoutCurrency: "USDC",
    deadline: "21 Days",
    applicantAvatars: [],
    hasApplyNow: false,
  },
  {
    id: "nextgen-wallet",
    refId: "#BA-0922",
    title: "NextGen Wallet Review",
    description:
      "Create a 60-second tutorial on setting up a trustline for USDC on Stellar. High engagement required.",
    status: "funded",
    payoutAmount: "2,450.00",
    payoutCurrency: "USDC",
    deadline: "14 Days",
    applicantAvatars: [
      "/avatars/avatar1.jpg",
      "/avatars/avatar2.jpg",
      "/avatars/avatar3.jpg",
    ],
    hasApplyNow: false,
  },
  {
    id: "lumen-node",
    title: "Lumen Node Operator UGC",
    description:
      "Explain the benefits of running a validator node on the Stellar network. Target audience: Developers & IT pros.",
    status: "high-priority",
    payoutAmount: "15,000",
    payoutCurrency: "XLM",
    deadline: "5 Days",
    applicantAvatars: [
      "/avatars/avatar1.jpg",
      "/avatars/avatar2.jpg",
    ],
    hasApplyNow: true,
  },
  {
    id: "cross-border",
    title: "Cross-Border Storytelling",
    description:
      "Document your experience sending money from Lagos to Nairobi using the latest fintech bridge. Authentic, raw footage.",
    status: "funded",
    payoutAmount: "850,000",
    payoutCurrency: "NGN",
    deadline: "21 Days",
    applicantAvatars: ["/avatars/avatar1.jpg"],
    hasApplyNow: false,
  },
  {
    id: "twitter-alpha",
    title: "Twitter Alpha Thread",
    description:
      "A 10-post deep dive into Soroban smart contracts for traditional finance audiences. Technical but accessible.",
    status: "funded",
    payoutAmount: "1,200.00",
    payoutCurrency: "USDC",
    deadline: "2 Days",
    applicantAvatars: ["/avatars/avatar1.jpg"],
    hasApplyNow: false,
  },
  {
    id: "healthy-habits",
    title: "Healthy Habits x Stellar",
    description:
      "Lifestyle content showing how you use Anchor-powered savings apps to fund your wellness routine.",
    status: "funded",
    payoutAmount: "150,000",
    payoutCurrency: "KES",
    deadline: "10 Days",
    applicantAvatars: [
      "/avatars/avatar1.jpg",
      "/avatars/avatar2.jpg",
    ],
    hasApplyNow: false,
  },
  {
    id: "defi-moms",
    title: "DeFi Explained for Moms",
    description:
      "Create a relatable video explaining why holding stablecoins is safer than local currency during inflation.",
    status: "funded",
    payoutAmount: "3,000.00",
    payoutCurrency: "USDC",
    deadline: "7 Days",
    applicantAvatars: ["/avatars/avatar1.jpg"],
    hasApplyNow: false,
  },
];

export const quickTags = [
  "WEB3 NATIVE",
  "E-COMMERCE",
  "TIKTOK TREND",
  "UGC",
];
