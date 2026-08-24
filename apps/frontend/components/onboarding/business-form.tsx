"use client";

import { InputHTMLAttributes, useState } from "react";
import { Mail, Link as LinkIcon, ArrowRight } from "lucide-react";

type BusinessFormData = {
  name: string;
  industry: string;
  country: string;
  email: string;
  website: string;
  description: string;
};

type BusinessFormProps = {
  data: BusinessFormData;
  onChange: (data: BusinessFormData) => void;
  onSubmit: () => void;
  onBack: () => void;
};

const INDUSTRIES = [
  "Technology",
  "Fashion & Beauty",
  "Food & Beverage",
  "Gaming",
  "Finance",
  "Health & Wellness",
  "Entertainment",
  "Education",
  "Other",
];

const COUNTRIES = [
  "Nigeria",
  "Kenya",
  "South Africa",
  "Ghana",
  "United States",
  "United Kingdom",
  "Germany",
  "Brazil",
  "Indonesia",
  "Other",
];

type Errors = Partial<Record<keyof BusinessFormData, string>>;

function validate(data: BusinessFormData): Errors {
  const errors: Errors = {};
  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Business Name is required (min 2 chars)";
  }
  if (!data.industry) {
    errors.industry = "Please select an industry";
  }
  if (!data.country) {
    errors.country = "Please select a country";
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Valid email is required";
  }
  if (data.website && !/^https:\/\//.test(data.website)) {
    errors.website = "URL must start with https://";
  }
  return errors;
}

export function BusinessForm({
  data,
  onChange,
  onSubmit,
  onBack,
}: BusinessFormProps) {
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());

  const handleChange = (field: keyof BusinessFormData, value: string) => {
    const next = { ...data, [field]: value };
    onChange(next);
    if (touched.has(field)) {
      const errs = validate(next);
      setErrors((prev) => {
        const updated = { ...prev };
        if (errs[field]) {
          updated[field] = errs[field]!;
        } else {
          delete updated[field];
        }
        return updated;
      });
    }
  };

  const handleBlur = (field: keyof BusinessFormData) => {
    setTouched((prev) => new Set(prev).add(field));
    const errs = validate(data);
    if (errs[field]) {
      setErrors((prev) => ({ ...prev, [field]: errs[field]! }));
    } else {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(data);
    setErrors(errs);
    setTouched(new Set(["name", "industry", "country", "email", "website"]));
    if (Object.keys(errs).length === 0) {
      onSubmit();
    }
  };

  const inputClass = (field: keyof BusinessFormData) =>
    `w-full h-[52px] bg-[var(--db-surface-high)] border ${
      errors[field] && touched.has(field)
        ? "border-[#ef4444]"
        : "border-[var(--db-outline-variant)]"
    } rounded-xl px-4 text-[14px] font-geist text-[var(--db-on-surface)] outline-none transition-all focus:border-[var(--db-primary-container)] focus:ring-4 focus:ring-[var(--db-primary-container)]/10 placeholder:text-[var(--db-on-surface-variant)]`;

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-0">
        <div className="flex-1">
          <h2 className="font-sora text-[24px] font-semibold text-[var(--db-on-surface)]">
            Business Identity
          </h2>
          <p className="font-geist text-[14px] text-[var(--db-on-surface-variant)] mt-2 mb-6">
            Define how you will appear in the creator marketplace. This
            information helps us tailor your campaign opportunities.
          </p>

          <div className="space-y-5">
            <div>
              <label className="block font-geist text-[13px] font-medium text-[var(--db-on-surface-variant)] mb-1.5">
                Business Name
              </label>
              <input
                className={inputClass("name")}
                placeholder="e.g. Atlas Digital Group"
                value={data.name}
                onChange={(e) => handleChange("name", e.target.value)}
                onBlur={() => handleBlur("name")}
              />
              {errors.name && touched.has("name") && (
                <p className="font-geist text-[12px] text-[#ef4444] mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block font-geist text-[13px] font-medium text-[var(--db-on-surface-variant)] mb-1.5">
                  Industry
                </label>
                <select
                  className={inputClass("industry")}
                  value={data.industry}
                  onChange={(e) => handleChange("industry", e.target.value)}
                  onBlur={() => handleBlur("industry")}
                >
                  <option value="">Select Industry</option>
                  {INDUSTRIES.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
                {errors.industry && touched.has("industry") && (
                  <p className="font-geist text-[12px] text-[#ef4444] mt-1">
                    {errors.industry}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label className="block font-geist text-[13px] font-medium text-[var(--db-on-surface-variant)] mb-1.5">
                  Country
                </label>
                <select
                  className={inputClass("country")}
                  value={data.country}
                  onChange={(e) => handleChange("country", e.target.value)}
                  onBlur={() => handleBlur("country")}
                >
                  <option value="">Select Country</option>
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {errors.country && touched.has("country") && (
                  <p className="font-geist text-[12px] text-[#ef4444] mt-1">
                    {errors.country}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block font-geist text-[13px] font-medium text-[var(--db-on-surface-variant)] mb-1.5">
                Business Email
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--db-on-surface-variant)]"
                />
                <input
                  className={`${inputClass("email")} pl-9`}
                  placeholder="hello@yourbusiness.com"
                  type="email"
                  value={data.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                />
              </div>
              {errors.email && touched.has("email") && (
                <p className="font-geist text-[12px] text-[#ef4444] mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block font-geist text-[13px] font-medium text-[var(--db-on-surface-variant)] mb-1.5">
                Website or Social Link
              </label>
              <div className="relative">
                <LinkIcon
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--db-on-surface-variant)]"
                />
                <input
                  className={`${inputClass("website")} pl-9`}
                  placeholder="https://"
                  type="url"
                  value={data.website}
                  onChange={(e) => handleChange("website", e.target.value)}
                  onBlur={() => handleBlur("website")}
                />
              </div>
              {errors.website && touched.has("website") && (
                <p className="font-geist text-[12px] text-[#ef4444] mt-1">
                  {errors.website}
                </p>
              )}
            </div>

            <div>
              <label className="block font-geist text-[13px] font-medium text-[var(--db-on-surface-variant)] mb-1.5">
                Brief Description
              </label>
              <textarea
                className={`${inputClass("description")} min-h-[96px] resize-none py-3`}
                placeholder="Tell us about your brand vision..."
                rows={4}
                value={data.description}
                onChange={(e) => handleChange("description", e.target.value)}
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onBack}
                className="h-[52px] px-6 rounded-full border border-[var(--db-outline-variant)] text-[var(--db-on-surface)] font-geist text-[14px] font-semibold hover:bg-[var(--db-surface-high)] transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 h-[52px] rounded-full bg-[var(--db-primary-container)] text-[var(--db-on-primary)] font-geist text-[14px] font-semibold inline-flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity"
              >
                Continue to Dashboard
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
