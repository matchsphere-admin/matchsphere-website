import { SiteShell } from "@/components/site-shell";

export default function DeleteAccountPage() {
  return (
    <SiteShell
      title="Delete Account"
      subtitle="Information for users who want to delete their Matcha account and associated data."
    >
      <div className="space-y-4 text-slate-700">
        <p>
          You can delete your account directly in the Matcha app from Settings by selecting the
          account deletion option.
        </p>
        <p>
          If you are unable to access the app, email <strong>support@matchsphere.ai</strong> from
          your registered email address and request account deletion.
        </p>
        <p>
          After deletion, your profile is removed from active matching. Some records may be retained
          for up to 90 days for backup, fraud prevention, or legal compliance as described in the
          Privacy Policy.
        </p>
      </div>
    </SiteShell>
  );
}
