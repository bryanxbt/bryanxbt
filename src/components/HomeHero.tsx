"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ScrambleTitle } from "@/components/ScrambleTitle";
import { asset } from "@/lib/paths";

/**
 * Text column (title → last bio line) on the left.
 * Headshot on the right: same height as that column, full image (no crop).
 * Top of photo lines up with "Bryan Elliott"; bottom with "...College."
 */
export function HomeHero() {
  const copyRef = useRef<HTMLDivElement>(null);
  const [h, setH] = useState(0);

  useEffect(() => {
    const el = copyRef.current;
    if (!el) return;

    const measure = () => {
      const next = Math.round(el.getBoundingClientRect().height);
      if (next > 0) setH(next);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    const t1 = window.setTimeout(measure, 150);
    const t2 = window.setTimeout(measure, 600);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <div className="home-body">
      <div className="home-copy" ref={copyRef}>
        <header>
          <h1 className="site-title">
            <ScrambleTitle primary="Bryan Elliott" secondary="BryanXBT" />
          </h1>
          <p className="site-role">community · brand · bitcoin</p>
        </header>

        <section className="prose home-prose">
          <p>
            I build and grow brands in the Bitcoin and startup ecosystem — from
            first post to 300K+ engaged members, conference summits, and the
            relationships that make a project grow organically.
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
      </div>

      <div
        className="home-portrait"
        style={
          h > 0
            ? {
                /* Same height as text column: title top → College bottom */
                height: h,
                /* Square source: width matches height so full photo fills the box */
                width: h,
                maxWidth: "100%",
              }
            : undefined
        }
      >
        <Image
          src={asset("/assets/bryan-headshot.png")}
          alt="Bryan Elliott"
          width={1024}
          height={1024}
          priority
          className="home-portrait-img"
          sizes={`${h || 280}px`}
        />
      </div>
    </div>
  );
}
