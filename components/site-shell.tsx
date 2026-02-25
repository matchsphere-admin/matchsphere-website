import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const headerLinks = [
  { href: "/", label: "Home" },
  { href: "/matcha", label: "Matcha" },
  { href: "/safety", label: "Safety" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const footerLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/delete-account", label: "Delete Account" },
];

export function SiteShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/icon.png" alt="MatchSphere logo" width={36} height={36} priority />
            <span className="text-lg font-semibold tracking-tight">MatchSphere</span>
          </Link>
          <nav className="hidden gap-4 text-sm sm:flex">
            {headerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-slate-600 hover:text-slate-900">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <nav className="mx-auto flex max-w-5xl flex-wrap gap-x-4 gap-y-2 px-4 pb-4 text-sm sm:hidden sm:px-6">
          {headerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-slate-600 hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h1>
        {subtitle ? <p className="mt-3 max-w-3xl text-slate-600">{subtitle}</p> : null}
        <div className="mt-8">{children}</div>
      </main>
      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-6 text-sm text-slate-600 sm:px-6">
          <div className="flex flex-wrap gap-3">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-slate-900">
                {link.label}
              </Link>
            ))}
          </div>
          <p>© 2026 MatchSphere Technologies FZ-LLC</p>
        </div>
      </footer>
    </div>
  );
}
