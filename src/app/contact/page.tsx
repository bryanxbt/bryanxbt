import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contact — BryanXBT",
  description: "Get in touch with Bryan Elliott (BryanXBT).",
};

export default function ContactPage() {
  return (
    <PageShell title="contact" active="contact">
      <div className="prose" style={{ marginBottom: "1.5rem" }}>
        <p>
          Hiring for marketing, community, or events — or standing up a Bitcoin
          brand from scratch? Send a note.
        </p>
      </div>
      <ContactForm />
    </PageShell>
  );
}
