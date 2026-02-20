import { SiteShell } from "@/components/site-shell";

const sections = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      'By accessing or using the Matcha mobile application ("App"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the App.',
      "Matcha is operated by MatchSphere Technologies FZ-LLC, a company registered in Dubai, United Arab Emirates.",
    ],
  },
  {
    title: "2. Eligibility",
    paragraphs: [
      "You must be at least 18 years old to use Matcha. By using the App, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.",
    ],
  },
  {
    title: "3. Account Registration",
    paragraphs: ["To use certain features of the App, you must create an account. You agree to:"],
    bullets: [
      "Provide accurate, current, and complete information",
      "Maintain the security of your account credentials",
      "Promptly update your information if it changes",
      "Accept responsibility for all activities under your account",
    ],
  },
  {
    title: "4. Service Description",
    paragraphs: [
      "Matcha is an AI-powered matchmaking platform designed to help users find meaningful connections. Our service uses artificial intelligence to analyze user preferences and suggest compatible matches.",
      "We do not guarantee any specific outcomes, matches, or relationships. The quality of matches depends on the accuracy and completeness of the information you provide.",
    ],
  },
  {
    title: "5. User Conduct",
    paragraphs: ["You agree not to:"],
    bullets: [
      "Provide false or misleading information",
      "Harass, abuse, or harm other users",
      "Use the App for illegal purposes",
      "Upload inappropriate, offensive, or explicit content",
      "Attempt to access other users' accounts",
      "Use automated systems to access the App",
      "Circumvent any security measures",
    ],
  },
  {
    title: "6. Content Ownership",
    paragraphs: [
      "You retain ownership of content you submit to the App. By submitting content, you grant MatchSphere Technologies FZ-LLC a non-exclusive, royalty-free license to use, display, and process your content for the purpose of providing our services.",
    ],
  },
  {
    title: "7. Intellectual Property",
    paragraphs: [
      "The App, including its design, features, and AI technology, is owned by MatchSphere Technologies FZ-LLC. You may not copy, modify, distribute, or create derivative works without our written permission.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, MatchSphere Technologies FZ-LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App.",
      "We are not responsible for the conduct of any user, whether online or offline. Use caution when meeting people in person.",
    ],
  },
  {
    title: "9. Disclaimer",
    paragraphs: [
      'The App is provided "as is" without warranties of any kind. We do not guarantee the accuracy of user profiles or the suitability of any matches.',
    ],
  },
  {
    title: "10. Termination",
    paragraphs: [
      "We reserve the right to suspend or terminate your account at any time for violations of these Terms or for any other reason at our discretion. You may also delete your account at any time through the App settings.",
    ],
  },
  {
    title: "11. Governing Law",
    paragraphs: [
      "These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts of Dubai.",
    ],
  },
  {
    title: "12. Changes to Terms",
    paragraphs: [
      "We may update these Terms from time to time. We will notify you of significant changes through the App. Your continued use of the App after changes constitutes acceptance of the updated Terms.",
    ],
  },
  {
    title: "13. Contact Us",
    paragraphs: ["If you have questions about these Terms, please contact us at:"],
  },
];

export default function TermsOfUsePage() {
  return (
    <SiteShell title="Terms of Use" subtitle="Last Updated: January 2026">
      <article className="space-y-7 text-slate-700">
        {sections.map((section) => (
          <section key={section.title} className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets ? (
              <ul className="list-disc space-y-1 pl-5">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
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
