export function CampaignsLoadMore() {
  return (
    <div className="mt-8 flex justify-center">
      <button
        type="button"
        disabled
        title="Coming soon"
        className="border border-[var(--dash-border)] px-8 py-3 text-sm font-bold tracking-widest text-[var(--dash-muted)] transition-colors hover:border-[var(--dash-accent)] hover:text-[var(--dash-accent)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        LOAD MORE CAMPAIGNS ∨
      </button>
    </div>
  );
}
