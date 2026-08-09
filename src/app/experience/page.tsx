import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { experience } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experience — BryanXBT",
  description: "Professional experience — Bryan Elliott (BryanXBT).",
};

export default function ExperiencePage() {
  return (
    <PageShell title="experience" active="experience">
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
    </PageShell>
  );
}
