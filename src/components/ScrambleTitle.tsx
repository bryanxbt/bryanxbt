"use client";

import { useEffect, useRef, useState } from "react";

/** Same glyph soup as roethke.dev’s crypto scramble */
const CHARS = "0123456789ABCDEFabcdef!@#$%^*<>[]{}|~+-=?";

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

function randomString(len: number) {
  return Array.from({ length: len }, randomChar).join("");
}

/**
 * Cycles primary ↔ secondary with a left-to-right scramble
 * (same spirit as https://roethke.dev/ — “Jon Roethke” ↔ “roethke.dev”).
 */
export function ScrambleTitle({
  primary,
  secondary,
  speed = 55,
  holdMs = 8000,
  firstDelayMs = 3500,
}: {
  primary: string;
  secondary: string;
  /** ms per character while flipping */
  speed?: number;
  /** how long each title sits before the next cycle */
  holdMs?: number;
  /** wait before first animation */
  firstDelayMs?: number;
}) {
  const [text, setText] = useState(primary);
  const timers = useRef<number[]>([]);
  const showingPrimary = useRef(true);

  useEffect(() => {
    function clearTimers() {
      timers.current.forEach((id) => window.clearTimeout(id));
      timers.current = [];
    }

    function after(ms: number, fn: () => void) {
      const id = window.setTimeout(fn, ms);
      timers.current.push(id);
      return id;
    }

    /**
     * Flip el text to `target` one character at a time, L→R.
     * Pads/truncates the working string so unequal lengths animate cleanly
     * (Bryan Elliott is longer than BryanXBT).
     */
    function flipTo(target: string, fromLen: number) {
      const workLen = Math.max(fromLen, target.length);
      // expand with noise if growing, then resolve into target
      for (let i = 0; i < workLen; i++) {
        after(i * speed, () => {
          setText((prev) => {
            const chars = prev.padEnd(workLen, " ").split("");
            if (i < target.length) {
              chars[i] = target[i];
            } else {
              // shrinking: blank trailing slots once past target length
              chars[i] = "";
            }
            return chars.join("").replace(/\s+$/g, i >= target.length - 1 ? "" : "");
          });
        });
      }
      // final snap so length is exact
      after(workLen * speed + 20, () => setText(target));
    }

    function scrambleThenReveal(from: string, to: string) {
      const scrambleLen = from.length;
      // phase 1: scramble current glyphs L→R
      for (let i = 0; i < scrambleLen; i++) {
        after(i * speed, () => {
          setText((prev) => {
            const chars = prev.padEnd(scrambleLen).split("");
            chars[i] = randomChar();
            return chars.join("").slice(0, scrambleLen);
          });
        });
      }
      // phase 2: reveal next title
      const scrambleDone = scrambleLen * speed + 120;
      after(scrambleDone, () => {
        // start from full noise of max length so growth/shrink feels intentional
        setText(randomString(Math.max(from.length, to.length)));
        flipTo(to, Math.max(from.length, to.length));
      });
    }

    function cycle() {
      clearTimers();
      const from = showingPrimary.current ? primary : secondary;
      const to = showingPrimary.current ? secondary : primary;
      scrambleThenReveal(from, to);
      showingPrimary.current = !showingPrimary.current;

      // schedule next cycle after animation + hold
      const animMs =
        from.length * speed +
        120 +
        Math.max(from.length, to.length) * speed +
        80;
      after(animMs + holdMs, cycle);
    }

    after(firstDelayMs, cycle);

    return clearTimers;
  }, [primary, secondary, speed, holdMs, firstDelayMs]);

  return (
    <span className="scramble-title" aria-label={`${primary} · ${secondary}`}>
      {text}
    </span>
  );
}
