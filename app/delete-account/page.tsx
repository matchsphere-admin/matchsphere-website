import { SiteShell } from "@/components/site-shell";

export default function DeleteAccountPage() {
  return (
    <SiteShell
      title="Delete Account"
      subtitle="How to delete your Matcha account and associated data."
    >
      <div className="space-y-6 text-slate-700">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Delete your account in the app</h2>
          <p>Deletion is performed in the app; this page explains how.</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Open Matcha</li>
            <li>
              Open <strong>Profile Menu</strong>
            </li>
            <li>
              Go to <strong>Settings</strong>
            </li>
            <li>
              Tap <strong>Delete Account</strong> and follow the prompts
            </li>
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">
            If you can’t access the app
          </h2>
          <p>
            Email <strong>support@matchsphere.ai</strong> from your registered email address and
            request account deletion. If you no longer have access to your registered email, we may
            ask for additional information to help verify the request.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">What happens after deletion</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Deletion is permanent.</strong> Deleted accounts cannot be restored.
            </li>
            <li>
              <strong>Your profile is removed from active matching</strong> after deletion is
              processed.
            </li>
            <li>
              <strong>Messages you sent to other users</strong> may remain visible to those users
              (for example, in their chat history).
            </li>
            <li>
              <strong>Retention.</strong> Some records may be retained for up to 90 days for backup,
              fraud prevention, safety, or legal compliance as described in our Privacy Policy.
            </li>
          </ul>
        </section>
      </div>
    </SiteShell>
  );
}
