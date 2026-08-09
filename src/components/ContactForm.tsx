"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

/**
 * Web3Forms → xbtbryan@gmail.com
 * NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local / GitHub Actions secrets
 */
export function ContactForm() {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
      setStatus("error");
      setErrorMsg("Form not configured yet — email me directly.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = (await res.json()) as { success?: boolean; message?: string };

      if (!res.ok || !json.success) {
        throw new Error(json.message || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Unable to send. Email me instead."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="form-success">
        <h3>Message received.</h3>
        <p>I&apos;ll get back to you at the email you provided.</p>
        <button type="button" className="btn" onClick={() => setStatus("idle")}>
          send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <input type="hidden" name="access_key" value={accessKey} />
      <input type="hidden" name="subject" value="BryanXBT site — new message" />
      <input type="hidden" name="from_name" value="BryanXBT Portfolio" />
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="form-row">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          required
          type="text"
          name="name"
          autoComplete="name"
          className="field"
        />
      </div>

      <div className="form-row">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          required
          type="email"
          name="email"
          autoComplete="email"
          className="field"
        />
      </div>

      <div className="form-row">
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          required
          name="message"
          rows={4}
          className="field"
          style={{ resize: "vertical", minHeight: "6rem" }}
        />
      </div>

      {status === "error" && (
        <p className="form-alert" role="alert">
          {errorMsg}{" "}
          <a href="mailto:xbtbryan@gmail.com">xbtbryan@gmail.com</a>
        </p>
      )}

      <button type="submit" className="btn" disabled={status === "loading"}>
        {status === "loading" ? "sending…" : "send message"}
      </button>
      <p className="form-note">forwards to xbtbryan@gmail.com via web3forms</p>
    </form>
  );
}
