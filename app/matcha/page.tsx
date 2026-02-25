import { SiteShell } from "@/components/site-shell";
import Link from "next/link";
import { AppScreenshotCarousel } from "@/components/app-screenshot-carousel";

const screenshots = [
  {
    src: "/images/matcha/auth-screen.png",
    alt: "Matcha authentication screen",
    label: "AI-guided onboarding",
  },
  {
    src: "/images/matcha/recommendations.png",
    alt: "Matcha recommendations feed",
    label: "Structured recommendations",
  },
  {
    src: "/images/matcha/recommender-chat.png",
    alt: "Matcha recommendation chat",
    label: "Intentional conversation flow",
  },
  {
    src: "/images/matcha/couple-profile.png",
    alt: "Matcha couple profile",
    label: "Private profile structure",
  },
  {
    src: "/images/matcha/image-moderation.png",
    alt: "Matcha moderation tools",
    label: "Safety and moderation systems",
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
