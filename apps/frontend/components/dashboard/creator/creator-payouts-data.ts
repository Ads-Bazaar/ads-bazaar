import {
  Gamepad2,
  ShieldCheck,
  ShoppingBag,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type PayoutStatus = "claimed" | "pending" | "failed";

export type PayoutHistoryItem = {
  amount: string;
  campaignIcon: LucideIcon;
  campaignName: string;
  date: string;
  id: string;
  status: PayoutStatus;
  txUrl: string | null;
};

export type WalletBalance = {
  amount: string;
  asset: string;
  label: string;
};

export const payoutSummary = {
  availableToClaim: "$2,840.15",
  pendingArrival: "Estimated arrival: 48h",
  pendingVerification: "$842.00",
  totalEarned: "$12,450.80",
  totalEarnedDelta: "+12% from last month",
};

export const currentCycle = {
  endsDate: "Oct 24, 2023 (4 days left)",
  endsLabel: "CURRENT CYCLE ENDS",
};

export const connectedWallet = {
  address: "GDFX...3Y8P",
  balances: [
    { amount: "1,240.00", asset: "USD Coin (Circle)", label: "USDC BALANCE" },
    { amount: "4,120.50", asset: "Lumen (Native)", label: "XLM BALANCE" },
    { amount: "250.00", asset: "Euro Coin (Circle)", label: "EURC BALANCE" },
  ] satisfies WalletBalance[],
  connectedVia: "Freighter",
};

export const offRampFeatures = [
  "Low network fees (< 0.0001 XLM)",
  "Global Anchor Support (SEP-24)",
];

export const networkStatus = {
  anchor: "Normal",
  links: [
    { href: "https://stellar.expert", label: "Stellar Expert" },
    { href: "/support", label: "Technical Support" },
    { href: "/terms", label: "Terms of Settlement" },
  ],
  stellar: "Operational",
};

export const payoutHistory: PayoutHistoryItem[] = [
  {
    amount: "$450.00 USDC",
    campaignIcon: ShoppingBag,
    campaignName: "Autumn Sneakers Refresh",
    date: "Oct 12, 2023",
    id: "ph-1",
    status: "claimed",
    txUrl: "https://stellar.expert/explorer/testnet/tx/placeholder1",
  },
  {
    amount: "$1,200.00 USDC",
    campaignIcon: Gamepad2,
    campaignName: "Web3 Gaming Review Series",
    date: "Oct 08, 2023",
    id: "ph-2",
    status: "claimed",
    txUrl: "https://stellar.expert/explorer/testnet/tx/placeholder2",
  },
  {
    amount: "$842.00 USDC",
    campaignIcon: ShieldCheck,
    campaignName: "Crypto Security Awareness",
    date: "Oct 05, 2023",
    id: "ph-3",
    status: "pending",
    txUrl: null,
  },
  {
    amount: "$2,150.00 USDC",
    campaignIcon: TrendingUp,
    campaignName: "Fintech App Promotion",
    date: "Sep 28, 2023",
    id: "ph-4",
    status: "failed",
    txUrl: "https://stellar.expert/explorer/testnet/tx/placeholder4",
  },
];
