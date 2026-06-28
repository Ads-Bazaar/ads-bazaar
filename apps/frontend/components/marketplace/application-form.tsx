"use client";

import { useEffect, useState } from "react";
import { ChevronDown, CircleCheck } from "lucide-react";
import { campaignDetailMock } from "./campaign-detail-data";

const PITCH_MIN_LENGTH = 20;

type FormErrors = {
  portfolioLink?: string;
  contentFormat?: string;
  pitchMessage?: string;
};

export function ApplicationForm({
  campaignId = campaignDetailMock.id,
}: {
  campaignId?: string;
}) {
  const storageKey = `campaign-application:${campaignId}`;

  const [portfolioLink, setPortfolioLink] = useState("");
  const [contentFormat, setContentFormat] = useState("");
  const [pitchMessage, setPitchMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(storageKey)) {
        setSubmitted(true);
      }
    } catch {
      // sessionStorage unavailable (private mode etc.) — leave form active
    }
  }, [storageKey]);

  const allFilled =
    portfolioLink.trim() !== "" &&
    contentFormat !== "" &&
    pitchMessage.trim() !== "";

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!portfolioLink.trim().startsWith("http")) {
      next.portfolioLink = "Enter a valid link starting with http.";
    }
    if (!contentFormat) {
      next.contentFormat = "Select a content format.";
    }
    if (pitchMessage.trim().length < PITCH_MIN_LENGTH) {
      next.pitchMessage = `Pitch must be at least ${PITCH_MIN_LENGTH} characters.`;
    }
    return next;
  };

  const handleSubmit = () => {
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const submission = {
      portfolioLink: portfolioLink.trim(),
      contentFormat,
      pitchMessage: pitchMessage.trim(),
    };
    try {
      sessionStorage.setItem(storageKey, JSON.stringify(submission));
    } catch {
      // persistence is best-effort; still show success for this session
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-outline-variant bg-surface-container p-6">
        <div className="flex flex-col items-center gap-3 py-6 text-center">
          <CircleCheck
            className="size-10 text-primary-container"
            aria-hidden="true"
          />
          <h3 className="font-sora text-sm font-bold uppercase tracking-[0.05em] text-on-surface">
            APPLICATION SUBMITTED!
          </h3>
          <p className="text-sm text-on-surface-variant">
            Your application is in. The brand will review your pitch and reach
            out if it&apos;s a match.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-outline-variant bg-surface-container p-6">
      <h3 className="font-sora text-sm font-bold uppercase tracking-[0.05em] text-on-surface mb-6">
        APPLY FOR CAMPAIGN
      </h3>

      <div className="flex flex-col gap-5">
        {/* Portfolio Link */}
        <div>
          <label className="text-[10px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant mb-2 block">
            PORTFOLIO LINK
          </label>
          <input
            type="url"
            placeholder="https://instagram.com/handle"
            value={portfolioLink}
            onChange={(e) => {
              setPortfolioLink(e.target.value);
              setErrors((prev) => ({ ...prev, portfolioLink: undefined }));
            }}
            aria-invalid={errors.portfolioLink ? true : undefined}
            className="w-full border border-outline-variant bg-surface-container-high px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50"
          />
          {errors.portfolioLink ? (
            <p className="mt-1.5 text-xs text-red-400">{errors.portfolioLink}</p>
          ) : null}
        </div>

        {/* Content Format */}
        <div>
          <label className="text-[10px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant mb-2 block">
            CONTENT FORMAT
          </label>
          <div className="relative">
            <select
              value={contentFormat}
              onChange={(e) => {
                setContentFormat(e.target.value);
                setErrors((prev) => ({ ...prev, contentFormat: undefined }));
              }}
              aria-invalid={errors.contentFormat ? true : undefined}
              className="w-full border border-outline-variant bg-surface-container-high px-4 py-3 text-sm text-on-surface appearance-none"
            >
              <option value="" disabled>
                Select a format
              </option>
              {campaignDetailMock.contentFormats.map((format) => (
                <option key={format} value={format}>
                  {format}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant/50 pointer-events-none" />
          </div>
          {errors.contentFormat ? (
            <p className="mt-1.5 text-xs text-red-400">{errors.contentFormat}</p>
          ) : null}
        </div>

        {/* Pitch Message */}
        <div>
          <label className="text-[10px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant mb-2 block">
            PITCH MESSAGE
          </label>
          <textarea
            placeholder="Why are you a good fit for this wearable launch?"
            value={pitchMessage}
            onChange={(e) => {
              setPitchMessage(e.target.value);
              setErrors((prev) => ({ ...prev, pitchMessage: undefined }));
            }}
            aria-invalid={errors.pitchMessage ? true : undefined}
            className="w-full border border-outline-variant bg-surface-container-high px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 min-h-[120px] resize-none"
          />
          {errors.pitchMessage ? (
            <p className="mt-1.5 text-xs text-red-400">{errors.pitchMessage}</p>
          ) : null}
        </div>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={!allFilled}
        className="w-full bg-primary-container text-on-primary py-4 font-bold text-sm tracking-wide hover:opacity-90 transition-opacity mt-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:opacity-50"
      >
        SUBMIT APPLICATION ▷
      </button>
    </div>
  );
}
