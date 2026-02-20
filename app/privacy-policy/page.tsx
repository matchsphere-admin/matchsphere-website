import { SiteShell } from "@/components/site-shell";

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      'MatchSphere Technologies FZ-LLC ("we", "us", "our") operates the Matcha mobile application. This Privacy Policy explains how we collect, use, disclose, and protect your personal information.',
      "We are committed to protecting your privacy and ensuring the security of your personal data in accordance with applicable data protection laws, including UAE data protection regulations.",
    ],
  },
  {
    title: "2. Information We Collect",
    groups: [
      {
        heading: "Account Information",
        bullets: [
          "Email address and password",
          "Phone number (if using phone sign-in)",
          "Name and date of birth",
          "Profile photos",
        ],
      },
      {
        heading: "Profile Information",
        bullets: [
          "Gender and relationship preferences",
          "Location (city/region)",
          "Bio, interests, and preferences",
          "Physical attributes you choose to share",
        ],
      },
      {
        heading: "Usage Data",
        bullets: [
          "Chat messages with our AI assistant",
          "Interaction with matches and recommendations",
          "App usage patterns and preferences",
          "Device information and app version",
        ],
      },
    ],
  },
  {
    title: "3. How We Use Your Information",
    paragraphs: ["We use your information to:"],
    bullets: [
      "Provide and improve our matchmaking services",
      "Power our AI-driven matching algorithm",
      "Communicate with you about your account",
      "Ensure safety and prevent fraud",
      "Comply with legal obligations",
      "Analyze and improve our services",
    ],
  },
  {
    title: "4. AI Processing",
    paragraphs: [
      "Our AI system analyzes your profile information and chat conversations to understand your preferences and suggest compatible matches. This processing is essential to providing our core matchmaking service.",
      "We use industry-leading AI providers (such as OpenAI and Anthropic) to process conversations. These providers are bound by strict data protection agreements.",
    ],
  },
  {
    title: "5. Data Sharing",
    paragraphs: ["We may share your information with:"],
    bullets: [
      "Other users (limited profile information for matching)",
      "Service providers (hosting, analytics, AI processing)",
      "Legal authorities (when required by law)",
    ],
    trailingParagraph:
      "We do not sell your personal information to third parties.",
  },
  {
    title: "6. Data Security",
    paragraphs: [
      "We implement appropriate technical and organizational measures to protect your personal data, including:",
    ],
    bullets: [
      "Encryption of data at rest",
      "Secure authentication via Firebase",
      "Regular security assessments",
      "Access controls and employee training",
    ],
  },
  {
    title: "7. Data Retention",
    paragraphs: [
      "We retain your personal data for as long as your account is active or as needed to provide services. After account deletion, we may retain certain data for up to 90 days for backup purposes, and longer if required by law.",
    ],
  },
  {
    title: "8. Your Rights",
    paragraphs: ["You have the right to:"],
    bullets: [
      "Access your personal data",
      "Correct inaccurate data",
      "Delete your account and data",
      "Export your data",
      "Withdraw consent for optional processing",
    ],
    trailingParagraph:
      "You can exercise these rights through the App settings or by contacting us.",
  },
  {
    title: "9. International Transfers",
    paragraphs: [
      "Your data may be processed in countries outside the UAE, including the United States (for cloud services and AI processing). We ensure appropriate safeguards are in place for such transfers.",
    ],
  },
  {
    title: "10. Children's Privacy",
    paragraphs: [
      "Matcha is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If we learn we have collected such information, we will delete it promptly.",
    ],
  },
  {
    title: "11. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy periodically. We will notify you of significant changes through the App. Your continued use after changes constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "12. Contact Us",
    paragraphs: ["For privacy-related inquiries or to exercise your rights, contact us at:"],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <SiteShell title="Privacy Policy" subtitle="Last Updated: January 2026">
      <article className="space-y-7 text-slate-700">
        {sections.map((section) => (
          <section key={section.title} className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
            {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.groups?.map((group) => (
              <div key={group.heading} className="space-y-2">
                <h3 className="font-semibold text-slate-900">{group.heading}</h3>
                <ul className="list-disc space-y-1 pl-5">
                  {group.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
            {section.bullets ? (
              <ul className="list-disc space-y-1 pl-5">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
            {section.trailingParagraph ? <p>{section.trailingParagraph}</p> : null}
          </section>
        ))}
        <section className="space-y-1 text-slate-600">
          <p>MatchSphere Technologies FZ-LLC</p>
          <p>Dubai, United Arab Emirates</p>
          <p>Email: support@matchsphere.ai</p>
        </section>
      </article>
    </SiteShell>
  );
}
