import { SiteShell } from "@/components/site-shell";
import { WaitlistForm } from "@/components/waitlist-form";

export const metadata = {
  title: "Join Waitlist | Matcha by MatchSphere",
  description: "Join the Matcha waitlist to be among the first to experience AI-native matchmaking for meaningful connections.",
};

export default function WaitlistPage() {
  return (
    <SiteShell
      title="Join the Matcha Waitlist"
      subtitle="Be among the first to experience AI-native matchmaking designed for privacy, cultural nuance, and real compatibility."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Why join the waitlist?</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#5D8A4A] text-xs text-white">1</span>
                <span>Get early access to Matcha before public launch</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#5D8A4A] text-xs text-white">2</span>
                <span>Receive a personal invitation code when it's your turn</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#5D8A4A] text-xs text-white">3</span>
                <span>Help shape the future of meaningful matchmaking</span>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Currently focused on Dubai</h2>
            <p className="mt-2 text-sm text-slate-600">
              Matcha is launching first in Dubai and the UAE. We're building a community that values privacy, 
              cultural respect, and genuine connections. More regions coming soon.
            </p>
          </section>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <WaitlistForm />
        </div>
      </div>
    </SiteShell>
  );
}
