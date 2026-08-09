import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { ScrambleTitle } from "@/components/ScrambleTitle";

/** Empty locally; `/bryanxbt` on GitHub Pages (see next.config.ts). */
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) =>
  `${base}${path.startsWith("/") ? path : `/${path}`}`;

const stats = [
  { n: "300K+", l: "community grown from zero" },
  { n: "100K+", l: "mainnet wallets through programming" },
  { n: "2+ yrs", l: "operating bitcoin-native brands" },
  { n: "summit", l: "all-in btc · bitcoin conf 2025" },
];

const work = [
  {
    name: "Arch Network",
    meta: "bitcoin l1 · 2024–present",
    result: "0 → 300K+ community · 100K+ wallets",
    blurb:
      "Day-to-day brand and community for a Bitcoin Layer 1: social, Spaces, AMAs, and a conference-week summit.",
  },
  {
    name: "XBT Marketing Services",
    meta: "agency · founder · 2023–present",
    result: "brand ops for bitcoin startups",
    blurb:
      "Speaker pipelines, contracts, content calendars, event production — from first DM to delivered show.",
  },
  {
    name: "Pizza Ninjas / Pizza Pets",
    meta: "collectibles · gaming",
    result: "content for 300K+ audiences",
    blurb:
      "Social, podcast, and programming for Bitcoin-native collectibles and gaming culture.",
  },
  {
    name: "BryanXBT",
    meta: "personal brand",
    result: "node in bitcoin twitter",
    blurb:
      "Credibility on X, relationships across developers and creators, events that feel professional.",
  },
];

const experience = [
  {
    role: "Marketing & Community Manager",
    org: "Arch Network",
    period: "2024 — Present",
    summary:
      "Community strategy and programming for a Bitcoin L1 — content, events, and comms across executive, eng, and marketing.",
    highlights: [
      "Produced All-In BTC summit in Las Vegas during Bitcoin Conference 2025.",
      "Weekly X Spaces and live events across X, Discord, and Telegram.",
      "AMAs with Jameson Lopp, Shinobi, Charlie Spears, Isabel Foxen Duke, Jan Smejkal, and more.",
      "Scaled X, Discord, and Circle from zero to 300K+ engaged members.",
    ],
  },
  {
    role: "Founder · Consultant & Event Producer",
    org: "XBT Marketing Services",
    period: "2023 — Present",
    summary:
      "Agency for Bitcoin and Web3 startups: speaker coordination, content programming, event production.",
    highlights: [
      "Contracts and payments via Deel; systems in Notion and Drive.",
      "Branded podcasts, AMAs, and live events end-to-end.",
    ],
  },
  {
    role: "Podcast & Social Producer",
    org: "Pizza Ninjas / Pizza Pets",
    period: "2023 — Present",
    summary:
      "Written, audio, and visual content for Bitcoin-native collectibles and gaming.",
    highlights: [
      "Multi-channel strategy for 300K+ member communities.",
      "Guest outreach through post-production for narrative series.",
    ],
  },
  {
    role: "Chemistry Teacher & Varsity Football Coach",
    org: "Education",
    period: "2016 — 2023",
    summary:
      "Leadership foundation: communication under pressure, systems, and moving groups toward a shared goal.",
    highlights: [
      "Logistics across competing priorities and stakeholders.",
      "Clear messaging for diverse audiences.",
    ],
  },
];

export default function Home() {
  return (
    <div className="site">
      {/*
        Bryan Elliott — BryanXBT
        - Fundamentals beat flash.
        - Simplicity wins.
        - Ship early, learn faster.
        - You're not building for yourself — know who is.
      */}
      <main className="shell">
        <header>
          <h1 className="site-title">
            <ScrambleTitle primary="Bryan Elliott" secondary="BryanXBT" />
          </h1>
          <p className="site-role">
            community · brand · bitcoin
          </p>
        </header>

        <div className="portrait">
          <Image
            src={asset("/assets/bryan-headshot.png")}
            alt="Bryan Elliott"
            width={400}
            height={400}
            priority
          />
        </div>

        <section className="prose block" style={{ marginTop: "2.25rem" }}>
          <p>
            I build and grow brands in the Bitcoin and startup ecosystem — from
            first post to 300K+ engaged members, conference summits, and the
            relationships that make a project feel inevitable.
          </p>
          <p>
            Event programming, community ops, and content systems. Deep
            connections across Bitcoin Twitter and the developer community.
            Currently operating brand and community at{" "}
            <a href="https://www.arch.network/" target="_blank" rel="noopener noreferrer">
              Arch Network
            </a>
            .
          </p>
          <p>
            Before crypto: chemistry teacher, varsity football coach, NCAA
            athlete. B.A. Biology, Wabash College.
          </p>
        </section>

        <section className="block" aria-label="Proof">
          <span className="block-label">proof</span>
          <div className="stats">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="stat-n">{s.n}</div>
                <div className="stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="block" id="work" aria-label="Work">
          <span className="block-label">work</span>
          {work.map((w) => (
            <article key={w.name} className="item">
              <div className="item-head">
                <span className="item-title">{w.name}</span>
                <span className="item-meta">{w.meta}</span>
              </div>
              <p className="item-result">{w.result}</p>
              <p className="item-body">{w.blurb}</p>
            </article>
          ))}
        </section>

        <section className="block" id="experience" aria-label="Experience">
          <span className="block-label">experience</span>
          {experience.map((job) => (
            <article key={job.org + job.role} className="item">
              <div className="item-head">
                <span className="item-title">{job.role}</span>
                <span className="item-meta">{job.period}</span>
              </div>
              <p className="item-result">{job.org}</p>
              <p className="item-body">{job.summary}</p>
              <ul className="item-list">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="block" id="contact" aria-label="Contact">
          <span className="block-label">contact</span>
          <div className="prose" style={{ marginBottom: "1.5rem" }}>
            <p>
              Hiring for marketing, community, or events — or standing up a
              Bitcoin brand from scratch? Send a note.
            </p>
          </div>
          <ContactForm />
        </section>

        <nav className="links" aria-label="Links">
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
