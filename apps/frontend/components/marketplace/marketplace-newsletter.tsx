export function MarketplaceNewsletter() {
  return (
    <div className="border-t border-outline-variant bg-background py-16">
      <div className="max-w-md mx-auto text-center">
        <h3 className="font-sora text-2xl font-bold text-on-surface">
          Never miss a funded drop.
        </h3>
        <p className="text-sm text-on-surface-variant mt-3 max-w-sm mx-auto">
          Get weekly alerts for new campaigns matching your creator profile and preferred assets.
        </p>
        <div className="flex gap-3 mt-8 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="creator@email.com"
            className="flex-1 border border-outline-variant bg-surface-container-high px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50"
          />
          <button
            disabled
            title="Coming soon"
            className="border border-outline-variant px-6 py-3 text-sm font-bold text-on-surface hover:border-primary-container hover:text-primary-container transition-colors"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
