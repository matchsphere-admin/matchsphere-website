import { SiteShell } from "@/components/site-shell";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <SiteShell title="Contact" subtitle="Send us a message and we will get back to you shortly.">
      <div className="space-y-6">
        <p className="text-slate-700">
          For urgent requests, email us directly at <strong>support@matchsphere.ai</strong>.
        </p>
        <ContactForm />
      </div>
    </SiteShell>
  );
}
