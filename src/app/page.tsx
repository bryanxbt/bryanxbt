import Image from "next/image";
import Link from "next/link";
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
        <header>
          <h1 className="site-title">
            <ScrambleTitle primary="Bryan Elliott" secondary="BryanXBT" />
          </h1>
          <p className="site-role">community · brand · bitcoin</p>
        </header>

        {/* Text + image row: image height matches the prose block */}
        <div className="home-body">
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

          <div className="home-portrait" aria-hidden={false}>
            <Image
              src={asset("/assets/bryan-headshot.png")}
              alt="Bryan Elliott"
              fill
              sizes="(max-width: 720px) 100vw, 40vw"
              priority
              className="home-portrait-img"
            />
          </div>
        </div>

        <nav className="home-actions" aria-label="Pages">
          <Link href="/work" className="home-action">
            work
          </Link>
          <Link href="/experience" className="home-action">
            experience
          </Link>
          <Link href="/contact" className="home-action">
            contact
          </Link>
        </nav>

        <nav className="links links--home" aria-label="External">
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
          © {new Date().getFullYear()} bryan elliott · indianapolis
        </footer>
      </main>
    </div>
  );
}
