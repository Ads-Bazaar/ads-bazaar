import {
  Smartphone,
  Coffee,
  Leaf,
  Dumbbell,
  Camera,
  Mic,
  ShoppingBag,
  Gamepad2,
  Utensils,
  Plane,
  Palette,
  BookOpen,
  type LucideIcon,
} from "lucide-react"

export type CampaignListStatus = "active" | "review" | "completed" | "disputed"

export type CampaignListItem = {
  id: string
  name: string
  subtitle: string
  icon: LucideIcon
  payoutAmount: string
  payoutAsset: string
  status: CampaignListStatus
  progress?: number // active | review
  completedDate?: string // completed
  hoursLeft?: number // disputed
}

export const campaignsList: CampaignListItem[] = [
  {
    id: "quantum-wearables",
    name: "Quantum Wearables Launch",
    subtitle: "Social Media Package • TikTok + IG",
    icon: Smartphone,
    payoutAmount: "500.00",
    payoutAsset: "USDC",
    status: "active",
    progress: 75,
  },
  {
    id: "aether-coffee",
    name: "Aether Coffee Rebrand",
    subtitle: "Video Review • 60s Shorts",
    icon: Coffee,
    payoutAmount: "1,200.00",
    payoutAsset: "USDC",
    status: "review",
    progress: 100,
  },
  {
    id: "solaris-eco-tech",
    name: "Solaris Eco-Tech",
    subtitle: "Blog Post • 1,500 Words",
    icon: Leaf,
    payoutAmount: "350.00",
    payoutAsset: "USDC",
    status: "completed",
    completedDate: "Feb 12",
  },
  {
    id: "stellar-fitness",
    name: "Stellar Fitness App",
    subtitle: "App Tutorial • Series of 3",
    icon: Dumbbell,
    payoutAmount: "2,500.00",
    payoutAsset: "USDC",
    status: "disputed",
    hoursLeft: 24,
  },
  {
    id: "luma-skincare",
    name: "Luma Skincare Drop",
    subtitle: "Photo Package • 6 Stills",
    icon: Camera,
    payoutAmount: "420.00",
    payoutAsset: "USDC",
    status: "active",
    progress: 40,
  },
  {
    id: "echo-podcast",
    name: "Echo Podcast Sponsorship",
    subtitle: "Audio Mention • 60s Read",
    icon: Mic,
    payoutAmount: "275.00",
    payoutAsset: "USDC",
    status: "review",
    progress: 100,
  },
  {
    id: "northwind-apparel",
    name: "Northwind Apparel",
    subtitle: "Unboxing Video • 90s Reel",
    icon: ShoppingBag,
    payoutAmount: "640.00",
    payoutAsset: "USDC",
    status: "completed",
    completedDate: "Jan 28",
  },
  {
    id: "pixelforge-studios",
    name: "PixelForge Studios",
    subtitle: "Gameplay Stream • 2hr Live",
    icon: Gamepad2,
    payoutAmount: "900.00",
    payoutAsset: "USDC",
    status: "disputed",
    hoursLeft: 6,
  },
  {
    id: "harvest-kitchen",
    name: "Harvest Kitchen Co.",
    subtitle: "Recipe Post • 3 Photos",
    icon: Utensils,
    payoutAmount: "310.00",
    payoutAsset: "USDC",
    status: "active",
    progress: 20,
  },
  {
    id: "skyline-travel",
    name: "Skyline Travel Guides",
    subtitle: "Carousel Post • 8 Slides",
    icon: Plane,
    payoutAmount: "560.00",
    payoutAsset: "USDC",
    status: "review",
    progress: 100,
  },
  {
    id: "artisan-collective",
    name: "Artisan Collective",
    subtitle: "Studio Tour • 60s Reel",
    icon: Palette,
    payoutAmount: "480.00",
    payoutAsset: "USDC",
    status: "completed",
    completedDate: "Mar 03",
  },
  {
    id: "bindwell-publishing",
    name: "Bindwell Publishing",
    subtitle: "Book Review • Long-form",
    icon: BookOpen,
    payoutAmount: "190.00",
    payoutAsset: "USDC",
    status: "active",
    progress: 60,
  },
]
