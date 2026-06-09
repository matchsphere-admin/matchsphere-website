import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MatchSphere",
    template: "%s | MatchSphere",
  },
  description:
    "MatchSphere is an AI-driven lead-generation platform for the Dubai and UAE off-plan real estate market, helping property developers connect with qualified, intent-rich buyers through AI-guided onboarding.",
  metadataBase: new URL("https://matchsphere.ai"),
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
