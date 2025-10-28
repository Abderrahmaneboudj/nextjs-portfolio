// app/contact/page.tsx
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<null | "sending" | "sent" | "error">(
    null
  );
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <>
      <h1>Contact</h1>
      <p>Want to collaborate? Send me a message.</p>

      <form onSubmit={handleSubmit} style={{ maxWidth: 640 }}>
        <label style={{ display: "block", marginBottom: 8 }}>
          Name
          <input
            required
            value={form.name}
            onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
        </label>

        <label style={{ display: "block", marginBottom: 8 }}>
          Email
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
        </label>

        <label style={{ display: "block", marginBottom: 8 }}>
          Message
          <textarea
            required
            value={form.message}
            onChange={(e) =>
              setForm((s) => ({ ...s, message: e.target.value }))
            }
            style={{ width: "100%", padding: 8, marginTop: 6, minHeight: 120 }}
          />
        </label>

        <button
          type="submit"
          disabled={status === "sending"}
          style={{ padding: "10px 16px" }}
        >
          {status === "sending" ? "Sending..." : "Send"}
        </button>

        {status === "sent" && (
          <p style={{ color: "green" }}>Message sent — (demo)</p>
        )}
        {status === "error" && (
          <p style={{ color: "red" }}>Error sending. Try again.</p>
        )}
      </form>
    </>
  );
}
