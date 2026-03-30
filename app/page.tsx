import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { AppScreenshotCarousel } from "@/components/app-screenshot-carousel";
import { GooglePlayBadge, AppStoreBadge, MatchaIcon } from "@/components/app-store-badges";

const screenshots = [
  {
    src: "/images/matcha/welcome-screen.png",
    alt: "Matcha welcome screen",
    label: "Welcome screen",
  },
  {
    src: "/images/matcha/individual-couple-friendship-dating-profile-selection.png",
    alt: "Profile type selection for individual, couple, friendship, and dating",
    label: "Choose your profile type",
  },
  {
    src: "/images/matcha/create-two-profiles-and-switch.png",
    alt: "Create two profiles and switch between them",
    label: "Create two profiles and switch",
  },
  {
    src: "/images/matcha/build-your-profile-get-ai-help.png",
    alt: "Build your profile with AI assistance",
    label: "Build your profile with AI help",
  },
  {
    src: "/images/matcha/secure-invitation-code-sharing.png",
    alt: "Secure invitation code sharing in Matcha",
    label: "Invite partner to build a couple account",
  },
  {
    src: "/images/matcha/couple-profile-private-no-browsing.png",
    alt: "Private couple profile with no public browsing",
    label: "Private couple profile, no browsing",
  },
  {
    src: "/images/matcha/couple-interview-chat-new.png",
    alt: "Matcha interview chat flow",
    label: "AI-guided interview flow",
  },
  {
    src: "/images/matcha/image-moderation-new.png",
    alt: "Matcha image moderation screen",
    label: "Safety and moderation controls",
  },
  {
    src: "/images/matcha/ai-recommended-matches.png",
    alt: "AI recommended matches list",
    label: "AI-recommended matches",
  },
  {
    src: "/images/matcha/chat-about-recommendations-to-learn-about-them.png",
    alt: "Chat about recommendations to learn about them",
    label: "Chat about recommendations",
  },
  {
    src: "/images/matcha/in-app-secure-direct-chat-with-contacts.png",
    alt: "In-app secure direct chat with contacts",
    label: "Secure direct chat with contacts",
  },
];

export default function HomePage() {
  return (
    <SiteShell
      title="AI-Native Matchmaking for Meaningful Connections"
      subtitle="MatchSphere builds intelligent matchmaking systems designed for privacy, cultural nuance, and real compatibility."
    >
      <section className="grid gap-8 rounded-2xl border border-slate-200 p-6 sm:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">Built for trust from day one</h2>
          <p className="text-slate-700">
            MatchSphere is designing matchmaking app, Matcha, where privacy, safety, and compatibility
            are core product decisions, not afterthoughts.
          </p>
          <div className="flex justify-center sm:justify-start">
            <Link
              href="/matcha"
              className="inline-block rounded-md border border-[#5D8A4A] bg-white px-4 py-2 text-center text-sm font-medium text-[#5D8A4A] hover:bg-[#F5F9F3]"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Current focus</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>- Privacy-first design with controlled visibility</li>
            <li>- Safety systems and moderation workflows</li>
            <li>- AI-assisted compatibility matching</li>
            <li>- Cultural nuance for the UAE and GCC context</li>
          </ul>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">The problem</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>
            Swipe-based dating apps and public browsing in matchmaking platforms often optimize for
            engagement, not compatibility.
          </li>
          <li>Users face fake profiles, misrepresentation, and privacy concerns.</li>
          <li>Cultural nuance is often ignored in mainstream matchmaking products.</li>
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">The solution</h2>
        <p className="mt-4 text-slate-700">
          MatchSphere develops AI agents that understand people beyond static profiles by capturing
          preferences, personality, and values in a structured matchmaking system.
        </p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Why it matters</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <p className="rounded-lg bg-slate-50 p-3 text-slate-700">Private-first design</p>
          <p className="rounded-lg bg-slate-50 p-3 text-slate-700">No public browsing</p>
          <p className="rounded-lg bg-slate-50 p-3 text-slate-700">Controlled visibility</p>
          <p className="rounded-lg bg-slate-50 p-3 text-slate-700">Moderation systems</p>
          <p className="rounded-lg bg-slate-50 p-3 text-slate-700 sm:col-span-2">Cultural respect by design</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-semibold text-slate-900">Inside Matcha</h2>
        <AppScreenshotCarousel screenshots={screenshots} />
      </section>

      <section className="mt-8 grid gap-4 rounded-2xl border border-slate-200 p-6 sm:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Try Matcha</h2>
          <p className="mt-2 text-sm text-slate-600">
            Available on the web and Android. iOS coming soon. Try it today and experience AI-native
            matchmaking.
          </p>
          <div className="mt-3 flex flex-col gap-2">
            <a
              href="https://matcha.matchsphere.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[40px] items-center justify-center gap-2 rounded-lg border border-[#5D8A4A] bg-[#E8F0E4] px-3 text-sm font-medium text-[#5D8A4A] transition hover:bg-[#D8E0D2]"
            >
              <MatchaIcon />
              Matcha Web App →
            </a>
            <GooglePlayBadge />
            <AppStoreBadge comingSoon />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Partnerships</h2>
          <p className="mt-2 text-sm text-slate-600">
            For ecosystem partnerships, platform integrations, or distribution opportunities.
          </p>
          <Link href="/contact" className="mt-3 inline-block text-sm text-brand-700 hover:text-brand-900">
            Contact partnerships
          </Link>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Investor Inquiries</h2>
          <p className="mt-2 text-sm text-slate-600">
            We welcome conversations with investors aligned with long-term, responsible matchmaking.
          </p>
          <Link href="/contact" className="mt-3 inline-block text-sm text-brand-700 hover:text-brand-900">
            Investor contact
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
