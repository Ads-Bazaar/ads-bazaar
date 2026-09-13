"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Megaphone,
  ShieldCheck,
  Sparkles,
  WalletCards,
  X,
} from "lucide-react";
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
  const dialogRef = useRef<HTMLDivElement>(null);

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
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeOnboarding();
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    requestAnimationFrame(() => {
      dialogRef.current?.querySelector<HTMLElement>("button")?.focus();
    });
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
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

      <div
        ref={dialogRef}
        className="absolute inset-0 flex overflow-hidden bg-surface-container shadow-2xl sm:inset-4 sm:rounded-3xl lg:inset-auto lg:left-1/2 lg:top-1/2 lg:h-[min(720px,calc(100vh-48px))] lg:w-[min(1040px,calc(100vw-48px))] lg:-translate-x-1/2 lg:-translate-y-1/2"
      >
        {/* Decorative brand panel */}
        <aside className="relative hidden w-72 shrink-0 overflow-hidden border-r border-outline-variant bg-background lg:flex lg:flex-col lg:justify-between lg:p-8">
          <div
            aria-hidden="true"
            className="absolute -left-24 -top-32 size-96 rounded-full bg-[radial-gradient(closest-side,var(--db-primary-container),transparent)] opacity-15 blur-3xl"
          />
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary-container text-on-primary">
                <Megaphone className="size-5" aria-hidden="true" />
              </div>
              <span className="font-sora text-lg font-bold text-on-surface">AdsBazaar</span>
            </div>
            <p className="mt-12 text-xs font-semibold uppercase tracking-[0.18em] text-primary-container">
              Built for both sides
            </p>
            <h2 className="mt-3 font-sora text-2xl font-bold leading-tight text-on-surface">
              Campaigns without the trust gap.
            </h2>
            <p className="mt-4 text-sm leading-6 text-on-surface-variant">
              Create, collaborate, verify work, and release payments from one shared workflow.
            </p>
          </div>
          <div className="relative space-y-4 border-t border-outline-variant pt-6">
            {["Escrow-backed budgets", "Verified campaign delivery", "Fast global payouts"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-on-surface-variant">
                <Check className="size-4 text-primary-container" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* Form panel */}
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex h-16 shrink-0 items-center justify-between border-b border-outline-variant px-5 sm:px-8">
            <div className="flex items-center gap-4">
              <StepIndicator variant="minimal" totalSteps={3} currentStep={stepNumber} />
              <span className="hidden text-xs text-on-surface-variant sm:inline">
                {step === "role" ? "Choose a role" : step === "form" ? "Build your profile" : "Ready to go"}
              </span>
            </div>
            <button
              type="button"
              onClick={closeOnboarding}
              aria-label="Close"
              className="flex size-11 items-center justify-center rounded-xl text-on-surface-variant transition-colors duration-100 hover:bg-surface-container-high hover:text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </header>

          <main ref={mainRef} className="flex-1 overflow-y-auto no-scrollbar">
            <div className="mx-auto flex min-h-full max-w-2xl flex-col px-5 py-8 sm:px-8 sm:py-10 lg:justify-center lg:py-12">
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
                    onBack={() => { setStep("role"); scrollToTop(); }}
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
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-container">
        Start here
      </p>
      <h1 className="mt-3 max-w-xl font-sora text-3xl font-bold leading-tight tracking-tight text-on-surface sm:text-4xl">
        How will you use AdsBazaar?
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-6 text-on-surface-variant sm:text-base">
        Pick a workspace. You can add the other role later without creating a new account.
      </p>

      <div className="mt-8 grid w-full gap-3">
        <button
          type="button"
          onClick={() => onSelect("business")}
          className={`group grid min-h-36 w-full grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border bg-surface-container-high p-5 text-left transition-[border-color,background-color,transform] duration-100 hover:-translate-y-0.5 hover:border-primary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container active:translate-y-0 ${
            intent === "business"
              ? "border-primary-container"
              : "border-outline-variant"
          }`}
        >
          <div className="flex size-12 items-center justify-center rounded-xl bg-background text-primary-container transition-colors duration-100 group-hover:bg-primary-container group-hover:text-on-primary">
            <Building2 size={22} aria-hidden="true" />
          </div>
          <span>
            <span className="block font-sora text-lg font-semibold text-on-surface">Business workspace</span>
            <span className="mt-1 block text-sm leading-6 text-on-surface-variant">Launch campaigns, manage applications, and fund payouts.</span>
            <span className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-on-surface-variant">
              <span>Campaign tools</span><span>Escrow controls</span>
            </span>
          </span>
          <ArrowRight className="size-5 text-primary-container transition-transform duration-100 group-hover:translate-x-1" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={() => onSelect("creator")}
          className={`group grid min-h-36 w-full grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border bg-surface-container-high p-5 text-left transition-[border-color,background-color,transform] duration-100 hover:-translate-y-0.5 hover:border-primary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container active:translate-y-0 ${
            intent === "creator"
              ? "border-primary-container"
              : "border-outline-variant"
          }`}
        >
          <div className="flex size-12 items-center justify-center rounded-xl bg-background text-primary-container transition-colors duration-100 group-hover:bg-primary-container group-hover:text-on-primary">
            <Sparkles size={22} aria-hidden="true" />
          </div>
          <span>
            <span className="block font-sora text-lg font-semibold text-on-surface">Creator workspace</span>
            <span className="mt-1 block text-sm leading-6 text-on-surface-variant">Find paid briefs, submit your work, and track earnings.</span>
            <span className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-on-surface-variant">
              <span>Campaign discovery</span><span>Fast payouts</span>
            </span>
          </span>
          <ArrowRight className="size-5 text-primary-container transition-transform duration-100 group-hover:translate-x-1" aria-hidden="true" />
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
    <div className="flex flex-col items-start">
      <div className="flex size-14 items-center justify-center rounded-2xl bg-primary-container text-on-primary">
        <BadgeCheck className="size-7" aria-hidden="true" />
      </div>

      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-primary-container">Profile complete</p>
      <h1 className="mt-3 font-sora text-3xl font-bold leading-tight tracking-tight text-on-surface sm:text-4xl">
        Your workspace is ready.
      </h1>
      <p className="mt-3 max-w-lg text-sm leading-6 text-on-surface-variant sm:text-base">
        Your {role} profile is saved on this device. Connect your wallet when you return to keep access secure.
      </p>

      <div className="mt-7 grid w-full gap-3 sm:grid-cols-2">
        <div className="flex items-center gap-3 rounded-xl border border-outline-variant p-4 text-sm text-on-surface"><ShieldCheck className="size-5 text-primary-container" aria-hidden="true" /> Profile saved</div>
        <div className="flex items-center gap-3 rounded-xl border border-outline-variant p-4 text-sm text-on-surface"><WalletCards className="size-5 text-primary-container" aria-hidden="true" /> Wallet-ready access</div>
      </div>

      <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => onNavigate(dashboard)}
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-primary-container px-5 text-sm font-semibold text-on-primary transition-[opacity,transform] duration-100 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container active:translate-y-px"
        >
          Enter dashboard <ArrowRight className="size-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => onNavigate("/marketplace")}
          className="min-h-12 flex-1 rounded-xl border border-outline-variant px-5 text-sm font-semibold text-on-surface transition-colors duration-100 hover:bg-surface-container-high focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
        >
          Browse Marketplace
        </button>
      </div>
    </div>
  );
}
