type PayoutsNetworkStatusProps = {
  status: {
    anchor: string;
    links: {
      href: string;
      label: string;
    }[];
    stellar: string;
  };
};

export function PayoutsNetworkStatus({ status }: PayoutsNetworkStatusProps) {
  return (
    <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--dash-border)] pt-4">
      <div className="flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-2">
          <span
            className="size-2 rounded-full bg-[var(--dash-accent)]"
            aria-hidden="true"
          />
          <p className="text-xs text-[var(--dash-muted)]">
            Stellar Network Status:{" "}
            <span className="font-semibold text-[var(--dash-accent)]">
              {status.stellar}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="size-2 rounded-full bg-[var(--dash-accent)]"
            aria-hidden="true"
          />
          <p className="text-xs text-[var(--dash-muted)]">
            Anchor Connectivity:{" "}
            <span className="font-semibold text-[var(--dash-accent)]">
              {status.anchor}
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {status.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xs text-[var(--dash-muted)] hover:text-[var(--dash-accent)] hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
