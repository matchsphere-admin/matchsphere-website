import { SiteShell } from "@/components/site-shell";
import Link from "next/link";

const communityGuidelines = [
  {
    rule: "Real humans only",
    description: "No bots, no fake profiles, no impersonation. Be yourself.",
  },
  {
    rule: "No nudity or sexually explicit content",
    description:
      "Keep profile photos and messages appropriate. Explicit content is not allowed.",
  },
  {
    rule: "No harassment, threats, or abusive behavior",
    description:
      "Treat others with respect. Harassment, bullying, threats, or intimidation will result in account action.",
  },
  {
    rule: "No scams, spam, or solicitation",
    description:
      "Do not request money, promote external services, or attempt to deceive other users.",
  },
  {
    rule: "No hate speech or discrimination",
    description:
      "Content that promotes hatred or violence against individuals or groups based on race, ethnicity, religion, gender, sexual orientation, disability, or other protected characteristics is prohibited.",
  },
  {
    rule: "18+ only",
    description:
      "Matcha is exclusively for adults aged 18 and over. Users must accurately represent their age.",
  },
];

const onlineSafetyTips = [
  {
    tip: "Protect your personal information",
    description:
      "Never share your home address, workplace, financial information, or other sensitive details with someone you have not met in person.",
  },
  {
    tip: "Stay on Matcha until you are comfortable",
    description:
      "Keep conversations on the platform while getting to know someone. Moving to external apps too quickly can make it harder for us to help if something goes wrong.",
  },
  {
    tip: "Be cautious with long-distance or overseas matches",
    description:
      "Watch out for users who claim to be traveling or stationed abroad, especially if they ask for financial help or make excuses to avoid meeting.",
  },
  {
    tip: "Report suspicious behavior immediately",
    description:
      "If someone asks for money, sends inappropriate content, or makes you uncomfortable, use the Report feature. Your report is confidential.",
  },
  {
    tip: "Trust your instincts",
    description:
      "If something feels off, it probably is. Do not feel obligated to continue a conversation that makes you uncomfortable.",
  },
];

const inPersonSafetyTips = [
  {
    tip: "Meet in public, stay in public",
    description:
      "For first meetings, choose a busy public place like a coffee shop or restaurant. Avoid private locations until you know someone well.",
  },
  {
    tip: "Tell a friend your plans",
    description:
      "Share your plans with a trusted friend or family member, including where you are going, who you are meeting, and when you expect to return.",
  },
  {
    tip: "Control your own transportation",
    description:
      "Drive yourself, take a rideshare, or use public transit. Having your own way to leave gives you control over the situation.",
  },
  {
    tip: "Know your limits with alcohol",
    description:
      "Be aware of how alcohol affects your judgment. Never leave your drink unattended.",
  },
  {
    tip: "Trust your instincts — leave if uncomfortable",
    description:
      "If something does not feel right, leave. Your safety is more important than politeness. It is okay to end a date early.",
  },
];

const safetyFeatures = [
  {
    feature: "Age Verification",
    description:
      "During onboarding, we verify that all users are 18 years or older through birthdate validation.",
  },
  {
    feature: "Photo Verification",
    description:
      "Our AI-powered image analysis ensures profile photos show real humans and rejects nudity, explicit content, hate symbols, and offensive material.",
  },
  {
    feature: "Profile Moderation",
    description:
      "AI-assisted review helps identify and reject profile content that violates our guidelines before it goes live.",
  },
];

const userActions = [
  {
    action: "Reject",
    description:
      "Decline a recommendation. This is private — the other person is not notified.",
  },
  {
    action: "Remove",
    description:
      "End a connection and remove someone from your contacts. This is a social action to manage your connections.",
  },
  {
    action: "Block",
    description:
      "Full safety protection. Blocking prevents the person from appearing in your recommendations, sending you messages, or seeing your profile. You can unblock users in Settings.",
  },
  {
    action: "Report",
    description:
      "Notify Matcha of a policy violation. Reports trigger a review by our moderation team and may result in enforcement action. Your identity is kept confidential.",
  },
];

export default function SafetyPage() {
  return (
    <SiteShell title="Safety" subtitle="Last Updated: February 2026">
      <article className="space-y-10 text-slate-700">
        {/* Community Guidelines */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            Community Guidelines
          </h2>
          <p>
            Matcha is built on trust and respect. These guidelines help keep our
            community safe for everyone. Violations may result in a warning,
            suspension, or permanent ban.
          </p>
          <div className="space-y-4">
            {communityGuidelines.map((item) => (
              <div key={item.rule} className="rounded-lg border border-slate-200 p-4">
                <h3 className="font-semibold text-slate-900">{item.rule}</h3>
                <p className="mt-1 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Safety Tips */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Safety Tips</h2>

          {/* Online Safety */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-900">
              Online Safety
            </h3>
            <p>
              Meeting new people is exciting, but you should always be cautious
              when interacting with someone you do not know. These tips can help
              you stay safe while using Matcha.
            </p>
            <ul className="space-y-3">
              {onlineSafetyTips.map((item) => (
                <li key={item.tip} className="rounded-lg bg-slate-50 p-4">
                  <span className="font-semibold text-slate-900">
                    {item.tip}
                  </span>
                  <p className="mt-1 text-sm">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Meeting In Person */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-900">
              Meeting In Person
            </h3>
            <p>
              When you decide to meet someone from Matcha in person, take
              precautions to ensure your safety.
            </p>
            <ul className="space-y-3">
              {inPersonSafetyTips.map((item) => (
                <li key={item.tip} className="rounded-lg bg-slate-50 p-4">
                  <span className="font-semibold text-slate-900">
                    {item.tip}
                  </span>
                  <p className="mt-1 text-sm">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Matcha In-App Safety Features */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            Matcha In-App Safety Features
          </h2>
          <p>
            We have built safety features into Matcha to help protect our
            community.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {safetyFeatures.map((item) => (
              <div
                key={item.feature}
                className="rounded-lg border border-slate-200 p-4"
              >
                <h3 className="font-semibold text-slate-900">{item.feature}</h3>
                <p className="mt-2 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* User Actions */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            Reject, Remove, Block, and Report
          </h2>
          <p>
            You have tools to control your experience on Matcha. Here is what
            each action does:
          </p>
          <div className="space-y-3">
            {userActions.map((item) => (
              <div
                key={item.action}
                className="flex gap-4 rounded-lg border border-slate-200 p-4"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 font-semibold text-sm">
                  {item.action.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{item.action}</h3>
                  <p className="mt-1 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Happens When You Report */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            What Happens When You Report
          </h2>
          <div className="rounded-lg bg-slate-50 p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-xs text-white">
                  1
                </span>
                <span>
                  Your report is received and reviewed by our moderation team.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-xs text-white">
                  2
                </span>
                <span>
                  We investigate the reported account or content for policy
                  violations.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-xs text-white">
                  3
                </span>
                <span>
                  If a violation is confirmed, we may issue a warning, suspend,
                  or permanently ban the account.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-xs text-white">
                  4
                </span>
                <span>
                  Your identity as the reporter is always kept confidential.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Resources & Contact */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            Resources & Contact
          </h2>
          <div className="rounded-lg border border-slate-200 p-6 space-y-4">
            <div>
              <h3 className="font-semibold text-slate-900">Emergency</h3>
              <p className="text-sm">
                If you are in immediate danger, please contact your local
                emergency services.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Support</h3>
              <p className="text-sm">
                For questions, concerns, or to report an issue directly, contact
                us at{" "}
                <a
                  href="mailto:support@matchsphere.ai"
                  className="text-green-600 hover:text-green-700"
                >
                  support@matchsphere.ai
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Legal</h3>
              <p className="text-sm">
                Review our{" "}
                <Link
                  href="/terms-of-use"
                  className="text-green-600 hover:text-green-700"
                >
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="text-green-600 hover:text-green-700"
                >
                  Privacy Policy
                </Link>{" "}
                for more information about how we operate and protect your data.
              </p>
            </div>
          </div>
        </section>

      </article>
    </SiteShell>
  );
}
