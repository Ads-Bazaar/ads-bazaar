export type EscrowStat = {
  id: string;
  label: string;
  value: string;
  unit: string;
  sub: string;
  isPositive?: boolean; // true = show lime delta line
};

export type WalletAsset = {
  id: string;
  ticker: string;
  name: string;
  amount: string;
  usdValue: string;
  iconId: "usdc" | "xlm" | "eurc";
};

export type ContractStatus = "funded" | "releasing";

export type SorobanContract = {
  id: string;
  name: string;
  address: string; // shortened, e.g. "CDX7...4R8Q"
  status: ContractStatus;
  amount: string;
  currency: string;
};

export type TxDirection = "in" | "out";

export type Transaction = {
  id: string;
  date: string;
  campaign: string;
  amount: string;
  direction: TxDirection;
  asset: string;
  recipient: string;
  recipientIsEscrow: boolean; // true = render as italic "Escrow Funding"
};

export const escrowStats: EscrowStat[] = [
  {
    id: "total-escrowed",
    label: "TOTAL ESCROWED",
    value: "50,000.00",
    unit: "XLM",
    sub: "+12.5% vs last month",
    isPositive: true,
  },
  {
    id: "allocated",
    label: "ALLOCATED FUNDS",
    value: "32,450.00",
    unit: "XLM",
    sub: "Across 14 active campaigns",
  },
  {
    id: "available",
    label: "AVAILABLE BALANCE",
    value: "17,550.00",
    unit: "XLM",
    sub: "Ready for new allocations",
  },
];

export const walletAssets: WalletAsset[] = [
  { id: "usdc", ticker: "USDC", name: "USD COIN", amount: "24,500.22", usdValue: "$24,500.22", iconId: "usdc" },
  { id: "xlm", ticker: "XLM", name: "LUMEN", amount: "142,890.00", usdValue: "$13,574.55", iconId: "xlm" },
  { id: "eurc", ticker: "EURC", name: "EURO COIN", amount: "1,400.00", usdValue: "$1,512.00", iconId: "eurc" },
];

export const sorobanContracts: SorobanContract[] = [
  {
    id: "summer-creator",
    name: "Summer Creator Series 2024",
    address: "CDX7...4R8Q",
    status: "funded",
    amount: "12,000",
    currency: "USDC",
  },
  {
    id: "bazaar-launch",
    name: "Bazaar Launch Promo",
    address: "GA5P...7H2L",
    status: "releasing",
    amount: "8,500",
    currency: "XLM",
  },
];

export const transactions: Transaction[] = [
  {
    id: "tx1",
    date: "Oct 24, 2024",
    campaign: "Summer Series Promo",
    amount: "2,500.00",
    direction: "in",
    asset: "USDC",
    recipient: "Escrow Funding",
    recipientIsEscrow: true,
  },
  {
    id: "tx2",
    date: "Oct 22, 2024",
    campaign: "Tech Review - V2",
    amount: "1,200.00",
    direction: "out",
    asset: "XLM",
    recipient: "GDF6...K99A",
    recipientIsEscrow: false,
  },
  {
    id: "tx3",
    date: "Oct 21, 2024",
    campaign: "Autumn Bazaar",
    amount: "450.00",
    direction: "out",
    asset: "EURC",
    recipient: "GDX2...P3S1",
    recipientIsEscrow: false,
  },
  {
    id: "tx4",
    date: "Oct 18, 2024",
    campaign: "Marketplace Listing",
    amount: "10,000.00",
    direction: "in",
    asset: "XLM",
    recipient: "Escrow Funding",
    recipientIsEscrow: true,
  },
];
