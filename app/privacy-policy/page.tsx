import { SiteShell } from "@/components/site-shell";

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      'For users in the UAE and GCC, MatchSphere Technologies FZ-LLC ("we", "us", "our") operates the Matcha mobile application (the "App") and acts as the primary data controller for personal information processed in connection with the App.',
      "Match Sphere LLC (Delaware, United States) is our parent company and may support app publishing/distribution, administration, technology, and support operations. This Privacy Policy explains how we collect, use, disclose, and protect personal information.",
      "We are committed to protecting your privacy and securing your personal data in accordance with applicable data protection laws, including UAE data protection regulations.",
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
          "Location (e.g., city/region)",
          "Bio, interests, and preferences",
          "Physical attributes you choose to share",
        ],
        note: "Note: Some profile information may be considered sensitive personal information in certain jurisdictions (for example, information that can reveal intimate preferences). You choose what you provide.",
      },
      {
        heading: "User Content and Messages",
        bullets: [
          "Messages you send to other users through the App",
          "Messages and content you send to our AI assistant (where available)",
          "Any other content you submit through the App (e.g., text you enter in your profile)",
        ],
      },
      {
        heading: "Usage, Device, and Log Data",
        bullets: [
          "Device information (device model, OS version), app version",
          "App activity (features used, interactions with matches/recommendations)",
          "Log data such as IP address, dates/times of access, and diagnostic/security logs",
        ],
      },
      {
        heading: "Location Information",
        bullets: [
          "Location you provide in the App (e.g., city/region)",
        ],
      },
      {
        heading: "Communications",
        bullets: [
          "If you contact support, we collect the contents of your message and contact details",
        ],
      },
      {
        heading: "Cookies and Similar Technologies (Website)",
        bullets: [
          "If you visit our website, it may use cookies or similar technologies for basic functionality",
        ],
      },
    ],
  },
  {
    title: "3. How We Use Your Information",
    paragraphs: ["We use personal information to:"],
    bullets: [
      "Provide and improve our matchmaking services and App features",
      "Power our AI-driven matching and recommendation features",
      "Enable user-to-user messaging and deliver messages to recipients",
      "Communicate with you about your account and the App",
      "Ensure safety, prevent fraud/abuse, and enforce our policies/Terms",
      "Process user reports and conduct moderation reviews to enforce our Community Guidelines",
      "Comply with legal obligations",
      "Analyze performance and improve reliability, security, and user experience",
    ],
    trailingParagraph:
      "We may aggregate or de-identify information (so it no longer identifies you) and use it for service improvement. When you submit a report about another user, we process the report content and may review relevant account data and communications to investigate potential violations. Report information may be shared with law enforcement when required by law or necessary to protect user safety.",
  },
  {
    title: "4. AI Processing",
    paragraphs: [
      "Our AI system may analyze certain information (such as profile information and conversations with our AI assistant) to understand preferences and provide recommendations.",
      "We may use third-party AI providers (such as OpenAI and Anthropic) to process certain AI-assisted conversations or features. These providers process data under contractual protections designed to safeguard personal information.",
      "We do not currently use your content to train our own models.",
    ],
  },
  {
    title: "5. Data Sharing",
    paragraphs: ["We may share personal information with:"],
    bullets: [
      "Other users: information you choose to share via your profile, and messages you send to another user are shared with the recipient",
      "Service providers: hosting, customer support, authentication, security, communications (such as email delivery), and AI processing providers who process data on our instructions",
      "Affiliates: entities within the MatchSphere group, including Match Sphere LLC, for app publishing, operational support, security, and administration on a need-to-know basis",
      "Legal and safety: law enforcement or regulators when required by law, and where necessary to protect users, investigate abuse, or enforce our Terms",
      "Business transfers: if we are involved in a merger, acquisition, restructuring, or sale of assets, personal information may be transferred as part of that transaction",
    ],
    trailingParagraph:
      "We do not sell your personal information to third parties.",
  },
  {
    title: "6. Data Security",
    paragraphs: [
      "We implement appropriate technical and organizational measures to protect personal information, including access controls and security practices. However, no system is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "7. Data Retention",
    paragraphs: [
      "We retain personal information for as long as your account is active or as needed to provide the App.",
      "After account deletion, we may retain certain data for up to 90 days for backup purposes, and longer where required for legal, security, fraud prevention, or dispute resolution reasons.",
      "If you sent messages or content to other users, copies may remain available to those recipients (for example, in their chat history) even after you delete your account, to the extent permitted by law and the App's functionality.",
    ],
  },
  {
    title: "8. Your Rights and Choices",
    paragraphs: ["Depending on your location and applicable law, you may have the right to:"],
    bullets: [
      "Access your personal information",
      "Correct inaccurate information",
      "Delete your account and personal information",
      "Export your data (data portability)",
      "Withdraw consent for optional processing (where we rely on consent)",
      "Object to or restrict certain processing (where applicable)",
    ],
    trailingParagraph:
      "You can exercise many rights through App settings (where available) or by contacting us at support@matchsphere.ai. For security, we may need to verify your identity before fulfilling certain requests. Marketing communications (if we send them) will include an unsubscribe option. You can also control device permissions (e.g., location, notifications) in your device settings.",
  },
  {
    title: "9. International Transfers",
    paragraphs: [
      "Your data may be processed in countries outside the UAE (including the United States for certain cloud and AI processing). We take steps designed to ensure appropriate safeguards are in place for cross-border transfers.",
    ],
  },
  {
    title: "10. Children's Privacy",
    paragraphs: [
      "Matcha is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If we learn we have collected personal information from a child, we will delete it promptly.",
    ],
  },
  {
    title: "11. Changes to This Policy",
    paragraphs: [
      'We may update this Privacy Policy from time to time. We will post the updated policy and update the "Last Updated" date. For significant changes, we may also notify you through the App.',
    ],
  },
  {
    title: "12. Contact Us",
    paragraphs: ["For privacy-related inquiries or to exercise your rights, contact:"],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <SiteShell title="Privacy Policy" subtitle="Last Updated: February 2026">
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
                {group.note ? <p>{group.note}</p> : null}
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
          <p>Email: support@matchsphere.ai</p>
        </section>
      </article>
    </SiteShell>
  );
}
