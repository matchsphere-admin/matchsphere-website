import { SiteShell } from "@/components/site-shell";
import Link from "next/link";
import { AppScreenshotCarousel } from "@/components/app-screenshot-carousel";

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
    label: "Safety and moderation systems",
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

export default function MatchaPage() {
  return (
    <SiteShell
      title="Matcha"
      subtitle="An AI-powered matchmaking application built to move beyond superficial swiping and support deeper compatibility."
    >
      <div className="space-y-8 text-slate-700">
        <section>
          <AppScreenshotCarousel screenshots={screenshots} />
        </section>

        <section className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-2xl font-semibold text-slate-900">What is Matcha?</h2>
          <p className="mt-3">
            Matcha is an AI-powered matchmaking application designed to move beyond superficial swiping
            and create deeper, structured compatibility.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-2xl font-semibold text-slate-900">How it&apos;s different</h2>
          <ul className="mt-3 space-y-2">
            <li>- AI-guided onboarding</li>
            <li>- Structured compatibility modeling</li>
            <li>- No endless swiping loops</li>
            <li>- Private profiles with controlled visibility</li>
            <li>- Safety and moderation features</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Designed for</h2>
          <ul className="mt-3 space-y-2">
            <li>- Individuals seeking serious relationships</li>
            <li>- Culturally-aware users</li>
            <li>- Privacy-conscious users</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Status</h2>
          <p className="mt-3">Currently in private testing.</p>
        </section>

        <section className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-900">Get in touch</h2>
          <p className="mt-3">
            Interested in early access, partnerships, or investor conversations? We&apos;d love to hear
            from you.
          </p>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-[#5D8A4A] px-4 py-2 text-sm font-medium text-white hover:bg-[#4A7039]"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
