import assert from "node:assert";
import { test, describe } from "node:test";
import { isValidWizardState, WizardState } from "./campaign-wizard-modal";

const validState: WizardState = {
  currentStep: 1,
  brief: {
    title: "Test Campaign",
    description: "A valid campaign description",
    imageUrl: null,
    platforms: ["Twitter/X", "Telegram"],
    startDate: "2026-09-01",
    endDate: "2026-09-30",
    campaignType: "awareness",
  },
  targeting: {
    categories: ["DeFi", "Web3", "Gaming"],
    minAudienceSize: "10k+",
    regions: ["Global"],
    requirements: "Must have active followers",
  },
  budget: {
    asset: "USDC",
    totalBudget: 500,
    creatorSlots: 5,
  },
  proof: {
    contentFormats: ["Thread", "Video"],
    deliverables: "1 thread with screenshot",
    submissionDeadline: "2026-09-15",
    verificationType: "manual",
    linkSocialPost: true,
    viewCountThreshold: false,
  },
};

describe("isValidWizardState", () => {
  test("returns true for a valid state object", () => {
    assert.strictEqual(isValidWizardState(validState), true);
  });

  test("returns false for non-object values", () => {
    assert.strictEqual(isValidWizardState(null), false);
    assert.strictEqual(isValidWizardState(undefined), false);
    assert.strictEqual(isValidWizardState("string"), false);
    assert.strictEqual(isValidWizardState(123), false);
  });

  test("returns false when currentStep is missing or invalid", () => {
    assert.strictEqual(isValidWizardState({ ...validState, currentStep: 0 }), false);
    assert.strictEqual(isValidWizardState({ ...validState, currentStep: 6 }), false);
    assert.strictEqual(isValidWizardState({ ...validState, currentStep: "1" }), false);
    assert.strictEqual(isValidWizardState({ ...validState, currentStep: NaN }), false);
  });

  test("returns false when budget fields are malformed or non-number", () => {
    const invalidBudget1 = {
      ...validState,
      budget: { ...validState.budget, totalBudget: "500" as unknown as number },
    };
    assert.strictEqual(isValidWizardState(invalidBudget1), false);

    const invalidBudget2 = {
      ...validState,
      budget: { ...validState.budget, totalBudget: NaN },
    };
    assert.strictEqual(isValidWizardState(invalidBudget2), false);

    const invalidBudget3 = {
      ...validState,
      budget: { ...validState.budget, creatorSlots: 0 },
    };
    assert.strictEqual(isValidWizardState(invalidBudget3), false);
  });

  test("returns false when brief platforms is not an array of strings", () => {
    const invalidPlatforms = {
      ...validState,
      brief: { ...validState.brief, platforms: "Twitter" as unknown as string[] },
    };
    assert.strictEqual(isValidWizardState(invalidPlatforms), false);
  });

  test("returns false when sections are missing or null", () => {
    const missingBrief = { ...validState, brief: null };
    assert.strictEqual(isValidWizardState(missingBrief), false);
  });
});
