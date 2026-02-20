import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

const steps = [
  "Create your profile with your goals and preferences.",
  "Matcha's AI analyzes compatibility signals and introduces relevant people.",
  "Chat thoughtfully, build trust, and connect intentionally.",
];

export default function HomePage() {
  return (
    <SiteShell
      title="MatchSphere builds Matcha for meaningful connections"
      subtitle="Matcha is designed for dating, friendship, and couple friendship with an AI-guided experience focused on compatibility and safety."
    >
      <section className="grid gap-8 rounded-2xl border border-slate-200 p-6 sm:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">How Matcha works</h2>
          <ul className="space-y-3 text-slate-700">
            {steps.map((step) => (
              <li key={step} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-600" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/matcha" className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700">
              Explore Matcha
            </Link>
            <Link href="/privacy-policy" className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              View Privacy Policy
            </Link>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">App preview</h3>
          <div className="flex items-center justify-center rounded-lg bg-white p-6">
            <Image src="/logo.png" alt="Matcha logo preview" width={180} height={180} />
          </div>
          <p className="mt-3 text-sm text-slate-600">
            Replace this with product screenshots in the next iteration.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-4 rounded-2xl border border-slate-200 p-6 sm:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">About</h2>
          <p className="mt-2 text-sm text-slate-600">
            MatchSphere is building AI-first products for healthy, meaningful social connection.
          </p>
          <Link href="/about" className="mt-3 inline-block text-sm text-brand-700 hover:text-brand-900">
            More about us
          </Link>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
          <p className="mt-2 text-sm text-slate-600">Reach our team for company, investor, or partnership inquiries.</p>
          <Link href="/contact" className="mt-3 inline-block text-sm text-brand-700 hover:text-brand-900">
            Contact page
          </Link>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Support</h2>
          <p className="mt-2 text-sm text-slate-600">Need app support? We can help with account and policy questions.</p>
          <Link href="/support" className="mt-3 inline-block text-sm text-brand-700 hover:text-brand-900">
            Support page
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
