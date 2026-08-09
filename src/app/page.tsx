import Link from "next/link";
import { HomeHero } from "@/components/MatchedPortrait";
import { ScrambleTitle } from "@/components/ScrambleTitle";
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
        <HomeHero>
          <header>
            <h1 className="site-title">
              <ScrambleTitle primary="Bryan Elliott" secondary="BryanXBT" />
            </h1>
            <p className="site-role">community · brand · bitcoin</p>
          </header>

          <section className="prose home-prose">
            <p>
              I build and grow brands in the Bitcoin and startup ecosystem —
              from first post to 300K+ engaged members, conference summits, and
              the relationships that make a project grow organically.
            </p>
            <p>
              Event programming, community ops, and content systems. Deep
              connections across the crypto and the web3 startup community.
            </p>
            <p>
              Pre-crypto: chemistry educator, NCAA athlete. B.A. Biology, Wabash
              College.
            </p>
          </section>
        </HomeHero>

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
