import { SiteShell } from "@/components/site-shell";

export default function MatchaPage() {
  return (
    <SiteShell
      title="Matcha"
      subtitle="An AI-powered matchmaking experience for dating, friendship, and couple friendship."
    >
      <div className="space-y-5 text-slate-700">
        <p>
          Matcha helps people discover meaningful connections through a combination of profile depth,
          preference signals, and AI-assisted matching.
        </p>
        <p>
          The current version includes guided onboarding, profile curation, compatibility-focused
          suggestions, and conversation support to make matching feel intentional.
        </p>
        <p>
          This page is intentionally lightweight for phase 1. We can expand it with screenshots,
          app-store links, testimonials, and feature sections next.
        </p>
      </div>
    </SiteShell>
  );
}
