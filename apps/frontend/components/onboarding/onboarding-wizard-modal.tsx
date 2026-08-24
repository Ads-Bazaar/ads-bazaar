"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { X, LayoutGrid, Sparkles, Tag } from "lucide-react";
import { useOnboardingModal } from "./onboarding-modal-context";
import { StepIndicator } from "./step-indicator";
import { BusinessForm } from "./business-form";
import { CreatorForm } from "./creator-form";
import { useRole } from "@/components/role/role-context";

type Role = "business" | "creator" | null;

type Step = "role" | "form" | "complete";

const STORAGE_KEY = "adsbazaar_onboarding";

const emptyBusinessForm = {
  name: "",
  industry: "",
  country: "",
  email: "",
  website: "",
  description: "",
};

const emptyCreatorForm = {
  displayName: "",
  category: "",
  country: "",
  audienceSize: "",
  socialLink: "",
  bio: "",
};

export function OnboardingWizardModal() {
  const { isOpen, intent, closeOnboarding } = useOnboardingModal();
  const { setRole: persistRole } = useRole();
  const router = useRouter();
  const mainRef = useRef<HTMLElement>(null);

  const [step, setStep] = useState<Step>("role");
  const [role, setRole] = useState<Role>(null);
  const [businessData, setBusinessData] = useState(emptyBusinessForm);
  const [creatorData, setCreatorData] = useState(emptyCreatorForm);

  useEffect(() => {
    if (!isOpen) return;
    setStep("role");
    setRole(intent);
    setBusinessData(emptyBusinessForm);
    setCreatorData(emptyCreatorForm);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {}
  }, [isOpen, intent]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeOnboarding();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeOnboarding]);

  function scrollToTop() {
    mainRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }

  function selectRole(r: "business" | "creator") {
    setRole(r);
    setStep("form");
    scrollToTop();
  }

  function handleFormSubmit() {
    // Persist the chosen role to context + localStorage so /dashboard can redirect correctly
    if (role) persistRole(role);
    setStep("complete");
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {}
    scrollToTop();
  }

  function handleComplete(destination: string) {
    closeOnboarding();
    router.push(destination);
  }

  if (!isOpen) return null;

  const stepNumber = step === "role" ? 1 : step === "form" ? 2 : 3;

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Get started with AdsBazaar"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
        onClick={closeOnboarding}
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 bottom-0 top-0 flex overflow-hidden bg-surface-container sm:inset-x-4 sm:top-4 sm:bottom-4 sm:rounded-[24px] lg:inset-x-auto lg:left-1/2 lg:top-1/2 lg:h-[min(680px,calc(100vh-64px))] lg:w-full lg:max-w-[900px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-[24px]">
        {/* Decorative brand panel */}
        <aside className="relative hidden w-[320px] shrink-0 overflow-hidden bg-[#0b0b0b] lg:block">
          <div
            aria-hidden="true"
            className="absolute inset-x-[-20%] top-[-10%] h-[75%] rounded-full bg-[radial-gradient(closest-side,var(--db-primary-container),transparent)] opacity-[0.22] blur-3xl"
          />
          <div className="absolute inset-x-0 bottom-10 flex flex-col items-center px-8 text-center">
            <div className="mb-5 flex size-12 items-center justify-center rounded-[14px] border border-outline-variant/60 bg-surface-container-high">
              <Tag className="size-5 text-primary-container" aria-hidden="true" />
            </div>
            <span className="font-sora text-[20px] font-bold text-on-surface">
              AdsBazaar
            </span>
            <p className="mt-2 text-[13px] leading-relaxed text-on-surface-variant">
              The trust layer for global creator campaigns — escrow-backed,
              instantly paid.
            </p>
          </div>
        </aside>

        {/* Form panel */}
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex h-14 shrink-0 items-center justify-between border-b border-outline-variant px-6">
            <StepIndicator variant="minimal" totalSteps={3} currentStep={stepNumber} />
            <button
              type="button"
              onClick={closeOnboarding}
              aria-label="Close"
              className="flex size-8 items-center justify-center rounded-full text-on-surface-variant transition hover:bg-surface-container-high hover:text-on-surface"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </header>

          <main ref={mainRef} className="flex-1 overflow-y-auto no-scrollbar">
            <div className="mx-auto flex max-w-[480px] flex-col items-center px-6 py-8 lg:items-stretch lg:text-left">
              {step === "role" && (
                <RoleStep
                  intent={intent}
                  onSelect={selectRole}
                />
              )}

              {step === "form" && role === "business" && (
                <div className="w-full">
                  <BusinessForm
                    data={businessData}
                    onChange={setBusinessData}
                    onSubmit={handleFormSubmit}
                    onBack={() => { setStep("role"); scrollToTop(); }}
                  />
                  <p className="mt-6 text-center text-[13px] text-on-surface-variant">
                    By continuing, you agree to our{" "}
                    <span className="text-on-surface hover:underline cursor-pointer">
                      Service Terms
                    </span>
                    .
                  </p>
                </div>
              )}

              {step === "form" && role === "creator" && (
                <div className="w-full">
                  <CreatorForm
                    data={creatorData}
                    onChange={setCreatorData}
                    onSubmit={handleFormSubmit}
                    onSkip={() => handleComplete("/dashboard/creator")}
                  />
                </div>
              )}

              {step === "complete" && (
                <CompleteStep
                  role={role!}
                  onNavigate={handleComplete}
                />
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function RoleStep({
  intent,
  onSelect,
}: {
  intent: "business" | "creator" | null;
  onSelect: (role: "business" | "creator") => void;
}) {
  return (
    <>
      <h1 className="font-sora text-[32px] font-extrabold text-on-surface text-center leading-tight">
        Select your journey.
      </h1>
      <p className="text-[15px] text-on-surface-variant text-center mt-3 max-w-[480px]">
        Welcome to the AdsBazaar ecosystem. Choose how you want to participate
        in the creator economy.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full">
        <button
          type="button"
          onClick={() => onSelect("business")}
          className={`group flex flex-1 flex-col rounded-2xl border bg-surface-container-high p-6 text-left transition-all hover:-translate-y-0.5 hover:border-primary-container ${
            intent === "business"
              ? "border-primary-container"
              : "border-outline-variant"
          }`}
        >
          <div className="flex size-10 items-center justify-center rounded-xl bg-background transition-colors group-hover:bg-primary-container/10">
            <LayoutGrid size={20} className="text-on-surface" />
          </div>
          <h3 className="font-sora text-lg font-semibold text-on-surface mt-4">
            I am a Business
          </h3>
          <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
            Launch creator campaigns, fund escrow, and manage creator
            relationships from one dashboard.
          </p>
          <span className="text-[12px] font-semibold uppercase tracking-[0.05em] text-primary-container mt-5">
            SELECT ROLE →
          </span>
        </button>

        <button
          type="button"
          onClick={() => onSelect("creator")}
          className={`group flex flex-1 flex-col rounded-2xl border bg-surface-container-high p-6 text-left transition-all hover:-translate-y-0.5 hover:border-primary-container ${
            intent === "creator"
              ? "border-primary-container"
              : "border-outline-variant"
          }`}
        >
          <div className="flex size-10 items-center justify-center rounded-xl bg-background transition-colors group-hover:bg-primary-container/10">
            <Sparkles size={20} className="text-on-surface" />
          </div>
          <h3 className="font-sora text-lg font-semibold text-on-surface mt-4">
            I am a Creator
          </h3>
          <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
            Discover campaigns, apply with your profile, submit content, and get
            paid instantly.
          </p>
          <span className="text-[12px] font-semibold uppercase tracking-[0.05em] text-primary-container mt-5">
            SELECT ROLE →
          </span>
        </button>
      </div>
    </>
  );
}

function CompleteStep({
  role,
  onNavigate,
}: {
  role: "business" | "creator";
  onNavigate: (path: string) => void;
}) {
  const dashboard =
    role === "business" ? "/dashboard/business" : "/dashboard/creator";

  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex size-16 items-center justify-center rounded-2xl bg-surface-container-high shadow-[0_0_32px_rgba(200,242,50,0.12)]">
        <svg
          className="size-9 text-primary-container"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>

      <h1 className="font-sora text-[28px] font-extrabold text-on-surface leading-tight mt-6">
        You&apos;re all set!
      </h1>
      <p className="text-[15px] text-on-surface-variant mt-3 max-w-[400px]">
        Your profile is saved on this device. Connect your wallet each visit to
        access your dashboard.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full mt-8">
        <button
          type="button"
          onClick={() => onNavigate(dashboard)}
          className="flex-1 h-[48px] bg-primary-container text-on-primary font-semibold text-[14px] rounded-full hover:opacity-90 transition-opacity"
        >
          Enter Dashboard →
        </button>
        <button
          type="button"
          onClick={() => onNavigate("/marketplace")}
          className="flex-1 h-[48px] border border-on-surface text-on-surface font-semibold text-[14px] rounded-full hover:bg-surface-container-high transition-colors"
        >
          Browse Marketplace
        </button>
      </div>
    </div>
  );
}
