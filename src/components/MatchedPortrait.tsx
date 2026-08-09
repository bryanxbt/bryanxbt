"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/paths";

/**
 * Renders the headshot at exactly the same pixel height as `sourceRef`
 * (title through last bio line). Full image, no crop — width scales with height.
 */
export function MatchedPortrait({
  sourceRef,
}: {
  sourceRef: React.RefObject<HTMLElement | null>;
}) {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const el = sourceRef.current;
    if (!el) return;

    const measure = () => {
      const h = Math.round(el.getBoundingClientRect().height);
      if (h > 0) setHeight(h);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    // fonts / scramble can shift layout shortly after paint
    const t1 = window.setTimeout(measure, 100);
    const t2 = window.setTimeout(measure, 500);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [sourceRef]);

  return (
    <div
      className="home-portrait"
      style={height > 0 ? { height } : undefined}
    >
      <Image
        src={asset("/assets/bryan-headshot.png")}
        alt="Bryan Elliott"
        width={1024}
        height={1024}
        priority
        className="home-portrait-img"
        style={
          height > 0
            ? { height, width: "auto", maxWidth: "none" }
            : undefined
        }
      />
    </div>
  );
}

/** Wrapper that owns the text ref and pairs it with the portrait */
export function HomeHero({ children }: { children: React.ReactNode }) {
  const copyRef = useRef<HTMLDivElement>(null);

  return (
    <div className="home-body">
      <div className="home-copy" ref={copyRef}>
        {children}
      </div>
      <MatchedPortrait sourceRef={copyRef} />
    </div>
  );
}
