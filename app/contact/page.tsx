import { SiteShell } from "@/components/site-shell";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <SiteShell
      title="Contact / Request a demo"
      subtitle="Tell us about your projects and we'll show you how MatchSphere can qualify your off-plan buyers."
    >
      <div className="space-y-6">
        <p className="text-slate-700">
          For partnership, investment, or demo requests, email us directly at{" "}
          <strong>support@matchsphere.ai</strong> or use the form below.
        </p>
        <ContactForm />
      </div>
    </SiteShell>
  );
}
