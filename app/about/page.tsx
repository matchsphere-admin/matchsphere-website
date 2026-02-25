import { SiteShell } from "@/components/site-shell";
import Link from "next/link";

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#0A66C2" />
      <path
        d="M8.22 10.29H5.95V18h2.27v-7.71ZM7.09 9.25c.73 0 1.31-.58 1.31-1.29 0-.71-.58-1.29-1.31-1.29-.73 0-1.31.58-1.31 1.29 0 .71.58 1.29 1.31 1.29ZM18.05 13.58c0-2.17-1.16-3.18-2.71-3.18-1.25 0-1.81.69-2.12 1.17v-1h-2.27c.03.66 0 7.43 0 7.43h2.27v-4.15c0-.22.02-.44.08-.59.18-.44.58-.9 1.26-.9.89 0 1.24.68 1.24 1.67V18H18l.05-4.42Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <SiteShell
      title="About MatchSphere"
      subtitle="A company building AI-native matchmaking systems focused on meaningful connection, privacy, and trust."
    >
      <article className="space-y-8 text-slate-700">
        <section className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Company</h2>
          <p className="mt-3">
            MatchSphere is the company behind Matcha, an AI-powered matchmaking app for dating,
            friendship, and couple-to-couple socializing. We focus on compatibility, intent, and
            safety rather than superficial engagement mechanics.
          </p>
          <div className="mt-4">
            <Link
              href="https://www.linkedin.com/company/matchsphere/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-900"
            >
              <LinkedInIcon />
              MatchSphere on LinkedIn
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Founder & CEO</h2>
          <p className="mt-3">
            Founded by Jay Alikhani, a former Amazon engineer specializing in large language models
            and personalization systems, MatchSphere was created to rethink how technology supports
            meaningful relationships.
          </p>
          <p className="mt-3">
            The mission is shaped by direct experience with how existing matchmaking products can miss
            privacy expectations, compatibility depth, and cultural context for users in the UAE and
            GCC.
          </p>
          <div className="mt-4">
            <Link
              href="https://www.linkedin.com/in/jay-alikhani-778144133/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-900"
            >
              <LinkedInIcon />
              Jay Alikhani on LinkedIn
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Mission</h2>
          <p className="mt-3">
            We believe matchmaking can be intelligent, private, and culturally aware. MatchSphere is
            building systems that prioritize trust, safety, and long-term relationship outcomes.
          </p>
        </section>
      </article>
    </SiteShell>
  );
}
