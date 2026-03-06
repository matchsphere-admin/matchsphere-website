import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MatchSphere",
    template: "%s | MatchSphere",
  },
  description:
    "MatchSphere is building Matcha, an AI-powered matchmaking platform for dating, friendship, and couple friendship.",
  metadataBase: new URL("https://matchsphere.ai"),
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
