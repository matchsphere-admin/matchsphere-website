"use client";

import { FormEvent, useState } from "react";

const GENDER_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const PROFILE_TYPE_OPTIONS = [
  { value: "single_date", label: "Looking for a Date" },
  { value: "single_friend", label: "Looking for Friends" },
  { value: "couple_friend", label: "Couple Looking for Couple Friends" },
  { value: "undecided", label: "Just Exploring" },
];

const LANGUAGE_OPTIONS = [
  { value: "en", label: "English" },
  { value: "ar", label: "Arabic (العربية)" },
  { value: "fa", label: "Persian (فارسی)" },
  { value: "hi", label: "Hindi (हिन्दी)" },
  { value: "ur", label: "Urdu (اردو)" },
  { value: "fr", label: "French (Français)" },
  { value: "es", label: "Spanish (Español)" },
  { value: "ru", label: "Russian (Русский)" },
  { value: "zh", label: "Chinese (中文)" },
  { value: "tl", label: "Tagalog" },
];

const CULTURAL_BACKGROUND_OPTIONS = [
  { value: "south_asian", label: "South Asian" },
  { value: "arab", label: "Arab" },
  { value: "persian", label: "Persian / Iranian" },
  { value: "filipino", label: "Filipino" },
  { value: "european", label: "European" },
  { value: "east_asian", label: "East Asian" },
  { value: "southeast_asian", label: "Southeast Asian" },
  { value: "african", label: "African" },
  { value: "latin_american", label: "Latin American" },
  { value: "mixed", label: "Mixed / Multi-cultural" },
  { value: "other", label: "Other" },
];

type FormState = {
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  age: string;
  locationCity: string;
  locationCountry: string;
  preferredLanguages: string[];
  interestedProfileTypes: string[];
  nationality: string;
  culturalBackground: string;
  company: string; // Honeypot field
};

const initialState: FormState = {
  email: "",
  firstName: "",
  lastName: "",
  gender: "",
  age: "",
  locationCity: "Dubai",
  locationCountry: "UAE",
  preferredLanguages: ["en"],
  interestedProfileTypes: [],
  nationality: "",
  culturalBackground: "",
  company: "",
};

export function WaitlistForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          age: form.age ? parseInt(form.age, 10) : undefined,
        }),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setErrorMessage(data.error || "Unable to join waitlist. Please try again.");
        return;
      }

      setSuccessMessage(data.message || "You've been added to the waitlist!");
      setForm(initialState);
    } catch {
      setErrorMessage("Unable to join waitlist. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleLanguageToggle = (lang: string) => {
    setForm((prev) => ({
      ...prev,
      preferredLanguages: prev.preferredLanguages.includes(lang)
        ? prev.preferredLanguages.filter((l) => l !== lang)
        : [...prev.preferredLanguages, lang],
    }));
  };

  const handleProfileTypeToggle = (type: string) => {
    setForm((prev) => ({
      ...prev,
      interestedProfileTypes: prev.interestedProfileTypes.includes(type)
        ? prev.interestedProfileTypes.filter((t) => t !== type)
        : [...prev.interestedProfileTypes, type],
    }));
  };

  if (successMessage) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-green-800">You're on the list!</h3>
        <p className="mt-2 text-green-700">{successMessage}</p>
        <p className="mt-4 text-sm text-green-600">
          We'll send you an invitation email when it's your turn to join Matcha.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Required Fields */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-slate-900">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-500"
            placeholder="your@email.com"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="firstName" className="text-sm font-medium text-slate-900">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            maxLength={50}
            value={form.firstName}
            onChange={(e) => setForm((prev) => ({ ...prev, firstName: e.target.value }))}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-500"
          />
        </div>
      </div>

      {/* Optional Fields */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor="lastName" className="text-sm font-medium text-slate-900">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            maxLength={50}
            value={form.lastName}
            onChange={(e) => setForm((prev) => ({ ...prev, lastName: e.target.value }))}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-500"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="gender" className="text-sm font-medium text-slate-900">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={form.gender}
            onChange={(e) => setForm((prev) => ({ ...prev, gender: e.target.value }))}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-500"
          >
            <option value="">Select...</option>
            {GENDER_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-1">
          <label htmlFor="age" className="text-sm font-medium text-slate-900">
            Age
          </label>
          <input
            id="age"
            name="age"
            type="number"
            min={18}
            max={120}
            value={form.age}
            onChange={(e) => setForm((prev) => ({ ...prev, age: e.target.value }))}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-500"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="locationCity" className="text-sm font-medium text-slate-900">
            City
          </label>
          <input
            id="locationCity"
            name="locationCity"
            type="text"
            maxLength={100}
            value={form.locationCity}
            onChange={(e) => setForm((prev) => ({ ...prev, locationCity: e.target.value }))}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-500"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="locationCountry" className="text-sm font-medium text-slate-900">
            Country
          </label>
          <input
            id="locationCountry"
            name="locationCountry"
            type="text"
            maxLength={100}
            value={form.locationCountry}
            onChange={(e) => setForm((prev) => ({ ...prev, locationCountry: e.target.value }))}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-500"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="nationality" className="text-sm font-medium text-slate-900">
          Nationality
        </label>
        <input
          id="nationality"
          name="nationality"
          type="text"
          maxLength={100}
          value={form.nationality}
          onChange={(e) => setForm((prev) => ({ ...prev, nationality: e.target.value }))}
          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-500"
          placeholder="e.g., Indian, British, Emirati"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-900">Cultural Background</label>
        <select
          value={form.culturalBackground}
          onChange={(e) => setForm((prev) => ({ ...prev, culturalBackground: e.target.value }))}
          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-500"
        >
          <option value="">Select...</option>
          {CULTURAL_BACKGROUND_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-900">Languages You Speak</label>
        <div className="flex flex-wrap gap-2">
          {LANGUAGE_OPTIONS.map((lang) => (
            <button
              key={lang.value}
              type="button"
              onClick={() => handleLanguageToggle(lang.value)}
              className={`rounded-full px-3 py-1 text-sm transition ${
                form.preferredLanguages.includes(lang.value)
                  ? "bg-[#5D8A4A] text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-900">What are you looking for?</label>
        <div className="flex flex-wrap gap-2">
          {PROFILE_TYPE_OPTIONS.map((type) => (
            <button
              key={type.value}
              type="button"
              onClick={() => handleProfileTypeToggle(type.value)}
              className={`rounded-full px-3 py-1 text-sm transition ${
                form.interestedProfileTypes.includes(type.value)
                  ? "bg-[#5D8A4A] text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Honeypot field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
        />
      </div>

      {errorMessage ? <p className="text-sm text-red-700">{errorMessage}</p> : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-[#5D8A4A] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#4A7039] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Joining..." : "Join Waitlist"}
      </button>

      <p className="text-center text-xs text-slate-500">
        By joining, you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-slate-700">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/terms-of-use" className="underline hover:text-slate-700">
          Terms of Use
        </a>
        .
      </p>
    </form>
  );
}
