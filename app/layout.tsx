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
