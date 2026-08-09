import Link from "next/link";
import { ReactNode } from "react";
import { asset } from "@/lib/paths";

const nav = [
  { href: "/work", label: "work" },
  { href: "/experience", label: "experience" },
  { href: "/contact", label: "contact" },
] as const;

export function PageShell({
  title,
  children,
  active,
}: {
  title: string;
  children: ReactNode;
  active?: "work" | "experience" | "contact";
}) {
  return (
    <div className="site">
      <main className="shell shell--page">
        <header className="page-top">
          <Link href="/" className="page-home">
            Bryan Elliott
          </Link>
          <nav className="page-nav" aria-label="Site">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active === item.label ? "page-nav-link is-active" : "page-nav-link"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        <p className="block-label" style={{ marginTop: "2.5rem" }}>
          {title}
        </p>

        {children}

        <nav className="links" aria-label="Links" style={{ marginTop: "2.75rem" }}>
          <Link href="/">home</Link>
          <a
            href="https://x.com/bryanxbt"
            target="_blank"
            rel="noopener noreferrer"
          >
            x
          </a>
          <a
            href="https://github.com/bryanxbt"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a
            href={asset("/assets/Bryan_Elliott_Resume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </nav>

        <footer className="site-foot">
          bryan elliott • indianapolis • {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
}
