import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { asset } from "@/lib/paths";

export default function Home() {
  return (
    <div className="site">
      {/*
        Bryan Elliott — BryanXBT
        - Fundamentals beat flash.
        - Simplicity wins.
      */}
      <main className="shell shell--home">
        <HomeHero />

        <nav className="home-bar" aria-label="Site">
          <Link href="/work">work</Link>
          <Link href="/experience">experience</Link>
          <Link href="/contact">contact</Link>
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
          <a href="mailto:xbtbryan@gmail.com">mail</a>
        </nav>

        <footer className="site-foot">
          bryan elliott • indianapolis • {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
}
