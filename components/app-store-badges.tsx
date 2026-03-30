const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=ai.matchsphere.matcha";

function GooglePlayIcon() {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 1.56V20.44L10.72 11L1 1.56Z" fill="#4285F4" />
      <path
        d="M1 1.56L10.72 11L14.22 7.5L2.85 0.7C2.2 0.33 1.5 0.57 1 1.56Z"
        fill="#34A853"
      />
      <path
        d="M14.22 7.5L10.72 11L14.22 14.5L18.15 12.3C19.05 11.8 19.05 10.2 18.15 9.7L14.22 7.5Z"
        fill="#FBBC04"
      />
      <path
        d="M1 20.44L10.72 11L14.22 14.5L2.85 21.3C2.2 21.67 1.5 21.43 1 20.44Z"
        fill="#EA4335"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 24 24"
      fill="white"
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export function MatchaIcon() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/icon.png" alt="" width={20} height={20} aria-hidden="true" />
  );
}

export function GooglePlayBadge({ className }: { className?: string }) {
  return (
    <a
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-[40px] items-center justify-center gap-2 rounded-lg border border-[#A6A6A6] bg-black px-3 transition-colors hover:bg-neutral-800 ${className ?? ""}`}
      aria-label="Get it on Google Play"
    >
      <GooglePlayIcon />
      <div className="flex flex-col leading-none">
        <span className="text-[8px] uppercase tracking-widest text-white">
          GET IT ON
        </span>
        <span className="-mt-px text-[15px] font-medium text-white">
          Google Play
        </span>
      </div>
    </a>
  );
}

const TESTFLIGHT_URL = "https://testflight.apple.com/join/BUMWtu9u";

export function AppStoreBadge({
  className,
  beta = false,
}: {
  className?: string;
  beta?: boolean;
}) {
  const topText = beta ? "Beta on" : "Download on the";
  const bottomText = beta ? "TestFlight" : "App Store";

  return (
    <a
      href={beta ? TESTFLIGHT_URL : "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-[40px] items-center justify-center gap-2 rounded-lg border border-[#A6A6A6] bg-black px-3 transition-colors hover:bg-neutral-800 ${className ?? ""}`}
      aria-label={beta ? "Join the beta on TestFlight" : "Download on the App Store"}
    >
      <AppleIcon />
      <div className="flex flex-col leading-none">
        <span className="text-[8px] tracking-wide text-white">{topText}</span>
        <span className="-mt-px text-[15px] font-medium text-white">
          {bottomText}
        </span>
      </div>
    </a>
  );
}

export function AppStoreBadges({
  direction = "row",
  className,
}: {
  direction?: "row" | "column";
  className?: string;
}) {
  return (
    <div
      className={`flex gap-2 ${direction === "column" ? "flex-col items-start" : "flex-row items-center"} ${className ?? ""}`}
    >
      <GooglePlayBadge />
      <AppStoreBadge beta />
    </div>
  );
}
