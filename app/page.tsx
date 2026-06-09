import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export default function HomePage() {
  return (
    <SiteShell
      title="AI-Driven Lead Generation for Dubai Off-Plan Real Estate"
      subtitle="MatchSphere helps property developers reach qualified, intent-rich buyers through AI-guided onboarding — fewer cold leads, more serious conversations."
    >
      <section className="grid gap-8 rounded-2xl border border-slate-200 p-6 sm:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">Built for developers, not just clicks</h2>
          <p className="text-slate-700">
            MatchSphere qualifies and onboards prospective off-plan buyers with an AI assistant, so your
            sales team spends time on leads that are ready to talk — not on chasing forms.
          </p>
          <div className="flex justify-center sm:justify-start">
            <Link
              href="/contact"
              className="inline-block rounded-md border border-[#5D8A4A] bg-[#5D8A4A] px-4 py-2 text-center text-sm font-medium text-white hover:bg-[#4A7039]"
            >
              Request a demo
            </Link>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">What we do</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>- AI-guided buyer onboarding and qualification</li>
            <li>- Intent, budget, and timeline captured up front</li>
            <li>- Verified, structured leads delivered to your team</li>
            <li>- Built for the Dubai and UAE off-plan market</li>
          </ul>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">The problem</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>Off-plan developers are flooded with low-intent leads from portals and paid ads.</li>
          <li>Sales teams waste hours qualifying buyers who were never serious.</li>
          <li>Generic lead forms capture contact details but not intent, budget, or timeline.</li>
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">The solution</h2>
        <p className="mt-4 text-slate-700">
          MatchSphere puts an AI onboarding assistant in front of every prospect. It asks the right
          questions, captures intent, budget, and timeline, and hands your team a qualified,
          ready-to-engage lead.
        </p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Why it matters</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <p className="rounded-lg bg-slate-50 p-3 text-slate-700">AI-guided qualification</p>
          <p className="rounded-lg bg-slate-50 p-3 text-slate-700">Higher-intent conversations</p>
          <p className="rounded-lg bg-slate-50 p-3 text-slate-700">Less manual screening</p>
          <p className="rounded-lg bg-slate-50 p-3 text-slate-700">Built for off-plan sales cycles</p>
          <p className="rounded-lg bg-slate-50 p-3 text-slate-700 sm:col-span-2">
            Designed for the Dubai and UAE market
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-4 rounded-2xl border border-slate-200 p-6 sm:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">For developers</h2>
          <p className="mt-2 text-sm text-slate-600">
            See how MatchSphere can fill your pipeline with qualified off-plan buyers.
          </p>
          <Link href="/contact" className="mt-3 inline-block text-sm text-brand-700 hover:text-brand-900">
            Request a demo
          </Link>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Partnerships &amp; investors</h2>
          <p className="mt-2 text-sm text-slate-600">
            For partnership or investment conversations, get in touch.
          </p>
          <Link href="/contact" className="mt-3 inline-block text-sm text-brand-700 hover:text-brand-900">
            Contact us
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
