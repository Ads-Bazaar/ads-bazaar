import { AlertCircle } from "lucide-react";

type WalletErrorMessageProps = {
  error: string;
  className?: string;
};

export function WalletErrorMessage({ error, className = "" }: WalletErrorMessageProps) {
  const showFreighterLink = error.toLowerCase().includes("install");

  return (
    <div
      className={`mt-3 flex w-full max-w-[400px] items-start gap-2 rounded border border-red-400/30 bg-red-400/10 px-3 py-2 text-left text-sm text-red-400 ${className}`}
      role="alert"
    >
      <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      <div>
        <p>{error}</p>
        {showFreighterLink && (
          <a
            href="https://www.freighter.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-xs underline transition-colors hover:text-red-300"
          >
            Get Freighter wallet →
          </a>
        )}
      </div>
    </div>
  );
}
