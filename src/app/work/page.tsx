import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { work } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work — BryanXBT",
  description: "Selected brand and community work by Bryan Elliott (BryanXBT).",
};

export default function WorkPage() {
  return (
    <PageShell title="work" active="work">
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
    </PageShell>
  );
}
