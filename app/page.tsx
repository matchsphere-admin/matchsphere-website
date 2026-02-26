import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { AppScreenshotCarousel } from "@/components/app-screenshot-carousel";

const screenshots = [
  {
    src: "/images/matcha/auth-screen.png",
    alt: "Matcha authentication screen",
    label: "Secure onboarding",
  },
  {
    src: "/images/matcha/onboarding-mode-selection.png",
    alt: "Onboarding screen with dating, individual friendship, couple friendship, and profile exploration options",
    label: "Choose dating, friendship, couple friendship, or profile exploration",
  },
  {
    src: "/images/matcha/recommendations.png",
    alt: "Matcha recommendations feed",
    label: "Compatibility-focused recommendations",
  },
  {
    src: "/images/matcha/couple-profile.png",
    alt: "Matcha couple profile screen",
    label: "Rich and structured profiles",
  },
  {
    src: "/images/matcha/profile-image-gallery-authenticity.png",
    alt: "Profile image and gallery photos showing the same person for trust and authenticity",
    label: "Profile and gallery photos aligned for trust and authenticity",
  },
  {
    src: "/images/matcha/recommender-chat.png",
    alt: "Matcha recommendation chat",
    label: "Guided conversations",
  },
  {
    src: "/images/matcha/couple-interview-chat.png",
    alt: "Matcha interview chat flow",
    label: "AI-guided interview flow",
  },
  {
    src: "/images/matcha/image-moderation.png",
    alt: "Matcha image moderation screen",
    label: "Safety and moderation controls",
  },
  {
    src: "/images/matcha/inscreen-quick-feedback.png",
    alt: "Matcha quick feedback interface",
    label: "Fast in-app feedback",
  },
  {
    src: "/images/matcha/menu-sidebar.png",
    alt: "Matcha menu sidebar",
    label: "Simple account controls",
  },
  {
    src: "/images/matcha/switch-profiles.png",
    alt: "Matcha profile switching screen",
    label: "Flexible profile management",
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
            MatchSphere is designing matchmaking infrastructure where privacy, safety, and compatibility
            are core product decisions, not afterthoughts.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/matcha"
              className="rounded-md bg-[#5D8A4A] px-4 py-2 text-sm font-medium text-white hover:bg-[#4A7039]"
            >
              Learn About Matcha
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Contact Us
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
          <h2 className="text-lg font-semibold text-slate-900">Join Early Access</h2>
          <p className="mt-2 text-sm text-slate-600">
            Matcha is currently in private testing. Reach out if you want to follow launch updates.
          </p>
          <Link href="/contact" className="mt-3 inline-block text-sm text-brand-700 hover:text-brand-900">
            Request access
          </Link>
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
