export interface MarketplaceCampaign {
  id: string;
  refId?: string;
  title: string;
  description: string;
  status: "funded" | "high-priority";
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
    description: "Looking for active creators to produce high-energy, engaging TikTok videos promoting our new reusable insulated water bottles. Highlight the 24-hour cold retention and sleek modern designs.",
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
    description: "Create an educational carousel post explaining the developer experience benefits of our new Soroban-based smart contract deployment tools. Target blockchain developers.",
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
    description: "Produce a detailed, step-by-step tutorial video showing how to integrate Stellar Freighter API into a standard Next.js application, from wallet connection to signing transactions.",
    status: "funded",
    payoutAmount: "3,500.00",
    payoutCurrency: "USDC",
    deadline: "21 Days",
    applicantAvatars: [],
    hasApplyNow: false,
  },
];
