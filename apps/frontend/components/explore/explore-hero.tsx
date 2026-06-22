import { hashtagPills, type TrendingCampaignCategory } from "./explore-data";

type ExploreHeroProps = {
  activeTag: TrendingCampaignCategory | null;
  onTagClick: (category: TrendingCampaignCategory) => void;
};

export function ExploreHero({ activeTag, onTagClick }: ExploreHeroProps) {
  return (
    <section>
      <h1 className="font-sora text-[48px] lg:text-[64px] font-[900] italic text-on-surface text-center leading-[1.05] max-w-[700px] mx-auto">
        Discover the Next Big Growth Opportunity
      </h1>
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {hashtagPills.map((pill) => (
          <button
            key={pill.category}
            type="button"
            onClick={() => onTagClick(pill.category)}
            aria-pressed={activeTag === pill.category}
            className={`border border-outline-variant px-4 py-2 text-sm font-semibold transition-colors cursor-pointer ${
              activeTag === pill.category
                ? "bg-primary-container text-on-primary"
                : "bg-surface-container-high text-on-surface-variant hover:border-primary-container hover:text-primary-container"
            }`}
          >
            {pill.label}
          </button>
        ))}
      </div>
    </section>
  );
}
